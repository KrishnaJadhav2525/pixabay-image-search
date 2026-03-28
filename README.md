# PixaSearch — Pixabay Image Search

A modern, responsive image search app powered by the [Pixabay API](https://pixabay.com/api/docs/). Built with **React**, **Vite**, and **Tailwind CSS v4**.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-teal?logo=tailwindcss)

## ✨ Features

- 🔍 **Real-time image search** — Search millions of free photos from Pixabay
- 🏷️ **Category browsing** — Quick-pick chips for Nature, Animals, Tech, Food & more
- 🖼️ **Masonry grid layout** — Beautiful CSS-columns based responsive grid
- 🔎 **Lightbox modal** — Full-screen image viewer with photographer info, stats, tags & download
- ♾️ **Load More pagination** — Seamlessly append more results
- 🌙 **Dark theme** — Premium dark UI with glassmorphism effects
- ✨ **Smooth animations** — Fade-in, scale, shimmer, and micro-interactions
- 📱 **Fully responsive** — Works great on mobile, tablet, and desktop

## 🛠️ Tech Stack

| Layer      | Technology        |
| ---------- | ----------------- |
| Framework  | React 19          |
| Bundler    | Vite 8            |
| Styling    | Tailwind CSS v4   |
| API        | Pixabay REST API  |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A free [Pixabay API key](https://pixabay.com/api/docs/)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Create your environment file
cp .env.example .env

# 3. Add your Pixabay API key to .env
#    VITE_PIXABAY_API_KEY=your_key_here

# 4. Start the dev server
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx    # Hero search bar + category chips
│   ├── ImageCard.jsx    # Individual image card with hover overlay
│   ├── ImageGrid.jsx    # Responsive masonry grid + load more
│   ├── ImageModal.jsx   # Full-screen lightbox with details
│   ├── Loader.jsx       # Spinner + skeleton loading state
│   └── EmptyState.jsx   # Welcome / no-results / error states
├── hooks/
│   └── usePixabay.js    # Custom hook for Pixabay API
├── App.jsx              # Main app shell
├── main.jsx             # Entry point
└── index.css            # Tailwind + design tokens
```

## 📝 License

This project is for educational/assignment purposes.
Images are provided by [Pixabay](https://pixabay.com/) under the [Pixabay License](https://pixabay.com/service/license-summary/).
