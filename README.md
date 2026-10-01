# Harry Bosco Denis | Portfolio

A  personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This project showcases my background, projects, skills, extracurricular involvement, and contact information in a polished, responsive single-page experience.

Live site: https://my-portfolio-five-wine-82.vercel.app/

## Overview

This portfolio is designed to highlight:

- academic and professional background
- software projects and technical impact
- AI, backend, and full-stack engineering experience
- leadership and community involvement
- direct contact opportunities through a working form


## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel
- Formspree

## Project Structure

```text
my-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Activities.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsGrid.tsx
│   │   └── Skills.tsx
│   └── data/
│       └── portfolioData.ts
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev     # Start the development server
npm run build   # Create a production build
npm run start   # Run the production build
npm run lint    # Run ESLint checks
```

## Deployment

This project is intended for deployment on Vercel, which matches the Next.js ecosystem and the repository configuration.

Typical Vercel deployment steps:

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Use the default Next.js settings.
4. Deploy and verify the production build.

## Content Maintenance

Portfolio content is centralized in `src/data/portfolioData.ts`, making it easy to update:

- personal bio
- contact details
- education background
- project listings
- skills and extracurricular experiences

This reduces the need to edit multiple components when updating profile information.

## Contact

For inquiries, collaborations, or opportunities:

- Email: boscodhy@mail.uc.edu
- LinkedIn: https://linkedin.com/in/harry-bosco-denis
- GitHub: https://github.com/Harry20222
- Location: Cincinnati, OH

## License

This repository does not currently include a license file. If you intend to share or reuse the code publicly, consider adding an appropriate open-source license.

## Notes

This portfolio reflects Harry Bosco Denis's work, academic interests, and technical projects, with a focus on software engineering, AI-driven products, and meaningful real-world problem solving.
