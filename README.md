# East Africa Energy Consulting Platform

A website preview for an energy consulting business serving Kenya and the wider East African market, built to show the client before the name, brand and content are approved.

## Included (preview)
- Placeholder brand "Energy Advisory Company" with a temporary SVG logo (`components/Logo.tsx`)
- Pages: Home, About, Services, Projects (filterable board + detail pages with expression-of-interest form), Insights, Updates, Downloads, Contact
- All listings and posts are clearly labelled samples and live in `lib/content.ts`; brand and contact placeholders live in `lib/site.ts`
- Forms are preview-only: they validate in the browser and send nothing
- No database or environment variables are needed to run or deploy the preview
- Pages are set to `noindex` so the preview stays out of search engines
- Initial environment-variable template
- Claude Code project guidance in `CLAUDE.md`
- Optional Claude Code GitHub Actions workflow in `.github/workflows/claude.yml`

> **Not production-ready yet:** the company brand, contact details, listings and posts are placeholders, and the forms are not connected to any backend, spam protection or email service.

## Charts and market data
- Charts on Home, Insights and About, and the lifecycle diagram on Services, are hand-built SVG components in `components/charts.tsx` and `components/Lifecycle.tsx` (no chart library).
- Data lives in `lib/energy-data.ts`, extracted from the [Our World in Data energy dataset](https://github.com/owid/energy-data) (Ember; Energy Institute Statistical Review). Re-extract from that dataset to update; headline figures in `components/EnergyStats.tsx` are derived from the same file.
- Every chart has a legend, hover tooltips, a data table and a source line.

## Launch checklist: search engines, cookies, legal
The preview is hidden from search engines (`noindex` and `robots.txt` disallow everything). At launch:
1. In Vercel → Settings → Environment Variables, set for **Production only**:
   - `NEXT_PUBLIC_SITE_URL=https://<company-domain>`
   - `NEXT_PUBLIC_ALLOW_INDEXING=true`
   - `GOOGLE_SITE_VERIFICATION=<token>` (from Google Search Console's HTML-tag method)
2. Redeploy. This switches on indexing, `robots.txt` with a sitemap link, `/sitemap.xml` and organisation structured data. Preview deployments stay hidden.
3. In [Google Search Console](https://search.google.com/search-console), verify the domain and submit `https://<company-domain>/sitemap.xml`.
4. Replace the placeholder Privacy, Terms and Cookie policy pages with wording from the client's legal adviser (Kenya Data Protection Act 2019).
5. The site sets no analytics or advertising cookies. If analytics is added, add a consent banner and update `/cookies` first.

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
6. Staff email: use cPanel mailboxes in Microsoft Outlook (no in-platform staff email portal). Website forms will email the company inbox via Resend, and the footer will link to cPanel webmail once a domain exists (`site.webmailUrl`).

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
