# Claude Code Project Guide

## Project
Build a professional energy consulting and project-opportunity platform for a client operating in Kenya and East Africa. The client provides energy-sector advice, helps identify and connect developers and EPC contractors, facilitates relevant financing introductions, and coordinates conversations around insurance and project requirements. Do not present the client as an EPC contractor, bank, insurer or project owner unless the client explicitly confirms that role.

## Stack
- Next.js App Router
- TypeScript
- React
- CSS in `app/globals.css`
- Planned: Supabase (Postgres, Auth, Storage, Row Level Security) and Resend for transactional email

## Product direction
Public pages should include Home, About, Services, Insights, Projects, Downloads, Updates and Contact. A later authenticated staff dashboard should allow authorised staff to manage pages, project opportunities, downloads and updates. Project records should support country, technology category, scope, deadline, status, visibility tier (public/registered/restricted), attachments, expression of interest, review date and expiry date.

## Important constraints
- Use placeholders until the client approves company name, brand assets, leadership details, contact information, qualifications and project track record.
- Do not fabricate client credentials, projects, results, partnerships, finance commitments or licences.
- Keep a clear distinction between advisory/introductions and regulated financial, insurance or engineering services.
- Do not expose restricted opportunity information or documents to unauthorised users.
- Never hard-code secrets or commit `.env` files containing real values.
- Validate inputs on the server; enforce authorization server-side and with database Row Level Security.
- Use accessible semantic HTML, responsive layouts, and clear loading/error/empty states.
- Keep dependencies lean and explain any new infrastructure requirements.
- Update README when setup steps or architecture change.

## Development workflow
1. Inspect existing code before modifying it.
2. Make small, coherent changes and avoid replacing user work without checking.
3. Run `npm run build` and relevant tests when the environment permits.
4. Report what changed, what was tested, and what secrets/manual setup remain.
5. Do not claim external services are connected until their credentials and configuration have been verified.
