# Personal Portfolio

Hello all! Welcome to my Portfolio project,, designed to showcase my skills, projects & Open Source contributions.

## Features

- **Razorpay Integration:** For seamless Test Payments

- **Pipedream Automation for contact form:** Seamlessly send 'thank you' emails with _AI_-Generated replies to the contacted users & store their data in Google-Sheets.

- **Search Engine Optimized:** Added sitemap, robots.txt, JSON-LD schema and keywords to improve Google ranking and discoverability.

- **Dynamic Project Showcase:** Automatically fetch and display your latest GitHub repositories/projects using the GitHub API.

- **Geo-aware User Experience:** Detects user location and time zone via IP address on the /fun page.

- **Fully Responsive Design:** Optimized for all screen sizes and devices to ensure a smooth experience everywhere.

- **Offline-Sync feature:** Offline Sync for Contact form & Projects.

- **TypeScript:** Strongly Typed data-structures for the entire project.

- **Fully Automated CI/CD Pipelines:** Integrated GitHub Actions with Vercel-CLI for seamless deployments, ensuring reliable, fast, and controlled production releases.

## Live Demo

- **Official Deployment (`namecheap.com`):** https://www.srinivas-batthula.me
- **Current Version (`TS`):** https://srinivas-batthula.vercel.app
- **Older Version (`JS`):** https://srinivas-batthula.github.io/portfolio

## Tech Stack

**Client:** NextJs, React.Js, Zustand, React-Bootsrap, TailwindCSS, IndexedDB, PWA, SEO, TypeScript, GitHub Actions

## Local Setup

**Follow these files for Local Setup ->**

- [setup_instructions.txt](https://github.com/srinivas-batthula/Portfolio/blob/main/setup_instructions.txt)
- [test_instructions.txt](https://github.com/srinivas-batthula/Portfolio/blob/main/test_instructions.txt)

## Feature Workflows

#### 1. Contact-Form Workflow

```
User fills the contact-form & clicks Submit
    ⬇
If OFFLINE → Data is stored in IndexedDB
    ⬇
When the user comes back ONLINE → Automation endpoint is re-triggered
    ⬇
If ONLINE (at submit) → Triggers Pipedream Automation
    ⬇
Message is sent to OpenAI → Generates a smart reply
    ⬇
Reply is emailed to the contacted user (via Gmail/SMTP)
    ⬇
User details (name, email, message, time) are added to Google Sheets
    ⬇
Discord Bot notifies the admin (me) instantly with user details
```

#### 2. Projects-Fetch Workflow

```
If OFFLINE → Fetch projects from IndexedDB
    ⬇
If ONLINE → Fetch all repos from GitHub-API (https://api.github.com/users/${GITHUB_USER}/repos)
    ⬇
Filter repos → Only include those having a file-`metadata.json`
    ⬇
Read `metadata.json` file from each repo
    ⬇
Store projects in Zustand state → Display on Projects-page
    ⬇
Update projects in IndexedDB for future offline usage
```

#### 3. GitHub-Actions CI/CD Workflow

```
On every commit/push to GitHub-repo
    ⬇
Triggers `ci-cd.yml` workflow
    ⬇
Runs `lint-and-format.yml` → Check Prettier & ESLint rules
    ⬇
If success → Runs `build.yml` → Builds Next.js project (npm run build)
    ⬇
If success → Runs `deploy.yml` → Deploys to Vercel via 'Vercel-CLI'
    ⬇
New version of Portfolio goes Live automatically 🎉
```

## Logo

![Logo](https://github.com/srinivas-batthula/portfolio/blob/main/public/icon.png)

## Authors

- [@srinivas-batthula](https://www.github.com/srinivas-batthula)
