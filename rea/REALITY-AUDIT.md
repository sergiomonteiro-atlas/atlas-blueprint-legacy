# Independent Reality Audit — Atlas-Agent OS

Date: 2026-11-11. Scope: source and small local checks during initial construction. This is a staged audit, not production certification.

## Method and evidence

Reviewed the Agency Agents Reality Checker and Software Architect guidance and the official `morluto/rea` investigation skill. Findings below distinguish source observations from executed verification. The official REA engine execution, whole-project builds and publishing are owned by the integration lead and recorded separately in the evidence ledger and morning briefing.

## Findings and final source reinspection

| ID | Source observation | Consequence | Reinspection disposition |
| --- | --- | --- | --- |
| RA-01 | Reviewer initially lacked builder tool results | Reviewer could not cross-check retrieved evidence | Resolved in source: bounded last-16 tool transcript includes call IDs, tool names, arguments and result excerpts; regression test present and independently passed |
| RA-02 | Memory initially written directly to final path | Partial memory could be visible after interrupted write | Resolved in source: exclusive temporary sibling followed by atomic exclusive hard-link publication and temporary cleanup; does not claim disk-flush durability on power loss |
| RA-03 | Native CRM initially allowed `negotiation` | Accepted status outside the schema | Resolved in source: exactly `new`, `qualified`, `proposal`, `won`, `lost` |
| RA-04 | Native aliases initially case-sensitive | Same link could resolve differently | Resolved in source: lowercase normalization and case-insensitive `.md` suffix; dedicated Rust regression test inspected |
| RA-05 | Native counted embeds and split scalar tags | Different graph edges/tags | Original mismatch resolved in source: embed exclusion and scalar-tag retention; broader parser parity remains bounded, see below |
| RA-06 | Runtime unclosed YAML fence accepted as plain text | Malformed structured data silently accepted | Parser now throws; regression independently passed. Index warning visibility remains a separate release finding |
| RA-07 | Runtime did not reject every colon | Windows alternate data-stream path ambiguity | Resolved in source: all colon-bearing relative paths rejected; regression independently passed |
| RA-08 | `/api/run` initially tested capacity only before awaiting the body | Concurrent slow bodies could exceed the intended run limit | Resolved by source reinspection: capacity is checked again after parsing, immediately before synchronous reservation; separate concurrency regression not executed by this auditor |
| RA-09 | Indexer skips malformed/over-limit files into `warnings`, but initial CLI/API do not expose warnings | Partial graph can appear complete while `/health` says ready | Integration lead notified to expose diagnostics without changing strict GraphPayload |

Source was reinspected after owner changes. RA-09 is not treated as resolved merely because other CI checks passed. The integration lead may append verified resolution evidence after fixing it.

## Positive source observations

- The runtime provider performs actual OpenAI-compatible HTTP calls and fails explicitly when required remote credentials/model are absent. No simulated success path was found in the inspected provider.
- The harness refuses self-review by the auditor slug, bounds attempts/tool rounds and emits `agent:done` only after a boolean approved verdict. Invalid verdict JSON fails rather than approves.
- Native reads constrain paths to an explicit configured vault, reject hidden/traversal/symlink paths, bound note size and total indexed bytes, and preserve unknown CRM frontmatter fields during status updates.
- Workforce starter CRM cards explicitly identify their fictional nature; they are not represented as actual sales. Each has currency, numeric value and an owner specialist.
- Workforce MIT text retains the original AgentLand contributor copyright beneath the new Atlas copyright.
- Desktop MIT retains Michael Sitarzewski's original copyright. The inherited updater endpoint, signing key and macOS signing identity have been removed; Atlas update trust remains disabled until explicitly configured.
- The local service binds loopback, validates Host and Origin, requires bearer authentication for private graph/search/mutations, and authenticates WebSocket upgrades through the Atlas token subprotocol. WebSocket backpressure is bounded.
- The frontend obtains real vault data, shows missing-vault/disconnected/empty states, keeps the daemon token only in memory and does not synthesize activity events. Native-only Markdown reads and CRM mutations fail explicitly in browser mode. CRM cards render their individual currency without adding unlike currencies.

