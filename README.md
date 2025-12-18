# Talent Pulse Branding Website

Static marketing/branding website for Talent Pulse, deployed on AWS S3 + CloudFront.

## What This Project Does

- **Marketing Website**: Public-facing branding and marketing pages for Talent Pulse
- **Static Site**: Built with React + Vite, served as static files
- **Auto-Deployment**: Automatically deploys to AWS S3 and invalidates CloudFront cache on push

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- Framer Motion (animations)
- Deployed on AWS S3 + CloudFront

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

Deployment is automated via GitHub Actions:
- Pushes trigger automatic deployment
- Builds the React app
- Syncs to S3 bucket: `talentpulse-branding-website`
- Invalidates CloudFront cache

**Live Site**: https://www.talentpulse.ai

## License

Proprietary - Talent Pulse
