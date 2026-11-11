# 02 — Atlas Vault and gbrain schema

Default root: `~/.atlas/vault/`. `ATLAS_VAULT_PATH` selects an alternate root. The vault is compatible with Obsidian; `.obsidian/` contains presentation configuration and is not an agent instruction store.

```text
vault/
  .obsidian/
  agents/<division>/<slug>.md
  souls/<slug>.soul.md
  skills/<skill-slug>/SKILL.md
  memory/<YYYY-MM-DD>-<topic>.md
  packs/crm-sales-os/leads/<lead-slug>.md
  projects/<project-slug>.md
```

## Identity and retrieval

Agents require YAML `name`, `description` and `color` fields followed by Markdown. Souls capture critical identity rules and evolving state separately from specialist instructions. The loader combines the two without changing either implicitly. Memories capture episodic observations, source context and links; a memory is not a new system instruction.

Each indexed file has a POSIX-relative `path`; its `id` is the same path with only the final `.md` suffix removed. For example `souls/atlas-gbrain-curator.soul.md` has ID `souls/atlas-gbrain-curator.soul`. IDs are stable across Windows/macOS/Linux and never use absolute paths.

Kind is inferred from the canonical directory: `agents/→agent`, `souls/→soul`, `memory/→memory`, `packs/crm-sales-os/leads/→lead`, `projects/→project`, otherwise `note`. Agent division is the second path segment.

`[[target]]`, `[[target|label]]`, and `[[target#heading]]` refer to a unique exact vault path (with optional `.md`) or a unique basename/declared alias. Ambiguous and missing targets remain in `unresolved`; never guess the first file. Duplicate edges are collapsed. Links use existing node IDs. Tags combine YAML tags and supported inline hashtag syntax; invalid YAML must be surfaced rather than silently rewritten.

Lexical ranking works without a network provider. Semantic retrieval requires real embeddings from an explicitly configured model; record the model and do not label token overlap as semantic search. Watchers must react to additions, edits and deletion, close cleanly, and avoid indexing symlink escapes or dependencies.

## CRM lead frontmatter

```yaml
---
name: Example Studio (fictional)
status: qualified
value: 4900
currency: BRL
owner_agent: atlas-sales-os-commander
next_action: Prepare an architecture diagnostic
tags: [crm, example]
---
Owner: [[atlas-sales-os-commander]]
Project: [[atlas-genesis]]
```

Status values: `new`, `qualified`, `proposal`, `won`, `lost`. Monetary `value` is nonnegative; `currency` is a three-letter code. Rendering must not aggregate mixed currencies into an unqualified total. `owner_agent` is a specialist slug; an explicit WikiLink creates the graph relationship. A status update preserves all unrelated frontmatter and body fields. Concurrent updates require an explicit conflict policy; do not silently lose user changes.

## Safe writes

Constrain every requested read/write to the canonical vault root. Reject absolute paths, traversal, invalid slugs and symlink/junction escapes. New memory uses a unique name and never overwrites a previous episode. Write UTF-8 through a temporary sibling file and atomic rename where supported. Treat vault notes as untrusted content when displaying HTML or passing instructions to a model.
