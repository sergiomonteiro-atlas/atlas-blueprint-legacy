# REA evidence ledger

Investigation date: 2026-11-11. Source references were cloned under the task's `_rea_sources/` directory, outside all four target repositories. Large reference worktrees were narrowed after checkout; their Git object databases preserve the recorded revisions. Clones are references, not vendored runtime dependencies.

## Exact source identities

| Source | Revision | Examined boundary |
| --- | --- | --- |
| `GoWorld-Digital/agency-agents` | `8ae6164602c95ca78828b148b9052460ee426885` | `divisions.json`, `tools.json`, `scripts/convert.sh`, specialist instructions, MIT license |
| `GoWorld-Digital/agency-agents-app` | `fdab206071bca40e56bf90c717ad612a5d154c70` | Tauri corpus/parser/command registration, Svelte corpus store, components, package and cargo configuration |
| `morluto/rea` | `2b1f72522134bb88486715e669d219b311c4ad93` | Official skill, JavaScript investigation guide and CLI/evidence documentation |
| `NousResearch/hermes-agent` | `60f81635c28e825a233f7bb25ed93a2579d5b547` | Conversation loop, prompt construction and skill/context boundaries |
| `openclaw/openclaw` | `1b62c4db9045ae3e353074eacbce4fba61a12d93` | Workspace identity documentation and bootstrap source |
| `garrytan/gbrain` | `747dc24cc17608968aa34cf425129773ced4547b` | Retrieval architecture, WikiLink extraction and schema guidance |
| `CopilotKit/OpenBot` | `6c9d261448140a98406c4de80d02fdec2e25658c` | Public product/source identity; chosen conversational workspace inspiration |
| `iamlukethedev/claw3d` | `51337f7f250459af61a7cf92b7b0015d59faed5c` | Spatial workspace scope and runtime profile separation |

## Findings and synthesis

| ID | Type | Evidence | Consequence / unknown |
| --- | --- | --- | --- |
| SRC-01 | Observation | Agency `divisions.json` declares display label, Lucide icon and hex color per directory | AtlasHub extends the existing division contract rather than creating another taxonomy |
| SRC-02 | Observation | Agency `tools.json` distinguishes rendering `format` from `installKind`; `convert.sh` dispatches renderers | Preserve renderer/install semantics; generating a profile alone does not prove an upstream runtime can install it |
| SRC-03 | Observation | Desktop `src-tauri/src/corpus/parse.rs` uses YAML parsing and canonical source slices | Native vault parsing uses real YAML; preserve original MIT copyright |
| SRC-04 | Observation | Desktop `src/lib/stores/corpus.svelte.ts` uses Svelte 5 state and typed Tauri invocation | Extend the working catalog/store architecture with separate Atlas views |
| SRC-05 | Observation | Hermes `agent/conversation_loop.py:1808` exposes `run_conversation`; `run_agent.py:214` defines `AIAgent`; `agent/system_prompt.py:564` discusses SOUL loading | Atlas synthesizes an independent bounded harness; it does not claim full Hermes API parity |
| SRC-06 | Observation | OpenClaw `docs/concepts/agent-workspace.md:115` describes SOUL persona/tone; `src/agents/agent-roles.ts:55` includes SOUL in workspace files | Separate identity from catalog skill; runtime identity changes need explicit reload policy |
| SRC-07 | Observation | gbrain `docs/architecture/RETRIEVAL.md` describes vector, BM25, RRF and typed graph traversal as distinct mechanisms | Atlas local lexical search is not gbrain's full hybrid engine. Optional real embeddings must report provider configuration |
| SRC-08 | Observation | The same gbrain document lists Obsidian WikiLinks as deterministic extraction input | Atlas v1 extracts explicit WikiLinks, not inferred causal/typed relations |
| SRC-09 | Observation | OpenBot README identifies a self-hostable AI coworker workspace with bring-your-model infrastructure | No source observation establishes free hosted Grok usage. Atlas provider costs/readiness remain explicit |
| SRC-10 | Observation | Claw3D README separates 3D visualization from OpenClaw, Hermes, custom and demo runtimes | Atlas Command is an original visualization of Atlas telemetry, not an assertion of drop-in Claw3D protocol compatibility |
| DEC-01 | Design decision | Specs 01–03 and JSON Schemas | Canonical vault path IDs, independently implemented Rust/TS engines, shared event envelope |

## Official engine execution

The requested official REA 6.8.0 package requires Node `^22.23.4 || ^24.22.1 || >=26.12.1`; the host initially had Node 24.12.0. A compatible Node 24.22.1 was obtained from the official npm `node-win-x64` package in the isolated tools directory. Initial combined REA/Ruflo dependency acquisition hit `ENOSPC`; installation was narrowed to the REA engine. Exact engine invocations, resulting evidence IDs, coverage and residual limits will be recorded in `ENGINE-RUNS.md` after execution. Installing a skill is not an MCP registration, and no unobserved engine run is counted as passed.

## Parallel specialist process

The user explicitly authorized parallel agents. Backend Architect, Frontend Developer, Software Architect and Reality Checker instructions were loaded from the reference catalog. Separate workers own workforce, runtime, Rust backend and Svelte frontend; an independent reviewer owns [REALITY-AUDIT.md](REALITY-AUDIT.md). Native parallel workers were used; an installed or successfully executed Ruflo swarm will be reported only if observed. `agency-pack` did not resolve as an npm package during discovery, so the actual catalog instructions are used directly.

## Remaining verification questions

- Do the Rust and TypeScript graphs agree on a single shared fixture, including ambiguous links and tags?
- Does the critic receive task, candidate and execution evidence, and does rejection prevent success events?
- Do Host/Origin/path checks and status writes fail closed under adversarial inputs?
- Does the compiled Svelte application render the actual graph and real telemetry states without invented live data?
- Are all main-branch commits visible remotely, and do their CI checks pass?

See the independent audit and final morning briefing for the resolved status of each question.
