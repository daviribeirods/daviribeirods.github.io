# Professional Data Science Portfolio v2.0 - Davi Santos

A modern, corporate, and interactive portfolio designed to showcase my work as a **Data Scientist**, focusing on **Predictive Modeling**, **Machine Learning**, and analytical solutions for the financial sector and fraud prevention.

🌐 **Live Website:** [daviribeirods.github.io](https://daviribeirods.github.io)

---

## 🚀 What's New in Version 2.0

**Version 2.0** represents a comprehensive overhaul in architecture, visual design, and user experience compared to the previous release:

### 1. 🌐 Full Internationalization Support (EN / PT)
*   Instant top-bar language toggle between **English (global default)** and **Portuguese**.
*   Real-time translation of UI copy, headings, project descriptions, tags, and articles.
*   Automatic language preference persistence across sessions via `localStorage`.

### 2. 🌌 Interactive Data Network Background (HTML5 Canvas)
*   Real-time canvas rendering of interactive particle nodes and correlation graphs.
*   Dynamic node connections that respond seamlessly to mouse cursor movements.
*   Lightweight, energy-efficient animation respecting user accessibility preferences (`prefers-reduced-motion`).

### 3. 🏢 Clean, Wide-Feed Architecture (*Wide Cards Feed*)
*   Replaced multi-page routing with a **unified, uncluttered central feed**.
*   **Wide 2-Column Hero Section**: Direct executive introduction with profile visual and direct channels for LinkedIn, GitHub, YouTube Shorts, TikTok, Email, and PDF Resume.
*   **Spacious Horizontal Cards**: Clear emphasis on the business problem, statistical/machine learning methodology, and core tech stack for each initiative.

### 4. 📖 Built-In In-Page Modal Article Reader
*   Seamless study notes and article reading directly on the homepage without page reloads.
*   **Wider Reading Container (`1040px`)**: Generous margins, comfortable typography, responsive media scaling, and synchronized bilingual content blocks.

### 5. 🗂️ Decoupled Content Architecture
*   Projects are centrally managed in a straightforward data file: `_data/projects.yml`.
*   Study notebook posts and articles are managed as standard Markdown files in `_posts/`.
*   Category filter tab counters (`All`, `Projects`, `Articles`) compute dynamically via Jekyll/Liquid without requiring manual HTML updates.

### 6. 🌓 Persistent Dark / Light Theme
*   Elegant high-contrast theme toggle inspired by professional data science and developer tooling.
*   Theme preference stored and persisted automatically.

---

## 🛠️ Technology Stack

*   **Static Site Generator & Templating:** [Jekyll](https://jekyllrb.com/) + [Liquid Engine](https://shopify.github.io/liquid/)
*   **Front-End & Grid System:** Semantic HTML5, Modern CSS3 (CSS Custom Properties), [Bootstrap 5.3](https://getbootstrap.com/)
*   **Interactivity & Graphics:** Vanilla JavaScript (ES6+), HTML5 Canvas 2D Context
*   **Typography:** *Plus Jakarta Sans* (executive headings & branding) & *Inter* (body text)
*   **Icons:** [Bootstrap Icons](https://icons.getbootstrap.com/) & [Devicon](https://devicon.dev/)
*   **Hosting & CI/CD:** [GitHub Pages](https://pages.github.com/) with automated deployment on every commit

---

## 📂 Project Structure

```
├── _config.yml               # Global Jekyll site configuration
├── _data/
│   └── projects.yml          # 📌 PROJECTS DATA SOURCE (Add/edit projects easily)
├── _layouts/
│   ├── default.html          # Base layout with Header, Footer, Canvas & Modal Reader
│   └── post.html             # Standalone layout for individual post view
├── _posts/
│   └── 2026-03-23-bem-vindo.md # 📌 STUDY NOTES & ARTICLES (Markdown)
├── assets/
│   ├── css/
│   │   └── main.css          # Design system & dark/light theme CSS variables
│   ├── curriculum/
│   │   └── curriculo.pdf     # Downloadable resume
│   ├── img/
│   │   ├── profile.webp      # Profile portrait photo
│   │   ├── blog/             # Article cover assets
│   │   └── projects/         # Project thumbnail assets
│   └── js/
│       └── translations.js   # i18n translation dictionary and switcher engine
├── index.html                # Main landing page (dynamic Liquid rendering)
├── how_to_add_content.md     # 📖 STEP-BY-STEP GUIDE: How to add new projects & articles
└── README.md                 # Project documentation
```

---

## ✍️ How to Add New Projects & Articles

To add new content to the portfolio **without touching HTML or code**, check our dedicated step-by-step guide with copy-paste templates:

👉 **[Read the Content Management Guide (how_to_add_content.md)](./how_to_add_content.md)**

---

## 💻 Local Development

To run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/daviribeirods/daviribeirods.github.io.git
   cd daviribeirods.github.io
   ```

2. **Run Jekyll locally (requires Ruby & Bundler):**
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
   Open `http://localhost:4000` in your browser.

3. **Deployment:**
   Simply push to the `main` branch. GitHub Pages will build and deploy the changes automatically within seconds!

---

## 📜 License

Distributed under the **MIT License**. See the license file for details.
