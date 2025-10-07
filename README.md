# 🟣 NebulaChat – Anonymous Real-Time Chat Platform

> **NebulaChat** is a privacy-focused, ephemeral chat application enabling instant, anonymous communication. Built with Next.js, Socket.IO, and Express, it features a modern UI, real-time messaging, and zero data storage.

---
> ## 🌐 Live Demo

You can try out the live version of **NebulaChat - Anonymous Real-Time Chat Platform** here:  

**[Live Demo Link](https://nebulachat.onrender.com/)**  
---

## 🚀 Features

- **Anonymous login:** No authentication or signups required
- **Real-time messaging:** Powered by Socket.IO
- **Ephemeral chats:** No database, no message storage
- **Responsive UI:** Mobile-friendly, smooth Framer Motion animations
- **Privacy-first:** No tracking, logging, or analytics

---

## 🧰 Tech Stack

- **Frontend:** Next.js, React.js, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js, Socket.IO
- **Other Tools:** ESLint, PostCSS, Render (deployment)

---

## 📁 Project Structure

```
nebulachat/
├── public/                # Static assets (icons, images, manifest, sounds)
│   ├── apple-touch-icon.png
│   ├── chat-bubble-3d.png
│   ├── favicon-192.png
│   ├── favicon-512.png
│   ├── favicon.svg
│   ├── manifest.json      # PWA manifest
│   ├── og-image.png
│   └── sounds/            # Notification sounds
│       ├── notification1.wav
│       └── notification2.wav
├── src/
│   └── app/
│       ├── favicon.svg
│       ├── generate-icons.js   # Script to generate PNG icons from SVG
│       ├── globals.css         # Global styles (Tailwind, custom animations)
│       ├── layout.js           # Root layout, metadata, fonts
│       ├── page.js             # Landing page, sections, navigation
│       ├── server.js           # Express + Socket.IO backend server
│       ├── chat/
│       │   ├── layout.js       # Chat route layout, metadata
│       │   └── page.js         # Main chat UI, Socket.IO client logic
│       └── components/
│           ├── HeroSection.jsx         # Landing hero section
│           ├── FeatureSecton.jsx       # Features showcase
│           ├── WhyChooseUsSection.jsx  # Privacy/USP section
│           ├── AboutUsSection.jsx      # About the project
│           ├── ContactUsSection.jsx    # Contact info
│           └── UsernameModal.jsx       # Username entry modal
├── package.json              # Project metadata, scripts, dependencies
├── next.config.mjs           # Next.js config
├── postcss.config.mjs        # PostCSS config (Tailwind)
├── eslint.config.mjs         # ESLint config
├── jsconfig.json             # Path aliases
├── GEMINI.md                 # AI agent guidelines
└── README.md                 # Project documentation
```

---

## 📄 Key Files Explained

- **public/**: Static assets for PWA, icons, images, and notification sounds
- **src/app/server.js**: Express server with Socket.IO for real-time chat; manages user connections and ephemeral messaging
- **src/app/page.js**: Main landing page, imports all UI sections
- **src/app/chat/page.js**: Chat interface, handles Socket.IO client logic, username modal, and message rendering
- **src/app/components/**: Modular React components for UI sections
- **src/app/generate-icons.js**: Script to generate PNG icons for manifest from SVG
- **globals.css**: Tailwind and custom CSS animations
- **manifest.json**: PWA configuration and icons
- **package.json**: Scripts for dev, build, start, lint; lists dependencies (Next.js, React, Express, Socket.IO, Framer Motion, etc.)
- **GEMINI.md**: AI agent development guidelines

---

## ⚡️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
```bash
git clone https://github.com/GadeArjun/nebulachat.git
cd nebulachat
npm install
```

### Development
```bash
npm run dev
# Starts Next.js in development mode
```

### Production
```bash
npm run build
npm start
# Runs Express + Socket.IO server (src/app/server.js)
```

---

## 🌐 Deployment

- Deploy on [Render](https://render.com/) or any Node.js hosting
- PWA manifest and icons included for mobile install
- No database required; all chats are ephemeral

---

## 🛠️ Configuration & Customization

- **Icons:** Edit `public/favicon.svg` and run `src/app/generate-icons.js` to regenerate PNGs
- **Styles:** Customize `globals.css` (uses Tailwind)
- **Metadata:** Update `layout.js` and `chat/layout.js` for SEO/OpenGraph
- **Sounds:** Replace files in `public/sounds/` for custom notifications

---

## 🤝 Contributing

Pull requests and issues are welcome! Please follow standard code style and include clear descriptions.

---

## 📄 License

MIT License © 2025 NebulaChat Team
