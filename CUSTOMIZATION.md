# Customization Guide

Complete guide to customize every aspect of your DevOps Engineer Portfolio.

## 📝 Table of Contents

1. [Personal Information](#personal-information)
2. [Color & Theme](#color--theme)
3. [Skills Section](#skills-section)
4. [Experience Section](#experience-section)
5. [Projects Section](#projects-section)
6. [Social Media Links](#social-media-links)
7. [Advanced Customization](#advanced-customization)

---

## 👤 Personal Information

### Update Your Name and Title

Edit `index.html` - Hero section:

```html
<!-- Line ~130 -->
<h1 class="hero-title">
    Hi, I'm <span class="gradient-text">Ranjan Bera</span>
</h1>
```

Replace `Ranjan Bera` with your name.

### Update Hero Subtitle Roles

Edit `index.html` - Typing animation roles in `script.js`:

```javascript
// Line ~85 in script.js
const roles = [
    'Senior DevOps Engineer',
    'AWS Cloud Engineer',
    'Platform Engineer',
    'Infrastructure Automation Expert',
    'DevOps Advocate'
];
```

Customize these roles. They will cycle with typing animation.

### Update Hero Description

Edit `index.html` - around line 145:

```html
<p class="hero-description">
    Senior DevOps Engineer with 4+ years of expertise in AWS Cloud, 
    Kubernetes, Terraform, and modern CI/CD practices. 
    Passionate about building scalable, secure, and automated 
    cloud-native platforms.
</p>
```

Update this paragraph with your experience summary.

### Update About Section

Edit `index.html` - About section (lines ~220-250):

```html
<p>
    I'm a passionate DevOps Engineer with over 4 years of hands-on 
    experience at Tata Consultancy Services (TCS)...
</p>
```

Update company name, years, and description.

```html
<div class="about-stats">
    <div class="stat">
        <h3>4+</h3>
        <p>Years Experience</p>
    </div>
    <div class="stat">
        <h3>20+</h3>
        <p>Projects Deployed</p>
    </div>
    <div class="stat">
        <h3>15+</h3>
        <p>Cloud Services</p>
    </div>
</div>
```

Update these statistics to match your experience.

### Update Contact Email

Find and replace all instances of:

```html
<!-- Change from: -->
<a href="mailto:your-email@example.com">

<!-- To your email: -->
<a href="mailto:your.email@domain.com">
```

**Search in:**
- Hero section (social links)
- Contact section
- Footer

---

## 🎨 Color & Theme

### Primary Color (Green)

The main accent color is green. To change it:

Edit `style.css` - Line ~40 (CSS Variables):

```css
/* Light Mode */
--color-accent-light: #10b981;        /* Change this */
--color-accent-hover-light: #059669;  /* And this */

/* Dark Mode */
--color-accent-dark: #10b981;         /* And this */
--color-accent-hover-dark: #34d399;   /* And this */
```

**Popular color codes:**
- Blue: `#0ea5e9` / `#0284c7`
- Purple: `#a855f7` / `#9333ea`
- Orange: `#f97316` / `#ea580c`
- Red: `#ef4444` / `#dc2626`
- Cyan: `#06b6d4` / `#0891b2`

### Update Gradient

Edit `style.css` - Line ~47:

```css
--gradient-primary: linear-gradient(135deg, #10b981 0%, #059669 100%);
--gradient-secondary: linear-gradient(135deg, #06b6d4 0%, #10b981 100%);
--gradient-accent: linear-gradient(135deg, #f97316 0%, #10b981 100%);
```

Change the hex colors to your preferred colors.

### Light Mode Colors

Edit `style.css` - Lines ~20-30:

```css
--color-bg-light: #ffffff;              /* Page background */
--color-bg-secondary-light: #f8fafc;    /* Alternate sections */
--color-text-light: #0f172a;            /* Main text */
--color-text-secondary-light: #475569;  /* Secondary text */
--color-border-light: #e2e8f0;          /* Borders */
```

### Dark Mode Colors

Edit `style.css` - Lines ~32-42:

```css
--color-bg-dark: #0f172a;               /* Dark background */
--color-bg-secondary-dark: #1e293b;     /* Dark alternate */
--color-text-dark: #f1f5f9;             /* Light text */
--color-text-secondary-dark: #cbd5e1;   /* Light secondary */
--color-border-dark: #334155;           /* Dark borders */
```

---

## 💪 Skills Section

### Add New Skills

Edit `index.html` - Skills section (lines ~300-370):

Add new skill category:

```html
<!-- Copy this entire block -->
<div class="skill-category">
    <h3 class="category-title">🔗 Your Category Icon</h3>
    <div class="skills-list">
        <div class="skill-item">Skill 1</div>
        <div class="skill-item">Skill 2</div>
        <div class="skill-item">Skill 3</div>
    </div>
</div>
```

Change:
- `🔗` - Replace with emoji
- `Your Category Icon` - Category name
- `Skill 1, Skill 2...` - Your skills

### Remove Skills

Simply delete the entire `<div class="skill-category">...</div>` block.

### Modify Existing Skills

Find the skill in `index.html` and edit:

```html
<div class="skill-item">Docker</div>  <!-- Change "Docker" to new skill -->
```

### Skill Category Icons

Popular emojis for categories:
- Cloud: ☁️
- Container: 🐳
- CI/CD: ⚙️
- Infrastructure: 🔧
- Programming: 💻
- Monitoring: 📊
- Security: 🔐
- Database: 🗄️
- Messaging: 📨

---

## 💼 Experience Section

### Update Job Title

Edit `index.html` - Experience section (lines ~385-430):

```html
<h3 class="job-title">Senior DevOps Engineer</h3>  <!-- Change this -->
<span class="company">Tata Consultancy Services (TCS)</span>
<span class="duration">4+ Years</span>
```

### Update Job Description

```html
<p class="job-description">
    Led cloud infrastructure initiatives and DevOps automation 
    projects across multiple AWS environments.
</p>
```

Change the description to match your role.

### Add Job Achievements

Edit the job highlights section:

```html
<ul class="job-highlights">
    <li>Architected and deployed enterprise-grade EKS clusters</li>
    <li>Implemented GitLab self-hosted on EKS with RDS and Redis</li>
    <li>Your achievement here</li>
</ul>
```

Add your own achievements as `<li>` items.

### Add Another Job

Copy this entire block and modify:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="experience-card">
            <div class="card-header">
                <h3 class="job-title">Your Job Title</h3>
                <span class="company">Company Name</span>
                <span class="duration">Duration</span>
            </div>
            <p class="job-description">Your description</p>
            <ul class="job-highlights">
                <li>Achievement 1</li>
                <li>Achievement 2</li>
                <li>Achievement 3</li>
            </ul>
        </div>
    </div>
</div>
```

### Update Certifications

Edit `index.html` - Certifications section (lines ~450-475):

```html
<div class="cert-card">
    <div class="cert-icon">☁️</div>
    <h4>AWS Certified Cloud Practitioner</h4>
    <p>Your cert description</p>
</div>
```

Add new certifications by copying this block or remove existing ones.

---

## 🚀 Projects Section

### Add New Project

Edit `index.html` - Projects section (lines ~530-630):

Copy this template and modify:

```html
<div class="project-card">
    <div class="project-header">
        <div class="project-icon">📦</div>  <!-- Change emoji -->
        <h3>Project Title</h3>
    </div>
    <p class="project-description">
        Project description - what problem it solves and how
    </p>
    <div class="project-tech">
        <span class="tech-tag">Tech 1</span>
        <span class="tech-tag">Tech 2</span>
        <span class="tech-tag">Tech 3</span>
    </div>
    <a href="https://github.com/rbera04/project" class="project-link" target="_blank">
        View on GitHub →
    </a>
</div>
```

### Update Project Details

- `📦` - Project icon emoji
- `Project Title` - Your project name
- `Project description` - What it does
- `Tech 1, Tech 2...` - Technologies used
- `https://github.com/rbera04/project` - Your GitHub repo link

### Project Icons

- Infrastructure: 📦, 🏗️, 🔨
- Security: 🔐, 🔒, 🛡️
- Pipeline: ⚙️, 🔄, 🚀
- Automation: 🤖, ⚡, 🎯
- Data: 📊, 📈, 🗄️
- Monitoring: 📈, 👁️, 🔍
- Network: 🌐, 🔗, 📡

### Remove Project

Simply delete the entire `<div class="project-card">...</div>` block.

---

## 🔗 Social Media Links

### Update GitHub URL

Find and replace all instances of:

```html
href="https://github.com/rbera04"
```

With your GitHub URL:

```html
href="https://github.com/YOUR_USERNAME"
```

**Locations in index.html:**
1. Hero section (line ~180)
2. Footer section (bottom)
3. Contact section (line ~770)

### Update LinkedIn URL

Find and replace:

```html
href="https://www.linkedin.com/in/ranjanbera1112/"
```

With your LinkedIn:

```html
href="https://www.linkedin.com/in/YOUR_USERNAME/"
```

**Locations:**
1. Hero section (line ~185)
2. Contact section (line ~765)

### Update Email Address

Find and replace:

```html
href="mailto:your-email@example.com"
```

With your email:

```html
href="mailto:your-actual-email@example.com"
```

### Add More Social Links

Edit the social links section in hero (around line 180):

```html
<div class="social-links-hero">
    <!-- GitHub -->
    <a href="https://github.com/rbera04" target="_blank" class="social-link" title="GitHub">
        <!-- SVG code -->
    </a>
    
    <!-- Add more links like this -->
    <a href="https://twitter.com/yourusername" target="_blank" class="social-link" title="Twitter">
        <!-- SVG code for Twitter -->
    </a>
</div>
```

---

## 🎨 Advanced Customization

### Change Font

Edit `style.css` - Line ~7:

```css
--font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

Replace with your preferred font:

```css
/* Google Fonts example */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

--font-family-primary: 'Poppins', sans-serif;
```

### Change Font Sizes

Edit `style.css` - Lines ~12-21:

```css
--font-size-base: 1rem;      /* Change 1rem to your size */
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;
--font-size-5xl: 3rem;
```

### Change Spacing

Edit `style.css` - Lines ~23-31:

```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;        /* Increase/decrease these */
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
--spacing-3xl: 4rem;
```

### Modify Animation Speed

Edit `style.css` - Lines ~39-41:

```css
--transition-fast: 150ms;     /* Increase for slower animations */
--transition-normal: 300ms;
--transition-smooth: 500ms;
```

### Change Border Radius

Edit `style.css` - Lines ~33-38:

```css
--radius-sm: 0.375rem;     /* Change these values */
--radius-md: 0.5rem;
--radius-lg: 0.75rem;
--radius-xl: 1rem;
--radius-2xl: 1.5rem;
```

### Add Custom CSS

Add custom styles to the bottom of `style.css`:

```css
/* Your custom styles here */
.custom-class {
    background: blue;
    padding: 20px;
}
```

### Modify Section Padding

Edit `style.css` - Line ~100:

```css
section {
    padding: var(--spacing-3xl) 0;  /* Increase/decrease this */
}
```

---

## 📱 Mobile Customization

### Change Mobile Breakpoints

Edit `style.css` - Media queries section (line ~800+):

```css
/* Default breakpoints */
@media (max-width: 1024px) { ... }
@media (max-width: 768px) { ... }
@media (max-width: 480px) { ... }
```

Change these pixel values to adjust when layout changes.

### Adjust Mobile Padding

Edit `style.css` - Mobile section (line ~870):

```css
.container {
    padding: 0 var(--spacing-md);  /* Increase for more padding */
}
```

---

## 🔧 SEO Customization

### Update Meta Description

Edit `index.html` - Line ~6:

```html
<meta name="description" content="Your custom description here">
```

Keep it under 160 characters.

### Update Page Title

Edit `index.html` - Line ~15:

```html
<title>Your Name - Your Title | Portfolio</title>
```

### Update Open Graph Tags

Edit `index.html` - Lines ~9-13:

```html
<meta property="og:title" content="Your Name - Your Title">
<meta property="og:description" content="Your description">
<meta property="og:type" content="website">
<meta property="og:url" content="https://your-domain.com">
```

### Update Keywords

Edit `index.html` - Line ~7:

```html
<meta name="keywords" content="devops, aws, kubernetes, terraform, cloud">
```

Add relevant keywords separated by commas.

---

## 📸 Adding Images

### Add Profile Picture

1. Place image in `assets/images/` folder
2. Add to HTML:

```html
<!-- Example in about section -->
<img src="assets/images/profile.jpg" alt="Profile Photo">
```

### Add Project Screenshots

1. Place images in `assets/images/` folder
2. Add to projects (optional enhancement):

```html
<img src="assets/images/project-screenshot.jpg" alt="Project Screenshot">
```

### Optimize Images

Use these tools to compress images:
- TinyPNG/TinyJPG (online)
- ImageOptim (macOS)
- FileOptimizer (Windows)

---

## 🎯 Quick Reference

| What to Change | Where | How |
|---|---|---|
| Name | index.html Line ~130 | Change text in `<h1>` |
| Email | index.html Multiple | Use Ctrl+H (Find & Replace) |
| Skills | index.html Line ~300 | Add/remove `<div class="skill-item">` |
| Projects | index.html Line ~530 | Add/remove project cards |
| Colors | style.css Line ~20 | Edit CSS variables |
| GitHub URL | index.html Multiple | Use Find & Replace |
| LinkedIn URL | index.html Multiple | Use Find & Replace |
| Font Size | style.css Line ~12 | Edit `--font-size-*` variables |

---

## ✅ Testing Your Changes

After making changes:

1. **Save files**
2. **Hard refresh browser** (Ctrl+Shift+R)
3. **Check different breakpoints** (mobile, tablet, desktop)
4. **Test dark/light theme** toggle
5. **Test all links** (internal and external)
6. **Check animations** work smoothly
7. **Verify responsive design** using DevTools

---

## 🆘 Common Issues

### Changes not showing?

1. Hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`
2. Clear cache in DevTools
3. Try private/incognito mode
4. Check HTML/CSS syntax

### Styling breaks after changes?

1. Check closing tags `</div>`
2. Verify CSS syntax (semicolons, brackets)
3. Check for typos in class names
4. Use browser DevTools to inspect

### Layout looks different?

1. Check CSS indentation
2. Verify media queries
3. Test on different browsers
4. Check screen size

---

## 📞 Tips & Tricks

1. **Use Find & Replace (Ctrl+H)** to change repeated items
2. **Comment out CSS** (`/* */`) to test changes
3. **Use DevTools Inspector** to debug styles
4. **Keep backups** before major changes
5. **Test changes locally** before pushing to GitHub

---

**Happy customizing! 🎉**

Your portfolio is now ready to be personalized to showcase your unique DevOps journey and expertise!
