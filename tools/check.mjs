import {readFile,access} from 'node:fs/promises';
const html=await readFile('index.html','utf8');
const content=await readFile('content.js','utf8');
const app=await readFile('app.js','utf8');
for(const match of html.matchAll(/(?<![\w-])(?:src|href)="([^"#]+)"/g)){const path=match[1].split('?')[0];if(!/^(https?:|mailto:)/.test(path))await access(path)}
for(const match of content.matchAll(/'(assets\/[^']+)'/g)){
  // 背景音乐是可选文件：缺失时只提示，页面会显示“音频文件尚未放入”
  if(match[1].startsWith('assets/audio/')){await access(match[1]).catch(()=>console.warn(`Optional audio missing: ${match[1]}`));continue}
  await access(match[1]);
}
for(let i=0;i<4;i++)await access(`assets/art/afterglow-icon-${i}.png`);
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
if(new Set(ids).size!==ids.length)throw Error('Duplicate IDs');
for(const match of html.matchAll(/href="#([^"]+)"/g))if(!ids.includes(match[1]))throw Error(`Missing anchor ${match[1]}`);
for(const term of ['13316095569','营业部','DASH','轻量化','产品经理'])for(const [name,text] of [['index.html',html],['content.js',content],['app.js',app]])if(text.includes(term))throw Error(`Excluded content found in ${name}: ${term}`);
console.log('Local assets, navigation anchors, unique IDs and content exclusions passed.');
