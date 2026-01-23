# Portfolio Website

A clean, modern portfolio website built with React, TypeScript, and Vite. This is a standalone project that runs locally without any external dependencies or API keys.

## Features

- **Clean Design**: Minimalist portfolio layout inspired by modern design principles
- **Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Fast**: Built with Vite for lightning-fast development and optimized production builds
- **Type-Safe**: Full TypeScript support for better development experience
- **No Dependencies**: Runs completely locally without any external services or API keys

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

### Deploy to GitHub Pages

The project includes a `gh-pages` deployment script:

1. Make sure you've built the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

This will automatically:
- Build the project
- Push the `dist` folder to the `gh-pages` branch
- Make your site available via GitHub Pages

### Manual GitHub Pages Setup

Alternatively, you can:

1. Push this repository to GitHub
2. Go to your repository Settings → Pages
3. Select the source branch (e.g., `main` with `/docs` folder, or use the `gh-pages` branch)
4. Your site will be available at `https://yourusername.github.io/repository-name`

## Customization

### Update Your Information

Edit the following files to customize the portfolio with your own information:

- **`constants.ts`**: Update `worksData`, `designData`, `experienceData`, `awardsData`, and `contactLinks` with your projects and information
- **`components/Header.tsx`**: Update the header text with your name and bio
- **`index.html`**: Change the title tag to your name

### Styling

The project uses Tailwind CSS via CDN. You can customize styles by:
- Modifying Tailwind classes in components
- Adding custom CSS in `index.html` if needed

## Project Structure

```
.
├── components/          # Reusable React components
│   ├── Header.tsx
│   ├── Navigation.tsx
│   └── ProjectCard.tsx
├── pages/              # Page components
│   ├── WorksPage.tsx
│   ├── DesignPage.tsx
│   └── AboutPage.tsx
├── App.tsx             # Main app component
├── index.tsx           # React entry point
├── types.ts            # TypeScript type definitions
├── constants.ts        # Data constants (projects, experiences, etc.)
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## License

This project is open source and available for personal use.
