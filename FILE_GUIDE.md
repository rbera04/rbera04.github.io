# Project Structure & File Guide

Complete documentation of every file in your DevOps Engineer Portfolio.

## 📁 Directory Structure

```
portfolio/
│
├── 📄 index.html                 # Main HTML file - All content
├── 🎨 style.css                  # All styles and themes
├── 💻 script.js                  # All JavaScript interactions
│
├── 📂 assets/
│   ├── 📂 images/               # Image folder (profile, projects)
│   ├── 📂 icons/                # SVG icons folder
│   └── 📂 resume/               # Resume PDF storage
│
├── 📋 README.md                 # Project overview & features
├── 🚀 DEPLOYMENT.md             # Step-by-step GitHub Pages guide
├── 🎨 CUSTOMIZATION.md          # How to customize everything
├── ⚡ QUICK_START.md            # Quick setup guide
├── 📊 PERFORMANCE_SEO.md        # Performance & SEO optimization
├── 📄 robots.txt                # Search engine crawling rules
├── 🗺️  sitemap.xml              # XML sitemap for SEO
├── 🚫 .gitignore                # Git ignore file
└── 📖 FILE_GUIDE.md             # This file
```

---

## 📄 Core Files Explained

### 1. `index.html` (Main Content File)

**Size:** ~35KB | **Type:** HTML5 | **Purpose:** Contains all page content

**Sections included:**

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Meta tags for SEO, theme, favicon -->
    <!-- Links to CSS -->
  </head>
  
  <body>
    <nav class="navbar">              <!-- Sticky navigation bar -->
    <section id="home" class="hero">  <!-- Hero section with typing -->
    <section id="about" class="about"><!-- About & stats -->
    <section id="skills">             <!-- Skill cards -->
    <section id="experience">         <!-- Timeline & jobs -->
    <section id="projects">           <!-- Project grid -->
    <section id="contact">            <!-- Contact section -->
    <footer>                           <!-- Footer links -->
    
    <!-- Back to top button -->
    <!-- Script references -->
  </body>
</html>
```

**Key features:**
- Semantic HTML5 structure
- SEO meta tags (Open Graph, Twitter Card)
- Accessible ARIA labels
- Mobile viewport configuration
- Responsive design

**Things to customize:**
- Personal information (name, email, links)
- Experience details
- Project descriptions
- Skill categories
- Social media links

---

### 2. `style.css` (Complete Styling)

**Size:** ~15KB | **Type:** CSS3 | **Purpose:** All visual styling and themes

**Structure:**

```css
/* CSS Variables (Line 1-55) */
:root { }
body.dark-theme { }

/* Global Styles (Line 55-100) */
* { margin: 0; padding: 0; }
body { font-family, color, etc. }

/* Layout (Line 100-150) */
.container { max-width: 1200px; }
section { padding, margins }

/* Navigation (Line 180-250) */
.navbar { position: sticky; }
.nav-menu { flex, transitions }

/* Buttons (Line 280-320) */
.btn { padding, colors, hover effects }

/* Hero Section (Line 350-500) */
.hero { min-height: 100vh; }
.hero-title, .typing-animation, etc.

/* About Section (Line 550-650) */
.about-content { grid layout }
.highlight-card { flex, hover effects }

/* Skills Section (Line 700-780) */
.skills-grid { grid layout }
.skill-item { transitions, hover }

/* Experience Section (Line 820-950) */
.timeline { position: relative }
.timeline-item { margin, layout }

/* Projects Section (Line 1000-1100) */
.projects-grid { grid layout }
.project-card { flex, transitions }

/* Contact Section (Line 1150-1250) */
.contact { gradient background }
.contact-card { hover effects }

/* Footer (Line 1300-1380) */
.footer { grid layout }

/* Responsive (Line 1400+) */
@media (max-width: 1024px) { }
@media (max-width: 768px) { }
@media (max-width: 480px) { }
```

**Key features:**
- CSS Variables for theming
- Dark/Light mode support
- Mobile-first responsive design
- Smooth transitions and animations
- Accessibility features (reduced motion)
- CSS Grid and Flexbox layouts

**Things to customize:**
- Color scheme
- Font sizes
- Spacing values
- Animation timing
- Responsive breakpoints

---

### 3. `script.js` (All Interactions)

**Size:** ~12KB | **Type:** JavaScript | **Purpose:** Interactive features

**Functionality:**

```javascript
// Theme Management (Line 1-30)
// - Detect saved theme
// - Toggle dark/light mode
// - Save preference to localStorage

// Mobile Menu (Line 40-70)
// - Toggle hamburger menu
// - Close on link click
// - Close on outside click

// Typing Animation (Line 80-130)
// - Rotate through roles
// - Type and delete with cursor
// - Configurable speed

