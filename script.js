// ===========================
// THEME MANAGEMENT
// ===========================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
} else {
    body.classList.remove('dark-theme');
    themeToggle.textContent = '🌙';
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
});

// ===========================
// MOBILE MENU TOGGLE
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===========================
// TYPING ANIMATION
// ===========================

const typingText = document.querySelector('.typing-text');
const roles = [
    'Senior DevOps Engineer',
    'AWS Cloud Engineer',
    'Platform Engineer',
    'Infrastructure Automation Expert',
    'DevOps Advocate'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenRoles = 2000;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
            return;
        }
        setTimeout(typeRole, deletingSpeed);
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, delayBetweenRoles);
            return;
        }
        setTimeout(typeRole, typingSpeed);
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeRole);

// ===========================
// BACK TO TOP BUTTON
// ===========================

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `slideInUp 0.6s ease-out forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-category, .project-card, .experience-card, .highlight-card').forEach(el => {
    observer.observe(el);
});

// Add CSS for slide-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ===========================
// ACTIVE NAV LINK HIGHLIGHTING
// ===========================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// GITHUB STATS (OPTIONAL)
// ===========================

// Function to fetch GitHub statistics
async function loadGitHubStats() {
    try {
        const response = await fetch('https://api.github.com/users/rbera04');
        if (!response.ok) throw new Error('Failed to fetch GitHub data');

        const data = await response.json();
        console.log('GitHub Stats:', {
            publicRepos: data.public_repos,
            followers: data.followers,
            following: data.following
        });

        // You can display these stats in your portfolio if needed
    } catch (error) {
        console.log('GitHub API error (this is okay for GitHub Pages):', error.message);
    }
}

// Load GitHub stats when page loads
window.addEventListener('load', loadGitHubStats);

// ===========================
// SCROLL PERFORMANCE OPTIMIZATION
// ===========================

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll logic here
            ticking = false;
        });
        ticking = true;
    }
});

// ===========================
// PREFETCH LINKS FOR FASTER NAVIGATION
// ===========================

function prefetchLinks() {
    const links = document.querySelectorAll('a[href*="github.com"], a[href*="linkedin.com"]');
    links.forEach(link => {
        const prefetcher = document.createElement('link');
        prefetcher.rel = 'prefetch';
        prefetcher.href = link.href;
        document.head.appendChild(prefetcher);
    });
}

window.addEventListener('load', prefetchLinks);

// ===========================
// KEYBOARD NAVIGATION
// ===========================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }

    // Scroll to top on Home key
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Scroll to bottom on End key
    if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

// ===========================
// PERFORMANCE MONITORING
// ===========================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('Page Load Time:', pageLoadTime + 'ms');
        }, 0);
    });
}

// ===========================
// LAZY LOADING FOR IMAGES
// ===========================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// SERVICE WORKER REGISTRATION (OPTIONAL)
// ===========================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment if you have a service worker
        // navigator.serviceWorker.register('/sw.js').catch(err => {
        //     console.log('Service Worker registration failed:', err);
        // });
    });
}

// ===========================
// ANALYTICS PLACEHOLDER
// ===========================

// Google Analytics or other analytics can be added here
// This is a placeholder for future analytics integration

// ===========================
// HELPER FUNCTIONS
// ===========================

// Debounce function for optimizing resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===========================
// RESPONSIVE BEHAVIOR
// ===========================

const handleResize = debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}, 250);

window.addEventListener('resize', handleResize);

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    console.log('Theme:', localStorage.getItem('theme') || 'light');

    populateResumeContent();

    // Attach resume download buttons
    const downloadHero = document.getElementById('download-resume-hero');
    const downloadNav = document.getElementById('download-resume-nav');
    if (downloadHero) downloadHero.addEventListener('click', handleResumeDownload);
    if (downloadNav) downloadNav.addEventListener('click', handleResumeDownload);
});

function populateResumeContent() {
    if (typeof resumeData === 'undefined') return;

    const heroName = document.getElementById('hero-name');
    const heroDescription = document.getElementById('hero-description');
    const aboutSummary = document.getElementById('about-summary');
    const aboutStats = document.getElementById('about-stats');
    const skillsGrid = document.getElementById('skills-grid');
    const experienceTimeline = document.getElementById('experience-timeline');
    const projectsGrid = document.getElementById('projects-grid');
    const certificationsContainer = document.getElementById('certifications');
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com"]');
    const githubLinks = document.querySelectorAll('a[href*="github.com"]');
    const nameElements = document.querySelectorAll('#footer-name');

    if (heroName) heroName.textContent = resumeData.name || resumeData.basics?.name || 'Ranjan Bera';
    if (heroDescription) heroDescription.textContent = resumeData.summary || resumeData.basics?.description || '';
    if (aboutSummary) aboutSummary.textContent = resumeData.summary || 'Experienced DevOps Engineer delivering cloud-native automation and platform engineering solutions.';

    const stats = [
        { value: `${Math.max(resumeData.experience?.length || 1, 1)}+`, label: 'Roles & Experience' },
        { value: `${Math.max(resumeData.projects?.length || 1, 1)}+`, label: 'Featured Projects' },
        { value: `${resumeData.skills?.length || 0}+`, label: 'Core Skills' }
    ];
    if (aboutStats) {
        aboutStats.innerHTML = stats.map(stat => `
            <div class="stat">
                <h3>${stat.value}</h3>
                <p>${stat.label}</p>
            </div>
        `).join('');
    }

    if (skillsGrid) {
        const skillsHtml = resumeData.skills?.map(skill => `<div class="skill-item">${skill}</div>`).join('') || '';
        const technicalHtml = resumeData.technicalSkills?.map(skill => `<div class="skill-item">${skill}</div>`).join('') || '';
        const softHtml = resumeData.softSkills?.map(skill => `<div class="skill-item">${skill}</div>`).join('') || '';
        skillsGrid.innerHTML = `
            <div class="skill-category">
                <h3 class="category-title">Core Skills</h3>
                <div class="skills-list">${skillsHtml}</div>
            </div>
            <div class="skill-category">
                <h3 class="category-title">Technical Skills</h3>
                <div class="skills-list">${technicalHtml}</div>
            </div>
            <div class="skill-category">
                <h3 class="category-title">Professional Skills</h3>
                <div class="skills-list">${softHtml}</div>
            </div>
        `;
    }

    if (experienceTimeline) {
        const spotlightHtml = `
            <div class="experience-spotlight">
                <div class="spotlight-card">
                    <p class="spotlight-label">Current Focus</p>
                    <h3>${resumeData.title || 'DevOps & Security Engineer'}</h3>
                    <p>${resumeData.summary || ''}</p>
                </div>
                <div class="spotlight-metrics">
                    <div class="metric-tile">
                        <span class="metric-value">4+</span>
                        <span class="metric-label">Years in cloud engineering</span>
                    </div>
                    <div class="metric-tile">
                        <span class="metric-value">AWS</span>
                        <span class="metric-label">Kubernetes & Terraform</span>
                    </div>
                    <div class="metric-tile">
                        <span class="metric-value">DevSecOps</span>
                        <span class="metric-label">Security-first delivery</span>
                    </div>
                </div>
            </div>
        `;

        const timelineHtml = resumeData.experience?.map(exp => `
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="experience-card">
                        <div class="card-header">
                            <div class="company-row">
                                <div>
                                    <h3 class="job-title">${exp.title}</h3>
                                    <span class="company">${exp.company}${exp.location ? ` • ${exp.location}` : ''}</span>
                                </div>
                                <span class="duration">${exp.duration || ''}</span>
                            </div>
                            <div class="job-meta">
                                <span class="meta-pill">Cloud Infrastructure</span>
                                <span class="meta-pill">Automation</span>
                                <span class="meta-pill">Security</span>
                                <span class="meta-pill">Scalability</span>
                                <span class="meta-pill">Cost Optimization</span>
                            </div>
                        </div>
                        <p class="job-summary">${exp.summary || ''}</p>
                        <ul class="job-highlights">
                            ${exp.responsibilities?.slice(0, 4).map(item => `<li>${item}</li>`).join('') || ''}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('') || '<p>No experience entries available.</p>';

        experienceTimeline.innerHTML = `${spotlightHtml}<div class="timeline">${timelineHtml}</div>`;
    }

    if (projectsGrid) {
        projectsGrid.innerHTML = resumeData.projects?.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <div class="project-icon">📌</div>
                    <h3>${project.name}</h3>
                </div>
                <p class="project-description">${project.description || ''}</p>
                <div class="project-tech">
                    ${project.link ? `<span class="tech-tag">Live</span>` : ''}
                </div>
                ${project.link ? `<a href="${project.link}" class="project-link" target="_blank">View on GitHub →</a>` : ''}
            </div>
        `).join('') || '<p>No projects available.</p>';
    }

    if (certificationsContainer) {
        certificationsContainer.innerHTML = `
            <h3 class="section-subtitle">Certifications</h3>
            <div class="cert-grid">
                ${resumeData.certifications?.map(cert => {
                    const title = typeof cert === 'string' ? cert : (cert.name || cert.title || 'Certification');
                    const link = typeof cert === 'object' && cert.link ? cert.link : '';
                    if (link) {
                        return `
                            <a class="cert-card cert-card-link" href="${link}" target="_blank" rel="noopener noreferrer">
                                <div class="cert-icon">🏅</div>
                                <h4>${title}</h4>
                                <p class="cert-link-hint">Open certificate</p>
                            </a>
                        `;
                    }
                    return `
                        <div class="cert-card">
                            <div class="cert-icon">🏅</div>
                            <h4>${title}</h4>
                        </div>
                    `;
                }).join('') || '<p>No certifications listed.</p>'}
            </div>
        `;
    }

    emailLinks.forEach(el => {
        el.setAttribute('href', `mailto:${resumeData.email}`);
        const emailText = el.querySelector('p');
        if (emailText) emailText.textContent = resumeData.email;
    });
    linkedinLinks.forEach(el => {
        el.setAttribute('href', resumeData.linkedin || '#');
    });
    githubLinks.forEach(el => {
        el.setAttribute('href', resumeData.github || '#');
    });
    nameElements.forEach(el => el.textContent = resumeData.name || resumeData.basics?.name || 'Ranjan Bera');
}

// ===========================
// Resume PDF Download
// ===========================

const resumePdfPath = 'assets/resume/Resume_Ranjan.pdf';

function handleResumeDownload() {
    const link = document.createElement('a');
    link.href = resumePdfPath;
    link.download = 'Resume_Ranjan.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function generateResumePDF() {
    handleResumeDownload();
}

function addResumeHeader(doc, data, margin, y, width) {
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(22);
    doc.setFont('Helvetica', 'bold');
    doc.text(data.name, margin, y);

    doc.setFontSize(10);
    doc.setFont('Helvetica', 'normal');
    const jobTitle = data.title || '';
    doc.text(jobTitle, margin, y + 8);

    const badge = 'RESUME';
    doc.setTextColor(100);
    doc.setFontSize(9);
    const badgeWidth = doc.getTextWidth(badge);
    doc.text(badge, pageWidth - margin - badgeWidth, y);
    doc.setTextColor(0);

    const contactItems = [
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Location: ${data.location}`,
        `LinkedIn: ${data.linkedin}`,
        `GitHub: ${data.github}`
    ];
    const contactText = contactItems.join(' | ');
    const wrapped = doc.splitTextToSize(contactText, width);
    doc.setFontSize(8);
    doc.text(wrapped, margin, y + 16);
}

