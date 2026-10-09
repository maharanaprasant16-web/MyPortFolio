(() => {
const D = window.PORTFOLIO, app = document.getElementById('app');
const P = {
  mail: '<path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/><path d="M22 6l-10 7L2 6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
  linkedin: '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  layers: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  bank: '<path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10l10-7 10 7"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.7-4 3-9 3s-9-1.3-9-3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/>',
  users: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8"/>',
  tool: '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.8-3.8a6 6 0 01-7.9 7.9l-6.9 6.9a2.1 2.1 0 01-3-3l6.9-6.9a6 6 0 017.9-7.9l-3.8 3.8z"/>',
  award: '<circle cx="12" cy="8" r="7"/><path d="M8.2 13.9L7 23l5-3 5 3-1.2-9.1"/>',
  alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
  user: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  cog: '<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8L7 17M17 7l2.8-2.8"/>',
  ok: '<path d="M22 11.1V12a10 10 0 11-5.9-9.1"/><path d="M22 4L12 14l-3-3"/>',
  right: '<path d="M5 12h14M12 5l7 7-7 7"/>', up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
  print: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  check: '<path d="M20 6L9 17l-5-5"/>', down: '<path d="M12 5v14M19 12l-7 7-7-7"/>'
};
const icon = n => { const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('class', 'ic'); s.setAttribute('aria-hidden', 'true'); s.innerHTML = P[n] || ''; return s; };
const h = (t, a = {}, ...k) => {
  const e = document.createElement(t);
  for (const [n, v] of Object.entries(a)) { if (n === 'class') e.className = v; else if (n.startsWith('on')) e.addEventListener(n.slice(2), v); else if (v != null && v !== false) e.setAttribute(n, v); }
  k.flat().forEach(c => c != null && c !== false && e.append(c.nodeType ? c : document.createTextNode(c)));
  return e;
};
const head = (o) => h('div', { class: 'head reveal' }, h('p', { class: 'eyebrow' }, o.eyebrow), h('h2', {}, o.title), o.sub && h('p', { class: 'sub' }, o.sub));
const sec = (id, label, ...k) => { const s = h('section', { id, class: 'sec', 'data-label': label }, h('div', { class: 'wrap' }, k)); return s; };
const T = D.theme || {};
Object.entries({ primary: '--primary', secondary: '--secondary', accent: '--accent', dark: '--dark' }).forEach(([k, v]) => T[k] && document.documentElement.style.setProperty(v, T[k]));
document.title = D.name + ' | ' + D.navTitle;
const C = D.contact || {}, parts = [];

/* hero */
if (D.hero) {
  const H = D.hero, summary = h('p', { class: 'lead' }); summary.innerHTML = H.summary;
  const rows = [['mail', C.email, C.email && 'mailto:' + C.email], ['cap', C.email2, C.email2 && 'mailto:' + C.email2], ['phone', C.phone, C.phone && 'tel:' + (C.phone || '').replace(/\s/g, '')], ['linkedin', C.linkedinLabel && 'LinkedIn: ' + C.linkedinLabel, C.linkedinUrl]].filter(r => r[1]);
  parts.push(h('section', { id: 'about', class: 'sec hero', 'data-label': 'About' }, h('div', { class: 'wrap hero-grid' },
    h('div', { class: 'reveal' },
      H.badge && h('p', { class: 'badge' }, h('i'), H.badge),
      h('h1', {}, D.name), h('p', { class: 'role' }, H.title), h('p', { class: 'tagline' }, H.tagline), summary,
      h('ul', { class: 'chips' }, (H.chips || []).map(c => h('li', {}, icon('check'), c))),
      h('div', { class: 'cta' }, h('a', { class: 'btn primary', href: '#projects' }, 'View Key Projects', icon('right')), h('a', { class: 'btn ghost', href: '#contact' }, 'Contact Information'))),
    h('aside', { class: 'card profile reveal' },
      h('div', { class: 'who' }, h('span', { class: 'logo big' }, D.initials), h('div', {}, h('b', {}, D.name), h('small', {}, C.location), C.status && h('small', { class: 'live' }, h('i'), C.status))),
      h('div', { class: 'stats' }, (H.stats || []).map((s, i) => h('div', { class: 'stat s' + i }, h('b', {}, s.value), h('span', {}, s.label)))),
      h('ul', { class: 'rows' }, rows.map(r => h('li', {}, icon(r[0]), r[2] ? h('a', { href: r[2], target: r[0] === 'linkedin' ? '_blank' : null, rel: 'noopener' }, r[1]) : r[1]))))
  )));
}

/* career */
if (D.career && D.career.steps.length) parts.push(sec('career', 'Career Path', head(D.career),
  h('div', { class: 'steps' }, D.career.steps.map(s => h('article', { class: 'step reveal' + (s.current ? ' now' : '') },
    h('p', { class: 'dates' }, s.dates, s.current && h('em', {}, 'Current')), h('h3', {}, s.org), h('p', { class: 'srole' }, s.role), h('p', { class: 'note' }, s.note))))));

/* projects */
if (D.projects && D.projects.items.length) {
  const cards = D.projects.items.map(p => {
    const blk = (ic, label, body) => h('div', { class: 'blk' }, h('h4', {}, icon(ic), label), body);
    return h('article', { class: 'card proj reveal', 'data-groups': p.groups.join(' ') },
      h('div', { class: 'ptop' }, h('span', { class: 'tag' }, p.tag), h('span', { class: 'when' }, p.when)),
      h('h3', {}, p.title), h('p', { class: 'psub' }, p.subtitle),
      blk('alert', 'Business Problem', h('p', {}, p.problem)), blk('user', 'Role & Ownership', h('p', {}, p.role)), blk('cog', 'Solution Built', h('p', {}, p.solution)),
      blk('layers', 'Key Integrations & Tech', h('ul', { class: 'tech' }, p.tech.map(t => h('li', {}, t)))),
      h('div', { class: 'outcome' }, h('h4', {}, icon('ok'), 'Outcome & Business Impact'), h('p', {}, p.outcome)));
  });
  const btns = D.projects.filters.map(([id, label], i) => h('button', { type: 'button', class: 'pill' + (i ? '' : ' on'), onclick: e => {
    document.querySelectorAll('.pill').forEach(b => b.classList.toggle('on', b === e.currentTarget));
    cards.forEach(c => c.hidden = !(id === 'all' || c.dataset.groups.split(' ').includes(id)));
  } }, label));
  parts.push(sec('projects', 'Key Projects', h('div', { class: 'head left reveal' }, h('div', {}, h('p', { class: 'eyebrow' }, D.projects.eyebrow), h('h2', {}, D.projects.title), h('p', { class: 'sub' }, D.projects.sub)), h('div', { class: 'filters' }, btns)), h('div', { class: 'grid2' }, cards)));
}

/* experience */
if (D.experience && D.experience.jobs.length) parts.push(sec('experience', 'Experience', head(D.experience),
  h('div', { class: 'jobs' }, D.experience.jobs.map(j => h('article', { class: 'card job reveal' },
    h('header', {}, h('div', {}, j.current && h('span', { class: 'tag' }, 'Current Role'), h('h3', {}, j.role), h('p', { class: 'co' }, j.company)), h('div', { class: 'meta' }, h('span', { class: 'when' }, j.when), h('small', {}, j.place))),
    h('ul', {}, j.points.map(([t, d]) => h('li', {}, h('b', {}, t + ': '), d))))))));

/* skills */
if (D.skills && D.skills.groups.length) parts.push(sec('skills', 'Skills & Tools', head(D.skills),
  h('div', { class: 'grid3' }, D.skills.groups.map((g, i) => h('article', { class: 'card skill reveal t' + (i % 6) }, h('span', { class: 'ico' }, icon(g.icon)), h('h3', {}, g.title), h('ul', {}, g.items.map(x => h('li', {}, x))))))));

/* education + certs */
if (D.education) {
  const E = D.education;
  parts.push(sec('education', 'Education', h('div', { class: 'edu-grid' },
    h('div', {}, h('p', { class: 'eyebrow' }, E.eyebrow), h('h2', { class: 'left' }, E.title),
      E.main.map(e => h('article', { class: 'card edu reveal' }, e.badge && h('span', { class: 'logo sq' }, e.badge), h('div', {}, h('h3', {}, e.title, e.when && h('span', { class: 'when' }, e.when)), h('p', { class: 'co' }, e.school), e.note && h('p', { class: 'note' }, e.note)))),
      h('div', { class: 'minor' }, (E.minor || []).map(m => h('div', { class: 'card' }, h('b', {}, m.title), h('small', {}, m.school))))),
    h('div', {}, h('p', { class: 'eyebrow' }, E.certEyebrow), h('h2', { class: 'left' }, E.certTitle),
      (E.certs || []).map((c, i) => h('article', { class: 'card cert reveal t' + ((i + 1) % 6) }, h('span', { class: 'ico' }, icon(c.icon)), h('div', {}, h('b', {}, c.title), h('small', {}, c.note))))))));
}

/* contact */
parts.push(h('footer', { id: 'contact', class: 'sec contact', 'data-label': 'Contact' }, h('div', { class: 'wrap' },
  h('div', { class: 'head reveal' }, h('p', { class: 'eyebrow' }, 'Get In Touch'), h('h2', {}, C.headline), h('p', { class: 'sub' }, C.text)),
  h('div', { class: 'cgrid' }, [['mail', 'Email', C.email, 'mailto:' + C.email], ['cap', 'College Email', C.email2, 'mailto:' + C.email2], ['phone', 'Phone', C.phone, 'tel:' + (C.phone || '').replace(/\s/g, '')], ['linkedin', 'LinkedIn', C.linkedinLabel, C.linkedinUrl], ['pin', 'Location', C.location, '']]
    .filter(r => r[2]).map(r => h(r[3] ? 'a' : 'div', { class: 'cc reveal', href: r[3] || null, target: r[0] === 'linkedin' ? '_blank' : null, rel: 'noopener' }, icon(r[0]), h('span', {}, h('small', {}, r[1]), h('b', {}, r[2]))))),
  h('div', { class: 'cta center' }, C.email && h('a', { class: 'btn light', href: 'mailto:' + C.email }, icon('send'), 'Send an Email'), D.resume && h('a', { class: 'btn outline', href: D.resume, download: D.name.replace(/\s+/g, '_') + '_Resume.pdf' }, icon('down'), 'Download Resume (PDF)')),
  h('p', { class: 'copy' }, '© ' + new Date().getFullYear() + ' ' + D.name))));

/* nav */
const links = parts.filter(p => p.dataset && p.dataset.label && p.id !== 'contact');
const nav = h('header', { class: 'nav' }, h('div', { class: 'wrap bar' },
  h('a', { class: 'brand', href: '#about' }, h('span', { class: 'logo' }, D.initials), h('span', {}, h('b', {}, D.name), h('small', {}, D.navTitle))),
  h('nav', { class: 'links', 'aria-label': 'Sections' }, links.map(s => h('a', { href: '#' + s.id, 'data-id': s.id }, s.dataset.label))),
  h('div', { class: 'acts' }, h('button', { type: 'button', class: 'btn ghost sm', onclick: () => window.print() }, icon('print'), 'Print Resume'), h('a', { class: 'btn primary sm', href: '#contact' }, icon('send'), 'Get In Touch'))));
const fab = h('a', { class: 'fab', href: '#about', 'aria-label': 'Back to top' }, icon('up'));
app.replaceChildren(nav, h('main', {}, parts.filter(p => p.id !== 'contact')), parts.find(p => p.id === 'contact'), fab);

/* behaviour */
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .08 });
document.querySelectorAll('.reveal').forEach(e => io.observe(e));
const spy = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && document.querySelectorAll('.links a').forEach(a => a.classList.toggle('on', a.dataset.id === e.target.id))), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('section.sec').forEach(s => spy.observe(s));
addEventListener('scroll', () => fab.classList.toggle('show', scrollY > 500), { passive: true });
})();