// Back to Top Button (Line 140-160)
// - Show on scroll
// - Smooth scroll to top
// - Keyboard shortcut

// Smooth Scrolling (Line 170-185)
// - Smooth scroll for anchor links
// - No page jump

// Intersection Observer (Line 195-220)
// - Animate elements on scroll
// - Fade in effects

// Active Navigation (Line 230-250)
// - Highlight current section
// - Update on scroll

// GitHub Stats (Line 260-280)
// - Fetch GitHub API (optional)
// - Display stats

// Keyboard Navigation (Line 290-310)
// - Close menu on Escape
// - Jump to top/bottom
```

**Key features:**
- No jQuery dependencies
- Vanilla JavaScript ES6+
- Performance optimized
- Accessibility features
- Error handling

**Things to customize:**
- Typing animation roles
- Animation timing
- GitHub username

---

## 📋 Documentation Files

### `README.md` (Project Overview)

**Contents:**
- Feature list
- Project structure
- Getting started
- Customization basics
- Browser support
- Performance info
- SEO features
- Resources and links

**Use when:**
- First time viewing project
- Understanding features
- Need quick reference

---

### `DEPLOYMENT.md` (GitHub Pages Guide)

**Contents:**
- Prerequisites
- Step-by-step deployment
- Domain configuration
- Troubleshooting guide
- Monitoring setup
- SSL/HTTPS info

**Use when:**
- Deploying to GitHub
- Setting up custom domain
- Fixing deployment issues
- Understanding GitHub Pages

---

### `CUSTOMIZATION.md` (How to Change Everything)

**Contents:**
- Personal information
- Color customization
- Skills editing
- Experience updates
- Projects modification
- Social media links
- Advanced styling
- Font and spacing

**Use when:**
- Updating portfolio content
- Changing colors
- Adding new skills/projects
- Modifying layout

---

### `QUICK_START.md` (Fast Setup Guide)

**Contents:**
- 5-minute setup
- 10-minute customization
- Pre-deployment checklist
- Next steps
- Quick reference table

**Use when:**
- Setting up for first time
- Need quick instructions
- In a hurry

---

### `PERFORMANCE_SEO.md` (Optimization Guide)

**Contents:**
- Performance optimization tips
- Image optimization
- Minification guide
- Caching strategies
- SEO best practices
- Keyword research
- Analytics setup
- Monitoring guide

**Use when:**
- Want better performance
- Need SEO help
- Setting up analytics
- Improving rankings

---

## 🔧 Configuration Files

### `robots.txt` (Search Engine Crawling)

**Purpose:** Tell search engines how to crawl your site

**Current content:**
```
User-agent: *
Allow: /
Sitemap: https://USERNAME.github.io/sitemap.xml
```

**Instructions:**
1. Replace `USERNAME` with your GitHub username
2. Keep in root directory (alongside index.html)
3. Update Sitemap URL if using subdomain

---

### `sitemap.xml` (XML Sitemap for SEO)

**Purpose:** Help search engines find all pages

**Includes:**
- Home page
- All major sections (#home, #about, etc.)
- Update frequency hints
- Priority levels

**Instructions:**
1. Replace `USERNAME` with your GitHub username
2. Keep in root directory
3. Submit to Google Search Console

---

### `.gitignore` (Git Configuration)

**Purpose:** Prevent certain files from being committed

**Current ignores:**
- Node modules
- IDE files (.vscode, .idea)
- Compiled files
- OS files (.DS_Store)
- Backup files

**Use when:**
- Adding node_modules or build outputs
- Want to exclude sensitive files

---

## 📁 Assets Folder Structure

### `assets/images/`

**Purpose:** Store all images

**Recommended files:**
- `profile.jpg` - Your professional photo
- `project-*.jpg` - Project screenshots
- `hero-bg.jpg` - Background images (optional)

**Guidelines:**
- Size: < 500KB per image
- Format: JPG (photos), PNG (graphics), WebP (modern)
- Compress before adding
- Descriptive filenames

### `assets/icons/`

**Purpose:** Store SVG icons (optional)

**Recommended files:**
- `github.svg`
- `linkedin.svg`
- `twitter.svg`
- Custom skill icons

**Note:** Current portfolio uses emoji icons (no files needed)

### `assets/resume/`

**Purpose:** Store resume PDF

**Recommended files:**
- `Ranjan_Bera_Resume.pdf`
- `Resume.pdf`
- `CV.pdf`

**Setup:**
1. Convert resume to PDF
2. Place in `assets/resume/`
3. Add download link in HTML:

```html
<a href="assets/resume/Resume.pdf" download>Download Resume</a>
```

---

## 🔍 File Dependencies

```
index.html
├── Imports: style.css
├── Imports: script.js
├── References: assets/images/*
├── References: assets/resume/*
└── References: favicon

style.css
└── Used by: index.html (only dependency)

script.js
├── Used by: index.html
└── Depends on: DOM elements from index.html

robots.txt
├── Read by: Search engine bots
└── References: sitemap.xml

sitemap.xml
└── Referenced by: robots.txt, Search engines

.gitignore
└── Used by: Git (automatically)

Documentation Files
└── Read by: Developers/users (no dependencies)
```

---

## 📊 File Statistics

| File | Size | Type | Lines | Purpose |
|------|------|------|-------|---------|
| index.html | ~35KB | HTML5 | ~800 | Content |
| style.css | ~15KB | CSS3 | ~1000 | Styling |
| script.js | ~12KB | ES6+ JS | ~350 | Interaction |
| README.md | ~15KB | Markdown | ~450 | Overview |
| DEPLOYMENT.md | ~12KB | Markdown | ~350 | Deployment |
| CUSTOMIZATION.md | ~18KB | Markdown | ~550 | Customization |
| QUICK_START.md | ~3KB | Markdown | ~100 | Quick start |
| PERFORMANCE_SEO.md | ~14KB | Markdown | ~400 | Optimization |
| robots.txt | <1KB | Text | 5 | SEO |
| sitemap.xml | ~2KB | XML | 50 | SEO |
| .gitignore | <1KB | Text | 20 | Git config |
| **TOTAL** | **~137KB** | - | **~4100** | **Complete** |

---

## 🚀 Deployment Files

### What gets deployed to GitHub Pages?

**Required:**
- ✅ `index.html`
- ✅ `style.css`
- ✅ `script.js`
- ✅ `assets/` folder (all contents)

**Recommended:**
- ✅ `robots.txt`
- ✅ `sitemap.xml`
- ✅ `README.md`

**Optional (won't affect site):**
- 📝 Documentation files (README, DEPLOYMENT, etc.)
- 🚫 `.gitignore`

**Totally optional (GitHub Pages specific):**
- `_config.yml` (Jekyll configuration)
- `CNAME` (custom domain)

---

## 🔒 Security Files

**Never commit:**
- 🚫 API keys or secrets
- 🚫 Database credentials
- 🚫 Private tokens
- 🚫 Sensitive personal information

**Always commit:**
- ✅ Public links (GitHub, LinkedIn)
- ✅ Professional email
- ✅ General experience info

---

## 📝 Editing Best Practices

### When Editing Files:

1. **Always backup first:**
   ```bash
   cp index.html index.html.backup
   ```

2. **Use version control:**
   ```bash
   git add .
   git commit -m "Update experience section"
   git push
   ```

3. **Test before deploying:**
   - Open index.html locally
   - Test in different browsers
   - Check mobile responsiveness

4. **Validate HTML/CSS:**
   - Use https://validator.w3.org/
   - Check for errors before push

5. **Check links:**
   - Test all social media links
   - Verify email links work
   - Check internal navigation

---

## 🎯 Quick Reference

### To change...

| What | File | Line | How |
|------|------|------|-----|
| Name | index.html | ~130 | Edit `<h1>` text |
| Email | index.html | Multiple | Use Find & Replace |
| Colors | style.css | ~40 | Edit CSS variables |
| Typing roles | script.js | ~85 | Edit roles array |
| Skills | index.html | ~300 | Edit skill-items |
| Projects | index.html | ~530 | Edit project-cards |
| GitHub URL | index.html | Multiple | Use Find & Replace |
| Fonts | style.css | ~7 | Edit font-family |

---

## ✅ File Checklist

Before deployment:

- [ ] All HTML is valid (no syntax errors)
- [ ] All CSS is syntactically correct
- [ ] All JavaScript runs without errors
- [ ] All links point to correct URLs
- [ ] All images are in assets/ folder
- [ ] robots.txt has correct username
- [ ] sitemap.xml has correct username
- [ ] Resume PDF is in assets/resume/
- [ ] No broken internal links
- [ ] No console errors in DevTools

---

## 📞 File Support Reference

### Need to...

| Task | File to Edit | Documentation |
|------|-------------|---|
| Add project | index.html | CUSTOMIZATION.md |
| Deploy site | - | DEPLOYMENT.md |
| Optimize performance | style.css, script.js | PERFORMANCE_SEO.md |
| Improve SEO | robots.txt, sitemap.xml | PERFORMANCE_SEO.md |
| Change colors | style.css | CUSTOMIZATION.md |
| Add skills | index.html | CUSTOMIZATION.md |
| Update resume | Place in assets/resume/ | CUSTOMIZATION.md |
| Add images | Place in assets/images/ | CUSTOMIZATION.md |

---

## 🎓 Resources

- [HTML5 Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [JavaScript Console](DevTools F12)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Your portfolio project is fully documented and ready to go! 🚀**
