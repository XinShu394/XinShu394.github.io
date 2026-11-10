import {mkdir,copyFile,cp,rm} from 'node:fs/promises';
import path from 'node:path';
const output=path.resolve('dist');
if(output!==path.join(process.cwd(),'dist'))throw Error('Unexpected build output');
await rm(output,{recursive:true,force:true});
await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','app.js','.nojekyll'])await copyFile(file,`dist/${file}`);
await cp('assets','dist/assets',{recursive:true});
console.log('Static site built in dist/; only website files are included.');
