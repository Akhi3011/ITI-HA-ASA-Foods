# Deploying ITI HA ASA Foods to Vercel

This guide will walk you through deploying your cafe website to Vercel.

## 🚀 Method 1: Deploy via Vercel Dashboard (Recommended - Easiest)

### Step 1: Sign Up/Login to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (or "Login" if you have an account)
3. Sign up with your GitHub account (this will give Vercel access to your repositories)

### Step 2: Import Your GitHub Repository
1. Once logged in, click "Add New..." → "Project"
2. You'll see a list of your GitHub repositories
3. Find **"ITI-HA-ASA-Foods"** and click "Import"

### Step 3: Configure Your Project
Vercel will auto-detect that it's a Create React App. Configure as follows:

- **Framework Preset**: Create React App (should be auto-detected)
- **Root Directory**: `frontend` ← **IMPORTANT: Set this to "frontend"**
- **Build Command**: `npm run build` (default)
- **Output Directory**: `build` (default)
- **Install Command**: `npm install` (default)

### Step 4: Deploy!
1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. 🎉 Your site will be live at a URL like: `iti-ha-asa-foods.vercel.app`

### Step 5: Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain if you have one

---

## 🖥️ Method 2: Deploy via Vercel CLI (Terminal)

If you prefer using the command line:

### Prerequisites
- Node.js and npm installed
- Vercel CLI installed (`npm install -g vercel`)

### Steps

```bash
# Navigate to your project
cd /Users/teluguntiakhil/Desktop/New2/ITI-HA-ASA-Foods

# Login to Vercel (opens browser)
vercel login

# Deploy (first time - will ask configuration questions)
vercel

# Answer the prompts:
# ? Set up and deploy? Yes
# ? Which scope? [Your account name]
# ? Link to existing project? No
# ? What's your project's name? iti-ha-asa-foods
# ? In which directory is your code located? ./frontend
# ? Want to modify these settings? No

# Deploy to production
vercel --prod
```

---

## ⚙️ Configuration Details

The `vercel.json` file has been created at the root of your project with optimal settings:

```json
{
  "version": 2,
  "buildCommand": "cd frontend && npm install && npm run build",
  "outputDirectory": "frontend/build",
  "devCommand": "cd frontend && npm start",
  "installCommand": "cd frontend && npm install",
  "framework": "create-react-app",
  "regions": ["bom1"]
}
```

**Region**: `bom1` (Mumbai, India) - Closest to Visakhapatnam for best performance

---

## 🔄 Automatic Deployments

Once deployed via GitHub:
- Every push to `main` branch = automatic production deployment
- Pull requests = automatic preview deployments
- No manual redeployment needed!

---

## ✅ Post-Deployment Checklist

After your site is live:

1. **Test the URL**: Visit your Vercel URL and test all features
2. **Check Mobile**: Test on mobile devices
3. **Share the Link**: Share your live site with customers!
4. **Update README**: Add your Vercel URL to README.md
5. **Set up Analytics** (optional): Add Vercel Analytics in project settings

---

## 🎯 Expected URLs

After deployment, you'll get URLs like:
- **Production**: `https://iti-ha-asa-foods.vercel.app`
- **Preview (PRs)**: `https://iti-ha-asa-foods-git-[branch].vercel.app`

---

## 🐛 Troubleshooting

### Build Failed?
1. Check that you set **Root Directory to "frontend"**
2. Ensure `package.json` is in the frontend folder
3. Check build logs in Vercel dashboard

### Pages Show Blank?
1. Clear browser cache
2. Check browser console for errors
3. Verify all imports in React components

### Need Help?
- Vercel Docs: https://vercel.com/docs
- Your GitHub: https://github.com/Akhi3011/ITI-HA-ASA-Foods

---

## 📊 Deployment Info

- **Build Time**: ~2-3 minutes
- **Deploy Time**: ~30 seconds
- **Free Tier**: 100GB bandwidth/month (plenty for most cafes!)
- **SSL**: Automatic HTTPS
- **CDN**: Global edge network

---

## 🎉 You're All Set!

Your cafe website is ready to be deployed to Vercel. Just follow Method 1 above (via dashboard) - it's the easiest way and takes less than 5 minutes!

Good luck with your first project! 🚀☕
