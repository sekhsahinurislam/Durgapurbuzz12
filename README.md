# DURGAPUR BUZZ — Complete Website Source

A responsive Bengali-first digital newspaper / local news portal built with Next.js 15, React 19, TypeScript, Tailwind CSS and Firebase.

## Included
- Newspaper-style responsive homepage with featured, latest and category news sections
- Individual article pages (`/news/[slug]`)
- Category pages (`/category/durgapur`, `/category/paschim-bardhaman`, etc.)
- Search page and search results
- Three-dot menu with Bangla (default), Hindi and English language selection
- Firebase Email/Password admin login at `/admin`
- Single Super Admin UID restriction in the client and Firestore rules
- Admin dashboard, create/edit/delete news, drafts, publishing and featured story control
- Admin-editable site logo URL, name, tagline, breaking news text, contact email, social links and accent color
- Image, logo and video URL fields. **Firebase Storage is not used.**
- SEO metadata, robots and sitemap routes

## Firebase project
The Firebase web config is prefilled for project `durgapur-buzz`. It is public client configuration; Firestore rules enforce write access.

### Admin account
The one permitted Admin UID is configured as:
`QdERp0w3SAaS18UWc7qkjIXZmii2`

The Firebase Authentication Email/Password user must have exactly this UID. The website does not store or contain your password.

### Required Firebase setup
1. Firebase Console → Authentication → Sign-in method → enable Email/Password.
2. Create the admin user (already done by site owner); confirm its UID matches the value above.
3. Create Firestore Database.
4. Open Firestore → Rules, paste the contents of `firestore.rules`, and Publish.
5. Do not enable Firebase Storage; this website uses public image/video URLs only.

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open `http://localhost:3000`. Admin: `http://localhost:3000/admin`.

## Deploy with GitHub + Vercel
1. Extract this ZIP.
2. Upload the contents of the `DURGAPUR-BUZZ-FULL` folder to a GitHub repository (the `package.json` must be at repository root).
3. Import that repository in Vercel and deploy using the Next.js preset.
4. If you use `.env.local` values, add the same `NEXT_PUBLIC_FIREBASE_*` values in Vercel Project → Settings → Environment Variables.
5. Publish `firestore.rules` in Firebase Console.

## Firestore collections
- `articles/{id}`: `slug`, `titleBn`, `titleHi`, `titleEn`, `excerptBn`, `excerptHi`, `excerptEn`, `bodyBn`, `bodyHi`, `bodyEn`, `category`, `image`, `videoUrl`, `author`, `status`, `featured`, `createdAt`, `updatedAt`.
- `settings/main`: `siteName`, `tagline`, `breakingText`, `logo`, `contactEmail`, `instagram`, `facebook`, `youtube`, `accent`.

## Image and video URL guidance
Use publicly accessible HTTPS image URLs that end in a supported image resource or are served with an image content type. Video field accepts a public YouTube URL or direct MP4 URL. A normal Google Drive share page is not necessarily a direct image URL.

## Important
- Firestore rules are the real data security boundary; the client-side UID check is only an additional guard.
- If you change the Admin account, update the UID in both `app/admin/page.tsx` and `firestore.rules`, then redeploy and republish rules.
- The included sitemap uses `https://durgapurbuzz.in` as a suggested domain. Change it to your final domain in `app/robots.ts` and `app/sitemap.ts` before launch.
- The source package is complete for deployment, but you must run `npm install`, build and test it with your Firebase project before going live.
