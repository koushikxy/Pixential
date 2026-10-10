# AgencyX Platform Monorepo

Welcome to the AgencyX platform. This is a full-stack monorepo designed for a high-performance web solutions agency.

## 🏗️ Architecture

- **Frontend:** Next.js (App Router), Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, Prisma (MySQL), Redis
- **Infrastructure:** Docker, AWS S3
- **Security:** JWT Authentication, RBAC, Helmet, Rate Limiting

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v20+
- Docker Desktop (for MySQL and Redis)

### 1. Environment Setup
Rename the `.env.example` files to `.env` in both the `/frontend` and `/backend` directories. Ensure the variables are populated.

### 2. Start the Database
From the root directory, start the Docker containers:
```bash
docker-compose up -d
```

### 3. Initialize Backend
Push the Prisma schema to the database and start the server:
```bash
cd backend
npm install
npx prisma db push
npx prisma generate
npm run dev
```
The backend will run on `http://localhost:5000`.

### 4. Initialize Frontend
Start the Next.js development server:
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:3000`.

## 🚢 Deployment (CI/CD)

The `.github/workflows/main.yml` file is configured to automatically test and build the application on pushes to the `main` branch. 

Both the `frontend` and `backend` directories contain optimized `Dockerfile`s ready to be deployed to container registries (AWS ECR, DigitalOcean, Render, etc.).