function drawSidebarBackground(doc, x, y, width, height) {
    doc.setFillColor(242, 244, 247);
    doc.rect(x - 2, y - 2, width + 4, height + 4, 'F');
    doc.setFillColor(0, 0, 0);
}

function drawSectionHeader(doc, title, x, y, width) {
    doc.setFontSize(10);
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(20);
    doc.text(title, x, y);

    doc.setDrawColor(100);
    doc.setLineWidth(0.5);
    doc.line(x, y + 1.8, x + Math.min(width, 45), y + 1.8);

    doc.setTextColor(0);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(9);
    return y + 5.5;
}

function ensureSpace(doc, y, pageHeight, margin, neededHeight) {
    if (y + neededHeight > pageHeight - margin) {
        doc.addPage();
        return margin;
    }
    return y;
}

function addSidebarSection(doc, title, items, x, y, width, pageHeight, margin, formatter) {
    if (!items || items.length === 0) return y;
    y = ensureSpace(doc, y, pageHeight, margin, 12);
    y = drawSectionHeader(doc, title, x, y, width);
    const lines = Array.isArray(items) ? items : [items];
    lines.forEach(item => {
        const text = formatter ? formatter(item) : (typeof item === 'string' ? item : String(item));
        doc.setFontSize(8.5);
        doc.setFont('Helvetica', 'normal');
        const wrapped = doc.splitTextToSize(text, width);
        wrapped.forEach(line => {
            if (y > pageHeight - margin) {
                doc.addPage();
                y = margin;
            }
            doc.text(line, x, y);
            y += 4.5;
        });
        y += 2;
    });
    return y + 4;
}

