# Deploy to username.github.io

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name MUST be: `YOUR_USERNAME.github.io` (replace YOUR_USERNAME with your actual GitHub username)
3. Don't check "Initialize with README"
4. Click "Create repository"

## Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your project
- Push the `dist` folder to the `gh-pages` branch

## Step 4: Enable GitHub Pages

1. Go to your repository: `https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io`
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**

## Step 5: Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io
```

**Note:** It may take 5-10 minutes for GitHub Pages to update after deployment.

---

## Alternative: Deploy from Main Branch

If you prefer to deploy directly from the `main` branch:

1. Build your project:
   ```bash
   npm run build
   ```

2. Copy the `dist` folder contents to the root of your repository

3. Push to main branch

4. In GitHub Settings → Pages, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`

However, the `gh-pages` method (Step 3 above) is recommended as it keeps your source code and built files separate.
