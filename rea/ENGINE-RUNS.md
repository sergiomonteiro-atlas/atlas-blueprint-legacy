# Official REA engine runs

## Toolchain

- Official source: `morluto/rea`, revision in [source ledger](EVIDENCE-LEDGER.md).
- Executed npm engine: `rea-agents@6.8.0`, CLI version output `6.8.0`.
- Executed Node: official `node-win-x64@24.22.1`; version output `v24.22.1`.
- Acquisition was isolated under `_rea_sources/_tools/`. Initial combined REA/Ruflo acquisition failed with `ENOSPC`; the narrower REA installation succeeded (149 packages). No MCP registration is claimed.

## RUN-01 — upstream Desktop API boundary

Executed equivalent CLI (absolute paths used on the host):

```sh
node rea-agents/scripts/rea.mjs analyze-javascript-application \
  _rea_sources/agency-agents-app \
  --source-path package.json --source-path src/lib/api.ts --json
```

Result: terminal progress reported `Application graph and Electron boundaries reconstructed`. Canonical Evidence ID:

`ev_ea8bd251826191582de3150100f8162c8c75cce955a979a2d89d1ad20070ea38`

Artifact digest: `73dc2564e20cbf4904558364d26f453b3d29465d2f331ce62cd15f21d54814d6`.

The selected boundary comprised the manifest and typed frontend API module: 8,453 text bytes, 1 parsed JavaScript/TypeScript file, 434 visited AST nodes, 28 findings, 0 parse failures. The artifact inventory had 66 relevant files and **64 remained outside the selected analysis scope**. The application and semantic graph coverage are explicitly **partial**, with 64 application unknowns and 581 semantic unknowns. A successful command does not imply all source paths or Tauri native behavior were examined.

The analyzer recorded no Electron IPC pairs in this selected Tauri boundary. This is not evidence that the application lacks native IPC; Rust command behavior is established separately from source and tests.

The complete canonical report is preserved compressed at `rea/evidence/upstream-desktop-evidence.json.gz` (local workspace; archive upload pending). It was projected once with the official `inspect-analysis-view` command using `{source:{kind:"evidence-file",path:...},view:{kind:"summary"}}`. The [summary Evidence](evidence/upstream-desktop-summary.json) has ID:

`ev_8cd9d3ca403604e746abe88980179a6832b806ef608ffbb36012585a2d45212e`

The view reports complete delivery within the selected summary; it preserves the parent's partial semantic/source coverage and limitations.

## Reconstruction verification

Source findings, implementation decisions and executed behavioral tests remain separate evidence types. The compiled Atlas Desktop artifact and runtime are analyzed in additional runs when their builds are available; those results must not be inferred from RUN-01. The final briefing links the actual checks and their status.


## RUN-02 — compiled Atlas runtime
Official REA 6.8.0 analyzed core/harness.js, gbrain/indexer.js and telemetry/server.js. Evidence: ev_214c23999873b429eac8b1ba4ef30cab0ebeb62db04ff60af9fc1377757b8994. Artifact SHA256: 9d1c7d5f5dc8f1a809d3adf63c4498943e071c38be9d86455948bc08bf70844c. Three parsed files,29603bytes,4468ASTnodes,41findings,zero parse failures. Partial selection:36files unselected,1378semantic unknowns. This release candidate precedes final concurrency/health fixes,which are verified by the final11tests. Official summary: evidence/atlas-runtime-summary.json.

## RUN-03 — compiled Atlas Desktop console and landing
Official REA6.8.0 analyzed compiled production nodes2.Ce9OyI55.js and3.-_0DNCkr.js. Evidence:ev_202f7cee50f75a1f79f17c993b8492e4e1399e4d2f7c6da721c59f1d5a354767. Artifact SHA256:654c60111f99d163211200d09892b752a67a09b5f6289d06e2bd133cb9ee94c5. Two parsed files,799142bytes,197684ASTnodes,299findings,zero parse failures. Coverage partial:18files unselected and semantic alias selections bounded at512. This artifact precedes final health UI/Orbit patches. Findings are observations,not vulnerability counts or runtime certification. Official summary:evidence/atlas-desktop-summary.json.

Full canonical reports are preserved locally as compressed JSON under rea/evidence. Source inspection,static engine analysis,software tests and visual inspection are distinct evidence types. The work combines source adaptation and original Atlas code; it is not exhaustive reconstruction of every upstream component through REA.
