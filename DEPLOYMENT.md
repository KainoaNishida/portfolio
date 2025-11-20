# Deployment Guide for kainoanishida.com

This guide will help you deploy your portfolio to your custom domain `kainoanishida.com`.

## Option 1: Deploy with Vercel (Recommended)

Vercel is the easiest option and works seamlessly with your existing API setup. **Vercel works with any domain registrar, including GoDaddy!** You just need to update your DNS records at GoDaddy.

### Step 1: Install Vercel CLI (if not already installed)

```bash
npm i -g vercel
```

### Step 2: Deploy to Vercel

1. **Login to Vercel:**

   ```bash
   vercel login
   ```

2. **Deploy your project:**

   ```bash
   vercel
   ```

   Follow the prompts. When asked:

   - Set up and deploy? **Yes**
   - Which scope? Choose your account
   - Link to existing project? **No** (for first deployment)
   - Project name? `portfolio` (or any name you prefer)
   - Directory? `./` (current directory)
   - Override settings? **No**

3. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Step 3: Configure Environment Variables

1. Go to your project on [vercel.com](https://vercel.com)
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - `SPOTIFY_CLIENT_ID` - Your Spotify app Client ID
   - `SPOTIFY_CLIENT_SECRET` - Your Spotify app Client Secret
   - `SPOTIFY_REFRESH_TOKEN` - Your Spotify refresh token (get this using `scripts/get-spotify-refresh-token.js`)

### Step 4: Connect Custom Domain & Enable HTTPS

**HTTPS is automatically enabled by Vercel!** Once you add your domain, Vercel will automatically provision a free SSL certificate via Let's Encrypt (usually within a few minutes).

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter `kainoanishida.com` and click **Add**
4. Enter `www.kainoanishida.com` and click **Add**
5. Vercel will provide DNS records to add:
   - **A Record**: Point `@` to Vercel's IP (shown in dashboard)
   - **CNAME Record**: Point `www` to `cname.vercel-dns.com`
6. **HTTPS will be automatically configured** - you'll see a status indicator showing when the SSL certificate is ready (usually takes 1-5 minutes after DNS propagates)

### Step 5: Configure DNS at GoDaddy

**Yes, Vercel works perfectly with GoDaddy!** You just need to update your DNS records.

1. **Log in to GoDaddy:**

   - Go to [godaddy.com](https://godaddy.com) and sign in
   - Navigate to **My Products** → **DNS** (or **Manage DNS**)

2. **Add DNS Records:**

   In your Vercel dashboard, when you add the domain, Vercel will show you the exact values. Typically:

   **For the root domain (`kainoanishida.com`):**

   - Click **Add** or **Add Record**
   - Type: **A**
   - Name: `@` (or leave blank, depending on GoDaddy's interface)
   - Value: The IP address Vercel provides (usually something like `76.76.21.21`)
   - TTL: `600` (or default)
   - Click **Save**

   **For the www subdomain (`www.kainoanishida.com`):**

   - Click **Add** or **Add Record**
   - Type: **CNAME**
   - Name: `www`
   - Value: `cname.vercel-dns.com` (or the CNAME Vercel provides)
   - TTL: `600` (or default)
   - Click **Save**

3. **Remove conflicting records:**

   - If there are any existing A or CNAME records for `@` or `www`, you may need to delete or update them
   - GoDaddy sometimes has default records that need to be removed

4. **Wait for DNS propagation:**
   - DNS changes can take 24-48 hours, but usually work within 5-30 minutes
   - You can check propagation status at [whatsmydns.net](https://www.whatsmydns.net)

**Note:** If GoDaddy's interface looks different, look for "DNS Management" or "DNS Records" in your domain settings.

---

## Option 2: Deploy with Netlify

### Step 1: Install Netlify CLI

```bash
npm i -g netlify-cli
```

### Step 2: Build and Deploy

```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Step 3: Configure Environment Variables

1. Go to your project on [netlify.com](https://netlify.com)
2. Navigate to **Site settings** → **Environment variables**
3. Add the same environment variables as listed above

### Step 4: Update API Function for Netlify

If using Netlify, you'll need to convert the API function. Create `netlify/functions/spotify-stats.js`:

```javascript
exports.handler = async (event, context) => {
  // Handle CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  // ... rest of your Spotify API logic
  // Use event.queryStringParameters for query params
  // Return: { statusCode: 200, headers: {...}, body: JSON.stringify(data) }
};
```

### Step 5: Connect Custom Domain

1. In Netlify dashboard, go to **Domain settings**
2. Click **Add custom domain**
3. Enter `kainoanishida.com`
4. Follow Netlify's DNS configuration instructions

---

## Option 3: Deploy with GitHub Pages (Not Recommended for Custom Domain)

If you want to use GitHub Pages, you'll need to:

1. Update `vite.config.ts` base path back to `/portfolio/` or your repo name
2. The API functions won't work on GitHub Pages (no serverless functions)
3. You'd need to use a separate service for the API

---

## Post-Deployment Checklist

- [ ] Test the site at `https://kainoanishida.com` (HTTPS is automatic!)
- [ ] Test the site at `https://www.kainoanishida.com`
- [ ] Verify the SSL certificate is active (look for 🔒 lock icon in browser)
- [ ] Verify Spotify API is working (check browser console)
- [ ] Test all pages and navigation
- [ ] Check mobile responsiveness

## HTTPS Information

**Vercel automatically provides HTTPS for all deployments:**

- ✅ Free SSL certificates via Let's Encrypt
- ✅ Automatic certificate renewal
- ✅ HTTPS redirect (HTTP → HTTPS) is automatic
- ✅ Works for both root domain and www subdomain
- ✅ Certificate is usually ready within 1-5 minutes after DNS is configured

**No additional configuration needed!** Just add your domain in Vercel and configure DNS - HTTPS will be set up automatically.

## Troubleshooting

### DNS Issues

- Use [whatsmydns.net](https://www.whatsmydns.net) to check DNS propagation
- Ensure DNS records are correct at your registrar

### API Not Working

- Verify environment variables are set correctly
- Check Vercel/Netlify function logs
- Ensure `SPOTIFY_REFRESH_TOKEN` is valid

### Build Errors

- Run `npm run build` locally to test
- Check for TypeScript errors: `npm run lint`

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:

- **Vercel**: Connect your GitHub repo in the dashboard
- **Netlify**: Connect your GitHub repo in the dashboard

Once connected, every push to `main` will automatically deploy!
