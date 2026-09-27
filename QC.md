# Prototype QC

## Automated checks

`node qc.mjs` passed 1,051 checks across 210 rendered routes: overview, module explorer, 16 module overviews and 192 workflow-phase views. These are deterministic render/state tests, not 210 separate browser sessions.

Verified:

- 16 modules / 64 submodules / 192 phases retain source IDs and full Bengali phase descriptions.
- Every submodule has its own demo work item, four editable fields and example result.
- All module and phase rendering functions return a working surface without undefined values or temporary loading placeholders.
- CSV parsing handles quoted commas and valid, duplicate and rejected rows; invalid headers fail explicitly.
- Repeated import does not duplicate the demo company; consent stays unknown.
- Campaign launch requires creative approval; emergency pause prevents launch and stops running demo campaigns.
- Unqualified leads cannot transfer; retrying an ERP transfer preserves the reference and avoids duplication.
- User-entered text is HTML-escaped.
- Required assets exist; source and generated bundle pass JavaScript syntax checks.

## Browser interaction checks

- Desktop overview inspected visually.
- Sample CSV preview displayed 1 ready / 1 duplicate / 1 rejected row; import added the ready record to searchable company directory.
- Copy studio produced a labelled simulated draft and sent it to the approval queue.
- Creative approval changed its state; campaign gating was also checked in deterministic tests.
- Inbox sample request created a qualified lead; sending it to ERP displayed an accepted acknowledgement.
- Simulated ERP timeout followed by retry recovered the same ERP reference.
- Workflow input save opened review; processing without the checkbox displayed an error; confirmation produced and saved the result.
- Mobile viewport requested at 390 × 844; actual content viewport 375 px wide with no document-level horizontal overflow. Workflow and inbox inspected visually. Inbox list uses deliberate contained horizontal scrolling.
- Page-defined tools were tested: reading counts, valid workflow navigation and invalid module rejection.

## Explicit boundaries

This is a UI/UX demonstration. Real authentication, production uploads, OCR, AI image/video/audio rendering, marketing delivery, billing and ERP integration are not enabled. Text generation uses local templates; workflow outputs are example fixtures. Only demo state persists in the current browser session.

Direct file opening was fixed structurally by bundling JavaScript and embedding requirements. The in-app test browser does not permit `file://` URLs, so direct-file browser QA was unavailable; the same generated bundle was verified over local HTTP. No browser security settings were weakened.

This QC is not a production security audit, comprehensive accessibility certification, or proof of real channel/API compatibility.
