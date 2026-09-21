# BugBloom QA Starter Kit

A report-only operating kit for running focused, evidence-based browser QA before a meaningful web release.

## Purpose

Use this kit to turn an approved staging or preview environment into a clear release-readiness decision. It is intentionally conservative:

- Test only the agreed environment and workflows.
- Use a dedicated test account for authenticated paths.
- Record reproducible evidence, not guesses.
- Report findings before proposing code changes.
- Never submit real customer data.
- Never deploy, merge, or change product code as part of a QA run.

## Current status

This repository currently contains the QA method and templates. No product repository, staging URL, credentials, or automated browser suite has been connected yet.

## Files

- `QA_PROCESS.md` — the repeatable report-only workflow.
- `TEST_PLAN_TEMPLATE.md` — a bounded plan for one release candidate.
- `BUG_REPORT_TEMPLATE.md` — a reproducible issue format.
- `RELEASE_READINESS_TEMPLATE.md` — the final go / known risks / no-go summary.

## Minimum intake for a real run

Before testing a real product, collect:

1. Staging or preview URL.
2. Approved test account and safe test data.
3. Release window or decision deadline.
4. Critical workflows that cannot afford to break.
5. Supported browsers or devices.
6. Known exclusions, feature flags, and test boundaries.
7. Named reviewer for findings and release decision.

Do not put passwords, API keys, customer records, or private tokens in this repository.

## Default operating boundary

The default run is report-only. The tester may navigate, enter synthetic data, and capture evidence in the approved environment, but must not:

- send customer-facing messages;
- make purchases or irreversible changes;
- modify production data;
- change code;
- open, merge, or approve a pull request;
- deploy a build; or
- mark a release ready without human review.
