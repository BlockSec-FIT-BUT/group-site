import { parse, type Creator } from '@retorquere/bibtex-parser';
import type { Person } from '../data/people.ts';

export interface PublicationInput {
  bibtex: string;
  personIds?: string[];
  projectIds?: string[];
}

export interface PublicationAuthor {
  name: string;
  personId?: string;
}

export interface Publication {
  publicationId: string;
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  year: number;
  url?: string;
  projectIds?: string[];
}

// The parser converts LaTeX accents and formatting. Keep plain text for Astro's
// escaped text nodes, preserving the original capitalization and Unicode names.
function plainText(value: string): string {
  return value.replace(/<\/?(?:i|b|sc|nc|ncx|br|p|li|code|sub|sup|span)(?:\s[^>]*)?>/gi, '')
    .replace(/\s+/g, ' ').trim().normalize('NFC');
}

function authorName(author: Creator): string {
  if (author.name) return plainText(author.name);
  const name = [author.firstName, author.prefix, author.lastName].filter(Boolean).join(' ');
  return plainText(author.suffix ? `${name}, ${author.suffix}` : name);
}

function normalizedName(name: string): string {
  return plainText(name).toLocaleLowerCase('en');
}

export function parsePublications(inputs: PublicationInput[], people: Person[]): Publication[] {
  const ids = new Set<string>();
  return inputs.map((input, index) => {
    let context = `Publication entry ${index + 1}`;
    try {
      const result = parse(input.bibtex, { sentenceCase: false, caseProtection: false });
      if (result.errors.length) throw new Error(result.errors.map((error) => error.error).join('; '));
      if (result.entries.length !== 1) throw new Error('Provide exactly one BibTeX entry per object.');
      const entry = result.entries[0];
      context += ` (${entry.key || 'missing citation key'})`;
      const publicationId = entry.key.normalize('NFKD').replace(/\p{M}/gu, '')
        .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (!publicationId) throw new Error('A citation key containing letters or numbers is required.');
      if (ids.has(publicationId)) throw new Error(`Duplicate publication ID "${publicationId}" derived from citation keys.`);
      ids.add(publicationId);

      const { fields } = entry;
      const title = plainText(fields.title ?? '');
      if (!title) throw new Error('Missing title.');
      const yearText = fields.year || fields.date?.match(/^\d{4}(?=-|$)/)?.[0] || '';
      if (!/^\d{4}$/.test(yearText) || Number(yearText) === 0) throw new Error('Provide a four-digit year or an ISO date.');
      const authors: PublicationAuthor[] = (fields.author ?? []).map((author) => ({ name: authorName(author) }));
      if (!authors.length || authors.some((author) => !author.name)) throw new Error('Provide at least one named author.');

      // Link only the explicitly selected people, using their full names or
      // declared aliases. Never guess membership from a shared surname.
      for (const personId of new Set(input.personIds ?? [])) {
        const candidates = people.filter((person) => person.personId === personId);
        if (candidates.length !== 1) throw new Error(`Expected one person with ID "${personId}", found ${candidates.length}.`);
        const person = candidates[0];
        const names = [person.name, ...(person.authorAliases ?? [])].map(normalizedName);
        const matches = authors.filter((author) => names.includes(normalizedName(author.name)));
        if (matches.length !== 1) {
          throw new Error(`Person "${personId}" must match exactly one BibTeX author (found ${matches.length}). Check the author or add its spelling to authorAliases in people.ts.`);
        }
        if (matches[0].personId) throw new Error(`Author "${matches[0].name}" matches more than one person ID.`);
        matches[0].personId = personId;
      }

      const venue = plainText(fields.journal || fields.journaltitle || fields.booktitle
        || fields.publisher?.join(', ') || fields.institution?.join(', ') || fields.school || '');
      let url = fields.url?.trim();
      if (!url && fields.doi) url = `https://doi.org/${fields.doi.trim().replace(/^(?:https?:\/\/(?:dx\.)?doi\.org\/|doi:\s*)/i, '')}`;
      if (url) {
        const parsed = new URL(url);
        if (!['https:', 'http:'].includes(parsed.protocol)) throw new Error('Publication links must use http or https.');
      }

      return { publicationId, title, authors, venue, year: Number(yearText),
        ...(url ? { url } : {}), projectIds: [...new Set(input.projectIds ?? [])] };
    } catch (error) {
      throw new Error(`${context}: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
}
