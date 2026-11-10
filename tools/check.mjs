import {readFile,access} from 'node:fs/promises';
const html=await readFile('index.html','utf8');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){const path=match[1];if(!/^(https?:|mailto:)/.test(path))await access(path)}
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
if(new Set(ids).size!==ids.length)throw Error('Duplicate IDs');
for(const match of html.matchAll(/href="#([^"]+)"/g))if(!ids.includes(match[1]))throw Error(`Missing anchor ${match[1]}`);
for(const term of ['13316095569','营业部','DASH','轻量化'])if(html.includes(term))throw Error(`Excluded content found: ${term}`);
console.log('Local assets, navigation anchors, unique IDs and content exclusions passed.');
