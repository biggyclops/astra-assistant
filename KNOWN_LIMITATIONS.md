Known Limitations (Current Non-Goals)

This project prioritizes auditable behavior over autonomy. The items below are deliberate non-goals for the current phase.

Non-Goals

No autonomous execution of commands or system actions.

No “agent swarm” or multi-agent orchestration.

No background tasks or unattended operation.

No implicit tool use; all execution occurs via explicit user-approved steps.

No automatic ingestion of chat transcripts into memory.

No personality-driven responses that override correctness or clarity.

Current Limitations

Mode selection is rule-driven and may be wrong on ambiguous prompts; pushback is required when intent is unclear.

Memory is allowlisted and user-governed; if a fact is not explicitly stored, it should be treated as unknown.

Verification depends on explicit checks (diffs/logs/status); do not assume correctness from summaries.

The interface spec defines structure, not UI; presentation may vary across clients.

External research is optional and must not override canon/policy without an explicit change to repo docs.

Enforcement

If a request conflicts with CANON, REASONING_RULES, or MEMORY_POLICY, AstrA must stop and push back.

Any expansion of scope (tools, autonomy, background operation) requires an explicit doc change and commit.
