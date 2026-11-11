# 01 — REA synthesis and architecture

## Method and evidence boundary

The explicitly requested official engine is [morluto/rea](https://github.com/morluto/rea). Its `reverse-engineer-anything` skill distinguishes ordinary source inspection from packaged-application and runtime investigation. This project applies its staged investigation and finding ledger to source analysis, and uses its official JavaScript application analyzer on the built Desktop artifact when available. Static observations are not claims about executed behavior. Raw evidence, source identities, commands, unknowns and engine results are indexed in `rea/EVIDENCE-LEDGER.md`.

The sequence is: identify target and exact commit; inventory the smallest relevant surface; follow each contract from entry to state change; record observation/inference/unknown; synthesize a narrow Atlas implementation; validate with behavioral tests; revisit unresolved questions. No binary decompiler is needed to read these open source repositories.

## Bounded contexts

| Context | Evidence-led inspiration | Atlas contract and adaptation |
| --- | --- | --- |
| Workforce | Agency Agents frontmatter, `divisions.json`, `tools.json`, converter dispatch | Markdown specialist catalog; retain upstream MIT attribution; add AtlasHub and modular packs |
| Harness | Hermes task execution and skill loading | Separate builder, tool and critic interfaces; bounded retries; no successful terminal state without critic acceptance |
| Identity | OpenClaw workspace identity files | Load specialist instructions and separate mutable `.soul.md`; identity is data, never executable code |
| Brain | Obsidian Markdown and WikiLinks; gbrain as requested concept | Canonical file IDs, unambiguous link resolution, YAML, lexical retrieval; embedding retrieval must identify its configured model/provider |
| Gateway | Requested fast conversational OpenBot/Grok style | `@slug` dispatch and real provider calls; adapters expose readiness; no assumed free Grok API entitlement |
| Telemetry | Spatial activity visualization requested as Claw3D | Versioned local HTTP/WS events drive both Galaxy synapses and Command workstations |

Names without a unique source identity remain design inspirations until confirmed in the evidence ledger. They do not justify claims of imported runtime compatibility.

## Dependency direction

`workforce Markdown → vault index → harness identity/retrieval → provider/tool ports → critic → memory/events → desktop`

The Desktop and runtime depend on the v1 contracts rather than each other's implementation. Rust and TypeScript independently parse the same fixture and must agree on node IDs, kinds, links and lead fields. The graph's ordering is deterministic; timestamps are informational.

## Builder → Reality Auditor

1. Resolve an existing specialist and its soul. Unknown specialists fail explicitly.
2. Gather relevant vault context and declare allowed tools.
3. Ask the builder for an artifact using the configured real model.
4. Send artifact, task and tool evidence to the auditor as a distinct review phase.
5. Rejection yields bounded revision feedback. Exhaustion emits `agent:error`; acceptance alone permits `agent:done`.
6. Tests use controlled providers to prove the gate. Such fixtures are test-only and do not masquerade as production model responses.

This is an orchestration guarantee, not a proof that an LLM critic is correct. Provider credentials, provenance and reviewer independence remain operational responsibilities.

## Local service boundary

Bind `127.0.0.1:18790` only. Validate Host and browser Origin to resist DNS rebinding and hostile sites; mutating calls require the configured local token. Bound request size, execution duration and WebSocket backlog. Do not expose vault contents to a public interface. CLI tools operate within the selected vault and do not implicitly acquire shell execution privileges. External adapters must authenticate webhook input before any task starts.

## Decision records

- **ADR-001:** Markdown is the canonical database. It is portable and inspectable, while requiring careful atomic updates and conflict handling.
- **ADR-002:** Node TypeScript implements the harness. Tauri/Rust indexes the same vault independently so native browsing works offline.
- **ADR-003:** A v1 event envelope supports independent surfaces. Reconnection refreshes graph state; transient WS events are not a durable job ledger.
- **ADR-004:** Preserve the desktop catalog foundation and add Atlas surfaces. Do not import upstream updater trust keys as Atlas release-signing authority.
- **ADR-005:** Labeled fictional CRM samples stay in the starter vault. Neither the dashboard nor harness invent live work or successful provider results.
