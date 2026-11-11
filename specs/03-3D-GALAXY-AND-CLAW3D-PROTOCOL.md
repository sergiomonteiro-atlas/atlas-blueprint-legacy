# 03 — Galaxy graph and Command telemetry protocol

## HTTP

The runtime binds `http://127.0.0.1:18790`. `GET /api/graph` returns the [GraphPayload schema](../contracts/graph.schema.json). `GET /api/leads` returns only graph nodes whose kind is `lead`. Native desktop browsing invokes the Rust vault commands against the same selected root. Runtime mutation routes document their local token requirements in `atlas-agent`.

## GraphPayload v1

```json
{"version":1,"generatedAt":"2026-11-11T12:00:00Z","nodes":[{"id":"agents/atlashub/atlas-sales-os-commander","path":"agents/atlashub/atlas-sales-os-commander.md","label":"Atlas Sales OS Commander","kind":"agent","division":"atlashub","tags":[],"frontmatter":{}}],"links":[],"unresolved":[]}
```

The graph includes no ghost node for an unresolved link. `links[].type` is always `wikilink`. Both engines use deterministic path IDs. Frontmatter remains structured JSON. Clients must bound graph size and report errors instead of inventing data.

## WebSocket

Endpoint: `ws://127.0.0.1:18790/ws`. Each text frame is one [TelemetryEvent](../contracts/event.schema.json). No provider keys, raw tool credentials or bearer tokens may appear in event data.

| Event | Meaning | Visual response |
| --- | --- | --- |
| `agent:start` | A real run started | Activate specialist node and workstation |
| `agent:tool_call` | An allowed tool was invoked | Pulse relevant synapses; show tool label |
| `agent:critic_review` | Auditor decision or review phase | Amber review state and reviewer station |
| `agent:done` | Critic accepted the result | Completed state; settle animation |
| `agent:error` | Run failed, was rejected or exhausted revisions | Error state; never show completed |
| `graph:updated` | Vault index changed | Refresh HTTP graph |

Required envelope fields are `version`, `id`, `runId`, `agentSlug`, `type`, `timestamp`, `data`. The IDs are UUID strings. `timestamp` is ISO-8601. `agentSlug` is the specialist's slug, not a graph path. A client resolves the slug to an actual `kind:agent` node; ambiguity is explicit.

Events are transient. Reconnection uses capped backoff, obtains a fresh graph, and shows connectivity truthfully. Deduplicate by event ID and cap in-memory history. WS does not guarantee replay or resume of interrupted tasks. A future durable event journal needs a separately versioned contract.

## Native IPC

| Command | Arguments | Result |
| --- | --- | --- |
| `vault_graph` | none | GraphPayload |
| `vault_leads` | none | lead node array |
| `vault_read` | `{path}` | UTF-8 Markdown |
| `vault_search` | `{query}` | indexed result records, backend documented |
| `vault_update_lead_status` | `{path,status}` | updated lead, backend documented |

Root selection stays internal to Rust. The frontend cannot pass arbitrary filesystem roots. Native status mutation validates CRM location and the five defined statuses.
