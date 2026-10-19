# Pixential Platform

Website and client portal for Pixential, a web agency. The public site shows services, work and pricing. Behind the login there is an admin panel for managing clients and leads, and a portal where each client can follow their project and share files.

Live site: https://pixential.netlify.app (front end only for now. Until the backend is hosted, the contact form goes to Netlify Forms and the login links are hidden.)

## Stack

- Frontend: Next.js 14.2 (App Router), Tailwind CSS, Framer Motion
- Backend: Node.js, Express, Prisma
- Database: SQLite for local development (switch the Prisma provider to MySQL or Postgres for production)
- File storage: local `backend/uploads` folder, or S3 when AWS keys are set
- Auth: JWT with ADMIN and CLIENT roles, bcrypt passwords, rate limited login

## What it does

- Contact form saves leads to the database, emails the team and sends the visitor a confirmation
- Admin can see stats, manage leads (New, Contacted, Won, Lost), add clients with a portal login, update project milestones and share files
- Clients log in to see their project timeline, upload and download files and change their password
- Clients get an email when a milestone moves forward
- Forgot password sends a reset link that works once and expires in 1 hour
- Next.js middleware keeps admins and clients on their own pages

## Running locally

Needs Node.js 20+.

```bash
npm install
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Set `JWT_SECRET`, `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `backend/.env`, then:

```bash
npm run setup      # creates the SQLite database and the admin user
npm run backend    # http://localhost:5000
npm run frontend   # http://localhost:3000
```

Emails need SMTP details in `backend/.env` (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `NOTIFY_EMAIL`). A Gmail or Google Workspace account with an app password works. Without them the emails are only printed in the backend console.

Log in at `/login` with the admin email and password from `backend/.env`.

## Tests

```bash
npm test
```

Runs the API tests in `backend/test` against a separate test database. They cover login, role checks, client and milestone management, file upload and download, leads and password change.

## Deploying

See [DEPLOY.md](DEPLOY.md) for hosting, environment variables and the launch checklist.
