import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
const root=fs.existsSync('dist/index.html')?'dist':'.';
const fixtures=await import(pathToFileURL(path.resolve(root,'demo.js')));
const requirements=JSON.parse(fs.readFileSync(`${root}/requirements.json`,'utf8'));
const nodes={};
for(const id of ['#app','#toast','#modal','#sidebar'])nodes[id]={innerHTML:'',textContent:'',classList:{add(){},remove(){},toggle(){}},querySelectorAll(){return[];},close(){},showModal(){},addEventListener(){}};
const context=vm.createContext({...fixtures,console,structuredClone,URL,Blob,setTimeout:()=>0,clearTimeout(){},document:{title:'',querySelector:s=>nodes[s]||null,querySelectorAll:()=>[],addEventListener(){}},location:{hash:''},window:{addEventListener(){},scrollTo(){}},sessionStorage:{getItem(){return null;},setItem(){}},fetch:()=>{throw Error('Network disallowed in QC');}});
let source=fs.readFileSync(`${root}/app.js`,'utf8').replace(/^import[^\n]+\n/,'').replace(/\ninit\(\);\s*$/,'');
vm.runInContext(source,context);
context.requirements=requirements;
vm.runInContext('modules=requirements;',context);
let checks=0,routes=0;
const check=(value,message)=>{assert.ok(value,message);checks++;};
check(requirements.length===16,'16 modules');check(requirements.flatMap(m=>m.subs).length===64,'64 submodules');check(requirements.flatMap(m=>m.subs).flatMap(s=>s.phases).length===192,'192 phases');
check(fixtures.workItems.length===16&&fixtures.workItems.every(m=>m.length===4),'64 work items');
for(const [i,m] of requirements.entries()){
check(m.id===`M${String(i+1).padStart(2,'0')}`,'Ordered module ID');
for(const [j,s] of m.subs.entries()){
check(s.id===`${m.id}.S${j+1}`,'Submodule ID');check(s.phases.length===3&&s.phases.every((p,k)=>p.id===`F${k+1}`&&p.text.length>15),'Full phase text');
check(fixtures.workItems[i][j][1].length===4&&fixtures.workItems[i][j][2].length>20,'Editable demo fields and result');
}
}
const allRoutes=['overview','coverage',...requirements.flatMap(m=>[`module/${m.id}`,...m.subs.flatMap(s=>s.phases.map((p,i)=>`module/${m.id}/${s.id.split('.')[1]}/${i+1}`))])];
for(const r of allRoutes){context.location.hash='#/'+r;vm.runInContext('render()',context);const html=nodes['#app'].innerHTML;check(html.includes('<main'),'Route has main: '+r);check(!html.includes('Preparing workflow'),'No loading placeholder: '+r);check(!/undefined|NaN/.test(html),'No undefined state: '+r);if(r.split('/').length===4){const [_,mid,sid,phase]=r.split('/');check(html.includes(`${mid}.${sid}.F${phase}`),'Phase traceability: '+r);}routes++;}
vm.runInContext('state=initial();',context);
const csv=vm.runInContext(String.raw`parseCSV('company,email,industry,location\n"Harbor, Works",team@harbor.example,Garments,Dhaka\nMeghna,nadia@meghna-apparel.example,Garments,Gazipur\nBad,bad-email,Textile,Dhaka')`,context);
check(csv.length===3&&csv[0].company==='Harbor, Works','CSV quoted comma');check(csv.map(x=>x.status).join(',')==='Ready,Duplicate,Rejected','CSV classification');
check(vm.runInContext(String.raw`(()=>{try{parseCSV('wrong,headers\nx,y');return false}catch{return true}})()`,context),'Missing CSV header rejects');
vm.runInContext(`state.qualified.push('MSG-001'); route=['module','M15']; transfer('MSG-001'); transfer('MSG-001');`,context);
check(vm.runInContext('state.transfers.length===1&&state.transfers[0].ref==="ERP-DEMO-1042"',context),'ERP retry idempotency');
vm.runInContext(`state=initial();transfer('MSG-002');`,context);check(vm.runInContext('state.transfers.length===0',context),'Unqualified lead cannot transfer');
vm.runInContext(`state.qualified.push('MSG-001');state.paused=true;transfer('MSG-001');`,context);check(vm.runInContext('state.transfers.length===0',context),'Emergency pause blocks transfer');
vm.runInContext(`state=initial();moduleAction('campaign-0');`,context);check(vm.runInContext('state.campaigns[0].status==="Ready"',context),'Campaign approval gate');
vm.runInContext(`state.approved[0]=true;moduleAction('campaign-0');`,context);check(vm.runInContext('state.campaigns[0].status==="Running"',context),'Approved campaign starts');
vm.runInContext(`moduleAction('pause-all');`,context);check(vm.runInContext('state.campaigns[0].status==="Paused"',context),'Emergency pause stops campaign');
vm.runInContext(`state=initial();moduleAction('sample-import');moduleAction('commit-import');moduleAction('commit-import');`,context);check(vm.runInContext('state.companies.length===7&&state.companies.at(-1).consent==="Unknown"',context),'Import is duplicate-safe and preserves unknown consent');
vm.runInContext(`state.flows['M08.S1']={prepared:true,reviewed:true,complete:true};route=['module','M08','S1','3'];`,context);check(vm.runInContext('flowPage(modules[7],modules[7].subs[0]).includes("Saved to demo activity")',context),'Completed result renders');
check(vm.runInContext(`esc('<script>alert("x")</script>')`,context).includes('&lt;script&gt;'),'Untrusted text is escaped');
for(const file of ['index.html','app.js','demo.js','requirements.json','styles.css'])check(fs.existsSync(`${root}/${file}`),'Asset exists: '+file);
console.log(JSON.stringify({status:'passed',checks,routes,modules:16,submodules:64,phases:192,tests:['Route rendering and traceability','CSV valid/duplicate/rejected and quoted fields','ERP retry, qualification and pause gates','Campaign creative approval','Import deduplication and consent','Escaped user content','Static asset existence']},null,2));
