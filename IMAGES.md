# Local Image Management Guide

This guide explains how to manage photography images locally during development and deployment.

## Directory Structure

```
public/images/
├── portraits/
│   ├── downtown-portraits.jpg
│   ├── golden-hour.jpg
│   ├── studio-light.jpg
│   ├── on-location.jpg
│   ├── candid-series.jpg
│   └── family-sessions.jpg
├── drone/
│   ├── aerial-portrait.jpg
│   ├── property-flyover.jpg
│   ├── event-overhead.jpg
│   ├── landscape-wide.jpg
│   ├── 4k-video-still.jpg
│   └── golden-hour-aerial.jpg
└── real-estate/
    ├── exterior-twilight.jpg
    ├── living-room.jpg
    ├── aerial-flyover.jpg
    ├── kitchen-detail.jpg
    ├── primary-suite.jpg
    └── video-walkthrough-still.jpg
```

## Setup Steps

### 1. Create Image Folders

```bash
mkdir -p public/images/portraits
mkdir -p public/images/drone
mkdir -p public/images/real-estate
```

### 2. Add Your Photography

Copy your edited images into the corresponding folders:

```bash
# Example: copy portrait images
cp ~/Photos/edited/portraits/* public/images/portraits/

# Example: copy drone footage stills
cp ~/Photos/edited/drone/* public/images/drone/

# Example: copy real estate photos
cp ~/Photos/edited/real-estate/* public/images/real-estate/
```

**Filename Convention:** Use kebab-case (hyphens, no spaces):
- ✅ `downtown-portraits.jpg`
- ✅ `golden-hour.jpg`
- ❌ `Downtown Portraits.jpg`
- ❌ `golden_hour.jpg`

### 3. Verify Locally

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and check:
- Homepage → Portfolio gallery loads with your images
- `/portraits` → Portrait section displays correctly
- `/drone` → Drone portfolio shows your aerial work
- `/real-estate` → Real estate gallery renders

## Image Optimization Guidelines

### File Sizes

| Category | Recommended Size | Format |
|----------|------------------|--------|
| **Portraits** | 1200-1600px width | JPG (85% quality) |
| **Drone Wide** | 1600-2400px width | JPG (85% quality) |
| **Drone Square** | 1000-1400px width | JPG (85% quality) |
| **Real Estate Wide** | 1600-2400px width | JPG (80% quality) |
| **Real Estate Portrait** | 1000-1400px width | JPG (80% quality) |

### Compression Tools

**On macOS:**
```bash
# Install ImageMagick
brew install imagemagick

# Compress JPG to 85% quality
convert input.jpg -quality 85 output.jpg
```

**Cross-platform (online):**
- [TinyJPG](https://tinyjpg.com) — Drag & drop compression
- [Squoosh](https://squoosh.app) — Google's image optimizer
- [ImageOptim](https://imageoptim.com/mac) — macOS native tool

**Batch Processing:**
```bash
# Compress all JPGs in a folder
for file in *.jpg; do
  convert "$file" -quality 85 "compressed_$file"
done
```

### WebP Conversion (Optional)

For even faster loading, convert to WebP:

```bash
# Single file
cwebp -q 80 input.jpg -o output.webp

# Batch convert
for file in *.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

Then update component references (Next.js Image will auto-select best format):
```typescript
src: "/images/portraits/downtown-portraits.webp"
```

## Workflow: Update an Image

### Step 1: Replace the file locally
```bash
cp ~/new-photo.jpg public/images/portraits/golden-hour.jpg
```

### Step 2: Refresh development server
```bash
npm run dev
# Browser should auto-reload and show new image
```

### Step 3: Commit only code, not images
```bash
git add components/portfolio-gallery.tsx  # if you changed references
git commit -m "Update portrait gallery"
# Note: images/ folder is in .gitignore, won't be committed
```

## Deployment Workflow

### For Vercel Deployment:

1. **Upload images to Vercel Blob** (recommended):
   ```bash
   npm install @vercel/blob
   ```
   Then reference them via CDN URLs in your components.

2. **Or use environment-based image URLs**:
   ```typescript
   const imageBase = process.env.NEXT_PUBLIC_IMAGE_BASE || "/images";
   const src = `${imageBase}/portraits/downtown-portraits.jpg`;
   ```

3. **Keep local images during development**:
   - Local: images served from `/public/images/`
   - Production: images served from cloud CDN

### For Self-Hosted Deployment:

1. **Upload images to your server**:
   ```bash
   scp -r public/images/* user@server:/var/www/app/public/images/
   ```

2. **Or commit to Git LFS** (Git Large File Storage):
   ```bash
   # Install Git LFS
   brew install git-lfs  # or apt-get install git-lfs
   
   # Track image files
   git lfs track "public/images/**/*.jpg"
   git lfs track "public/images/**/*.webp"
   
   # Commit and push
   git add .gitattributes public/images/
   git commit -m "Add photography portfolio images"
   git push
   ```

## Troubleshooting

### Images don't show locally
- Check file path matches exactly (case-sensitive on Linux/Mac)
- Verify filename in TILES array matches actual file name
- Clear Next.js cache: `rm -rf .next && npm run dev`

### Images look blurry
- Image is too small for its display size
- Solution: Use larger source images (1600px+)

### Build fails on Vercel
- Images are too large or too many
- Solution: Use external CDN or Git LFS
- See "Deployment Workflow" section above

### File size too large
- Compress images before adding to `/public`
- Use tools from "Compression Tools" section

## Performance Metrics

Expected load times with optimized images:
- Full page: 1.2-1.8s (with 6 images)
- Image lazy-loading: Off-screen images load when scrolled into view
- Next.js Image component: Auto-scales to device size

Check performance:
```bash
npm run build
npm run start
# Open DevTools → Lighthouse → Performance
```

## Quick Reference

| Task | Command |
|------|---------|
| Create folders | `mkdir -p public/images/{portraits,drone,real-estate}` |
| Copy images | `cp ~/photos/* public/images/portraits/` |
| Dev server | `npm run dev` |
| Build for prod | `npm run build` |
| Compress JPG | `convert input.jpg -quality 85 output.jpg` |
| Convert to WebP | `cwebp -q 80 input.jpg -o output.webp` |

## Next Steps

1. ✅ Create the `/public/images/` folder structure
2. ✅ Add your photography files
3. ✅ Test locally with `npm run dev`
4. ✅ Optimize images before deployment
5. ✅ Choose a deployment strategy (Vercel Blob, S3, Git LFS, etc.)
6. ✅ Deploy to production

---

**Questions?** Check Next.js Image docs: https://nextjs.org/docs/app/api-reference/components/image
