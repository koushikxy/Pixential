# Going live

## Current setup

- Front end: Netlify, https://pixential.netlify.app. Set `NEXT_PUBLIC_API_URL` there to turn on the login links and send the contact form to the backend.
- Backend: Render, from `render.yaml` (Blueprint). The build switches Prisma to Postgres, and every start runs `prisma db push` and the admin seed.
- Database: Neon Postgres. Use the direct connection string (connection pooling off) for `DATABASE_URL`.
- Files: stored in the database (`FILE_STORE=db`) because Render's free disk is wiped on every deploy.
- The free Render plan sleeps after 15 minutes without traffic, so the first request after that takes about a minute.

## Where to host

- **Frontend:** Vercel (free plan works). Set the root directory to `frontend`.
- **Backend:** Render or Railway. Set the root directory to `backend`, start command `npm start`.
- **Database:** SQLite is fine for local work, but most hosts wipe the disk on every deploy. Either attach a persistent disk to the backend, or switch the Prisma provider to Postgres (Neon or Supabase free tier) and run `npx prisma db push`.
- **Files:** uploads go to `backend/uploads`, which has the same disk problem. Set the `AWS_*` variables to store them in S3 instead.

## Environment variables

Backend:

| Variable | Value |
| --- | --- |
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | `https://pixential.in` (used for CORS and email links) |
| `DATABASE_URL` | database connection string |
| `JWT_SECRET` | a new random string, at least 64 characters. Do not reuse the local one |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD` | the real admin login, then run `npm run setup` once |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | email account, for example Google Workspace with an app password |
| `MAIL_FROM`, `NOTIFY_EMAIL` | sender address and the inbox that gets new leads |
| `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `AWS_S3_BUCKET` | only if using S3 |

Frontend:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | `https://<backend-host>/api` |
| `SITE_URL` | `https://pixential.in` (used for share previews, canonical links and the sitemap) |

Generate a secret with `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`.

## Before launch

- [ ] Social links filled in `frontend/src/data/site.ts` (buttons stay hidden until a URL is set)
- [ ] Contact name and address on the contact page are correct
- [ ] Privacy policy at `/privacy` read and approved by the owner
- [ ] Domain connected and HTTPS working on both frontend and backend
- [ ] SPF and DKIM records added for the email domain so mails do not land in spam
- [ ] Sign in as admin and change the password from Settings
- [ ] Send a test enquiry from `/contact` and check both emails arrive
- [ ] Create a test client, move a milestone, upload a file, then delete the test client
- [ ] Check share previews with LinkedIn Post Inspector and by pasting a link in WhatsApp
- [ ] Open the site on a real phone and tablet

## After launch

- [ ] Add the site to Google Search Console and submit `https://pixential.in/sitemap.xml`
- [ ] Set up an uptime check (for example UptimeRobot) on `https://<backend-host>/health`
- [ ] Turn on database backups on the database host
- [ ] Replace the concept work with real projects and add client reviews once they exist
