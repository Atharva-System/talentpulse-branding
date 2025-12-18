# Deployment Guide - Talent Pulse Branding

This guide covers deploying the Talent Pulse Branding static website to AWS S3 + CloudFront.

## 🏗️ Architecture

- **S3 Bucket**: Hosts static files (HTML, CSS, JS, images)
- **CloudFront**: CDN for global distribution and caching
- **Origin Access Identity (OAI)**: Secures S3 bucket access

## 📋 Prerequisites

### 1. AWS CLI Setup

```bash
# Install AWS CLI (if not already installed)
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Configure AWS profile
aws configure --profile atharva-abillion
```

### 2. Required Tools

- AWS CLI v2
- `jq` (for JSON parsing): `sudo apt-get install jq` or `brew install jq`
- Node.js 20+ (for building)
- npm

### 3. GitHub Repository Secrets

You need to add these secrets to your GitHub repository:

1. Go to: **Repository → Settings → Secrets and variables → Actions → New repository secret**

2. Add the following secrets:

   | Secret Name | Description | Example |
   |------------|-------------|---------|
   | `AWS_S3_BUCKET` | S3 bucket name | `talentpulse-branding-website` |
   | `AWS_CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID | `EG74CEFFGTG1` |

**Note**: The workflow uses IAM role `talent-pulse-staging-github-actions-role` for authentication via OIDC. No access keys needed!

## 🚀 Initial Setup (One-time)

### Step 1: Create AWS Resources

```bash
cd talentpulse-branding

# Make script executable
chmod +x infrastructure/setup-aws-resources.sh

# Run setup script
./infrastructure/setup-aws-resources.sh
```

This script will:
- ✅ Create S3 bucket
- ✅ Enable static website hosting
- ✅ Create Origin Access Identity (OAI)
- ✅ Create CloudFront distribution
- ✅ Configure bucket policies
- ✅ Save resource details to `infrastructure/aws-resources.txt`

**Important**: Save the output values (S3 bucket name and CloudFront distribution ID) for GitHub secrets!

### Step 2: Configure GitHub Secrets

Add the secrets mentioned in the Prerequisites section above.

### Step 3: Verify Setup

Wait 15-20 minutes for CloudFront distribution to deploy, then check:

```bash
export AWS_PROFILE=atharva-abillion
aws cloudfront get-distribution \
  --id <YOUR_DISTRIBUTION_ID> \
  --profile atharva-abillion \
  --query 'Distribution.Status' \
  --output text
```

Should return: `Deployed`

## 🔄 Automated Deployment

### How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. **Triggers on**:
   - Push to `pp/main` or `main` branch
   - Manual workflow dispatch

2. **Builds** the React application:
   ```bash
   npm ci
   npm run build
   ```

3. **Deploys to S3**:
   - Syncs `dist/` folder to S3 bucket
   - Sets appropriate cache headers
   - Deletes removed files

4. **Invalidates CloudFront cache**:
   - Creates invalidation for `/*`
   - Ensures users get latest content

5. **Shows deployment summary** with:
   - Current branch name
   - Commit SHA
   - S3 bucket name
   - CloudFront distribution ID

### Manual Deployment

You can also deploy manually:

```bash
# Build the project
npm run build

# Deploy to S3
export AWS_PROFILE=atharva-abillion
aws s3 sync dist/ s3://<YOUR_BUCKET_NAME>/ \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html"

aws s3 sync dist/ s3://<YOUR_BUCKET_NAME>/ \
  --delete \
  --cache-control "public, max-age=0, must-revalidate" \
  --include "*.html"

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id <YOUR_DISTRIBUTION_ID> \
  --paths "/*" \
  --profile atharva-abillion
```

## 📝 Branch Information

The workflow includes branch information in:
- Deployment logs
- GitHub Actions summary
- CloudFront invalidation comments

Current branch is automatically detected and displayed in all deployment steps.

## 🔍 Monitoring

### Check Deployment Status

1. **GitHub Actions**: Go to Actions tab in your repository
2. **CloudFront**: Check invalidation status:
   ```bash
   aws cloudfront list-invalidations \
     --distribution-id <YOUR_DISTRIBUTION_ID> \
     --profile atharva-abillion
   ```

### View Website

Once CloudFront is deployed, access your site at:
```
https://<DISTRIBUTION_ID>.cloudfront.net
```

Or check the domain in AWS Console → CloudFront → Your Distribution

## 🛠️ Troubleshooting

### CloudFront Not Updating

- Wait 5-15 minutes for cache invalidation
- Check invalidation status in AWS Console
- Verify S3 sync completed successfully

### Build Failures

- Check Node.js version (should be 20+)
- Verify all dependencies are in `package.json`
- Check GitHub Actions logs for specific errors

### S3 Sync Issues

- Verify AWS credentials have S3 write permissions
- Check bucket name is correct in GitHub secrets
- Ensure bucket exists and is in `us-east-1` region

## 🧹 Cleanup

To remove all resources:

```bash
# 1. Get distribution ETAG
ETAG=$(aws cloudfront get-distribution-config \
  --id <DISTRIBUTION_ID> \
  --profile atharva-abillion \
  --query 'ETag' \
  --output text)

# 2. Disable distribution
aws cloudfront update-distribution \
  --id <DISTRIBUTION_ID> \
  --distribution-config file://<CONFIG_FILE> \
  --if-match $ETAG \
  --profile atharva-abillion

# 3. Wait for deployment, then delete
aws cloudfront delete-distribution \
  --id <DISTRIBUTION_ID> \
  --if-match <NEW_ETAG> \
  --profile atharva-abillion

# 4. Delete OAI
aws cloudfront delete-cloud-front-origin-access-identity \
  --id <OAI_ID> \
  --if-match <ETAG> \
  --profile atharva-abillion

# 5. Empty and delete S3 bucket
aws s3 rm s3://<BUCKET_NAME> --recursive --profile atharva-abillion
aws s3api delete-bucket --bucket <BUCKET_NAME> --profile atharva-abillion
```

## 📚 Additional Resources

- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [GitHub Actions AWS Documentation](https://github.com/aws-actions/configure-aws-credentials)

