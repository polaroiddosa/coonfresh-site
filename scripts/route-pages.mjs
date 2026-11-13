// GitHub Pages returns HTTP 404 for paths with no file. Copy index.html into a
// folder per known route so every real page answers 200 (the app router then renders it).
import { readFileSync, mkdirSync, copyFileSync } from 'node:fs'
const posts = JSON.parse(readFileSync('src/data/posts.json', 'utf8'))
const routes = ['about','coonvita','blog','gallery','shop','farm-setting','e-brochure','contact','privacy-policy','terms-conditions']
for (const p of posts) routes.push(`blog/${p.slug}`)
const cats = new Set(posts.flatMap(p => p.categories ?? []).map(c => (typeof c === 'string' ? c : c.slug)).filter(Boolean))
for (const c of cats) routes.push(`category/${c}`)
for (const r of routes) { mkdirSync(`dist/${r}`, { recursive: true }); copyFileSync('dist/index.html', `dist/${r}/index.html`) }
console.log(`wrote ${routes.length} route pages`)
