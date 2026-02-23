# 👟 Kicks Store

A high-fidelity sneaker e-commerce storefront built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Designed to pixel-perfect specifications from Figma, featuring dynamic product listings, smooth animations, and a modern UI.

> **🔗 Live Demo**: [zavi-soft-task-chi.vercel.app](https://zavi-soft-task-chi.vercel.app/)

---

## ✨ Features

- **Dynamic Product Grid** — Fetches products from the [Platzi Fake Store API](https://fakeapi.platzi.com/) with robust image parsing
- **Product Detail Pages** — Individual product pages with image galleries, size selectors, and add-to-cart functionality
- **Shopping Cart** — Persistent cart state powered by Redux Toolkit
- **Pixel-Perfect Design** — Faithful reproduction of the Figma mockup with custom rounded cards, branded badges, and precise typography
- **Smooth Animations** — Scroll-triggered entrance animations via Framer Motion
- **Responsive Layout** — Fully responsive across mobile, tablet, and desktop
- **SEO Optimized** — Proper heading hierarchy, semantic HTML, and meta tags

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework (App Router, Turbopack) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Redux Toolkit](https://redux-toolkit.js.org/) | State management + RTK Query for API |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev/) | Icons |
| [Vercel](https://vercel.com/) | Hosting & deployment |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/abu-abdullah22/zavi-soft-task.git

# Navigate to the project
cd zavi-soft-task/kicks-store

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
kicks-store/
├── public/                 # Static assets (hero images, logos, review photos)
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── page.tsx        # Homepage (Hero, Products, Categories, Reviews)
│   │   ├── cart/           # Shopping cart page
│   │   └── product/[id]/   # Dynamic product detail page
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   └── products/       # ProductCard, ProductGrid
│   └── lib/
│       ├── features/       # Redux slices (cartSlice)
│       ├── services/       # RTK Query API service
│       └── store.ts        # Redux store configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json
```

---

## 📝 Notes

- **API**: Product data is fetched dynamically from the [Platzi Fake Store API](https://api.escuelajs.co/api/v1/products). The landing page displays the first 4 products.
- **Image Handling**: The API occasionally returns image URLs in malformed JSON string arrays. A custom parser in `ProductCard.tsx` handles this gracefully.
- **Design System**: The UI follows a strict design token system — `#4A69E2` (primary blue), `#FFA52F` (accent orange), `#232321` (dark), `#ECEEF0` (card background), and `Rubik` as the primary typeface.
- **Cart Persistence**: Cart state is managed via Redux Toolkit and persists during the session.

---

## 📄 License

This project is built as a task submission for **Zavi Soft**.

---

Built with ❤️ using Next.js & Tailwind CSS
