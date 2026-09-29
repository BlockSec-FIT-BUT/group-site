import { getCollection } from 'astro:content';

export async function publishedNews() {
  const posts = await getCollection('news', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  }).format(date);
}
