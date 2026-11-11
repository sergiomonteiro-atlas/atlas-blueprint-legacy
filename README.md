# Atlas-Agent OS

**AI-Native Workforce · Harness · Brain · 3D Control Surface**  
Sérgio Monteiro / AtlasHub · [atlas-si.com](https://atlas-si.com) · [agents.atlas-si.com](https://agents.atlas-si.com)

Atlas turns a catalog of specialist instructions into a local, inspectable operating environment. Markdown remains the source of truth. A runtime executes bounded tasks with an independent critic, while the Desktop shows the same knowledge graph and activity events.

| Repository | Responsibility |
| --- | --- |
| [atlas-blueprint](https://github.com/sergiomonteiro-atlas/atlas-blueprint) | Architecture, evidence, versioned contracts, verification and release briefing |
| [atlas-workforce](https://github.com/sergiomonteiro-atlas/atlas-workforce) | Specialist catalog, converters, AtlasHub division and Obsidian starter vault |
| [atlas-agent](https://github.com/sergiomonteiro-atlas/atlas-agent) | `atlas` CLI, Builder/Auditor harness, identity, Markdown brain, conversational gateway and telemetry |
| [atlas-desktop](https://github.com/sergiomonteiro-atlas/atlas-desktop) | Tauri 2 / Svelte 5 catalog and native vault, Galaxy 3D, Command 3D, Sales OS and web landing |

## Read the contracts first

1. [REA synthesis](specs/01-REA-SYNTHESIS.md)
2. [Vault and brain](specs/02-VAULT-AND-GBRAIN-SCHEMA.md)
3. [Graph and telemetry](specs/03-3D-GALAXY-AND-CLAW3D-PROTOCOL.md)
4. [Evidence ledger](rea/EVIDENCE-LEDGER.md)
5. [Morning briefing](MORNING_BRIEFING.md)

Machine-readable contracts live in `contracts/`. `npm ci && npm run check` validates the example graph, lead and event against JSON Schema Draft 2020-12. Repository-specific checks and their actual outcomes are recorded in the briefing.

## Operating model

Install the starter vault from `atlas-workforce` to an explicit directory, point `ATLAS_VAULT_PATH` there, configure a real model provider for `atlas-agent`, and start the local daemon. The Desktop can index the vault natively without a daemon; real-time agent activity requires the daemon. Missing providers and disconnected services produce explicit unavailable states. Samples are labeled as fictional in the starter vault.

The release is a local developer foundation. External messaging delivery, model quality, signed desktop installers and domain deployment have separate prerequisites; see the briefing for verified scope. This repository does not deploy into the existing Helena/Hermes environment.
