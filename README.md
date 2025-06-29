# 🚀 Modern Developer Portfolio Template

A high-performance, fully customizable developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features professional animations, mobile-first responsive design, and automated CI/CD deployment.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-samimelhem.com-blue?style=for-the-badge&logo=vercel)](https://samimelhem.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)

## ✨ Features

### 🎨 **Professional Design**
- **Smooth Animations**: Timeline-based Framer Motion animations with optimized performance
- **3D Backgrounds**: Interactive Vanta.js network animations with intelligent cleanup
- **Mobile-First**: Touch-optimized with advanced swipe navigation and responsive design
- **Dark Theme**: Modern gradient backgrounds with glassmorphism effects

### 🏗️ **Architecture**
- **Next.js 14 App Router**: Latest React patterns with Server Components
- **TypeScript**: Full type safety across the entire application
- **Static Site Generation**: Lightning-fast performance with `output: 'export'`
- **Component Architecture**: 14+ reusable components with clear separation of concerns

### 📱 **User Experience**
- **Interactive Navigation**: Live drag preview for mobile carousels
- **Smart Contact System**: Platform-specific email client integration
- **Progressive Enhancement**: Desktop features that gracefully degrade on mobile
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

### 🚀 **Performance & SEO**
- **Image Optimization**: Preloading and Next.js Image component integration
- **Lazy Loading**: Strategic component loading with memory leak prevention
- **SEO Optimized**: Meta tags, structured data, and sitemap generation
- **Core Web Vitals**: Optimized for speed and user experience metrics

### 🔧 **Developer Experience**
- **Automated CI/CD**: GitHub Actions deployment to GitHub Pages
- **TypeScript**: Complete type safety with custom interfaces
- **ESLint & Prettier**: Code quality and formatting enforcement
- **Hot Reload**: Instant development feedback with Vite integration

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Technology Stack](#-technology-stack)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

## 🚀 Quick Start

### Option 1: Fork This Repository (Recommended)

1. **Fork this repository** by clicking the "Fork" button at the top right of [https://github.com/SamiMelhem/samimelhem.github.io](https://github.com/SamiMelhem/samimelhem.github.io)
2. **Rename your fork** to `your-username.github.io` in the repository settings
3. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/your-username.github.io.git
   cd your-username.github.io
   ```

### Option 2: Use as Template

1. Visit [https://github.com/SamiMelhem/samimelhem.github.io](https://github.com/SamiMelhem/samimelhem.github.io)
2. Click **"Use this template"** → **"Create a new repository"**
3. Name it `your-username.github.io`
4. Clone and set up as above

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 🎨 Customization Guide

### 1. Personal Information

Update your basic information in these key locations:

**`src/app/layout.tsx`** - Site metadata:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Your compelling description here',
  // ... other metadata
}
```

**`components/Hero.tsx`** - Landing page content:
```typescript
// Update name, title, and introduction
<h1>Hi, I'm Your Name</h1>
<p>Your professional tagline</p>
```

**`components/ContactIcons.tsx`** - Social media links:
```typescript
// Update all social media URLs and contact information
```

**`src/app/about/page.tsx`** - About page content:
```typescript
// Update your background, education, and experience
// Replace placeholder text with your personal story
// Update university, degree, graduation date
// Modify internship and work experience details
// Add your own achievements and goals
```

### 2. Projects Data

Edit `data/projects.ts` to showcase your work:

```typescript
const projects: Project[] = [
  {
    slug: 'your-project',
    title: 'Your Project Name',
    description: 'Brief description',
    longDescription: 'Detailed explanation...',
    image: '/images/projects/your-image.png',
    techs: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com/you/repo',
    liveDemo: 'https://your-demo.com',
    featured: true, // Shows on homepage
    achievements: [
      'Specific achievement with metrics',
      'Another quantified result'
    ]
  }
]
```

### 3. Skills & Experience

Update `data/skills.ts` with your technical expertise:

```typescript
const skills: Skill[] = [
  {
    name: 'Your Skill',
    category: 'Programming Languages', // or 'Frameworks', 'Tools', etc.
    proficiency: 'Advanced', // Beginner, Intermediate, Advanced, Expert
    experience: '3+ years',
    description: 'Your experience with this technology...',
    // ... more details
  }
]
```

### 4. Blog Posts

Create new blog posts by:

1. **Add to post list** in `src/app/page.tsx`:
```typescript
const posts: BlogPost[] = [
  {
    slug: "your-post-slug",
    title: "Your Post Title",
    date: "January 1st, 2025", 
    excerpt: "Brief description of your post",
    image: "gradient-color" // or custom image
  }
]
```

2. **Create post directory**:
```
src/app/blog/your-post-slug/
├── page.tsx
└── YourPostClient.tsx
```

3. **Follow existing post structure** - see `src/app/blog/lessons-learned-making-website/` as example

### 5. Visual Customization

**Colors & Theme** (`tailwind.config.js`):
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',    // Update primary color
        secondary: '#your-color',  // Update secondary color
      }
    }
  }
}
```

**Background Animation** (`components/VantaNet.tsx`):
```typescript
// Customize 3D network colors and settings
NET({
  color: 0x0fffff,      // Your preferred color
  backgroundColor: 0x0,  // Background color
  points: 12.0,         // Density of points
  // ... other settings
})
```

### 6. Images

Replace images in `public/images/`:
- **Projects**: Add your project screenshots to `public/images/projects/`
- **Profile**: Update `public/images/sami.jpg` with your photo
- **Favicon**: Replace `public/favicon.ico` with your custom icon

## 🚀 Deployment

### Automated GitHub Pages (Recommended)

The repository includes automated CI/CD via GitHub Actions:

1. **Push to main branch** - Deployment starts automatically
2. **Wait ~2 minutes** - GitHub Actions builds and deploys
3. **Visit your site** at `https://your-username.github.io`

