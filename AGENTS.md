# Agent skills

This repo uses Matt Pocock's agent skills for engineering and productivity workflows.

## Agent skills

### Issue tracker

Issues are tracked on GitHub at https://github.com/willbelucky/pi-test/issues. Uses the `gh` CLI.

See `docs/agents/issue-tracker.md`.

### Triage labels

The five canonical triage roles map to the following GitHub labels:

- `needs-triage` — maintainer needs to evaluate
- `needs-info` — waiting on reporter
- `ready-for-agent` — fully specified, AFK-ready
- `ready-for-human` — needs human implementation
- `wontfix` — will not be actioned

See `docs/agents/triage-labels.md`.

### Domain docs

PARA Method-based single-context repository with `docs/CONTEXT.md` and `docs/2-areas/adr/` at the repo root.

**Structure:**
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

**Reading order:**
1. **`docs/CONTEXT.md`** at the repo root for domain language
2. **`docs/2-areas/adr/`** — read ADRs that touch the area you're about to work in

See `docs/agents/domain.md`.
