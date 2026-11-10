document.documentElement.classList.add('js');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const progress=document.querySelector('.progress');
let scrollTick=false;
addEventListener('scroll',()=>{if(!scrollTick){requestAnimationFrame(()=>{const range=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${range>0?scrollY/range*100:0}%`;scrollTick=false});scrollTick=true}},{passive:true});
const scene=document.querySelector('.hero-scene');
document.querySelector('.hero').addEventListener('pointermove',event=>{if(reduceMotion||event.pointerType!=='mouse')return;const rect=scene.getBoundingClientRect();scene.style.setProperty('--mx',`${(event.clientX-rect.left-rect.width/2)*.025}px`);scene.style.setProperty('--my',`${(event.clientY-rect.top-rect.height/2)*.018}px`)});
document.querySelector('.hero').addEventListener('pointerleave',()=>{scene.style.setProperty('--mx','0px');scene.style.setProperty('--my','0px')});
const greetings=['大家好，我是舒心。一起探索吧。','理论我都懂，手还在学习。','想先看看游戏，还是聊聊 Agent？','有喜欢的项目，就点进去看看吧。'];
let greetingIndex=0,bubbleTimer;
function greet(){const bubble=document.querySelector('.hello-bubble');bubble.textContent=greetings[greetingIndex++%greetings.length];bubble.classList.remove('show');requestAnimationFrame(()=>bubble.classList.add('show'));clearTimeout(bubbleTimer);bubbleTimer=setTimeout(()=>bubble.classList.remove('show'),4500)}
document.querySelector('.character-button').addEventListener('click',greet);
document.querySelector('#hero-greeting').addEventListener('click',greet);
document.querySelector('#greeting').addEventListener('click',()=>{document.querySelector('#greeting-text').textContent=greetings[greetingIndex++%greetings.length]});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});document.querySelectorAll('.project').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)card.classList.add('visible')})}));
const details={delta:{kicker:'IN DEVELOPMENT / SHUXIN × DELTA FORCE',title:'三角洲知识库 Agent',body:'<p>正在开发：把 SHUXIN 的角色形象与三角洲网站的知识库结合，让玩家通过问答更自然地探索游戏资料。</p><h3>目前的方向</h3><p>围绕游戏知识检索、上下文问答与角色交互继续构建。此页面展示项目方向，目前没有对外开放的在线 Agent，也不将规划功能描述为已完成能力。</p><h3>与砖皮百科的连接</h3><p>从可搜索的玩家内容出发，探索从「浏览条目」到「围绕问题理解资料」的下一步。</p>'},research:{kicker:'RESEARCH NOTES / 2024 — 2026',title:'用证据，理解模型的边界。',body:'<h3>Econ-QA · 可信经济研究问答</h3><p>参与 5 人跨学科团队，负责需求拆解、接口对齐与系统集成。参与 BM25 / FAISS 混合检索原型，连接研究模块、可追溯引用与置信度提示。</p><h3>FOMC · 多模态情绪与市场反应</h3><p>与组员共建 80 场新闻发布会数据集；独立设计文本与多模态架构，以 5 个消融模型、36 个 walk-forward 测试窗进行评估。策略年化 Sharpe 为 −0.44，如实区分统计关联与实际经济价值。</p><h3>麻将 AI · 对手建模探索</h3><p>开发天凤牌谱采集、风格分析与规则引擎，打通 Mortal 行为克隆训练链路，并识别验证集过拟合信号。对手风格特征尚未接入决策模型。</p>'}};
const dialog=document.querySelector('#detail-dialog');
document.querySelectorAll('[data-detail]').forEach(button=>button.addEventListener('click',()=>{const data=details[button.dataset.detail];document.querySelector('#detail-kicker').textContent=data.kicker;document.querySelector('#detail-title').textContent=data.title;document.querySelector('#detail-body').innerHTML=data.body;dialog.showModal()}));
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
const audio=document.querySelector('#bgm'),audioToggle=document.querySelector('#audio-toggle'),audioLabel=document.querySelector('#audio-label');
let toastTimer;
function toast(text){const el=document.querySelector('.toast');el.textContent=text;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),4500)}
// Set only after the requested recording has been identified. Never substitute another track silently.
const soundtrack={src:'',title:'Until the Game Says Goodnight'};
audio.volume=.35;
if(soundtrack.src){audio.src=soundtrack.src;document.querySelector('#track-title').textContent=soundtrack.title}
audioToggle.addEventListener('click',async()=>{if(!soundtrack.src){toast('原创配乐正在准备中，先安静地探索吧。');return}try{if(audio.paused)await audio.play();else audio.pause()}catch{toast('音乐暂时无法播放，请稍后重试。')}});
function syncAudio(){const playing=!audio.paused;audioToggle.setAttribute('aria-pressed',String(playing));audioToggle.setAttribute('aria-label',playing?'暂停背景音乐':'播放背景音乐');audioLabel.textContent=playing?'SOUND ON':'SOUND OFF';document.querySelector('.audio-dock').classList.toggle('playing',playing)}
audio.addEventListener('play',syncAudio);audio.addEventListener('pause',syncAudio);audio.addEventListener('error',()=>{audio.pause();syncAudio();toast('音乐加载失败，请稍后重试。')});
