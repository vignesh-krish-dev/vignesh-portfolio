# 🌐 Vignesh's Portfolio

Welcome to my personal web developer portfolio! This portfolio showcases my skills, projects, education, certifications, and experience through a fully responsive design optimized for desktop, tablet, and mobile devices.

## 🔹 Live Demo

🔗 **[View Portfolio](https://vignesh-krish-dev.github.io/vignesh-portfolio/)**

## 📌 About

I am passionate about developing dynamic and responsive web experiences with intuitive UI designs. With experience in HTML, CSS, JavaScript, and backend development, I focus on creating engaging user interfaces with clean and structured frontend logic.

This portfolio highlights my technical skills, projects, certifications, education, and professional experience.

---

## 🖥️ Technologies Used

* **Frontend:** HTML, CSS, vanilla JavaScript
* **Icons:** Bootstrap Icons (CDN)
* **Fonts:** Space Grotesk, Inter (Google Fonts)
* **Contact form:** FormSubmit

No frameworks and no build step — the site runs straight from `index.html`.

---

## 📁 Project Structure

```
index.html          the page itself
css/                one stylesheet per section
js/                 one script per section
img/                images and certificate thumbnails
resume.pdf          downloadable CV
```

Styles and scripts are split per section and loaded from `index.html` in a
**fixed order** — the CSS cascade and the script execution both depend on it:

* `css/reveal.css` must load **last** (its `.reveal` rules override section-level transitions)
* `js/experience.js` must load **before** `js/common.js` (it builds the timeline markup that `common.js` then observes)

---

## 📂 Portfolio Sections

* **Hero** – Introduction with an animated role rotator.
* **About** – Background, interests, and approach to building software.
* **Experience** – Professional work, with expandable detail for each project.
* **Skills** – Technical skills, tools, and frameworks.
* **Projects** – Personal projects with descriptions and technologies used.
* **Certifications** – Completed courses, with a certificate preview.
* **Education** – Academic background and qualifications.
* **Contact** – Contact details and a working message form.

---

## 📱 Responsive Design

The portfolio is fully responsive from **320px to 2560px**:

* **Large monitor (≥1600px)** – Wider container so the layout doesn't sit stranded in the middle.
* **Laptop (1024–1599px)** – Full multi-column layout.
* **Tablet (640–1023px)** – Single-column hero, collapsed grids, 44px touch targets.
* **Mobile (320–639px)** – Stacked layout with a slide-in navigation menu.

Navigation collapses to a hamburger menu below 900px, with focus trapping, Escape to close, and background scroll locking.

---

## 🚀 How to Run This Project

### 1️⃣ View the Live Portfolio

Simply visit:

🔗 **[Portfolio Live Link](https://vignesh-krish-dev.github.io/vignesh-portfolio/)**

### 2️⃣ Run Locally

#### Step 1: Clone the Repository

```bash
git clone https://github.com/vignesh-krish-dev/vignesh-portfolio.git
```

#### Step 2: Navigate to the Project Folder

```bash
cd vignesh-portfolio
```

#### Step 3: Serve the Folder

> ⚠️ **Open it through a web server, not by double-clicking `index.html`.**
> The contact form is rejected on `file://` pages, so messages will not send.

**Option 1: VS Code Live Server (recommended)**

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server**.

**Option 2: Python**

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

---

## ✉️ Contact Form

Messages are delivered through [FormSubmit](https://formsubmit.co). Activation is **per domain** — the first submission from a new origin triggers a confirmation email, and nothing is delivered until that link is clicked.
