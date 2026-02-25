🚀 Slicing Portfolio 5

A modern, responsive personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.

Designed with a strong focus on animation, reusable components, and clean UI architecture.

⸻

🌐 Live Demo

🔗 Live Website: https://slicing-porto5.vercel.app
📂 Repository: https://github.com/Dimas-Denny/slicing-porto5

⸻

🛠 Tech Stack
• Framework: Next.js 16 (App Router)
• Language: TypeScript
• Styling: Tailwind CSS
• UI Components: ShadCN (Radix UI based)
• Animation: Framer Motion
• Icons: Lucide React
• Deployment: Vercel

⸻

✨ Features
• Fixed blurred navbar
• Full-screen animated mobile menu
• Gradient CTA buttons
• Animated orbit skills section
• Timeline animation with reveal effects
• Contact modal with validation
• Mobile-first responsive layout
• Clean reusable component system

⸻

📦 Installation

1️⃣ Clone Repository

```bash
git clone https://github.com/Dimas-Denny/slicing-porto5.git
cd slicing-porto5`
```

2️⃣ Install Dependencies

```bash
npm install
```

3️⃣ Run Development Server

```bash
npm run dev
```

Open:

```plaintext
http://localhost:3000
```

⸻

📂 Project Structure

```plaintext
src/
 ├── app/
 ├── components/
 │    ├── layout/
 │    ├── modals/
 │    └── ui/
 ├── lib/
 └── public/
```

Structure Overview
• layout/ → Navbar, Footer, MobileMenu
• modals/ → ContactModal
• ui/ → Reusable UI components (Button, Card, etc.)
• lib/ → Utility helpers (cn function)
• public/ → Images, SVGs, static assets

⸻

🎨 UI System

The project uses a reusable button system built with class-variance-authority.

Example:

```tsx
<Button variant="gradient">Hire Me</Button>
```

The gradient variant is used for primary call-to-action buttons.

⸻

🎬 Animations

Animations are implemented using Framer Motion.

Used for:
• Mobile menu transitions
• Section reveal animations
• Orbit motion in Skills section
• Modal open/close effects

Example:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
/>
```

⸻

📱 Responsive Strategy
• Mobile-first approach
• Tailwind breakpoint system
• Layout shift at md breakpoint
• Scroll lock when mobile menu is open
• Flexible grid & flex layouts

⸻

🚀 Deployment

This project is deployed using Vercel.

Deployment process: 1. Push changes to GitHub 2. Connect repository to Vercel 3. Automatic deployment on every push

⸻

🧠 Technical Decisions

Why Next.js?
• File-based routing
• Built-in optimization
• Excellent performance
• App Router support

Why Tailwind CSS?
• Utility-first workflow
• Faster UI development
• Consistent spacing & layout system

Why ShadCN?
• Accessible components
• Radix-based primitives
• Fully customizable design system

⸻

📈 Future Improvements
• Dark / Light mode toggle
• Backend integration for contact form
• Blog section
• SEO optimization
• Performance audit & Lighthouse improvements

⸻

## 🛠 Tech Stack

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI**
- **Radix UI**
- **Framer Motion**
- **Lucide React**
- **class-variance-authority**
- **clsx**
- **tailwind-merge**
- **Vercel (Deployment)**

⸻

👨‍💻 Author

Dimas Denny

GitHub: https://github.com/Dimas-Denny
Portfolio: coming soon!!

⸻

📄 License

This project is for personal portfolio and educational purposes.

⸻
