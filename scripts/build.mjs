import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/src', { recursive: true });
await cp('src', 'dist/src', { recursive: true });
await cp('index.html', 'dist/index.html');
await writeFile('dist/.nojekyll', '');

const html = await readFile('dist/index.html', 'utf8');
if (!html.includes('<div id="root"></div>') || !html.includes('/src/main.js')) {
  throw new Error('Build validation failed: index.html is missing the app mount or entrypoint.');
}

console.log('Built static app to dist/');