function formatContact(data) {
    return [
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Location: ${data.location}`,
        `LinkedIn: ${data.linkedin}`,
        `GitHub: ${data.github}`
    ];
}

function formatEducation(entry) {
    const lines = [`${entry.degree}`, `${entry.institution}${entry.year ? ` (${entry.year})` : ''}`];
    if (entry.details) lines.push(entry.details);
    return lines.join('\n');
}

function addMainSummary(doc, title, text, x, y, width, pageHeight, margin) {
    if (!text) return y;
    y = ensureSpace(doc, y, pageHeight, margin, 20);
    y = drawSectionHeader(doc, title, x, y, width);
    doc.setFontSize(9);
    doc.setFont('Helvetica', 'normal');
    const wrapped = doc.splitTextToSize(text, width);
    wrapped.forEach(line => {
        if (y > pageHeight - margin) { doc.addPage(); y = margin + 5; }
        doc.text(line, x, y);
        y += 5;
    });
    return y + 4;
}

function addMainExperience(doc, title, experiences, x, y, width, pageHeight, margin) {
    if (!experiences || experiences.length === 0) return y;
    y = ensureSpace(doc, y, pageHeight, margin, 20);
    y = drawSectionHeader(doc, title, x, y, width);
    experiences.forEach(exp => {
        if (!exp.title) return;
        y = ensureSpace(doc, y, pageHeight, margin, 12);
        doc.setFontSize(9);
        doc.setFont('Helvetica', 'bold');
        doc.text(`${exp.title} • ${exp.company}`, x, y);
        doc.setFont('Helvetica', 'italic');
        const dateStr = exp.duration || ((exp.startDate || '') + (exp.endDate ? ' – ' + exp.endDate : ' – Present'));
        if (dateStr) {
            const dateWidth = doc.getTextWidth(dateStr);
            doc.text(dateStr, x + width - dateWidth, y);
        }
        y += 5;

        doc.setFont('Helvetica', 'normal');
        if (exp.summary) {
            const summaryLines = doc.splitTextToSize(exp.summary, width);
            summaryLines.forEach(line => {
                y = ensureSpace(doc, y, pageHeight, margin, 5);
                doc.text(line, x, y);
                y += 5;
            });
            y += 2;
        }

        const bullets = exp.responsibilities || exp.highlights || [];
        bullets.slice(0, 6).forEach(point => {
            y = ensureSpace(doc, y, pageHeight, margin, 6);
            const bulletText = `• ${point}`;
            const wrapped = doc.splitTextToSize(bulletText, width);
            wrapped.forEach(line => {
                doc.text(line, x + 2, y);
                y += 5;
            });
            y += 1;
        });
        y += 4;
    });
    return y + 4;
}

function addMainProjects(doc, title, projects, x, y, width, pageHeight, margin) {
    if (!projects || projects.length === 0) return y;
    y = ensureSpace(doc, y, pageHeight, margin, 20);
    y = drawSectionHeader(doc, title, x, y, width);
    projects.forEach(project => {
        y = ensureSpace(doc, y, pageHeight, margin, 12);
        doc.setFontSize(9);
        doc.setFont('Helvetica', 'bold');
        doc.text(project.name, x, y);
        y += 5;
        doc.setFont('Helvetica', 'normal');
        if (project.description) {
            const descLines = doc.splitTextToSize(project.description, width);
            descLines.forEach(line => {
                y = ensureSpace(doc, y, pageHeight, margin, 5);
                doc.text(line, x, y);
                y += 5;
            });
        }
        if (project.link) {
            y = ensureSpace(doc, y, pageHeight, margin, 6);
            doc.setTextColor(0, 0, 200);
            doc.textWithLink('View', x, y, { url: project.link });
            doc.setTextColor(0, 0, 0);
            y += 6;
        }
        y += 2;
    });
    return y + 4;
}

function addMainList(doc, title, items, x, y, width, pageHeight, margin) {
    if (!items || items.length === 0) return y;
    y = ensureSpace(doc, y, pageHeight, margin, 20);
    y = drawSectionHeader(doc, title, x, y, width);
    items.forEach(item => {
        const text = typeof item === 'string' ? item : (item.name || item.degree || item.title || JSON.stringify(item));
        const wrapped = doc.splitTextToSize(text, width);
        wrapped.forEach(line => {
            y = ensureSpace(doc, y, pageHeight, margin, 5);
            doc.text(line, x, y);
            y += 5;
        });
        y += 1;
    });
    return y + 4;
}

