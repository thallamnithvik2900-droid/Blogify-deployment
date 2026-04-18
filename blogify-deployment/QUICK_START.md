# Quick Start Guide

## 🚀 Deploy Blogify API to Render in 10 Minutes

### Step 1: Prepare Your Code (2 minutes)

1. Ensure these files exist in your project:
   - ✅ `package.json` with start script
   - ✅ `.gitignore` with `.env` listed
   - ✅ `src/index.js` (your main server file)

2. Push to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Setup Render Account (1 minute)

1. Go to https://dashboard.render.com/register
2. Click "Sign up with GitHub"
3. Authorize Render

### Step 3: Create Web Service (2 minutes)

1. Click "New +" → "Web Service"
2. Find and connect your repository
3. Fill in:
   - Name: `blogify-api-yourname`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Select "Free" plan

### Step 4: Add Environment Variables (2 minutes)

Click "Add Environment Variable" for each:

| Key | Value |
|-----|-------|
| `MONGO_URI` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | Your secret key |
| `NODE_ENV` | production |

### Step 5: Deploy (1 minute)

1. Click "Create Web Service"
2. Wait for "Your service is live" (2-3 minutes)
3. Copy your URL: `https://blogify-api-xyz.onrender.com`

### Step 6: Test (2 minutes)

**In Browser:**
- Open your Render URL
- Should see welcome message

**In Postman:**
1. Create environment: "Production"
2. Add variable: `URL` = your Render URL
3. Test: GET `{{URL}}/health`

### Step 7: Submit Assignment

1. **Create PR:**
```bash
git checkout -b chore/deployment-config
# Make small update to README
git add .
git commit -m "Add deployment config"
git push origin chore/deployment-config
# Create PR on GitHub
```

2. **Record Video:**
   - Show Render Dashboard (green status)
   - Test URL in browser
   - Test endpoint in Postman with live URL
   - Upload to Loom/Google Drive

3. **Submit:**
   - PR URL
   - Video URL

✅ Done! You're a deployed Backend Engineer!

---

## Essential Commands Reference

```bash
# Local Development
npm install           # Install dependencies
npm run dev          # Start with nodemon
npm start            # Start production mode

# Git
git status           # Check what's changed
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push origin main # Push to GitHub

# Deployment
# (All done in Render dashboard - no CLI needed)
```

## Need Help?

Check `TROUBLESHOOTING.md` for common issues and solutions.
