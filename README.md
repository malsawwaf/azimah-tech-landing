# Event Marketplace Landing Page

Modern, responsive landing page for Event Marketplace built with Next.js 15, React 19, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Next.js 15
- 🎯 Hero section with call-to-action
- ✨ Features showcase (6 key features)
- 📱 App download section (iOS & Android)
- 📧 Contact form
- 🔒 SEO optimized
- 💅 Fully customizable branding

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

### Update Branding Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    primary: "#YOUR_PRIMARY_COLOR",
    secondary: "#YOUR_SECONDARY_COLOR",
    accent: "#YOUR_ACCENT_COLOR",
  },
},
```

### Add Your Logo

1. Place your logo in the `public` folder
2. Update the navigation in `app/page.tsx`:

```tsx
<div className="flex items-center">
  <img src="/your-logo.png" alt="Logo" className="h-8" />
  <h1 className="text-2xl font-bold text-brand-primary ml-2">Event Marketplace</h1>
</div>
```

### Update Content

All content is in `app/page.tsx`. Simply edit the text to match your branding and messaging.

### Add App Store Links

When your apps are published, update the download buttons in the "App Download" section:

```tsx
<a href="YOUR_APP_STORE_LINK" target="_blank" rel="noopener noreferrer">
  {/* App Store Button */}
</a>
```

### Connect Contact Form

The contact form currently logs to console. To connect it to your backend:

1. Replace the `setTimeout` in `handleSubmit` with an actual API call
2. Example with fetch:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Next.js and deploy

Or use Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
event-marketplace-landing/
├── app/
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## SEO

The site includes:
- Meta title and description
- Keywords for search engines
- Semantic HTML structure
- Responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Support

For questions or issues, please contact the development team.
