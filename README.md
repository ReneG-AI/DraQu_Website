# DraQu Web

## Local development

```sh
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow that builds the site and publishes it to GitHub Pages.

1. Push to the `main` branch.
2. In GitHub, go to **Settings -> Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Wait for the workflow to finish; your site will be published.

### Custom domain (optional)

- If you use a custom domain, set it in **Settings -> Pages**.
- The site base is automatic for GitHub Pages. If you need a custom base URL, set `VITE_BASE_URL` in the workflow.
