// scripts/generate-sitemap.cjs
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

const hostname = 'https://cicanoblessepressing.com';

const routes = ['/', '/services', '/contact', '/a-propos'];

const links = routes.map(route => ({ url: route, changefreq: 'monthly', priority: route === '/' ? 1.0 : 0.8 }));

const stream = new SitemapStream({ hostname });

streamToPromise(Readable.from(links).pipe(stream)).then(data => {
  createWriteStream('./public/sitemap.xml').write(data.toString());
});
