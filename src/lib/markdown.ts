import { satteri } from '@astrojs/markdown-satteri';

// Let authors use /people/ and /assets/... in Markdown on any Pages domain.
// This also covers reference-style links and images, which use definition nodes.
export function markdownProcessor(base: string) {
  const prefix = (url: string) => url.startsWith('/') && !url.startsWith('//')
    ? `${base.replace(/\/$/, '')}${url}`
    : url;

  return satteri({
    mdastPlugins: [{
      name: 'site-base-paths',
      link(node, context) { context.setProperty(node, 'url', prefix(node.url)); },
      image(node, context) { context.setProperty(node, 'url', prefix(node.url)); },
      definition(node, context) { context.setProperty(node, 'url', prefix(node.url)); },
    }],
  });
}
