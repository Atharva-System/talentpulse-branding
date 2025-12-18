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

## GitHub Actions Workflow

The project includes an automated deployment workflow (`.github/workflows/deploy.yml`) that:

1. **Triggers**: On push to configured branches or manual workflow dispatch
2. **Builds**: React application using Node.js 22
3. **Deploys**: 
   - Syncs built files to AWS S3 bucket
   - Invalidates CloudFront cache for all paths
4. **Authentication**: Uses IAM role `talent-pulse-staging-github-actions-role` via OIDC

### Workflow Configuration

- **AWS Region**: `us-east-1`
- **S3 Bucket**: `talentpulse-branding-website`
- **CloudFront Distribution**: `EG74CEFFGTG1`
- **Node Version**: `22`

## License

Proprietary - Talent Pulse
