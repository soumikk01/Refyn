<p align="center">
  <a href="https://refyn.app">
    <img src="refyn-app/public/logo.svg" alt="Refyn Logo" width="320" />
  </a>
</p>

<h1 align="center">Refyn — AI Code Reviewer & Bug Explainer</h1>

<p align="center">
  <strong>Review smarter. Debug faster. Ship clean code with confidence.</strong>
</p>

<p align="center">
  <a href="#-about-refyn"><img src="https://img.shields.io/badge/Next.js-16.2.12-black?style=for-the-badge&logo=next.js" alt="Next.js"></a>
  <a href="#-about-refyn"><img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react" alt="React"></a>
  <a href="#-about-refyn"><img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript"></a>
  <a href="#-about-refyn"><img src="https://img.shields.io/badge/Sass-SCSS-CC6699?style=for-the-badge&logo=sass" alt="Sass"></a>
  <a href="#-about-refyn"><img src="https://img.shields.io/badge/License-Proprietary-00c4a7?style=for-the-badge" alt="License"></a>
</p>

---

## 📋 Table of Contents

- [✨ About Refyn](#-about-refyn)
- [🎨 Brand Identity & Logo Specifications](#-brand-identity--logo-specifications)
- [⚡ What To Do (Quickstart & Setup)](#-what-to-do-quickstart--setup)
- [🚀 How To Run (Execution Commands)](#-how-to-run-execution-commands)
- [🛠️ How To Work (Architecture & Engineering Workflow)](#-how-to-work-architecture--engineering-workflow)
- [📌 What To Work On (Product Roadmap & Task Backlog)](#-what-to-work-on-product-roadmap--task-backlog)
- [🌐 Deployment & CI/CD](#-deployment--cicd)
- [🔒 Security & Contact](#-security--contact)

---

## ✨ About Refyn

**Refyn** is an enterprise-grade AI-powered code reviewing and bug explanation platform built for modern software developers, engineering teams, and tech leaders. Refyn analyzes source code across **30+ programming languages**, detecting bugs, security vulnerabilities, performance bottlenecks, and style antipatterns before they reach production.

### Key Capabilities

- 🔍 **Automated AI Code Review**: Instant, line-by-line analysis for syntax errors, logic flaws, memory leaks, and security risks.
- 💡 **Plain-English Bug Explanations**: Converts complex compiler errors and stack traces into actionable, step-by-step resolution guides.
- ⚡ **Interactive Multi-Language Compiler & Sandbox**: Test, run, debug, and optimize code snippets in real time within a modern web environment (`/compiler`).
- 🎯 **IDE & Workflow Integration**: Designed for seamless integration with GitHub, VS Code, and automated CI/CD pipelines.
- 💎 **Premium Modern UI**: Built with ambient backdrops, dark-mode glassmorphism, SCSS layout modules, and smooth Framer Motion micro-interactions.

---

## 🎨 Brand Identity & Logo Specifications

Refyn’s brand identity represents speed, precision, and technological intelligence.

### Brand Logo & Vector Assets

- **Full Corporate Logo**: [`public/logo.svg`](file:///c:/Users/soumi/Refyn/refyn-app/public/logo.svg) — Continuous-stroke geometric wordmark with ambient neon teal glow filter and double chevron mark.
- **Favicon & Web Icon**: [`public/icon.svg`](file:///c:/Users/soumi/Refyn/refyn-app/public/icon.svg) & [`app/icon.svg`](file:///c:/Users/soumi/Refyn/refyn-app/app/icon.svg) — 40x40 vector chevron spark emblem optimized for browser tabs, mobile bookmarks, and launcher icons.
- **High-Res Icon Mark**: [`public/logo-icon.svg`](file:///c:/Users/soumi/Refyn/refyn-app/public/logo-icon.svg) — High-definition standalone icon asset for social media previews (OpenGraph) and app cards.

### Color Palette & Design System

| Token Name               | Hex Code                | Purpose / Usage                                                          |
| :----------------------- | :---------------------- | :----------------------------------------------------------------------- |
| **Primary Accent Glow**  | `#00ffcc`               | Highlighting critical CTA elements, active states, and active code lines |
| **Emerald Teal**         | `#00c4a7`               | Primary brand color, SVG logo gradient, icons, badges                    |
| **Deep Teal**            | `#007564`               | Subtle gradients, borders, active focus indicators                       |
| **Background Dark**      | `#0d0d0d`               | Deep obsidian backdrop color                                             |
| **Card / Glass Surface** | `rgba(20, 20, 25, 0.7)` | Glassmorphism cards with backdrop filter blur                            |

### Typography Stack

- **Display Headlines**: `P22 Mackinac W01 Book` (Serif Display font for hero titles & prominent callouts)
- **UI & Controls**: `Inter` (Sans-serif font for navigation, buttons, subheaders, and body text)
- **Code & Sandbox**: `JetBrains Mono` (Monospaced font for code editor, line numbers, and output logs)

---

## ⚡ What To Do (Quickstart & Setup)

Follow these steps to set up the development workspace on your machine:

### 1. System Requirements

Ensure your environment meets the following software requirements:

- **Node.js**: `v18.x` or `v20.x+` (Recommended)
- **npm**: `v9.x+` (or `pnpm` / `yarn`)
- **Git**: Installed and configured

### 2. Repository Setup & Dependencies

Clone the repository and install all required packages:

```bash
git clone https://github.com/refyn/refyn-app.git
cd refyn-app
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory if environment keys are required:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_ENV=development
# NEXT_PUBLIC_AI_API_KEY=your_api_key_here
```

---

## 🚀 How To Run (Execution Commands)

| Command            | Action / Description                                                                                             |
| :----------------- | :--------------------------------------------------------------------------------------------------------------- |
| `npm run dev`      | Starts the Next.js local development server on [http://localhost:3000](http://localhost:3000) with hot reloading |
| `npm run build`    | Compiles and builds the production-ready application bundle in `.next/`                                          |
| `npm start`        | Launches the production server using the built bundle                                                            |
| `npx tsc --noEmit` | Runs full TypeScript static type checking without generating build output                                        |

### Testing Development Features

1. Execute `npm run dev`.
2. Open [http://localhost:3000](http://localhost:3000) in your web browser.
3. Click **Try for Free** or **Compiler** in the header navigation to test the live AI code review workspace (`/compiler`).
4. Test pasting code snippets in JavaScript, Python, C++, Go, or Rust to see real-time bug explanations and suggestions.

---

## 🛠️ How To Work (Architecture & Engineering Workflow)

### Directory Structure Map

```
refyn-app/
├── app/                        # Next.js 16 App Router Pages & Layouts
│   ├── compiler/               # Multi-language Compiler & AI Review Workspace (/compiler)
│   │   ├── Compiler.module.scss
│   │   └── page.tsx
│   ├── globals.scss            # Global CSS tokens, resets & typography font imports
│   ├── icon.svg                # Favicon vector asset
│   ├── layout.tsx              # Root HTML Layout, Metadata, Favicons & Head fonts
│   ├── not-found.tsx           # Custom 404 Page
│   └── page.tsx                # Refyn Landing Page
├── components/                 # Modular React UI Components
│   ├── AuthModal/              # User authentication & workspace access modal
│   ├── CTABanner/              # Conversion call-to-action banner
│   ├── CodeDemo/               # Code review showcase card
│   ├── Features/               # Platform capabilities grid
│   ├── Footer/                 # Enterprise footer with video backdrop & company links
│   ├── Hero/                   # Hero section with display typography
│   ├── HeroPanel/              # Bottom-anchored glassmorphism showcase panel
│   ├── HowItWorks/             # Interactive 3-step platform walkthrough
│   ├── Languages/              # Supported language grid (30+ languages)
│   ├── LiveEditor/             # Interactive live code editor demo
│   ├── LoadingScreen/          # SVG logo vector animation loader screen
│   ├── Logo/                   # Scalable SVG Brand Logo Component (<Logo />)
│   ├── Navbar/                 # Sticky glassmorphism navigation header
│   ├── Pricing/                # Subscription tier pricing table
│   └── VideoBg/                # Ambient video background component
├── context/                    # React Context Providers
│   └── AuthModalContext.tsx    # Workspace auth & modal state provider
├── public/                     # Static Assets & Logo SVG Files
│   ├── icon.svg                # 40x40 vector favicon emblem
│   ├── logo.svg                # Full enterprise vector logo
│   ├── logo-icon.svg           # High-resolution standalone logo icon
│   └── logo-dark.svg           # Dark-mode optimized logo asset
├── package.json                # Project dependencies & npm scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Enterprise technical documentation
```

### State Management & Component Architecture

- **Context API (`AuthModalContext`)**: Controls workspace authentication triggers and loading screen states globally across both the landing page and compiler route.
- **Styling Architecture**: SCSS Modules (`*.module.scss`) are paired with every component, guaranteeing zero CSS scoping conflicts while leveraging SCSS design tokens.
- **Animations**: `framer-motion` for mobile nav drawers, modal backdrops, and interactive element hover states; `gsap` for scroll animations.

### Developer & Pull Request Guidelines

1. **Branching**: Create feature branches off `main` using `feature/feature-name` or `fix/issue-description`.
2. **Strict Type Safety**: Avoid using `any`. Define explicit TypeScript interfaces for all props, states, and API payload models.
3. **Pre-Commit Verification**: Always run `npx tsc --noEmit` and `npm run build` locally before submitting a Pull Request.

---

## 📌 What To Work On (Product Roadmap & Task Backlog)

### ✅ Completed Milestones

- [x] Built Next.js 16 App Router structure with high-performance server & client components.
- [x] Designed scalable vector SVG logo system (`<Logo />`) and public brand assets (`public/logo.svg`, `public/icon.svg`).
- [x] Implemented responsive navigation header with mobile drawer and smooth scrolling anchors.
- [x] Implemented multi-language compiler & AI review workspace route (`/compiler`).
- [x] Configured dark-mode glassmorphism design tokens, typography, and video backdrops.
- [x] Verified full TypeScript compilation clean (`npx tsc --noEmit`).

### 🚧 Active Sprint Tasks (In Progress)

- [ ] **AI Backend Integration**: Connect `/compiler` workspace to streaming AI review API endpoints (`/api/review`, `/api/explain`).
- [ ] **Side-by-Side Code Diff Visualizer**: Add visual diff component comparing original vs. AI-suggested code fixes.
- [ ] **User OAuth Integration**: Enable GitHub & Google OAuth sign-in inside `AuthModal`.
- [ ] **Snippet Link Sharing**: Generate persistent, shareable URLs for code review analyses.

### 🔮 Future Roadmap (Q3/Q4)

- [ ] **VS Code & JetBrains Extensions**: Real-time line-by-line AI review directly inside IDE code editors.
- [ ] **GitHub Action Bot (`refyn-action`)**: Automatic PR reviewer that leaves line comments on GitHub Pull Requests.
- [ ] **Enterprise Team Workspaces**: Shared code review history, team rulesets, and custom security linting models.

---

## 🌐 Deployment & CI/CD

Refyn is ready to deploy on Vercel, Docker, or any Node.js cloud infrastructure.

### Deploying on Vercel

1. Connect your repository to [Vercel](https://vercel.com/new).
2. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
3. Click **Deploy**.

---

## 🔒 Security & Contact

- **Company**: Refyn Technologies Inc.
- **Website**: [https://refyn.app](https://refyn.app)
- **Support & Inquiries**: `support@refyn.app`
- **Copyright**: © 2026 Refyn Technologies Inc. All rights reserved.
