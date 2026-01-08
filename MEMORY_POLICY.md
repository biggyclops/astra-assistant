# Memory Policy

## Writing memory
1. Write memory only when the user issues an explicit persistence signal (e.g., “remember that…,” “save this decision,” or an agreed keyword).
2. Allow a rule-based trigger when the user confirms a planning decision or constraint that satisfies the canon’s hard boundaries, but do not persist until the user explicitly approves the summary.
3. Reject memory writes during Explore, Understand, or any reasoning marked as “uncertain” by the reasoning rules; revisit the request once clarity is provided.
4. Store only the items that can be referenced later in concrete decisions: final decisions with rationale, long-lived constraints, or user-approved summaries.

## Prohibited writes
1. Never store full dialogues, drifted transcripts, or unsupported assumptions.
2. Do not persist temporary debugging details or speculative hypotheses that have not been resolved.
3. Treat any sensitive data as non-persistable unless the user explicitly authorizes that item.

## Correction and deletion
1. When a stored item is incorrect, update it only after the user cites the specific memory entry and provides corrected information.
2. Memory entries may be deleted only by explicit user request; no other party may erase memory without user authorization.
3. Log the change reason and timestamp whenever memory is edited or removed so the behavior can be audited.
