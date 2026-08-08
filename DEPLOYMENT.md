# Deployment Guide for GitHub Pages

Complete step-by-step guide to deploy your DevOps Engineer Portfolio to GitHub Pages.

## 📋 Prerequisites

- GitHub account (free at https://github.com)
- Git installed on your machine
- Your portfolio files ready
- Basic command line knowledge

## 🚀 Quick Start Deployment

### Option 1: Using `USERNAME.github.io` Repository (Recommended)

This is the simplest method - your portfolio will be hosted at `https://USERNAME.github.io`

#### Step 1: Create Repository

1. Go to https://github.com/new
2. Repository name: **`rbera04.github.io`** (replace with your GitHub username)
3. Description: "DevOps Engineer Portfolio"
4. Make it **Public**
5. **DO NOT** initialize with README
6. Click **Create repository**

#### Step 2: Clone the Repository

```bash
cd ~/Documents  # or your preferred directory
git clone https://github.com/rbera04/rbera04.github.io.git
cd rbera04.github.io
```

#### Step 3: Add Your Portfolio Files

Copy all portfolio files into the cloned repository:

```bash
# Copy your portfolio files
cp -r ~/path/to/portfolio/* .

# Verify files are there
ls -la
# You should see: index.html, style.css, script.js, README.md, assets/, etc.
```

#### Step 4: Commit and Push

```bash
# Check status
git status

# Add all files
git add .

# Commit with a message
git commit -m "Initial portfolio commit - DevOps Engineer Portfolio"

# Ensure you're on main branch (GitHub Pages default)
git branch -M main

# Push to GitHub
git push -u origin main
```

#### Step 5: Verify Deployment

1. Go to your repository on GitHub: `https://github.com/rbera04/rbera04.github.io`
2. Click on **Settings** tab
3. Scroll to **Pages** section
4. You should see: "Your site is published at https://rbera04.github.io"
5. Visit `https://rbera04.github.io` in your browser

**Wait 1-2 minutes** for GitHub to build and deploy your site.

### Option 2: Using Project Repository

If you prefer to use a different repository name:

#### Step 1: Create Repository

1. Go to https://github.com/new
2. Repository name: **`portfolio`** (or any name you want)
3. Description: "DevOps Engineer Portfolio"
4. Make it **Public**
5. **DO NOT** initialize with README
6. Click **Create repository**

#### Step 2: Clone and Add Files

```bash
git clone https://github.com/rbera04/portfolio.git
cd portfolio
# Copy your portfolio files here
```

#### Step 3: Commit and Push

```bash
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git push -u origin main
```

#### Step 4: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in the left sidebar
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**

#### Step 5: Access Your Portfolio

Your portfolio will be available at: `https://rbera04.github.io/portfolio`

**Note:** Update the Open Graph URL in `index.html` if using this method:
```html
<meta property="og:url" content="https://rbera04.github.io/portfolio">
```

## 🔧 After Initial Deployment

### Making Updates

After your portfolio is deployed, you can make updates anytime:

```bash
cd rbera04.github.io

# Make changes to your files (e.g., update index.html)
# Then commit and push:

git add .
git commit -m "Update portfolio - Added new project"
git push
```

**GitHub Pages will automatically redeploy within 1-2 minutes.**

### Viewing Deployment Status

1. Go to your repository
2. Click **Actions** tab
3. Watch the deployment process
4. Green checkmark = successful deployment
5. Red X = deployment failed (check logs)

## 🎯 Deployment Checklist

Before deploying, verify:

- [ ] All HTML files are valid and error-free
- [ ] All CSS files are linked correctly
- [ ] All JavaScript files are linked correctly
- [ ] All images are in `/assets/images/` folder
- [ ] All external links are correct
- [ ] Contact email is updated
- [ ] Social media links are correct
- [ ] Resume file is in `/assets/resume/`
- [ ] No console errors in browser DevTools
- [ ] Website looks good on mobile
- [ ] All pages are responsive
- [ ] Dark/light theme works
- [ ] Navigation links work
- [ ] Back-to-top button works

## 🌐 Custom Domain Setup (Optional)

To use a custom domain like `ranjanbera.dev`:

### Step 1: Buy Domain

Purchase a domain from:
- GoDaddy
- Namecheap
- Google Domains
- AWS Route53

### Step 2: Configure DNS

For GitHub Pages with custom domain:

**Using A Records (Recommended for `rbera04.github.io`):**

1. Go to your domain registrar's DNS settings
2. Add A records pointing to GitHub's IP addresses:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

**Using CNAME Record (For subdomain):**

1. Add CNAME record:
   ```
   Name: www
   Value: rbera04.github.io
   ```

### Step 3: Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter your domain: `ranjanbera.dev`
3. Check "Enforce HTTPS"
4. Click **Save**

**Wait 24-48 hours for DNS propagation.**

### Step 4: Verify

```bash
# Check DNS configuration
nslookup ranjanbera.dev

# Or use dig
dig ranjanbera.dev
```

## 📱 Testing Before Deployment

Test your portfolio locally:

### Using Python:

```bash
cd portfolio
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Using Node.js:

```bash
npx http-server
# Visit http://localhost:8080
```

### Test Checklist:

- [ ] All pages load correctly
- [ ] All links work
- [ ] Images display properly
- [ ] Responsive design works on mobile
- [ ] Dark/light theme toggle works
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Fast page load time

## 🔒 Security Best Practices

- [ ] Use HTTPS (automatic with GitHub Pages)
- [ ] No sensitive information in code
- [ ] No API keys or credentials exposed
- [ ] Use environment variables (not in repo)
- [ ] Validate all external links
- [ ] Keep dependencies updated
- [ ] Regular security audits

## 🚨 Troubleshooting

### Portfolio not showing?

**Check 1: Repository Name**
```bash
# For personal site, MUST be:
USERNAME.github.io
# Not just "portfolio" or anything else
```

**Check 2: Branch Name**
```bash
# GitHub Pages typically uses 'main' or 'master'
git branch -M main
git push -u origin main
```

**Check 3: GitHub Pages Settings**
1. Settings → Pages
2. Ensure it's set to deploy from "main" branch
3. Folder should be "/" (root)

**Check 4: Check Deployment Status**
1. Click "Actions" tab
2. Check if deployment succeeded
3. Look for green checkmark

**Check 5: Clear Cache**
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Try different browser
3. Try private/incognito mode

### Index.html not loading?

```bash
# Make sure index.html exists in root
ls -la index.html

# GitHub Pages looks for index.html in the root directory
# Structure should be:
# ├── index.html
# ├── style.css
# ├── script.js
# └── assets/
```

### CSS/JavaScript not working?

1. Check file paths are relative:
   ```html
   <!-- Correct -->
   <link rel="stylesheet" href="style.css">
   <script src="script.js"></script>
   
   <!-- Wrong -->
   <link rel="stylesheet" href="/style.css">  <!-- Leading slash issues -->
   ```

2. Check files exist in repository
3. Check there are no typos in filenames
4. Hard refresh browser cache

### Images not showing?

1. Ensure images are in `/assets/images/` folder
2. Check image paths in HTML:
   ```html
   <!-- Correct -->
   <img src="assets/images/profile.jpg" alt="Profile">
   
   <!-- Wrong -->
   <img src="/assets/images/profile.jpg" alt="Profile">
   ```

3. Verify image files actually exist
4. Check file extensions (jpg, png, webp)

## ✅ Post-Deployment Checklist

After successful deployment:

- [ ] Website loads at `https://USERNAME.github.io`
- [ ] All pages are accessible
- [ ] Performance is good (use Lighthouse)
- [ ] SEO tags are working
- [ ] Social media preview works
- [ ] Mobile responsive design works
- [ ] Dark/light theme works
- [ ] All links are functional
- [ ] Contact form works (if applicable)
- [ ] Analytics tracking works (if added)

## 📊 Monitoring & Maintenance

### Monitor Performance

```bash
# Install Lighthouse CI (optional)
npm install -g @lhci/cli@

# Run audit
lhci autorun
```

### Check Analytics

1. Set up Google Analytics (optional)
2. Track visitor behavior
3. Monitor page load times
4. Check traffic sources

### Regular Updates

- Update portfolio quarterly
- Add new projects
- Update skills section
- Refresh experience section
- Fix broken links
- Update resume

## 🎓 GitHub Pages Documentation

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Configuring a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

## 📞 Getting Help

If you encounter issues:

1. **Check GitHub Pages Status:** https://www.githubstatus.com/
2. **Read Documentation:** https://docs.github.com/en/pages
3. **Search GitHub Issues:** Look for similar problems
4. **Create GitHub Issue:** Describe your problem with error messages

---

**Your portfolio is now live and ready to impress! 🚀**

Keep it updated, track metrics, and continuously improve your personal brand.
