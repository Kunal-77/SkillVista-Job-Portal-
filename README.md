# 🧳 Job Portal Web Application

A modern full-stack job portal built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Clerk for user authentication. It helps job seekers discover opportunities and employers manage listings — with fast performance, a clean UI, and robust features.

---

## 🔥 Built with React + Vite

This project is scaffolded using **Vite** for lightning-fast development and bundling.

### Why Vite?

- ⚡ Lightning-fast Hot Module Replacement (HMR)
- 📦 Native ES module support
- 🔍 Easy configuration and plugin support

Two official plugins available:
- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — uses **Babel** for Fast Refresh
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — uses **SWC** for Fast Refresh

> 💡 **Note**: For production-grade apps, we recommend using TypeScript with type-aware lint rules. Check out the [React + TS Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) and [`typescript-eslint`](https://typescript-eslint.io) for best practices.

---

## ✨ Features

- 🔐 User Authentication using Clerk
- 🧭 Job Search with filtering by category and location
- 📍 Real-time search suggestions
- 🧑‍💼 Role-based views for Admins, Recruiters, and Job Seekers
- 📦 Clean UI built with Tailwind CSS
- 📊 Admin dashboard for insights (if included)

---

## 📁 Project Structure

job-portal/
├── client/ # React + Vite frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── assets/
│ │ └── App.jsx
│ ├── .env
│ ├── package.json
│ └── vite.config.js
├── server/ # (Optional) Node.js/Express backend
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ └── server.js


---

## 🛠️ Getting Started

### Prerequisites

- Node.js ≥ 18
- MongoDB (local or Atlas)
- Clerk account for auth keys

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/job-portal.git
cd job-portal/client

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Add your Clerk publishable key to `.env`

Start Development Server
npm run dev

📦 NPM Scripts
| Command         | Description                 |
| --------------- | --------------------------- |
| `npm run dev`   | Run frontend in development |
| `npm run build` | Build for production        |
| `npm run lint`  | Run ESLint                  |

📷 Screenshots
Add UI snapshots here (Job listing, login screen, dashboard, etc.)

📜 License
MIT License © 2025 Kunal Narkhede