# AWS Infrastructure Setup

This directory contains scripts to set up AWS resources for hosting the Talent Pulse Branding static website.

## Prerequisites

1. AWS CLI installed and configured
2. AWS Profile `atharva-abillion` configured
3. `jq` installed (for JSON parsing)

## Setup Instructions

### 1. Make the script executable

```bash
chmod +x infrastructure/setup-aws-resources.sh
```

### 2. Run the setup script

```bash
cd talentpulse-branding
./infrastructure/setup-aws-resources.sh
```

The script will:
- Create an S3 bucket for static website hosting
- Enable static website hosting on the bucket
- Create an Origin Access Identity (OAI) for CloudFront
- Create a CloudFront distribution
- Configure bucket policies for CloudFront access
- Save resource details to `infrastructure/aws-resources.txt`

### 3. Get the Resource Details

After running the script, you'll get:
- **S3 Bucket Name**: Used in GitHub Actions workflow
- **CloudFront Distribution ID**: Used for cache invalidation
- **CloudFront Domain**: Your website URL (until custom domain is configured)

### 4. Configure GitHub Secrets

Add these secrets to your GitHub repository:

1. Go to: Repository → Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `AWS_ACCESS_KEY_ID`: Your AWS access key
   - `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
   - `AWS_REGION`: `us-east-1`
   - `AWS_S3_BUCKET`: The S3 bucket name from the script output
   - `AWS_CLOUDFRONT_DISTRIBUTION_ID`: The CloudFront distribution ID from the script output

### 5. Verify CloudFront Status

CloudFront distributions take 15-20 minutes to deploy. Check status:

```bash
export AWS_PROFILE=atharva-abillion
aws cloudfront get-distribution --id <DISTRIBUTION_ID> --profile atharva-abillion
```

## Manual Cleanup (if needed)

To delete resources manually:

```bash
# Delete CloudFront distribution (disable first)
aws cloudfront delete-distribution --id <DISTRIBUTION_ID> --if-match <ETAG> --profile atharva-abillion

# Delete OAI
aws cloudfront delete-cloud-front-origin-access-identity --id <OAI_ID> --if-match <ETAG> --profile atharva-abillion

# Delete S3 bucket (empty first)
aws s3 rm s3://<BUCKET_NAME> --recursive --profile atharva-abillion
aws s3api delete-bucket --bucket <BUCKET_NAME> --profile atharva-abillion
```

## Notes

- The S3 bucket name includes a timestamp to ensure uniqueness
- CloudFront distribution is configured with:
  - HTTPS redirect
  - SPA routing support (404 → index.html)
  - Compression enabled
  - Price class 100 (US, Canada, Europe)
- Origin Access Identity (OAI) is used for secure S3 access





