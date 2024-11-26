import { defineConfig } from '@remix-run/dev';

export default defineConfig({
  // This tells Remix to build the site statically
  target: 'static',
  // The base path for your site (useful for GitHub Pages)
  publicPath: '/camtheperson.github.io/',
});