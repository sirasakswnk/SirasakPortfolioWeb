const fs = require('node:fs');
const path = require('node:path');
const out = path.resolve(__dirname, '..');
const esc = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const parts = [`<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1280" viewBox="0 0 1920 1280" role="img" aria-labelledby="title desc">
<title id="title">MonoShop system overview</title>
<desc id="desc">Customers and administrators use the Vue frontend and Pinia state stores. Axios calls the Express API, which queries PostgreSQL and serves images from the backend filesystem. Authentication uses bcrypt password hashes and JWT in an HttpOnly cookie.</desc>
<defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#7654b7"/></marker>
  <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="5" stdDeviation="9" flood-color="#25213c" flood-opacity="0.055"/></filter>
  <style>text{font-family:Arial,'Segoe UI',sans-serif;fill:#28243b}.eyebrow{font-size:14px;font-weight:700;letter-spacing:2px;fill:#786392}.heading{font-size:32px;font-weight:700}.body{font-size:18px;fill:#625b75}.small{font-size:16px;fill:#746b83}.cardTitle{font-size:21px;font-weight:700}.link{fill:none;stroke:#7654b7;stroke-width:3;marker-end:url(#arrow)}.twoWay{marker-start:url(#arrow)}.label{font-size:16px;fill:#715593;text-anchor:middle}</style>
</defs>
<rect width="1920" height="1280" fill="#f7f6fc"/>
<rect x="60" y="58" width="8" height="96" rx="4" fill="#7953bd"/>
<text x="90" y="78" class="eyebrow">ART TOY COMMERCE · OBSERVED IMPLEMENTATION</text>
<text x="88" y="130" font-size="48" font-weight="700">MonoShop system overview</text>
<text x="90" y="165" font-size="21" fill="#746b83">Vue 3 + Pinia + Bootstrap · Express · PostgreSQL</text>`];
function rect(x,y,w,h,fill='#fff',stroke='#e6e0f0',r=22,shadow=false){parts.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"${shadow?' filter="url(#shadow)"':''}/>`)}
function text(x,y,s,cls='body',extra=''){parts.push(`<text x="${x}" y="${y}" class="${cls}" ${extra}>${esc(s)}</text>`)}
function link(d,cls=''){parts.push(`<path d="${d}" class="link ${cls}"/>`)}
function group(id,fn){parts.push(`<g id="${id}">`);fn();parts.push('</g>')}
group('people',()=>{
  rect(60,210,254,600,'#fff','#e5dfed',24,true);
  text(84,246,'01 PEOPLE','eyebrow');text(84,286,'People','heading');text(84,312,'Browser clients');
  rect(82,338,210,172,'#f7f1ff','#e8dcf6',16);
  text(100,372,'Customer','cardTitle');
  ['Browse & search','Add to cart','Place/view orders','Account/profile'].forEach((s,i)=>text(100,405+i*27,s));
  rect(82,538,210,188,'#f0f5ff','#dde6f5',16);
  text(100,573,'Administrator','cardTitle');
  ['Edit products','Review orders','Confirm / delete','order records'].forEach((s,i)=>text(100,607+i*27,s));
});
group('frontend',()=>{
  rect(380,210,420,600,'#fff','#e5dfed',24,true);
  text(404,246,'02 FRONTEND','eyebrow');text(404,286,'Vue 3 frontend','heading');text(404,312,'Vue Router · Bootstrap · Axios');
  rect(404,338,372,148,'#f8f5ff','#e8def5',16);
  text(426,371,'Application views','cardTitle');
  ['Home · catalog · product details','Member · cart · orders','Admin orders · product edit'].forEach((s,i)=>text(426,403+i*28,s));
  rect(404,548,372,166,'#edf7f3','#d5e8df',16);
  text(426,583,'Pinia stores','cardTitle');
  text(426,619,'Auth: login + avatar timestamp');
  text(426,649,'Cart: cart ID + item quantities');
  text(426,687,'In-memory reactive UI state','small');
  link('M590 493 V540','twoWay');text(666,520,'reactive state','label');
  text(404,764,'Router: createMemoryHistory','small');
  text(404,788,'API calls include credentials','small');
});
group('express-api',()=>{
  rect(940,210,440,600,'#fff','#e5dfed',24,true);
  text(964,246,'03 API / SERVER','eyebrow');text(964,286,'Express API','heading');text(964,312,'Routes → Controllers → pg Pool');
  rect(964,338,392,90,'#f8f5ff','#e8def5',16);
  text(984,366,'Members & sign-in','cardTitle');
  text(984,393,'POST /members · /members/login','small');
  text(984,416,'GET /members/detail · /members/logout','small');
  rect(964,446,392,78,'#f8f5ff','#e8def5',16);
  text(984,475,'Products','cardTitle');text(984,503,'/products · search · detail · edit');
  rect(964,542,392,78,'#f8f5ff','#e8def5',16);
  text(984,571,'Carts','cardTitle');text(984,599,'/carts · items · quantity · confirm');
  rect(964,638,392,112,'#f8f5ff','#e8def5',16);
  text(984,668,'Orders','cardTitle');text(984,699,'/orders/:cusId · item details');text(984,728,'/orders/admin · status · delete');
  text(964,788,'Parameterized SQL queries','small');
});
group('postgresql',()=>{
  rect(1470,210,390,390,'#fff','#e5dfed',24,true);
  text(1494,246,'04 DATA','eyebrow');text(1494,286,'PostgreSQL','heading');text(1494,312,'Relational persistence');
  text(1494,360,'Catalog','cardTitle');text(1494,389,'products · brands');text(1494,416,'series · producttype');
  text(1494,457,'Members','cardTitle');text(1494,486,'members');
  text(1494,527,'Shopping state','cardTitle');text(1494,555,'carts · cartDtl');text(1494,581,'orders · orderDtl');
});
group('image-storage',()=>{
  rect(1470,630,390,180,'#fff','#e5dfed',24,true);
  text(1494,669,'Backend filesystem','heading','style="font-size:26px"');
  text(1494,709,'/img_pd → product JPGs');text(1494,741,'/img_mem → member avatars');
  text(1494,783,'Multer: member image uploads','small');
});
group('connections',()=>{
  link('M320 419 H372');text(346,398,'UI','label');
  link('M810 419 H930','twoWay');text(870,393,'HTTP / JSON','label');
  link('M930 673 H810','');text(870,647,'cookie: token','label');
  link('M1388 419 H1460','twoWay');text(1426,396,'SQL','label');
  link('M1388 718 H1460','twoWay');text(1426,695,'files','label');
});
group('authentication',()=>{
  rect(60,850,1800,224,'#ede8f6','#ded5ec',24);
  text(84,887,'05 AUTHENTICATION','eyebrow');
  text(84,922,'Passwords, sessions & role checks','heading','style="font-size:26px"');
  rect(84,944,520,104,'#fff','#e2daee',14);
  text(104,976,'bcrypt password hashes','cardTitle');text(104,1005,'Registration stores a hash in members.','small');text(104,1031,'Login compares the submitted password.','small');
  rect(628,944,600,104,'#fff','#e2daee',14);
  text(648,976,'JWT in HttpOnly cookie: token','cardTitle');text(648,1005,'Signed session token · 1 hour expiry','small');text(648,1031,'Member detail + product update + admin order checks','small');
  rect(1252,944,584,104,'#fff','#e2daee',14);
  text(1272,976,'Environment-aware cookie flags','cardTitle');text(1272,1005,'HTTP development: SameSite=Lax','small');text(1272,1031,'HTTPS / production: Secure + SameSite=None','small');
});
group('source-notes',()=>{
  text(60,1122,'SOURCE MAP','eyebrow');
  text(60,1158,'Frontend: src/router · src/stores · src/components');
  text(970,1158,'Backend: Routes · Controllers · service/database.js');
  parts.push('<path d="M60 1192 H1860" stroke="#ddd5e8"/>');
  text(60,1230,'Project: MonoShop · UI brand: MonoCraft','cardTitle');
  text(1860,1230,'Drawn from current source · 09 Nov 2026','body','text-anchor="end"');
});
parts.push('</svg>');
fs.writeFileSync(path.join(out, 'system-overview.svg'), parts.join('\n'));
console.log('Created editable system-overview.svg (1920 x 1280)');
