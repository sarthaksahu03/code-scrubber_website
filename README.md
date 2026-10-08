# Code Scrubber

An early-stage, open-source developer tool that detects leaked credentials
and fixes them in one click, with hosted cloud services for teams in development.

**Today:** a local-first VS Code extension that scans your workspace for exposed
secrets (AWS, Stripe, GitHub, OpenAI, Anthropic, and more) using pattern matching
and entropy analysis, then moves them to `.env` or AWS Secrets Manager.

**Building toward:** a hosted platform for teams.
- Hosted scan API and dashboard for org-wide secret visibility
- GitHub App / CI checks that block leaks at pull request time
- Shared policies and alerting across repositories
- ML-assisted triage to cut false positives on high-entropy strings

> Status: early-stage. The extension is available now; hosted services are on the roadmap.
