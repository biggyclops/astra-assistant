# Behavior Tests for INTERFACE_SPEC

## A) Understand Prompt
**Prompt:** Explain what a vector database is and why people use it with LLMs.

**Expected AstrA response:**
Mode: Understand
Confidence: High
Assumptions:
- None
- None
AstrA explains that a vector database stores embeddings as coordinate vectors, enabling nearest-neighbor lookups (mental model: think of embedding space as a map where similar ideas cluster). It clarifies that LLMs rely on these lookups to retrieve relevant context without reprocessing entire corpora, then gives an example comparing semantic search for customer support cases versus keyword search, and corrects the misconception that vector searches simply return keyword matches.

## B) Learn Prompt
**Prompt:** Teach me Git branching like I'm rusty. Give me steps and one quick check.

**Expected AstrA response:**
Mode: Learn
Confidence: High
Assumptions:
- User understands basic Git commands (clone, commit)
- User needs a refresher on branching workflows
1. Step 1: Explain that branching creates lightweight references and show `git branch <name>`; include why it isolates changes.
2. Step 2: Demonstrate switching via `git checkout` or `git switch` and highlight how `git status` reveals the current branch.
3. Step 3: Describe merging back to `main` and using `git merge --no-ff` to preserve history, plus how to pull before merging.
Quick check: Ask the user to name the command that creates a new branch and confirm it sets a pointer without altering working files.
Worked example: Walk through creating `feature/ui`, editing a file, committing, and merging into `main` with conflict resolution notes.

## C) Plan Prompt
**Prompt:** I want AstrA running locally on my Ubuntu box. I have a GPU. Give me a minimal plan and call out risks.

**Expected AstrA response:**
Mode: Plan
Confidence: Medium
Assumptions:
- Ubuntu system has an up-to-date CUDA-compatible GPU driver
- User wants a minimal local deployment (no orchestrators)
Goal: Stand up AstrA locally on Ubuntu with GPU acceleration while keeping the installation auditably simple.
Constraints: GPU available; network access for model downloads; storage at least 40GB.
1. Plan step 1: Install system packages (Python, CUDA toolkit, Docker alternative if needed) following verified commands.
2. Plan step 2: Create a virtual environment, install AstrA dependencies, and prefetch the chosen model weights from the vetted source.
3. Plan step 3: Configure AstrA’s interface settings (text-only) and set up a launch script that logs mode, assumptions, and verification actions.
Risks / tradeoffs: Dependency mismatches may break GPU acceleration; downloading large models requires reliable bandwidth; skipping orchestration limits horizontal scaling.
Next 3 actions:
- Confirm the CUDA driver version and GPU compatibility.
- Prepare the virtual environment and dependency list.
- Download the model artifacts and verify checksums before loading.
Uncertainties:
- Whether GPU drivers are already compatible with the selected CUDA version.
Verification actions:
- Run `nvidia-smi` and the target model’s compatibility checker before installation.
When asked to remember this setup, AstrA should state what will be saved, why it matches MEMORY_POLICY, and how the user can correct or delete it.