## Executed verification

The auditor independently executed `npm test` inside `atlas-agent` through the local command runner after the source fixes. Eight tests passed: graph/alias parsing, malformed YAML, path/ADS/symlink rejection, embedding dimension validation, critic gate and rejection, invalid critic verdict, reviewer evidence, and absent provider behavior. The ninth HTTP/WebSocket test was blocked by host loopback permissions (`connect EACCES 127.0.0.1:<ephemeral-port>`), before an HTTP assertion. This is a local execution constraint, not a passing service test. The integration lead separately reports a full nine-test CI pass; the final briefing must link its exact run/commit.

The integration lead reports official REA analysis of three compiled runtime modules: Evidence `ev_214c23999873b429eac8b1ba4ef30cab0ebeb62db04ff60af9fc1377757b8994`, three selected files, 4,468 AST nodes, 41 findings, zero parse failures and 36 unselected files. That is static, partial-scope evidence, not an end-to-end runtime or native-desktop execution claim. The auditor did not rerun the engine.

## Remaining practical limits

- Native and runtime graph shape and the inspected alias/embed/scalar-tag fixture agree by source policy, but no complete cross-engine output comparison was run by this auditor. Inline hashtag tokenization, malformed-file handling and limit behavior can differ. Native indexing fails a bound; runtime retains a partial graph with warnings. Lexical ranking is intentionally different and native Rust does not claim semantic embeddings.
- A real model provider and real semantic retrieval require operator configuration and external calls. The critic gate enforces a separate review phase; using another prompt on the same model does not establish independent factual verification.
- Telegram/WhatsApp classes are opt-in delivery adapters, not provisioned public webhook services. Ingress authentication, replay/idempotency persistence and live delivery validation remain deployment work. No automatic channel activation is claimed.
- The Three.js surface limits visible nodes to 1,500; full vault node counts can exceed the rendered subset. Native launch, raycast interactions, WebGL performance, screenshots and accessibility journeys were not exercised by this auditor.

## Verification boundary

No real provider, Telegram or WhatsApp delivery has been exercised by this auditor. No native desktop binary, browser interaction, visual quality or domain deployment is certified by source inspection. A TypeScript/Svelte build or Rust check alone cannot establish those outcomes. Final build logs and schema parity checks must be reconciled before closing this report.

Status: **source audit complete with RA-09 returned for correction; production readiness not certified**. Release claims must distinguish populated/published repositories and passing engineering checks from configured providers, signed installers, deployed domain and witnessed end-to-end operation.


## Integration lead verification after final patches
RA-08 regression and RA-09 diagnostics are now covered by the final runtime suite:11/11 passed,zero skips,including live authenticated HTTP/WS tests,streamed-body concurrency,and malformed YAML/file-limit diagnostics. Runtime commit27f868cd404ffd42349fb036ebe45522874824df has green remote CI. Desktop now renders authenticated health coverage warnings and preserves usable partial graphs; frontend tests expanded to8and passed. Desktop final candidate73fabc44038ce6fd1bddf46d0b0c28976aa5d028 passes clean npm install/check/test/build in hosted CI; native tests are pending rerun after catalog/Windows assertion fixes. Browser inspection was attempted but CUA stopped because it could not safely determine the active Chrome URL; no visual/native end-to-end certification is claimed. Independent source audit remains distinct from these lead-run checks.

Final CI candidate:Desktop73fabc44038ce6fd1bddf46d0b0c28976aa5d028 passed npm ci/check/test/build and cargo check. Cargo tests were still running at this publication. The local environment disconnected again while preparing full compressed archive uploads; canonical summary JSONs are published here; complete compressed records remain on the Windows workspace.
