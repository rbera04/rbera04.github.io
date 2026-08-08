# Quick Start Guide

Get your DevOps Engineer Portfolio live in minutes!

## ⚡ 5-Minute Setup

### Step 1: Clone or Download

```bash
# Clone from GitHub
git clone https://github.com/rbera04/portfolio.git
cd portfolio

# Or download ZIP and extract
```

### Step 2: Update Your Information

1. Open `index.html` in a text editor
2. Find and replace:
   - `Ranjan Bera` → Your name
   - `your-email@example.com` → Your email
   - `https://github.com/rbera04` → Your GitHub
   - `https://www.linkedin.com/in/ranjanbera1112/` → Your LinkedIn

### Step 3: Test Locally

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python2 -m SimpleHTTPServer 8000

# Then visit http://localhost:8000
```

### Step 4: Deploy to GitHub

```bash
# Create GitHub repo named USERNAME.github.io
# Then push your code:

git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

### Step 5: Access Your Portfolio

Visit: `https://USERNAME.github.io`

**That's it! Your portfolio is live! 🎉**

---

## 📋 Customize in 10 Minutes

### 1. Update Hero Section (2 min)

Edit `index.html` line ~130-150:
- Change name
- Update description
- Modify email in social links

### 2. Update Skills (2 min)

Edit `index.html` line ~300-370:
- Add your skills
- Update categories
- Remove unnecessary items

### 3. Update Experience (3 min)

Edit `index.html` line ~385-450:
- Change company and years
- Update job description
- Add achievements

### 4. Update Projects (3 min)

Edit `index.html` line ~530-630:
- Add your projects
- Update GitHub links
- Modify descriptions

---

## 🎨 Styling Tips

### Change Primary Color

Edit `style.css` line ~40:

```css
--color-accent-light: #10b981;  /* Change this hex code */
```

Popular colors:
- Blue: `#0ea5e9`
- Purple: `#a855f7`
- Orange: `#f97316`
- Red: `#ef4444`

### Change Font

Add to top of `style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=InterMono:wght@400;600;700&display=swap');

:root {
    --font-family-primary: 'InterMono', sans-serif;
}
```

---

## ✅ Pre-Deployment Checklist

Before pushing to GitHub:

- [ ] Updated your name
- [ ] Updated your email
- [ ] Updated GitHub URL
- [ ] Updated LinkedIn URL
- [ ] Added your skills
- [ ] Added your projects
- [ ] Updated experience
- [ ] Tested dark/light theme
- [ ] Checked mobile responsiveness
- [ ] No broken links
- [ ] No console errors

---

## 🚀 Next Steps

After deployment:

1. **Share your portfolio:**
   - LinkedIn profile
   - GitHub bio
   - Email signature
   - Resume

2. **Keep it updated:**
   - Add new projects quarterly
   - Update skills section
   - Refresh experience
   - Fix any issues

3. **Monitor traffic:**
   - Add Google Analytics
   - Track visitor behavior
   - Check bounce rate

4. **Optimize for SEO:**
   - Update meta descriptions
   - Add keywords
   - Build backlinks
   - Submit to search engines

---

## 📞 Need Help?

- 📖 Read **CUSTOMIZATION.md** for detailed changes
- 🚀 Read **DEPLOYMENT.md** for deployment issues
- 📚 Check **README.md** for full documentation
- 🐛 Check browser console (F12) for errors

---

**Ready to showcase your DevOps expertise? Let's go! 🚀**
