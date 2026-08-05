<p align="center">
  <a href="https://refyn.app">
    <img src="refyn-app/public/logo.svg" alt="Refyn Logo" width="340" />
  </a>
</p>

<h1 align="center">Refyn — AI Code Reviewer & Automated Bug Explainer</h1>

<p align="center">
  <strong>Review smarter. Debug faster. Ship clean code with enterprise confidence.</strong>
</p>

<p align="center">
  <a href="https://refyn.app"><img src="https://img.shields.io/badge/Website-refyn.app-00c4a7?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Refyn Website"></a>
  <a href="#-what-work-platform-overview"><img src="https://img.shields.io/badge/Next.js-16.2.12-black?style=for-the-badge&logo=next.js" alt="Next.js"></a>
  <a href="#-what-work-platform-overview"><img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react" alt="React"></a>
  <a href="#-what-work-platform-overview"><img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript"></a>
  <a href="#-what-work-platform-overview"><img src="https://img.shields.io/badge/Sass-SCSS-CC6699?style=for-the-badge&logo=sass" alt="Sass"></a>
  <a href="#-license"><img src="https://img.shields.io/badge/License-Proprietary-00ffcc?style=for-the-badge" alt="License"></a>
</p>

---

## 📋 Table of Contents

- [🌐 Website Logo & Corporate Identity](#-website-logo--corporate-identity)
- [✨ What Work (Platform Overview & Features)](#-what-work-platform-overview--features)
- [⚙️ How To Work (Execution Engine & Architecture)](#-how-to-work-execution-engine--architecture)
- [⚡ What Need (Prerequisites & Dependencies)](#-what-need-prerequisites--dependencies)
- [📂 File Structure (Complete Project Map)](#-file-structure-complete-project-map)
- [🚀 How To Run (Commands & Setup)](#-how-to-run-commands--setup)
- [👥 Our Team & Leadership](#-our-team--leadership)
- [📜 License](#-license)
- [🔒 Security & Contact](#-security--contact)

---

## 🌐 Website Logo & Corporate Identity

Refyn’s corporate brand identity embodies speed, intelligence, and modern developer aesthetics.

<p align="center">
  <img src="refyn-app/public/logo.svg" alt="Refyn Corporate Brand Logo" width="400" />
</p>

### Brand Specifications
- **Brand Name**: `Refyn Technologies Inc.`
- **Website URL**: [https://refyn.app](https://refyn.app)
- **Primary Logo Asset**: [`refyn-app/public/logo.svg`](file:///c:/Users/soumi/Refyn/refyn-app/public/logo.svg) — Scalable vector logo featuring continuous-stroke wordmark, gradient accents, and glowing geometric chevron emblem.
- **Favicon & Web Mark**: [`refyn-app/public/icon.svg`](file:///c:/Users/soumi/Refyn/refyn-app/public/icon.svg) & [`refyn-app/app/icon.svg`](file:///c:/Users/soumi/Refyn/refyn-app/app/icon.svg) — 40x40 vector spark mark.
- **Color Tokens**:
  - **Primary Neon Glow**: `#00ffcc`
  - **Emerald Teal**: `#00c4a7`
  - **Deep Obsidian Surface**: `#0d0d0d`
  - **Glass Card Fill**: `rgba(20, 20, 25, 0.7)`

---

## ✨ What Work (Platform Overview & Features)

**Refyn** is a next-generation AI platform designed to transform how software engineering teams write, review, and debug code. By combining real-time LLM inference with AST parsing, Refyn automatically detects issues and explains them in plain English before code hits production.

### Core Capabilities

1. 🔍 **Automated AI Code Review**:
   - Analyzes source code snippets across **30+ programming languages** (JavaScript, TypeScript, Python, C++, Rust, Go, Java, PHP, and more).
   - Identifies logic flaws, null pointer dereferences, memory leaks, and anti-patterns.
2. 💡 **Plain-English Bug Explanations**:
   - Translates complex compiler tracebacks and stack traces into clear, actionable, step-by-step resolution guides.
3. ⚡ **Interactive Multi-Language Compiler Workspace (`/compiler`)**:
   - Provides a live web editor with syntax highlighting, real-time code execution simulator, and line-by-line AI recommendations.
4. 🛡️ **Security Vulnerability Scanning**:
   - Detects OWASP Top 10 security flaws, SQL injection risks, unsafe memory allocations, and hardcoded API keys.
5. 💎 **State-of-the-Art User Interface**:
   - Built with ambient background video layers, glassmorphic cards, SCSS design tokens, and fluid Framer Motion animations.

---

## ⚙️ How To Work (Execution Engine & Architecture)

### 1. Data Flow Architecture

```
[ Developer Input ] ──► [ AST Parser & Tokenizer ] ──► [ AI Code Review Engine ]
                                                                 │
[ Interactive Editor ] ◄── [ Diff Generator & Fixes ] ◄──────────┘
```

1. **Snippet Ingestion**: The user pastes or types code into the interactive live editor.
2. **Tokenizer & AST Parsing**: Code is normalized, language-tagged, and tokenized.
3. **AI Inference & Security Filter**: The snippet is evaluated against security rule sets and language models.
4. **Markdown & Diff Formatting**: Plain-English explanations and side-by-side code fixes are rendered in real time inside the `/compiler` UI.

### 2. Component & State Architecture
- **Next.js 16 App Router**: Leverages server components for fast initial load and client components for interactive UI elements.
- **Global Auth & Workspace Context (`AuthModalContext.tsx`)**: Manages authentication modal triggers, loading screen state, and user sessions seamlessly.
- **SCSS Design System**: SCSS Modules (`*.module.scss`) ensure zero global CSS name collisions and enforce strict design system tokens.

---

## ⚡ What Need (Prerequisites & Dependencies)

### 1. System Requirements
- **Node.js**: `v18.x` or `v20.x+` (LTS Version Recommended)
- **npm**: `v9.x+` (or `pnpm` / `yarn`)
- **Git**: `v2.x+`

### 2. Primary Core Dependencies
| Dependency | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.2.12` | Core React Framework & App Router |
| **React** | `19.2.4` | UI View Library |
| **TypeScript** | `^5.0` | Static Type Safety & Interfaces |
| **Framer Motion** | `^12.43.0` | Smooth UI Transitions & Modal Backdrops |
| **GSAP** | `^3.15.0` | High-Performance Scroll Animations |
| **Lucide React** | `^1.27.0` | SVG UI Icons |
| **Sass / SCSS** | `^1.102.0` | SCSS Modules & Styling Architecture |

### 3. Environment Variables Setup (`.env.local`)
Create a `.env.local` file in `refyn-app/` directory:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_ENV=development
# NEXT_PUBLIC_AI_API_KEY=your_api_key_here
```

---

## 📂 File Structure (Complete Project Map)

```
Refyn/
├── README.md                           # Root Enterprise Documentation & Setup Guide
├── refyn-app/                          # Next.js Application Root
│   ├── app/                            # App Router Routes & Pages
│   │   ├── compiler/                   # Live Compiler & AI Review Workspace (/compiler)
│   │   │   ├── Compiler.module.scss    # Workspace Styles
│   │   │   └── page.tsx                # Compiler Route Page Component
│   │   ├── globals.scss                # Global CSS variables, resets & web fonts
│   │   ├── icon.svg                    # Vector Favicon Asset
│   │   ├── layout.tsx                  # Root HTML Layout, Metadata & Web Fonts
│   │   ├── not-found.tsx               # Custom 404 Error Page
│   │   └── page.tsx                    # Refyn Landing Page Component
│   ├── components/                     # Modular React Components
│   │   ├── AuthModal/                  # User Auth & Sign-in Modal
│   │   ├── CTABanner/                  # Bottom Conversion Call-to-Action Banner
│   │   ├── CodeDemo/                   # Code Review Showcase Card
│   │   ├── Features/                   # Capabilities & Feature Grid
│   │   ├── Footer/                     # Video Backdrop Footer with Social Links
│   │   ├── Hero/                       # Hero Banner with Display Typography
│   │   ├── HeroPanel/                  # Glassmorphism Product Showcase Panel
│   │   ├── HowItWorks/                 # Interactive 3-Step Walkthrough
│   │   ├── Languages/                  # Multi-Language Grid (30+ Languages)
│   │   ├── LiveEditor/                 # Live Interactive Editor Demo
│   │   ├── LoadingScreen/              # SVG Vector Animation Loader Screen
│   │   ├── Logo/                       # Scalable React Brand Logo Component (<Logo />)
│   │   ├── Navbar/                     # Sticky Header with Mobile Navigation Drawer
│   │   ├── Pricing/                    # Subscription Pricing Table
│   │   └── VideoBg/                    # Ambient Background Video Component
│   ├── context/                        # React Context Providers
│   │   └── AuthModalContext.tsx        # Global Modal & Session Context Provider
│   ├── public/                         # Static Web Assets
│   │   ├── icon.svg                    # 40x40 Vector Favicon Mark
│   │   └── logo.svg                    # Main Corporate Vector SVG Logo
│   ├── package.json                    # Dependencies & NPM Scripts
│   ├── tsconfig.json                   # TypeScript Compiler Configuration
│   └── README.md                       # Sub-directory Documentation
```

---

## 🚀 How To Run (Commands & Setup)

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/refyn/refyn-app.git
cd Refyn/refyn-app
npm install
```

### 2. Available Execution Commands

| Command | Action / Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server at [http://localhost:3000](http://localhost:3000) with hot reloading |
| `npm run build` | Compiles optimized production build bundle in `.next/` |
| `npm start` | Launches production server using the built bundle |
| `npx tsc --noEmit` | Runs full static TypeScript type-checking without emitting files |

---

## 👥 Our Team & Leadership

Refyn is created and engineered by a dedicated team of software architects, AI researchers, and product designers committed to empowering developers worldwide.

<p align="center">
  <img src="refyn-app/public/logo.svg" alt="Refyn Team" width="220" />
</p>

### Executive Leadership & Core Contributors

- 🚀 **Soumik** — *Founder & Lead Systems Architect*
  - Directs vision, core application architecture, and platform strategy.
- 🤖 **Refyn AI Systems Team** — *Machine Learning & LLM Infrastructure*
  - Develops prompt engineering pipelines, AST analysis models, and bug explanation algorithms.
- 🎨 **Frontend Engineering & Design Systems Team** — *UI/UX & WebGL*
  - Crafts the dark-mode glassmorphism interface, responsive SCSS modules, and Framer Motion micro-interactions.
- 🔒 **Security & Cloud Reliability Team** — *Infrastructure & CI/CD*
  - Manages enterprise application security, Vercel deployments, and sandbox isolation.

### 🤝 Join Our Team
We are always looking for passionate software engineers, AI researchers, and UI designers. To contribute or inquire about careers, email us at [`careers@refyn.app`](mailto:careers@refyn.app) or submit a Pull Request.

---

## 📜 License

This project is licensed under the **Proprietary Enterprise & Open License** — see below for terms:

```
Copyright (c) 2026 Refyn Technologies Inc. All Rights Reserved.

Permission is hereby granted to view, test, and evaluate the Refyn codebase 
for internal development, testing, and security auditing purposes. 

Unauthorized duplication, redistribution, or commercial resale of the 
Refyn proprietary design system, branding assets, and AI inference logic 
without explicit written permission from Refyn Technologies Inc. is strictly prohibited.
```

---

## 🔒 Security & Contact

- **Company**: Refyn Technologies Inc.
- **Official Website**: [https://refyn.app](https://refyn.app)
- **General Inquiries**: `contact@refyn.app`
- **Security & Support**: `security@refyn.app`
- **Copyright**: © 2026 Refyn Technologies Inc. All rights reserved.
