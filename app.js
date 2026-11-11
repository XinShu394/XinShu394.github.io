(() => {
  const S = window.SITE, P = S.profile;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  /* ---------- bind ---------- */
  $$('[data-bind]').forEach(el => (el.textContent = P[el.dataset.bind] ?? ''));
  $$('[data-href]').forEach(el => { const k = el.dataset.href; el.href = k === 'email' ? `mailto:${P.email}` : P[k]; });
  $('.fields').innerHTML = P.fields.map(f => `<span>${esc(f)}</span>`).join('<i>·</i>');
  $('.skills').innerHTML = P.skills.map(s => `<span>${esc(s)}</span>`).join('');

  /* ---------- section icons ---------- */
  $$('.sec-ico').forEach(img => (img.src = `assets/art/afterglow-icon-${img.dataset.ico}.png`));

  /* ---------- floating motes ---------- */
  if (!reduce) $('.motes').innerHTML = Array.from({ length: 16 }, (_, i) =>
    `<i style="--x:${(i * 61) % 100}%;--y:${(i * 37) % 90}%;--s:${4 + (i % 4) * 2}px;--t:${7 + (i % 5) * 2}s;--d:${-i * .9}s"></i>`).join('');

  /* ---------- education ---------- */
  $('.edu').innerHTML = S.education.map((e, i) => `
    <article class="card edu-card reveal" style="--d:${i}">
      <div class="plate"><img src="${e.logo}" alt="${esc(e.org)} 标志" loading="lazy"></div>
      <div class="edu-info">
        <div class="meta"><span>${esc(e.orgEn)}</span><time>${esc(e.period)}</time></div>
        <h3>${esc(e.org)}</h3><h4>${esc(e.degree)}</h4>
        <ul class="points">${e.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
      </div>
    </article>`).join('');

  /* ---------- experience ---------- */
  const visual = x => {
    if (x.sources) return `
      <div class="sources">
        <span class="label">接入数据源</span>
        <div class="src-logos">${x.sources.map(s => `<span class="src"><img src="${s.logo}" alt="${esc(s.name)}" loading="lazy"><small>${esc(s.name)}</small></span>`).join('')}</div>
        <ol class="flow">${x.flow.map(f => `<li>${esc(f)}</li>`).join('')}</ol>
      </div>`;
    if (x.showcase) return `<figure class="show"><img src="${x.showcase}" alt="${esc(x.work)}" loading="lazy"><figcaption>${esc(x.showcaseCaption)}</figcaption></figure>`;
    return '';
  };
  $('.exp').innerHTML = S.experience.map((x, i) => `
    <article class="card exp-card reveal ${x.sources || x.showcase ? '' : 'plain'}" style="--d:${i}">
      <div class="exp-side">
        <div class="plate">${x.logo ? `<img src="${x.logo}" alt="${esc(x.org)} 标志" loading="lazy">` : `<span class="word-logo">${esc(x.org)}<small>${esc(x.orgEn)}</small></span>`}</div>
        <div class="metrics">${x.metrics.map(m => `<div><b>${esc(m.v)}</b><span>${esc(m.k)}</span></div>`).join('')}</div>
      </div>
      <div class="exp-main">
        <div class="meta"><span>${esc(x.orgEn)}</span><time>${esc(x.period)}</time></div>
        <h3>${esc(x.org)}<small>${esc(x.title)}</small></h3>
        <div class="work"><span>代表工作</span><b>${esc(x.work)}</b><em>${esc(x.workNote)}</em></div>
        ${visual(x)}
        <ul class="points">${x.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
      </div>
    </article>`).join('');

  /* ---------- projects ---------- */
  const kinds = { all: '全部', product: '产品开发', game: '游戏开发', research: '科研', ip: '虚拟人' };
  $('.filters').innerHTML = Object.entries(kinds).map(([k, v], i) => `<button data-k="${k}" aria-pressed="${i === 0}">${v}</button>`).join('');
  $('.bento').innerHTML = S.projects.map((p, i) => `
    <button class="tile ${p.size} k-${p.kind} ${p.cover ? 'has-cover' : ''} reveal" style="--d:${i}" data-i="${i}" data-kind="${p.kind}" aria-haspopup="dialog">
      ${p.cover ? `<span class="cover"><img src="${p.cover}" alt="" loading="lazy"></span>` : `<span class="glyph" aria-hidden="true">${esc(p.title.slice(0, 1))}</span>`}
      <span class="t-kind">${esc(kinds[p.kind])}</span>
      <span class="t-body">
        ${p.metric ? `<span class="t-metric"><b>${esc(p.metric.v)}</b>${esc(p.metric.k)}</span>` : ''}
        <b>${esc(p.title)}</b><small>${esc(p.subtitle)}</small><em>${esc(p.tagline)}</em>
      </span>
      <span class="t-foot"><span>${esc(p.period)}</span><span class="t-go">查看详情 →</span></span>
    </button>`).join('');
  $('.more-repos').innerHTML = `更多开源项目：${S.repos.map(r => `<a href="${P.github}/${r.repo}" target="_blank" rel="noopener noreferrer">${esc(r.name)}</a>`).join('、')}　<a class="all" href="${P.github}" target="_blank" rel="noopener noreferrer">全部仓库 ↗</a>`;

  $('.filters').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('.filters button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    $$('.tile').forEach(c => c.classList.toggle('dim', b.dataset.k !== 'all' && c.dataset.kind !== b.dataset.k));
  });

  /* dialog */
  const dlg = $('#detail');
  $('.bento').addEventListener('click', e => {
    const c = e.target.closest('.tile'); if (!c) return;
    const p = S.projects[+c.dataset.i];
    $('.d-body', dlg).innerHTML = `
      <p class="meta"><span>${esc(kinds[p.kind])}</span><time>${esc(p.period)}</time></p>
      <h3>${esc(p.title)}</h3><p class="d-sub">${esc(p.subtitle)}　·　${esc(p.role)}</p>
      <p class="d-tag">${esc(p.tagline)}</p>
      ${p.shots ? `<div class="shots n${p.shots.length}">${p.shots.map(s => `<img src="${s}" alt="${esc(p.title)} 截图" loading="lazy">`).join('')}</div>` : ''}
      <div class="d-cols">
        <div><h4>背景</h4><p>${esc(p.problem)}</p><h4>成果</h4><ul class="d-res">${p.results.map(r => `<li>${esc(r)}</li>`).join('')}</ul></div>
        <div><h4>主要工作</h4><ol>${p.actions.map(a => `<li>${esc(a)}</li>`).join('')}</ol></div>
      </div>
      <div class="d-foot"><div class="chips">${p.stack.map(s => `<span>${esc(s)}</span>`).join('')}</div>
      <div class="d-links">${p.links.length ? p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ↗</a>`).join('') : '<small>暂无公开链接</small>'}</div></div>`;
    dlg.showModal(); dlg.scrollTop = 0;
  });
  $('.x', dlg).addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

  /* ---------- music ---------- */
  const M = S.music, audio = $('.player audio'), btn = $('.p-btn'), player = $('.player');
  $('.p-title').textContent = M.title; $('.p-note').textContent = M.note;
  let loaded = false;
  btn.addEventListener('click', async () => {
    if (!loaded) { audio.src = M.src; loaded = true; }
    if (audio.paused) {
      try { await audio.play(); } catch { player.classList.add('missing'); $('.p-note').textContent = '音频文件尚未放入'; return; }
    } else audio.pause();
  });
  audio.addEventListener('play', () => { player.classList.add('playing'); btn.setAttribute('aria-pressed', 'true'); btn.setAttribute('aria-label', '暂停背景音乐'); });
  audio.addEventListener('pause', () => { player.classList.remove('playing'); btn.setAttribute('aria-pressed', 'false'); btn.setAttribute('aria-label', '播放背景音乐'); });
  audio.addEventListener('error', () => { player.classList.add('missing'); $('.p-note').textContent = '音频文件尚未放入'; });

  /* ---------- reveal ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  $$('.reveal').forEach(el => io.observe(el));
  requestAnimationFrame(() => document.body.classList.add('ready'));

  /* ---------- nav ---------- */
  const secs = $$('main section[id]'), links = $$('.top nav a');
  const sio = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach(s => sio.observe(s));
})();
