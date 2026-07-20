# NeuralForge Website

This is the documentation and landing page website for NeuralForge, built with Next.js and deployed on Vercel.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📊 Vercel Web Analytics integration for tracking visitor metrics
- ⚡ Built with Next.js 16 (App Router)
- 🌙 Dark mode support

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Vercel Web Analytics

This project includes Vercel Web Analytics configured in `app/layout.tsx`. The Analytics component will automatically track page views and other metrics when deployed to Vercel.

To view analytics:
1. Deploy this site to Vercel
2. Enable Analytics in your Vercel dashboard
3. View metrics in the Analytics tab

## Deployment

This website is designed to be deployed on Vercel:

```bash
# Deploy to Vercel
vercel
```

The site will automatically build and deploy. Analytics will start collecting data once enabled in the Vercel dashboard.
