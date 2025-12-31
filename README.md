# 🚀 Uploadify - Modern Hosting Platform

<div align="center">
  <img src="./public/banner.svg" alt="Uploadify Banner" width="800" style="border-radius: 10px;">
  <br />
  <p align="center">
    <strong>A high-performance, multi-language landing page and management system for hosting services.</strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js" alt="Next.js">
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </p>
</div>

---

## ✨ Key Features

- **🌍 Global Reach**: Fully internationalized with support for **Spanish**, **English**, **French**, and **Portuguese**.
- **⚡ Cutting-Edge Tech**: Built with **Next.js 15**, **React 19**, and the latest **Tailwind CSS 4**.
- **🎨 Premium UI/UX**: 
  - Smooth animations powered by **Framer Motion** and **GSAP**.
  - Modern components from **Shadcn UI**.
  - Fully responsive and dark-mode ready.
- **📊 Admin Power**: 
  - Comprehensive dashboard to manage hosting requests.
  - Full-featured blog editor and management system.
- **🗄️ Backend Excellence**: 
  - Real-time database and secure authentication via **Supabase**.
  - Type-safe API interactions.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Database** | [Supabase](https://supabase.com/) |
| **Auth** | [Supabase Auth](https://supabase.com/auth) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/) |
| **UI Components** | [Shadcn UI](https://ui.shadcn.com/) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) |

---

## ⚙️ Getting Started

### 1. Prerequisites
- **Node.js**: 18.x or higher
- **Package Manager**: `pnpm` (recommended)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/your-username/uploadify.git

# Navigate to the project
cd uploadify

# Install dependencies
pnpm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```
Fill in your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Database Initialization
Execute the SQL scripts in your Supabase SQL Editor:
1. `scripts/001_create_tables.sql`
2. `scripts/002_create_blog_posts_table.sql`

### 5. Launch
```bash
pnpm dev
```
Visit [http://localhost:3000](http://localhost:3000) to see your app in action!

---

## 📁 Project Structure

```text
├── app/                # Next.js App Router (Pages & Layouts)
│   ├── [lang]/         # I18n routes
│   └── admin/          # Admin Dashboard
├── components/         # Reusable UI Components
│   ├── admin/          # Admin-specific UI
│   └── ui/             # Shadcn UI primitives
├── lib/                # Core logic & Config
│   ├── i18n/           # Translation dictionaries
│   └── supabase/       # Database clients
├── scripts/            # SQL Database migrations
└── styles/             # Global CSS & Tailwind
```

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="center">Made with ❤️ by [Your Name]</p>
