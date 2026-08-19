# Engineering Instructions & Operating Rules

These instructions must be strictly followed before and during any task in this repository.

---

### 1. Explain Plan Before Coding or Running Modifying Commands
- Always explain what you are thinking about doing, the architectural approach, and the step-by-step plan **before** modifying code or executing commands.

### 2. No Production Changes Without Explicit Permission
- Never run production migrations, deployments, secret updates, or live database modifications without explicit user confirmation and approval.

### 3. Test Thoroughly Before Declaring Done
- Never conclude a task or claim completion without executing comprehensive end-to-end tests, builds, and visual/functional verification.

### 4. Always Ask Before Pushing Code
- Never run `git push` to origin or remote branches without explicitly asking for and receiving user permission.

### 5. Never Break Existing Working Features (Add Without Regressions)
- Always remember we are adding to a functioning, production codebase. Existing capabilities (inbox, broadcasts, templates, automations, SSE, webhooks, auth) must remain fully intact and operational.

### 6. Impact Analysis Before Every Modification
- Always perform an impact assessment on dependencies, shared components, CSS tokens, DB schema, and API contracts before touching any file.

### 7. Full-Suite Verification Before Push
- Run complete project builds (`npm run build`), linting, and system verification across all affected workspaces before proposing a commit or push.

### 8. Strict Pipeline Sequence: Commit & Push to GitHub First, Then Deploy
- Deployment order is strictly:
  1. Verify locally
  2. Ask permission to commit & push to GitHub
  3. Push to GitHub remote
  4. Ask permission to deploy
  5. Deploy to Cloudflare / production
