# Troubleshooting Guide

## Common Deployment Issues

### 1. "Deploy Failed" - Build Error

**Symptom**: Render shows "Deploy failed" in red

**Possible Causes**:
- Missing `package.json`
- Wrong build command
- Dependency installation failed

**Solutions**:
```bash
# Ensure package.json exists and is valid
npm install --dry-run

# Check build command in Render is: npm install
# Check start command in Render is: npm start
```

### 2. Application Error / Crash

**Symptom**: Service deploys but crashes immediately

**Possible Causes**:
- Missing environment variables
- Wrong MongoDB connection string
- Missing start script in package.json

**Solutions**:
1. Check Render logs for error messages
2. Verify all environment variables are set:
   - MONGO_URI
   - JWT_SECRET
   - NODE_ENV
3. Ensure package.json has: `"start": "node src/index.js"`

### 3. Cannot Connect to MongoDB

**Symptom**: Error: "MongoServerError: authentication failed"

**Solutions**:
1. Check MongoDB Atlas Network Access:
   - Go to Network Access in Atlas
   - Add IP Address: 0.0.0.0/0 (Allow from anywhere)
   
2. Verify connection string format:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/database
   ```
   - NO curly braces around password
   - Replace <username>, <password>, <cluster>, <database>

3. Check database user permissions:
   - Go to Database Access in Atlas
   - Ensure user has "readWrite" role

### 4. Environment Variables Not Working

**Symptom**: `process.env.VARIABLE` is undefined

**Solutions**:
1. In Render Dashboard:
   - Go to your service
   - Click "Environment" tab
   - Verify all variables are listed
   - NO quotes around values
   
2. Re-deploy after adding variables:
   - Click "Manual Deploy" → "Deploy latest commit"

### 5. Service is Live but Shows 404

**Symptom**: URL opens but shows "Cannot GET /"

**Solutions**:
1. Add root route in your code:
```javascript
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});
```

2. Check that the route is defined BEFORE app.listen()

### 6. Port Configuration Issues

**Symptom**: Service crashes with port error

**Solution**:
```javascript
// Use process.env.PORT (Render sets this automatically)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 7. Repository Not Showing in Render

**Symptom**: Cannot find your repo when creating service

**Solutions**:
1. Ensure you signed up with GitHub (not email)
2. Click "Configure account" in Render
3. Grant access to your repository
4. Refresh the page

### 8. Logs Show "Module not found"

**Symptom**: Error: Cannot find module 'express'

**Solutions**:
1. Ensure build command is `npm install` (not `npm ci`)
2. Check that dependencies are in `dependencies`, not `devDependencies`:
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.0"
  }
}
```

## Debugging Steps

1. **Check Render Logs**:
   - Go to your service in Render
   - Click "Logs" tab
   - Look for error messages

2. **Test Locally First**:
   ```bash
   # Set environment to production locally
   NODE_ENV=production npm start
   
   # Test the endpoint
   curl http://localhost:3000/
   ```

3. **Verify GitHub Sync**:
   ```bash
   # Check what's on GitHub
   git status
   git log
   
   # Ensure latest code is pushed
   git push origin main
   ```

4. **Check Environment Variables**:
   - Print them in your code temporarily:
   ```javascript
   console.log('MONGO_URI exists:', !!process.env.MONGO_URI);
   console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
   ```

## Getting Help

If you're still stuck:

1. **Copy the exact error message** from Render logs
2. **Check your configuration** against this guide
3. **Ask for help** with:
   - The error message
   - Your package.json
   - Your Render configuration
   - What you've already tried

## Prevention Tips

- ✅ Test locally with `NODE_ENV=production`
- ✅ Keep dependencies up to date
- ✅ Use `.env.example` as a template
- ✅ Never commit actual `.env` file
- ✅ Check logs after every deployment
- ✅ Test all endpoints after deployment
