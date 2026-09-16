# Vault House — vaulthouse.om

Website for Vault House: eco-dome design and construction in Oman
(بيت القبة — بيوت إيكو-دوم في عُمان). Bilingual Arabic/English.

Originally generated with Kimi Websites; now self-hosted on the owner's domain
for SEO and ad-platform (Meta/WhatsApp) domain verification.

## Stack

- **Frontend**: React 19 + Vite + Tailwind CSS + shadcn/ui (bilingual ar/en via `src/providers/lang.tsx`)
- **Backend**: Hono + tRPC (`api/`) — single `leads` endpoint (contact / booklet-request form)
- **Database**: MySQL via Drizzle ORM — one `leads` table, auto-created on first submission
- **Deploy**: Docker (multi-stage Dockerfile), Caddy for HTTPS; see `DEPLOYMENT_GUIDE.md` in the deploy package

## Commands

```bash
npm ci               # install dependencies
npm run dev          # dev server on :3000
npm run build        # production build → dist/ (frontend + server bundle)
npm start            # serve production build on :3000
```

Production requires these environment variables (see `.env.example`):
`APP_ID`, `APP_SECRET` (any random UUIDs), `DATABASE_URL` (MySQL connection string).

## Pages

`/` home · `/why` · `/designs` · `/materials` · `/prices` · `/story` · `/developers` · `/contact`

## Updating the live site (self-hosted)

```bash
git pull && docker compose up -d --build   # on the VPS — see deployment guide
```

After editing in Kimi, download the latest project files, commit, and push.
Keep this repo **private**.
