# GitHub Pages Setup Instructions

## What was wrong?

Your GitHub Pages site was showing blank because:

1. **Missing script tag**: The `index.html` file didn't include a `<script>` tag to load the React application entry point (`index.tsx`)
2. **No build process**: GitHub Pages was serving the source files directly instead of the built static files
3. **JSX syntax errors**: Several components had unescaped `>` characters that prevented the build from completing
4. **Missing base path**: Vite wasn't configured with the correct base path for GitHub Pages subdirectory deployment

## What was fixed?

1. ✅ Added `<script type="module" src="/index.tsx"></script>` to `index.html`
2. ✅ Fixed JSX syntax errors in `BentoGrid.tsx` and `EngineeringPage.tsx`
3. ✅ Configured Vite with `base: '/Tim-Spurlin-Ancestry/'` for GitHub Pages
4. ✅ Created GitHub Actions workflow (`.github/workflows/deploy.yml`) to automatically build and deploy
5. ✅ Generated `package-lock.json` for consistent builds

## How to deploy

### Option 1: Merge this PR (Recommended)

1. Merge this pull request to the `main` branch
2. The GitHub Actions workflow will automatically build and deploy to GitHub Pages
3. Your site should be live at: `https://tim-spurlin.github.io/Tim-Spurlin-Ancestry/`

### Option 2: Enable GitHub Pages manually

If the workflow doesn't trigger automatically, you may need to enable GitHub Pages:

1. Go to your repository settings: https://github.com/Tim-Spurlin/Tim-Spurlin-Ancestry/settings/pages
2. Under "Build and deployment":
   - Source: Select "GitHub Actions"
3. After merging this PR, the workflow should run automatically

### Verify the deployment

After merging:
1. Go to the "Actions" tab in your repository
2. Check that the "Deploy to GitHub Pages" workflow runs successfully
3. Visit your GitHub Pages URL: `https://tim-spurlin.github.io/Tim-Spurlin-Ancestry/`

## Local development

To test locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Technical details

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: TailwindCSS (via CDN)
- **Build**: Vite with base path configured for GitHub Pages
- **Deployment**: GitHub Actions workflow using `actions/deploy-pages@v4`
