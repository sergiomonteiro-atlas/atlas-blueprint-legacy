# Independent Reality Audit — Atlas-Agent OS

Date: 2026-11-11. Scope: source and small local checks during initial construction. This is a staged audit, not production certification.

## Method and evidence

Reviewed the Agency Agents Reality Checker and Software Architect guidance and the official `morluto/rea` investigation skill. Findings below distinguish source observations from executed verification. The official REA engine execution, whole-project builds and publishing are owned by the integration lead and recorded separately in the evidence ledger and morning briefing.

## Preliminary findings returned to owners

| ID | Source observation | Consequence | Initial disposition |
| --- | --- | --- | --- |
| RA-01 | `atlas-agent/src/core/harness.ts` sent only task/candidate to reviewer, omitting builder tool results | Reviewer cannot cross-check candidate against actual retrieved evidence | Runtime owner notified; must include bounded tool transcript |
| RA-02 | `atlas-agent/src/gbrain/indexer.ts` initially writes new memory directly to final filename | `wx` avoids overwrite but a crash can expose partial memory | Runtime owner notified; temporary sibling and atomic publish requested |
| RA-03 | `atlas-desktop/src-tauri/src/corpus/vault.rs` initially allowed `negotiation`, outside five schema statuses | Native CRM accepts values rejected by blueprint | Backend owner notified to align |
| RA-04 | Native alias lookup was case-sensitive; runtime lowercased aliases | Same WikiLink can resolve differently | Backend owner notified; shared fixture parity requested |
| RA-05 | Native parser counted `![[embed]]`, runtime excluded it; YAML string tags split differently | Graph edges/tags differ for the same vault | Both policy and fixture parity require alignment |
| RA-06 | Runtime frontmatter parser treated an unclosed opening YAML fence as plain body | Malformed identity or CRM data can be silently accepted as unstructured text | Runtime owner notified |
| RA-07 | Runtime path validation initially did not forbid every colon | Windows alternate data-stream path forms require explicit rejection | Runtime owner notified to align native path rule |

These are observations from an in-progress tree. A finding is not marked resolved until the changed source or a regression test has been inspected.

## Positive source observations

- The runtime provider performs actual OpenAI-compatible HTTP calls and fails explicitly when required remote credentials/model are absent. No simulated success path was found in the inspected provider.
- The harness refuses self-review by the auditor slug, bounds attempts/tool rounds and emits `agent:done` only after a boolean approved verdict. Invalid verdict JSON fails rather than approves.
- Native reads constrain paths to an explicit configured vault, reject hidden/traversal/symlink paths, bound note size and total indexed bytes, and preserve unknown CRM frontmatter fields during status updates.
- Workforce starter CRM cards explicitly identify their fictional nature; they are not represented as actual sales. Each has currency, numeric value and an owner specialist.
- Workforce MIT text retains the original AgentLand contributor copyright beneath the new Atlas copyright.

## Verification boundary

No real provider, Telegram or WhatsApp delivery has been exercised by this auditor. No native desktop binary, browser interaction, visual quality or domain deployment is certified by source inspection. A TypeScript/Svelte build or Rust check alone cannot establish those outcomes. Final build logs and schema parity checks must be reconciled before closing this report.

Status: **audit in progress / production readiness not certified**.
