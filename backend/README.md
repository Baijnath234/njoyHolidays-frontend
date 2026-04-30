# NjoyHolidayz Backend

This is a beginner-friendly backend using Node.js, Express, and MySQL.

## 1. Install MySQL

Install MySQL Server and create a database:

```sql
CREATE DATABASE njoyholidayz;
```

Then run the SQL from `database/schema.sql` in that database.

## 2. Setup environment

Copy `.env.example` to `.env` and update your MySQL username/password:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

## 3. Install packages

```bash
npm install
```

## 4. Start backend

```bash
npm run dev
```

Server will run on:

```text
http://localhost:8081
```

## Important frontend setting

In your frontend `.env.local`, use:

```text
NEXT_PUBLIC_API_BASE_URL=http://localhost:8081
```

Restart the frontend after changing `.env.local`.

## Main APIs

- `GET /health`
- `POST /api/bookings`
- `GET /api/bookings`
- `PUT /api/bookings/:id`
- `DELETE /api/bookings/:id`
- `GET /api/users`
- `GET /api/packages`
