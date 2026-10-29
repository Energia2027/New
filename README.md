# East Africa Energy Consulting Platform

A starter website for an energy-sector advisory business serving Kenya and the wider East African market. This branch contains the first public-facing website scaffold and instructions for expanding it into a project-opportunity portal.

## Included
- Responsive Next.js + TypeScript landing page
- Service, about, approach, project-opportunity and contact sections
- Initial environment-variable template
- Claude Code project guidance in `CLAUDE.md`
- Optional Claude Code GitHub Actions workflow in `.github/workflows/claude.yml`

> **Not production-ready yet:** the company brand and contact details are placeholders. The contact form currently uses a temporary `mailto:` action and is not connected to a secure backend, spam protection or email service.

## Requirements
- Node.js 20+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build
```bash
npm run build
```

## Planned architecture
- Frontend: Next.js App Router + TypeScript
- Hosting: Vercel or another Node-compatible host
- Database, authentication and private files: Supabase with Row Level Security
- Transactional notifications: Resend after domain verification and secret configuration

## Planned milestones
1. Approve company name, logo, positioning, contact details and service copy.
2. Add dedicated Home, About, Services, Insights, Projects, Downloads, Updates and Contact pages.
3. Add secure staff CMS and role-based permissions.
4. Add opportunity records with country, technology, scope, deadline, status, visibility tier, attachments, expressions of interest, review and expiry dates.
5. Add contractor registration, private document access, audit history and project-linked email notifications.
6. Decide whether staff need shared project inboxes or full individual Gmail/Microsoft 365 mailboxes.

## Claude Code workflow
The workflow responds when someone mentions `@claude` in an issue or pull request discussion. To activate it:
1. Install the official Claude GitHub App for this repository.
2. Add a repository Actions secret named `ANTHROPIC_API_KEY`.
3. Ensure GitHub Actions are enabled. Never commit API keys to the repository.

## Security
- Never commit real API keys or credentials; use host/repository secrets.
- Keep restricted opportunity documents private and use expiring signed links.
- Enforce permissions server-side and with database policies; hiding UI is not access control.
- Add rate limits, validation, spam protection, backups and audit logging before production.
- Do not change domain MX records until inbound email routing is planned.

## Client information still required
Company name, approved logo/brand, team biographies, qualifications, project track record, legal details, phone/email, social links, privacy policy and the actual enquiry inbox. No client credentials or performance claims have been invented.
