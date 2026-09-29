import assert from 'node:assert/strict';
import test from 'node:test';
import { createCatalog } from '../src/lib/catalog.ts';
import type { Person } from '../src/data/people.ts';
import type { Publication } from '../src/data/publications.ts';
import type { Project } from '../src/data/projects.ts';

const people: Person[] = [
  { personId: 'alice', name: 'Alice', role: 'Researcher', bio: '' },
  { personId: 'bob', name: 'Bob', role: 'Researcher', bio: '' },
  { personId: 'carol', name: 'Carol', role: 'Researcher', bio: '' },
];
const publications: Publication[] = [
  { publicationId: 'older', title: 'Older paper', year: 2025, venue: 'Journal', authors: [{ name: 'A. Author', personId: 'alice' }] },
  { publicationId: 'newer', title: 'Newer paper', year: 2026, venue: 'Journal', authors: [{ name: 'External' }, { name: 'Alice', personId: 'alice' }, { name: 'Bob', personId: 'bob' }] },
];
const projects: Project[] = [
  { projectId: 'shared', title: 'Shared project', description: '', personIds: ['bob', 'alice'] },
];

test('derives both directions, preserves author/member order, and sorts publications by year', () => {
  const catalog = createCatalog(people, publications, projects);
  assert.deepEqual(catalog.people[0].publications.map((paper) => paper.publicationId), ['newer', 'older']);
  assert.deepEqual(catalog.people[1].publications.map((paper) => paper.publicationId), ['newer']);
  assert.deepEqual(catalog.people[0].projects, projects);
  assert.deepEqual(catalog.people[1].projects, projects);
  assert.deepEqual(catalog.projects[0].members.map((person) => person.personId), ['bob', 'alice']);
  assert.deepEqual(catalog.publications[0].authors, publications[1].authors);
  assert.deepEqual(catalog.people[2].publications, []);
  assert.deepEqual(catalog.people[2].projects, []);
  assert.equal(publications[0].publicationId, 'older');
});

test('allows external authors and empty collections', () => {
  assert.deepEqual(createCatalog([], [], []), { people: [], publications: [], projects: [] });
  assert.doesNotThrow(() => createCatalog([], [{ ...publications[0], authors: [{ name: 'External' }] }], [{ ...projects[0], personIds: [] }]));
});

test('deduplicates reverse links and project members', () => {
  const catalog = createCatalog(people, [{ ...publications[0], authors: [publications[0].authors[0], publications[0].authors[0]] }], [{ ...projects[0], personIds: ['alice', 'alice'] }]);
  assert.equal(catalog.people[0].publications.length, 1);
  assert.equal(catalog.people[0].projects.length, 1);
  assert.equal(catalog.projects[0].members.length, 1);
});

test('rejects dangling author and project references with actionable context', () => {
  assert.throws(() => createCatalog(people, [{ ...publications[0], authors: [{ name: 'Missing', personId: 'missing' }] }], []), /Publication "older" references unknown person ID "missing"/);
  assert.throws(() => createCatalog(people, [], [{ ...projects[0], personIds: ['missing'] }]), /Project "shared" references unknown person ID "missing"/);
  assert.throws(() => createCatalog(people, [{ ...publications[0], authors: [{ name: 'Blank', personId: '' }] }], []), /unknown person ID ""/);
});

test('rejects duplicate IDs in every collection', () => {
  assert.throws(() => createCatalog([people[0], people[0]], [], []), /Duplicate person ID "alice"/);
  assert.throws(() => createCatalog(people, [publications[0], publications[0]], []), /Duplicate publication ID "older"/);
  assert.throws(() => createCatalog(people, [], [projects[0], projects[0]]), /Duplicate project ID "shared"/);
});

test('rejects empty and unsafe anchor IDs', () => {
  assert.throws(() => createCatalog([{ ...people[0], personId: '' }], [], []), /Invalid person ID/);
  assert.throws(() => createCatalog([], [{ ...publications[0], publicationId: 'two words' }], []), /Invalid publication ID/);
  assert.throws(() => createCatalog([], [], [{ ...projects[0], projectId: '#project' }]), /Invalid project ID/);
});
