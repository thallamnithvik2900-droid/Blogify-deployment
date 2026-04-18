# Deployment Checklist

## Pre-Deployment

- [ ] Code is pushed to GitHub main branch
- [ ] `.env` file is NOT in the repository
- [ ] `.gitignore` includes `.env`
- [ ] `package.json` has `"start": "node src/index.js"`
- [ ] `engines` field is present in `package.json`
- [ ] MongoDB Atlas cluster is created
- [ ] Database user is created with read/write permissions
- [ ] Network access allows connections from anywhere (0.0.0.0/0)

## Render Setup

- [ ] Render account created with GitHub
- [ ] Repository connected to Render
- [ ] Web Service created
- [ ] Service name set (e.g., blogify-api-yourname)
- [ ] Region selected (Singapore/Frankfurt)
- [ ] Branch set to `main`
- [ ] Build command: `npm install`
- [ ] Start command: `npm start`
- [ ] Plan type: Free

## Environment Variables

- [ ] `MONGO_URI` added (check password has no {})
- [ ] `JWT_SECRET` added
- [ ] `NODE_ENV` set to `production`

## Post-Deployment Testing

- [ ] Service shows "Live" status (green)
- [ ] Root URL (/) opens in browser
- [ ] Health check endpoint works
- [ ] Postman environment created for Production
- [ ] Production URL tested in Postman
- [ ] API endpoints respond correctly

## Assignment Submission

- [ ] Created branch: `chore/deployment-config`
- [ ] Made small update (e.g., README)
- [ ] Pushed branch to GitHub
- [ ] Created Pull Request to main
- [ ] Recorded video showing:
  - [ ] Render Dashboard (Service is Live)
  - [ ] Browser test of root URL
  - [ ] Postman test with live URL
- [ ] Video uploaded to Loom/Google Drive
- [ ] Video link is public/accessible
- [ ] Submitted PR URL
- [ ] Submitted Video URL

## Common Issues to Avoid

- ❌ .env file committed to Git
- ❌ MongoDB password has curly braces {}
- ❌ Wrong build/start commands
- ❌ Missing environment variables
- ❌ MongoDB not allowing external connections
- ❌ Testing localhost instead of live URL in video
