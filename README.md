# Night Mode Developer Portfolio - React

A modern, scalable React.js refactor of a monolithic developer portfolio template. Features glassmorphism design, canvas-based sakura animations, and a lo-fi aesthetic perfect for night mode browsing.

## 🎨 Features

- **Modern React Architecture**: Fully componentized with React hooks
- **Glassmorphism UI**: Frosted glass effect with backdrop blur
- **Canvas Animation**: Animated sakura petals as background
- **Lo-Fi Music Widget**: Retro Winamp-style player UI
- **Responsive Design**: Mobile-first approach with media queries
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Dark Theme**: Cool neon accents (Cyan, Purple, Pink)
- **Modular CSS**: CSS Modules for component-scoped styling

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Fixed navigation with glassmorphism
│   ├── Hero.jsx             # Hero section with glitch effect
│   ├── MusicPlayer.jsx      # Lo-Fi music player widget
│   ├── About.jsx            # Bio and tech stack section
│   ├── Portfolio.jsx        # Project grid layout
│   ├── ProjectCard.jsx      # Individual project card component
│   ├── Footer.jsx           # Footer with social links
│   └── SEOHead.jsx          # SEO metadata component
├── hooks/
│   └── useSakuraAnimation.js # Custom hook for canvas animation
├── styles/
│   ├── index.css            # Global styles & CSS variables
│   ├── Navbar.module.css    # Navigation styles
│   ├── Hero.module.css      # Hero section styles
│   ├── MusicPlayer.module.css
│   ├── About.module.css
│   ├── Portfolio.module.css
│   ├── ProjectCard.module.css
│   └── Footer.module.css
├── assets/                  # Images, fonts, and static files
├── data.js                  # Portfolio data and configuration
├── App.jsx                  # Main App component
├── App.css                  # App-level styles
└── main.jsx                 # React entry point
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone or extract the project**
   ```bash
   cd devlog-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Key Components Overview

### Navbar
Fixed navigation with glassmorphism effect. Contains logo and nav links with hover animations.

### Hero Section
Full-viewport hero with glitch-style heading, subtitle, and CTA button to portfolio.

### Music Player
Decorative lo-fi player widget styled like Winamp, complete with fake playlist info and progress bar.

### About Section
Displays bio paragraph and tech stack as tagged badges with cyan accents.

### Portfolio Grid
Responsive grid of project cards with hover effects and tech stack tags.

### Canvas Animation
Background sakura petal animation using HTML5 Canvas and custom React hook (`useSakuraAnimation`).

## 🎨 Customization Guide

### Edit Portfolio Data
Modify `src/data.js` to update:
- Portfolio projects (title, description, tech stack)
- Tech stack badges
- Social media links

### Update Colors
CSS variables in `src/styles/index.css`:
```css
:root {
  --accent-cyan: #64ffda;
  --accent-purple: #bd93f9;
  --accent-pink: #ff79c6;
  /* ... more variables */
}
```

### Modify Text Content
Key sections to edit:
- **Hero**: `src/components/Hero.jsx` - "I AM [NAME]"
- **About**: `src/components/About.jsx` - Bio paragraphs
- **Footer**: `src/components/Footer.jsx` - Designer credit
- **SEO**: `src/components/SEOHead.jsx` - Meta descriptions

## 🔍 SEO & Metadata

The `SEOHead.jsx` component includes:
- Dynamic title and meta description
- Open Graph tags for social sharing
- Twitter Card tags
- Favicon links
- Google Fonts preconnect

Update the default values for your portfolio.

## 📸 Screenshot

![App Screenshot](./screenshot.png)

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Fast build tool & dev server
- **CSS Modules** - Component-scoped styling
- **HTML5 Canvas** - Background animation
- **Google Fonts** - Exo 2 & Space Mono

## 📝 License

This project is open-source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and improve this template. Share your improvements!

---

**Built with ❤️ for night owls and minimalist developers.**
