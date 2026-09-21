# BugBloom Browser Automation Scaffold

This directory contains a minimal Playwright scaffold. It is intentionally not connected to a product yet.

## What is included

- `package.json` — test commands and Playwright dependency.
- `playwright.config.ts` — Chromium project, evidence capture on failure, and no automatic server or deployment.
- `tests/smoke.spec.ts` — a read-only reachability check that is skipped unless `BASE_URL` is explicitly set.
- `tests/critical-workflow.template.spec.ts` — a skipped template for one approved workflow.

## Local setup

From this directory:

```bash
npm install
npx playwright install chromium
```

The browser download is a local development step. It does not connect to a product or change the repository.

## Run the safe default

Without `BASE_URL`, the smoke test remains skipped:

```bash
npm test
```

This is deliberate. The scaffold must not guess a target or accidentally test a public or production site.

## Run against an approved preview

Set the target only for an approved staging or preview environment:

```bash
# PowerShell
$env:BASE_URL = "https://preview.example.com"
npm run test:smoke

# macOS / Linux
BASE_URL="https://preview.example.com" npm run test:smoke
```

Do not put credentials in the command history or repository. The initial smoke test does not require authentication.

## Add a real workflow

1. Copy `tests/critical-workflow.template.spec.ts` to a descriptive filename.
2. Record the workflow, expected result, starting state, test account, safe data, browser, and scope in the test plan.
3. Replace the placeholder path and add observable assertions.
4. Keep the test report-only: no purchases, destructive actions, customer messages, permission changes, deployments, or production-data edits.
5. Run the focused test and review the generated report and failure evidence.
6. Record confirmed findings using `BUG_REPORT_TEMPLATE.md` and summarize the decision using `RELEASE_READINESS_TEMPLATE.md`.

## Not included yet

- No staging URL or product selectors
- No authentication or secret handling
- No customer data
- No CI workflow
- No automatic issue creation
- No code fixing, pull requests, merges, or deployments
