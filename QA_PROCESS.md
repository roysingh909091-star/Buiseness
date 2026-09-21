# BugBloom Report-Only QA Process

## 1. Confirm scope

Write down the exact environment, build or release candidate, browser/device, test account, decision deadline, and workflows in scope. Treat anything else as out of scope.

## 2. Prepare safe data

Use synthetic names, email addresses, records, and payment-like values. Do not use customer data. Confirm that notifications, emails, webhooks, and external integrations are disabled or safely isolated for testing.

## 3. Create the test plan

Copy `TEST_PLAN_TEMPLATE.md`. For each workflow, define:

- starting state;
- steps;
- expected result;
- evidence to capture; and
- severity if the expected result fails.

Prioritize the workflows most likely to affect activation, payment, core usage, permissions, or the release decision.

## 4. Run the browser pass

For each workflow:

1. Start from the documented starting state.
2. Follow the steps exactly.
3. Record pass, fail, blocked, or not tested.
4. Capture the URL, visible state, and relevant screenshot or console/network evidence.
5. If behavior is unexpected, stop and reproduce it once from a clean state.

Do not silently expand scope because a page reveals unrelated problems.

## 5. Record findings

Use `BUG_REPORT_TEMPLATE.md`. A finding is ready for review only when another person can reproduce it from the written steps. Separate observed facts from hypotheses about the cause.

## 6. Retest confirmed fixes

If a product team provides a new build, rerun the original steps first. Then run a focused regression around the changed area. Record the build, date, result, and remaining risk.

## 7. Produce the release decision

Use `RELEASE_READINESS_TEMPLATE.md`. Summarize tested coverage, confirmed findings, blocked areas, residual risk, and the human decision owner. The report can recommend a decision; it does not approve a release by itself.

## Severity guide

- **Critical:** blocks a core workflow, causes material data loss, exposes sensitive data, or makes the release unsafe to continue.
- **High:** major workflow fails for a meaningful user segment, with no practical workaround.
- **Medium:** important behavior is incorrect or unreliable, but a workaround exists.
- **Low:** cosmetic, copy, minor usability, or low-risk edge-case issue.

Severity is a communication aid, not a substitute for product context. Escalate ambiguity to the reviewer.

## Stop conditions

Pause and ask for clarification when:

- the URL, account, build, or environment is ambiguous;
- a test would affect real users or production data;
- credentials or private customer data are required;
- a workflow would send an external message or make a purchase;
- the expected behavior is not defined; or
- the requested action would change code, permissions, deployment, or release state.
