# DURGAPUR BUZZ
Professional multilingual news portal built with Next.js 15 + Firebase.

## Features
- Bengali-first news homepage and article pages
- Language selector (Bangla default, Hindi, English) in the three-dot menu
- Firebase email/password admin authentication
- Admin dashboard, create/edit/delete news, draft/publish, featured news
- External image and video URLs (Firebase Storage is not used)
- Website branding and breaking-news ticker settings
- Instagram, Facebook, YouTube and email links

## Setup
1. Create a Firebase project at https://console.firebase.google.com/.
2. Enable **Authentication > Email/Password** and create your admin user.
3. Create **Firestore Database**. Firebase Storage is not required.
4. The supplied Firebase project configuration is already connected as the default. For local overrides, copy `.env.example` to `.env.local`.
5. Install and run:
   ```bash
   npm install
   npm run dev
   ```
6. Open `/admin` and sign in with the Firebase admin email/password.

## Firestore structure
- `articles/{articleId}`: `slug`, `titleBn`, `titleHi`, `titleEn`, `excerptBn`, `excerptHi`, `excerptEn`, `bodyBn`, `bodyHi`, `bodyEn`, `category`, `image`, `author`, `status`, `featured`, `createdAt`, `updatedAt`.
- `settings/main`: `siteName`, `tagline`, `breakingText`, `logo`, `accent`.

## Secure Firebase Rules (recommended starting point)
In Firebase Authentication, create your admin account and copy its **UID**. Replace `PASTE_ADMIN_UID` below with that exact UID before publishing these rules. This makes content writes admin-only (not merely available to every signed-in user).

Firestore Rules:
```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAdmin() { return request.auth != null && request.auth.uid == 'PASTE_ADMIN_UID'; }
    match /articles/{id} {
      allow read: if resource.data.status == 'published' || isAdmin();
      allow create, update, delete: if isAdmin();
    }
    match /settings/{id} {
      allow read: if true;
      allow write: if isAdmin();
    }
  }
}
```

## Media URLs
In Admin → News Editor, paste a public HTTPS image URL in Cover Image URL and an optional YouTube or MP4 URL in Video URL. In Admin → Website Settings, paste the public HTTPS logo URL. The URLs must be publicly accessible; Firebase Storage is not used.


## Admin UID and Firestore security

The single permitted admin UID is configured in `lib/admin.ts` and enforced in the admin login UI. Firestore access is separately protected by `firestore.rules`. In Firebase Console, open **Firestore Database → Rules**, replace the rules with the contents of `firestore.rules`, and click **Publish**. Do not rely on the client-side UID check alone.

Only the Firebase Authentication user whose UID is `QdERp0w3SAaS18UWc7qkjIXZmii2` can read drafts and create, edit, or delete articles, or change site settings. Public visitors can read published articles and site settings. Firebase Storage is not used; media fields contain externally hosted URLs.
