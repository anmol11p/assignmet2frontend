# 🎬 Next.js Movies App with OMDB API

This is a sleek and responsive Movies Web App built with **Next.js 14 App Router**, allowing users to:

- 🔍 **Search** for movies by title using the OMDB API
- 📄 **View detailed information** about any movie
- 🖼️ Enjoy a smooth UI with dark/light mode, image fallbacks, skeleton loaders, and transitions

---

## 🚀 Tech Stack

| Tech                         | Purpose                                                                  |
| ---------------------------- | ------------------------------------------------------------------------ |
| **Next.js 15**               | React-based framework for App Router, SSR & SSG                          |
| **React 19**                 | Modern UI library powering the component-based architecture              |
| **Tailwind CSS v4**          | Utility-first CSS framework for rapid UI development                     |
| **next-themes**              | Supports dark/light theme toggling                                       |
| **tsparticles**              | Particle animation effects (used for visual effects on UI)               |
| **tw-animate-css**           | Tailwind plugin for CSS animations like fadeIn, bounce, etc.             |
| **motion**                   | Animation library for smooth UI transitions (e.g., page & element entry) |
| **lucide-react**             | Beautiful open-source SVG icon library                                   |
| **class-variance-authority** | Utility for managing Tailwind variants in components                     |
| **tailwind-merge**           | Smart merging of Tailwind classes to prevent conflicts                   |
| **clsx**                     | Utility for conditionally joining class names                            |
| **react-hot-toast**          | Lightweight notifications with good accessibility                        |
| **OMDB API**                 | External movie data source (search & details)                            |

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/movies-app.git
cd movies-app
npm install
# or
yarn install
OMDB_API_KEY=your_omdb_api_key_here
npm run dev
# or
yarn dev
```

## 🔍 Features

🌗 Dark/Light mode toggle (auto-detects theme)

🔍 Movie search with debounced input

⏳ Loading skeletons for better UX

🖼️ Fallback image handling for missing posters

🧭 Detailed Movie Page with runtime, plot, cast, and more

⚡ Smooth transitions with useTransition from React
API Used
🎥 OMDB API
API: https://www.omdbapi.com

Key required: ✅ Yes

Sign up for a free key: https://www.omdbapi.com/apikey.aspx

Usage Example:

ts
Copy
Edit
const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=batman`);

---
