import { people, type Person } from '../data/people.ts';
import { publications, type Publication } from '../data/publications.ts';
import { projects, type Project } from '../data/projects.ts';

// Validate once at build time so typos cannot silently produce broken links.
export function createCatalog(people: Person[], publications: Publication[], projects: Project[]) {
  function indexById<T>(entries: T[], idOf: (entry: T) => string, kind: string) {
    const index = new Map<string, T>();
    for (const entry of entries) {
      const id = idOf(entry);
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
        throw new Error(`Invalid ${kind} ID "${id}". Use lowercase letters, numbers, and hyphens.`);
      }
      if (index.has(id)) throw new Error(`Duplicate ${kind} ID "${id}".`);
      index.set(id, entry);
    }
    return index;
  }

  const peopleById = indexById(people, (person) => person.personId, 'person');
  indexById(publications, (publication) => publication.publicationId, 'publication');
  indexById(projects, (project) => project.projectId, 'project');

  function getPerson(personId: string, context: string): Person {
    const person = peopleById.get(personId);
    if (!person) throw new Error(`${context} references unknown person ID "${personId}".`);
    return person;
  }

  const publicationsByPerson = new Map(people.map((person) => [person.personId, [] as Publication[]]));
  const projectsByPerson = new Map(people.map((person) => [person.personId, [] as Project[]]));
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

  for (const publication of sortedPublications) {
    const linkedPeople = new Set<string>();
    for (const author of publication.authors) {
      if (author.personId === undefined) continue;
      getPerson(author.personId, `Publication "${publication.publicationId}"`);
      linkedPeople.add(author.personId);
    }
    for (const personId of linkedPeople) publicationsByPerson.get(personId)!.push(publication);
  }

  const linkedProjects = projects.map((project) => {
    const members = [...new Set(project.personIds)].map((personId) => {
      const person = getPerson(personId, `Project "${project.projectId}"`);
      projectsByPerson.get(personId)!.push(project);
      return person;
    });
    return { ...project, members };
  });

  return {
    people: people.map((person) => ({
      ...person,
      publications: publicationsByPerson.get(person.personId)!,
      projects: projectsByPerson.get(person.personId)!,
    })),
    publications: sortedPublications,
    projects: linkedProjects,
  };
}

export const catalog = createCatalog(people, publications, projects);
