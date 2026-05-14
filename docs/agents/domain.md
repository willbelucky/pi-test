# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`docs/CONTEXT.md`** at the repo root for domain language, or
- **`docs/CONTEXT-MAP.md`** at the repo root if it exists — it points at one `CONTEXT.md` per context. Read each one relevant to the topic.
- **`docs/2-areas/adr/`** — read ADRs that touch the area you're about to work in. In multi-context repos, also check `src/<context>/docs/2-areas/adr/` for context-scoped decisions.

If any of these files don't exist, **proceed silently**. Don't flag their absence; don't suggest creating them upfront. The producer skill (`/grill-with-docs`) creates them lazily when terms or decisions actually get resolved.

## File structure

Single-context repo (most repos):

```
/
├── AGENTS.md
├── docs/
│   ├── CONTEXT.md          ← Domain glossary and relationships
│   └── 2-areas/
│       ├── adr/             ← Architectural Decision Records
│       └── para-method/     ← PARA Method guide
└── src/
```

Multi-context repo (presence of `docs/CONTEXT-MAP.md` at the root):

```
/
├── AGENTS.md
├── docs/
│   ├── CONTEXT-MAP.md     ← Points to per-context CONTEXT.md files
│   └── 2-areas/           ← system-wide ADRs and area docs
│       └── adr/
└── src/
    ├── ordering/
    │   ├── docs/CONTEXT.md
    │   └── 2-areas/adr/   ← context-specific ADRs
    └── billing/
        ├── docs/CONTEXT.md
        └── 2-areas/adr/
```

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in `CONTEXT.md`. Don't drift to synonyms the glossary explicitly avoids.

If the concept you need isn't in the glossary yet, that's a signal — either you're inventing language the project doesn't use (reconsider) or there's a real gap (note it for `/grill-with-docs`).

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly rather than silently overriding:

> _Contradicts ADR-0007 (event-sourced orders) — but worth reopening because…_