### Custom Domain Setup

1. **Buy a domain** (e.g., from Namecheap, GoDaddy)
2. **Add CNAME file** to `public/` directory:
   ```
   yourdomain.com
   ```
3. **Configure DNS** with your domain provider:
   ```
   Type: CNAME
   Name: @ (or www)
   Value: your-username.github.io
   ```

### Manual Deployment

```bash
# Build and export
npm run build
npm run export

# Deploy the 'out' directory to your hosting provider
```

## 📁 Project Structure

```
samimelhem-portfolio/
├── components/              # Reusable UI components
│   ├── Hero.tsx            # Landing page hero section
│   ├── Navbar.tsx          # Navigation header
│   ├── ProjectCard.tsx     # Project display cards
│   ├── ContactIcons.tsx    # Social media links
│   └── ...                 # 10+ other components
├── data/                   # Structured data layer
│   ├── projects.ts         # Projects data & metadata
│   └── skills.ts           # Skills & experience data
├── src/app/                # Next.js 14 app router
│   ├── about/              # About page
│   ├── blog/               # Blog system
│   ├── contact/            # Contact page
│   ├── projects/           # Dynamic project pages
│   ├── skills/             # Skills showcase
│   ├── layout.tsx          # Root layout & metadata
│   └── page.tsx            # Homepage
├── public/                 # Static assets
│   ├── images/             # Project images & photos
│   ├── documents/          # PDFs & documents
│   └── favicon.ico         # Site favicon
├── types/                  # TypeScript definitions
├── .github/workflows/      # CI/CD automation
└── package.json            # Dependencies & scripts
```

## 🛠️ Technology Stack

### Core Technologies
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Prettier](https://prettier.io/)** - Code formatting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automation

### UI & Animation
- **[Vanta.js](https://www.vantajs.com/)** - 3D background animations
- **[React Icons](https://react-icons.github.io/react-icons/)** - Comprehensive icon library (Font Awesome, Material Design, Simple Icons, etc.)

### Performance
- **Static Site Generation** - Pre-rendered HTML for speed
- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic bundle optimization

## 🔧 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npx tsc --noEmit

# Check for linting issues before pushing
npm run lint
```

**Deployment Issues:**
- Ensure repository name matches `your-username.github.io`
- Check GitHub Pages settings in repository Settings → Pages
- Verify GitHub Actions workflow completed successfully

**Image Loading:**
- Confirm images exist in `public/images/projects/`
- Check image paths match exactly in `data/projects.ts`
- Optimize large images (recommended: <500KB per image)

**Performance Issues:**
- Run `npm run build` to check bundle size
- Use browser DevTools to identify bottlenecks
- Consider lazy loading for heavy components

### Getting Help

- 📧 **Email**: [samilmelhem23@gmail.com](mailto:samilmelhem23@gmail.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/SamiMelhem/samimelhem-portfolio/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/SamiMelhem/samimelhem-portfolio/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### What This Means
- ✅ **Use commercially**
- ✅ **Modify and distribute**
- ✅ **Private use**
- ✅ **Patent use**
- ❌ **No liability or warranty**

## 🌟 Acknowledgments

- **[Next.js Team](https://nextjs.org/)** - Amazing React framework
- **[Vercel](https://vercel.com/)** - Inspiration for clean design
- **[Tailwind CSS](https://tailwindcss.com/)** - Excellent utility framework
- **[Framer](https://www.framer.com/)** - Smooth animation library

---

## 💡 Final Tips

### For First-Time Users
1. **Start small** - Update personal info first, then customize gradually
2. **Test frequently** - Run `npm run dev` after each change
3. **Use TypeScript** - It catches errors before they become problems
4. **Optimize images** - Compress before adding to reduce load times

### For Advanced Users
- **Custom animations** - Extend Framer Motion configurations
- **Performance monitoring** - Use Lighthouse for optimization insights
- **SEO enhancement** - Add structured data and meta tags
- **Analytics integration** - Add Google Analytics or similar tracking

### Best Practices
- **Mobile-first design** - Always test responsive layouts
- **Accessibility** - Use semantic HTML and ARIA labels
- **Performance** - Monitor Core Web Vitals regularly
- **SEO** - Optimize meta descriptions and title tags

---

**Built by [Sami Melhem](https://samimelhem.com)**

*Star ⭐ this repository if it helped you build an amazing portfolio!*
