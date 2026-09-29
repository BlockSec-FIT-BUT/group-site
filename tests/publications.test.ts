import assert from 'node:assert/strict';
import test from 'node:test';
import { parsePublications } from '../src/lib/publications.ts';
import type { Person } from '../src/data/people.ts';

const people: Person[] = [
  { personId: 'ivan-homoliak', name: 'Ivan Homoliak', role: '', bio: '', authorAliases: ['I. Homoliak'] },
  { personId: 'martin-peresini', name: 'Martin Perešíni', role: '', bio: '' },
];
const bibtex = String.raw`@inproceedings{Example:2026,
  title = {{zk-SNARKs}: \textit{Security} \& \textsc{Privacy}},
  author = {Homoliak, Ivan and Pere{\v s}{\'i}ni, Martin and de la Cruz, Jr., Juan and {{Research and Development Team}}},
  booktitle = {Blockchain Conference},
  year = {2026},
  doi = {10.1234/example}
}`;

test('BibTeX alone derives metadata, Unicode authors, a stable ID, and a DOI link', () => {
  const [paper] = parsePublications([{ bibtex }], people);
  assert.equal(paper.publicationId, 'example-2026');
  assert.equal(paper.title, 'zk-SNARKs: Security & Privacy');
  assert.equal(paper.venue, 'Blockchain Conference');
  assert.equal(paper.year, 2026);
  assert.equal(paper.url, 'https://doi.org/10.1234/example');
  assert.deepEqual(paper.authors, [
    { name: 'Ivan Homoliak' }, { name: 'Martin Perešíni' },
    { name: 'Juan de la Cruz, Jr.' }, { name: 'Research and Development Team' },
  ]);
  assert.deepEqual(paper.projectIds, []);
});

test('optional IDs link only chosen people and preserve published author order', () => {
  const [paper] = parsePublications([{ bibtex, personIds: ['martin-peresini', 'ivan-homoliak', 'ivan-homoliak'], projectIds: ['wallets', 'wallets'] }], people);
  assert.deepEqual(paper.authors.slice(0, 2), [
    { name: 'Ivan Homoliak', personId: 'ivan-homoliak' },
    { name: 'Martin Perešíni', personId: 'martin-peresini' },
  ]);
  assert.equal(paper.authors[2].personId, undefined);
  assert.deepEqual(paper.projectIds, ['wallets']);
});

test('supports declared aliases without rewriting the printed credit', () => {
  const [paper] = parsePublications([{ bibtex: bibtex.replace('Homoliak, Ivan', 'Homoliak, I.'), personIds: ['ivan-homoliak'] }], people);
  assert.deepEqual(paper.authors[0], { name: 'I. Homoliak', personId: 'ivan-homoliak' });
});

test('handles quoted fields, string macros, BibLaTeX dates, and URL precedence', () => {
  const [paper] = parsePublications([{ bibtex: `@string{venue = "Example Journal"}
    @article{dated, title="A quoted title", author="Ivan Homoliak", journaltitle=venue,
      date={2025-09-29}, doi={10.1234/unused}, url={https://example.org/paper}}` }], []);
  assert.equal(paper.venue, 'Example Journal');
  assert.equal(paper.year, 2025);
  assert.equal(paper.url, 'https://example.org/paper');
});

test('allows missing optional venue and URL, and handles a book publisher', () => {
  const input = '@misc{minimal, title={A note}, author={A. Writer}, year=2026}';
  const [paper] = parsePublications([{ bibtex: input }], []);
  assert.equal(paper.venue, '');
  assert.equal(paper.url, undefined);
  const [book] = parsePublications([{ bibtex: input.replace('@misc', '@book').replace('year=2026', 'publisher={University Press}, year=2026') }], []);
  assert.equal(book.venue, 'University Press');
});

test('rejects malformed, missing, multiple, or incomplete entries with context', () => {
  for (const input of ['', 'not bibtex', bibtex.slice(0, -1), bibtex + bibtex]) {
    assert.throws(() => parsePublications([{ bibtex: input }], people), /Publication entry 1/);
  }
  for (const [fields, message] of [
    ['author={Writer}, year=2026', /Missing title/],
    ['title={Title}, year=2026', /named author/],
    ['title={Title}, author={Writer}, year={unknown}', /four-digit year/],
    ['title={Title}, author={Writer}', /four-digit year/],
  ] as const) assert.throws(() => parsePublications([{ bibtex: `@misc{bad, ${fields}}` }], []), message);
  assert.throws(() => parsePublications([{ bibtex: '@misc{,title={Title},author={Writer},year=2026}' }], []), /citation key/);
});

test('rejects duplicate keys and collisions after key normalization', () => {
  assert.throws(() => parsePublications([{ bibtex }, { bibtex }], []), /Duplicate publication ID/);
  assert.throws(() => parsePublications([{ bibtex }, { bibtex: bibtex.replace('Example:2026', 'example-2026') }], []), /Duplicate publication ID/);
});

test('rejects missing people, unmatched names, and ambiguous links', () => {
  assert.throws(() => parsePublications([{ bibtex, personIds: ['missing'] }], people), /person with ID "missing"/);
  assert.throws(() => parsePublications([{ bibtex, personIds: ['ivan-homoliak'] }], [{ ...people[0], name: 'Someone Else', authorAliases: [] }]), /authorAliases/);
  assert.throws(() => parsePublications([{ bibtex: bibtex.replace('de la Cruz, Jr., Juan', 'Ivan Homoliak'), personIds: ['ivan-homoliak'] }], people), /found 2/);
  assert.throws(() => parsePublications([{ bibtex, personIds: ['ivan-homoliak', 'other-ivan'] }], [...people, { ...people[0], personId: 'other-ivan' }]), /more than one person ID/);
});

test('rejects non-web links', () => {
  assert.throws(() => parsePublications([{ bibtex: bibtex.replace('doi = {10.1234/example}', 'url = {javascript:alert(1)}') }], []), /http or https/);
});
