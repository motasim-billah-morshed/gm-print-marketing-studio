export const titles=['Strategy & brand','Data imports','Company discovery','Data quality','Companies & contacts','Audience segments','AI content planner','Copy & SEO studio','Design studio','Video & audio','Assets & approvals','Channels & campaigns','Response inbox','Lead qualification','ERP handoff','Administration'];
export const icons=['compass','upload','search','shield','building','users','spark','edit','image','video','folder','send','inbox','target','connect','settings'];
export const seedCompanies=[
{id:'CMP-001',name:'Meghna Apparel Studio',industry:'Garments',location:'Gazipur',contact:'Nadia Rahman',role:'Purchase Manager',email:'nadia@meghna-apparel.example',channels:['Email','WhatsApp'],consent:'Opted in',status:'Verified',score:94},
{id:'CMP-002',name:'Aster Packaging Co.',industry:'Packaging',location:'Dhaka',contact:'Rafi Ahmed',role:'Brand Executive',email:'rafi@aster-pack.example',channels:['Email','LinkedIn'],consent:'Unknown',status:'Needs review',score:72},
{id:'CMP-003',name:'Northstar Knitwear',industry:'Garments',location:'Narayanganj',contact:'Tania Islam',role:'Merchandiser',email:'tania@northstar-knit.example',channels:['Email','WhatsApp'],consent:'Opted in',status:'Verified',score:91},
{id:'CMP-004',name:'Canvas Retail House',industry:'Retail',location:'Chattogram',contact:'Imran Hasan',role:'Operations Lead',email:'imran@canvas-retail.example',channels:['Email'],consent:'Opted in',status:'Verified',score:85},
{id:'CMP-005',name:'Greenfield Foods',industry:'Food & beverage',location:'Dhaka',contact:'Sara Kabir',role:'Marketing Manager',email:'sara@greenfield-food.example',channels:['Email','Facebook'],consent:'Opted out',status:'Suppressed',score:66},
{id:'CMP-006',name:'Riverline Textile',industry:'Textile',location:'Gazipur',contact:'Fahim Khan',role:'Sourcing Executive',email:'fahim@riverline-textile.example',channels:['Email','LinkedIn'],consent:'Opted in',status:'Verified',score:88}
];
export const messages=[
{id:'MSG-001',company:'Meghna Apparel Studio',name:'Nadia Rahman',channel:'WhatsApp',subject:'১০,০০০ হ্যাংট্যাগের স্যাম্পল চাই',body:'আমাদের নতুন collection-এর জন্য ১০,০০০ পিস recycled hangtag প্রয়োজন। 350 GSM, দুই পাশে print। দুই সপ্তাহের মধ্যে sample দিতে পারবেন? ক্যাটালগ এবং স্যাম্পলের বিস্তারিত পাঠাবেন।',intent:'Sample request',fit:94,product:'Recycled hangtag',quantity:'10,000 pcs',timeline:'2 weeks',status:'Qualified'},
{id:'MSG-002',company:'Northstar Knitwear',name:'Tania Islam',channel:'Email',subject:'Woven label catalogue',body:'আপনাদের woven label-এর ক্যাটালগটি পাঠাবেন। পরিমাণ ও delivery date এখনো নিশ্চিত করিনি। ডিজাইন টিমের সঙ্গে আলোচনা করে জানাব।',intent:'Catalogue inquiry',fit:78,product:'Woven label',quantity:'Unknown',timeline:'Unknown',status:'Needs review'},
{id:'MSG-003',company:'Aster Packaging Co.',name:'Rafi Ahmed',channel:'Website form',subject:'ডিজাইনার হিসেবে চাকরির আবেদন',body:'আপনাদের প্রতিষ্ঠানে graphic designer পদে কাজ করতে আগ্রহী। আমার portfolio কোথায় পাঠাব?',intent:'Job application',fit:8,product:'Not applicable',quantity:'Not applicable',timeline:'Not applicable',status:'Irrelevant'}
];
export const campaigns=[{name:'A better tag. A stronger brand.',segment:'Garments · Gazipur',channel:'Email + WhatsApp',spend:2400,budget:6000,status:'Ready',leads:8},{name:'Packaging that tells your story',segment:'Retail · Dhaka',channel:'Facebook',spend:1800,budget:5000,status:'Draft',leads:5},{name:'Made for your next collection',segment:'Textile · Bangladesh',channel:'LinkedIn',spend:0,budget:3000,status:'Needs approval',leads:0}];
export const creativeNames=['Recycled hangtag collection','Packaging that tells your story','Woven labels. Lasting identity.'];
// Each row is an intentionally distinct demo work item: source, editable fields, and expected output.
export const workItems=[
[
['Recycled hangtag offer',['Product|Recycled hangtag','Material|350 GSM recycled board','Audience|Export garment factories','Offer|Request a sample pack'],'Approved offer brief: recycled hangtags for garment factories. CTA: Request a sample. Pricing requires ERP quotation.'],
['GM Print brand profile',['Brand name|GM Print Solution','Tone|Professional, helpful, specific','Languages|বাংলা + English','Claim rule|No unverified certification claims'],'Brand profile v1: teal / navy palette; clear bilingual messaging; product claims checked against approved catalogue.'],
['Export garment buyer profile',['Industry|Garments','Region|Gazipur, Dhaka','Role|Purchase Manager / Merchandiser','Exclude|Unverified contacts, opted-out recipients'],'Target profile: garment exporters; packaging and label use cases; exclusion rules applied.'],
['Autumn sample campaign',['Objective|Sample requests','Budget cap|৳6,000','CTA|Request sample catalogue','Primary channel|Email'],'Campaign brief: recycled hangtags → garment buyers → sample inquiry. Sales goals and KPI remain in ERP.']
],
[
['Buyer list import',['Source file|buyers-demo.csv','Company column|company','Email column|email','Country code|+880'],'Import batch: 3 rows → 1 valid new company, 1 duplicate, 1 rejected. Review errors before committing.'],
['Visiting card OCR',['Document|demo-business-card.pdf','Company|Meghna Apparel Studio','Extracted contact|Nadia Rahman','OCR confidence|87% · email needs review'],'OCR review: company and role extracted; email held for human review. Original source reference retained.'],
['Manual company entry',['Company|Harbor Garment Works','Contact name|Rumi Akter','Role|Sourcing Manager','Email|rumi@harbor-garment.example'],'Manual record staged with source “User entry”. Email is unverified; marketing consent unknown.'],
['ERP customer import',['Source|ERP sandbox export','External key|customer_id','Mode|Incremental update','Consent mapping|preserve_unknown'],'ERP import preview: 6 mapped fields. Existing customer flag preserved; unknown consent is not promoted to opt-in.']
],
[
['Find garment exporters',['Search query|Garment exporters Gazipur','Industry|Garments','Location|Gazipur','Required field|Official website'],'3 fictional candidate companies found. Sources attached for demo review; no real search performed.'],
['Association directory scan',['Source|Demo industry directory','Location|Narayanganj','Storage rule|Permitted fields only','Reference ID|DIR-DEMO-004'],'Directory match prepared: company name and source reference. Restricted source content excluded from permanent storage.'],
['Official social channel matching',['Company|Northstar Knitwear','Domain|northstar-knit.example','Candidate channel|LinkedIn','Match evidence|Domain and company address'],'Social match: possible official page; confidence 82%. Reviewer approval needed before verified status.'],
['Refresh missing company fields',['Company|Aster Packaging Co.','Missing field|Current procurement role','Existing value|Unverified','Priority|High'],'Change candidate: new department name detected in demo data. Existing value preserved until review.']
],
[
['Duplicate company review',['Record A|Meghna Apparel Studio','Record B|Meghna Apparel Studio Ltd.','Match basis|Same domain and contact','Decision|Merge after review'],'Duplicate candidate 96% match. Merge preserves source history and separate branches; reversible review decision recorded.'],
['Verify contact endpoints',['Email|nadia@meghna-apparel.example','Phone|Not provided','WhatsApp evidence|Demo opt-in record','Verification method|Syntax + source review'],'Syntax and source checks passed in simulation. Mailbox delivery not proven; WhatsApp has independent evidence.'],
['Resolve conflicting title',['Contact|Rafi Ahmed','Source A|Brand Executive','Source B|Marketing Manager','Decision|Keep current verified source'],'Conflict retained in provenance. Brand Executive selected; alternate value remains visible in history.'],
['Import exception queue',['Batch|IMP-DEMO-001','Error|Missing email domain','Affected row|3','Action|Quarantine until corrected'],'Rejected row isolated from audiences. Corrected record can be revalidated without duplicating accepted rows.']
],
[
['Company relationship map',['Group|Meghna Creative Group','Company|Meghna Apparel Studio','Branch|Gazipur factory','Relationship|Factory belongs to company'],'Group → company → factory relationship saved in demo. Branch is not merged with legal company identity.'],
['Procurement contact map',['Contact|Nadia Rahman','Company|Meghna Apparel Studio','Department|Procurement','Role|Purchase Manager'],'Decision map updated: Nadia → procurement contact. Role status and evidence remain separate from consent.'],
['Contact channel consent',['Contact|Nadia Rahman','Channel|WhatsApp','Permission|Opted in','Evidence|Demo catalogue form consent'],'Channel-purpose consent linked to endpoint. A phone number alone is not permission to send marketing.'],
['Company activity view',['Company|Northstar Knitwear','Activity type|All conversations','Owner view|Marketing team','Search|Woven label'],'Timeline connected: catalogue request → email response → qualification review. ERP reference not assigned yet.']
],
[
['Garment buyer segment',['Industry|Garments','Location|Gazipur','Contact status|Verified','Rule|AND · exclude opted out'],'Dynamic segment preview: Meghna Apparel Studio. Snapshot preserves exact audience at campaign launch.'],
['AI product-fit tags',['Company|Canvas Retail House','Description|Retail fashion stores','Proposed tag|Branded shopping bags','Confidence threshold|80%'],'AI suggestion: shopping bags / product labels. Suggested need is not confirmed purchase intent.'],
['Channel eligibility audience',['Segment|Garments buyers','Channel|WhatsApp','Consent rule|Opt-in required','Frequency cap|2 touches per week'],'Eligible: 2 demo contacts. Excluded: unknown permission and opted-out endpoints. No automatic channel fallback.'],
['Account-based message',['Company|Meghna Apparel Studio','Role|Purchase Manager','Product|Recycled hangtag','Missing-field fallback|Hello team'],'Personalized draft uses company + product only. Unknown personal facts omitted; company-wide frequency cap applied.']
],
[
['Buyer questions research',['Topic|Recycled hangtag sourcing','Input|Approved catalogue and questions','Question|How does sample approval work?','Source rule|Use approved facts only'],'Insight brief: buyers ask about board weight, print quality and sampling. No unsupported sustainability claims.'],
['Campaign angle generator',['Product|Recycled hangtag','Audience|Garment merchandisers','Angle|Product detail and sample quality','Goal|Sample inquiry'],'Three angles: Material matters / Your brand in every detail / Compare a sample before ordering.'],
['Four-week content plan',['Theme|Packaging essentials','Frequency|2 posts weekly','Formats|Carousel, email, short video','Owner|Content team'],'Calendar draft: material education → product detail → sample process → catalogue CTA. Review publishing slots.'],
['Reusable prompt template',['Template|B2B sample invitation','Facts|Approved product catalogue','Tone|Helpful and concise','Output|Headline + body + CTA'],'Prompt v1 saved: input facts → buyer role → channel limits → draft. Model and prompt version attached.']
],
[
['Hangtag sample invitation',['Product|Recycled hangtag','Audience|Purchase managers','Language|বাংলা','CTA|স্যাম্পল ক্যাটালগ চাই'],'আপনার ব্র্যান্ডের পরিচয়, প্রতিটি ট্যাগে।\n\nনতুন collection-এর জন্য দেখুন GM Print Solution-এর recycled hangtag options। বোর্ড, print finish ও design নিয়ে আলোচনা করতে আমাদের sample catalogue দেখুন।\n\nস্যাম্পল ক্যাটালগ পেতে উত্তর দিন।'],
['SEO article draft',['Keyword|Garment hangtag printing','Search intent|Supplier comparison','Outline|Material, finish, sample process','CTA|Request catalogue'],'Draft outline: choosing board weight; checking print finishes; approving a physical sample. Metadata and FAQ prepared; ranking is not guaranteed.'],
['Bilingual localization',['Source text|Your brand, in every detail.','Target language|বাংলা','Glossary|Hangtag = হ্যাংট্যাগ','Tone|Professional'],'আপনার ব্র্যান্ডের পরিচয়, প্রতিটি খুঁটিনাটিতে।\nCTA: স্যাম্পল ক্যাটালগ দেখুন।\nNumbers and product claims preserved.'],
['Repurpose approved copy',['Source|Sample invitation v1','Output format|Carousel + email','Variants|2','Preserve|Approved product facts'],'Variant A: material-led introduction. Variant B: sample-led introduction. Both share the same approved facts and distinct creative IDs.']
],
[
['Product image concept',['Asset|Demo catalogue product','Background|Neutral studio','Brand palette|Teal and navy','Constraint|Preserve real product details'],'Image brief prepared. Demo uses typographic creative; production image generation requires an approved provider and source assets.'],
['Packaging mockup brief',['Product|Hangtag','Artwork|GM Print sample identity','Material|Recycled board','Label|Illustrative mockup'],'Mockup specification: front/back artwork and board texture. Clearly labelled illustrative; not a physical production sample.'],
['Bulk creative variants',['Template|Product spotlight','Dataset|3 demo product lines','Sizes|Square, story, landscape','Language|বাংলা + English'],'3 product variants prepared in the asset queue. Text overflow and format previews await design review.'],
['Design quality review',['Creative|Recycled hangtag collection','Checks|Contrast, spelling, brand','Alt text|Hangtag collection campaign text','Reviewer|Design team'],'Review completed: readable text, approved palette and descriptive alt text. Product representation requires source-asset review.']
],
[
['15-second product story',['Product|Woven label','Duration|15 seconds','Scenes|Material → detail → CTA','Voice|Professional Bengali'],'00–04s: show material. 04–10s: highlight approved print details. 10–15s: sample catalogue CTA. Storyboard is a demo plan.'],
['Short-form edit plan',['Footage|Approved product demo','Format|9:16 vertical','Duration|15 seconds','Edit style|Clean cuts'],'Edit timeline prepared: intro 3s, detail 8s, CTA 4s. No real render occurs in this prototype.'],
['Bengali voice and subtitles',['Script|আপনার ব্র্যান্ডের পরিচয়, প্রতিটি ট্যাগে।','Language|বাংলা','Voice|Licensed generic voice','Subtitle style|High contrast'],'Subtitle draft prepared with timing. Voice rights and pronunciation review required before real audio generation.'],
['Interactive sample selector',['Experience|Find your packaging match','Question|What product do you sell?','Lead magnet|Sample catalogue','Capture|Name + business email + permission'],'Interactive journey: product category → material preference → catalogue request. Form asks separate marketing consent.']
],
[
['Asset library indexing',['Asset name|Recycled hangtag collection','Type|Campaign creative','Language|বাংলা','Rights|Owned demo content'],'Asset indexed with product, language, version and rights. Approved files only can enter the publish package.'],
['Creative approval',['Creative|Recycled hangtag collection','Version|v1','Decision|Approve','Reviewer|Marketing lead'],'Creative approval recorded for v1. Editing the content resets approval and creates a new draft.'],
['Claims and rights review',['Claim|Recycled board option','Evidence|Approved demo catalogue','Rights|Original text','Risk|No certification claim'],'No unsupported certification or customer endorsement included. Rights evidence attached to review record.'],
['Publishing package',['Creative|Recycled hangtag collection','CTA|Request sample catalogue','Destination|Demo enquiry form','Tracking|campaign=hangtag_sample'],'Publish package assembled: approved creative + copy + CTA + tracking. Ready for campaign scheduling.']
],
[
['Channel capability registry',['Account|GM Print demo business','Channel|Email','Permissions|Send, receive, measure · simulated','State|Demo connected'],'Capability registry distinguishes publish, advertise, receive, reply and measure. No live account is connected.'],
['Organic publishing calendar',['Channel|Facebook page','Content|Material education carousel','Schedule|Next available slot','Owner|Marketing team'],'Scheduled draft saved in demo calendar. Real posting is disabled; approved asset and account permission required in production.'],
['Paid campaign draft',['Campaign|Packaging sample awareness','Audience|Retail buyers','Budget cap|৳5,000','Creative|Approved packaging concept'],'Paid campaign draft assembled. Spend approval and real ad connection are required before actual advertising.'],
['Direct nurture sequence',['Channel|Email','Audience|Verified garment buyers','Sequence|Catalogue → sample reminder','Stop rule|Reply, opt-out or bounce'],'Sequence preview: send approved catalogue, then one reminder if eligible. No real messages are sent.']
],
[
['Sample request form',['Offer|Sample catalogue','Fields|Company, name, business email','Consent|Separate optional opt-in','Tracking|campaign=hangtag_sample'],'Lead form preview ready with validation and consent. Demo submission creates an inquiry in this browser only.'],
['Conversation intake',['Channel|WhatsApp','Company|Meghna Apparel Studio','Message ID|MSG-001','Identity match|Verified endpoint'],'Conversation linked to company with channel context. Reply window and human handoff remain visible.'],
['Event and referral input',['Source|Textile fair QR form','Company|Riverline Textile','Reference|EVT-DEMO-003','Permission|Catalogue request only'],'Event inquiry captured with source and purpose. Catalogue request does not imply unrelated marketing permission.'],
['Response intent triage',['Message|১০,০০০ পিস হ্যাংট্যাগের স্যাম্পল চাই','Language|বাংলা','Intent|Sample request','Routing|Lead reviewer'],'Intent classified as product inquiry with sample interest. Suggested response asks artwork and delivery details; no price promise.']
],
[
['Structured requirement extraction',['Message|10,000 recycled hangtags in two weeks','Product|Recycled hangtag','Quantity|10,000 pcs','Missing information|Artwork and budget'],'Extracted: product, quantity and timeline. Budget remains unknown. Evidence linked to the original message.'],
['Lead fit and intent score',['Company|Meghna Apparel Studio','Fit score|94','Intent|Sample requested','Confidence|High'],'Qualified recommendation: relevant garment buyer + explicit sample request. Human override reason is recorded.'],
['Qualification follow-up',['Missing field|Artwork specification','Question|Can you share size and artwork?','Channel|WhatsApp','Eligibility|Demo opt-in and reply window'],'Follow-up draft asks for artwork and size. No duplicate question; negative intent and opt-out stop the sequence.'],
['Lead handoff readiness',['Lead|LD-DEMO-001','Company|Meghna Apparel Studio','Requirement|10,000 recycled hangtags','Duplicate check|No matching inquiry'],'Handoff-ready: company, contact, requirement, evidence and consent included. Sales ownership will be assigned in ERP.']
],
[
['ERP schema mapping',['ERP environment|Demo sandbox','Company key|company_external_id','Lead key|lead_id','Required fields|Company, contact, requirement'],'Schema v1 mapped. Sales/KPI fields are ERP-owned; contract validation precedes lead transfer.'],
['Reliable lead transfer',['Lead ID|LD-DEMO-001','Transfer key|gm-demo-LD-001-v1','Mode|Simulation','Retry policy|Idempotent retry'],'ERP acknowledgement simulated: ERP-DEMO-1042. Retrying this key returns the same reference, not a new lead.'],
['Status reconciliation',['ERP reference|ERP-DEMO-1042','Inbound state|Accepted','Conflict rule|ERP owns sales fields','Marketing action|Stop acquisition nurture'],'Reconciled: lead accepted by ERP. No sales task, order, revenue or KPI is created in the marketing prototype.'],
['Marketing operations report',['Campaign|Hangtag sample campaign','Measures|Delivery, response, qualified leads','Attribution|First source + last interaction','Export target|ERP marketing events'],'Operational events prepared for ERP export. Sales conversion and KPI calculations remain in the existing ERP.']
],
[
['Workspace permissions',['Role|Content editor','Allowed|Draft and edit','Restricted|Publish, spend, export','Review owner|Workspace admin'],'Role preview: editor can draft; publishing requires approver. Real authentication is outside this demo.'],
['Suppression and retention',['Contact|Greenfield Foods','Status|Opted out','Scope|All direct marketing','Retention|Policy-defined period'],'Contact suppressed across scheduled direct campaigns. Consent evidence and deletion workflow remain auditable.'],
['AI provider controls',['Provider|Demo simulation','Monthly cap|৳3,000','Confidence threshold|80%','Sensitive data|Mask before model input'],'Provider guardrails saved locally: budget cap, confidence review and masking. No API key or paid model call used.'],
['Automation health',['Workflow|ERP handoff queue','Failure mode|Timeout','Recovery|Retry with same transfer key','Emergency pause|Available'],'Recovery simulation ready. Retry preserves identity; emergency pause stops queued campaign/transfer actions.']
]
];
export const phaseNames=['Prepare','Review & process','Result & handoff'];
