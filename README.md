# Next Wave Landing Page

A modern, responsive landing page for the Next Wave foiling app. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Responsive design optimized for all devices
- Smooth animations and transitions
- Interactive features showcase
- Screenshot gallery with touch support
- FAQ section with animated accordions
- App Store download section
- Maritime-themed design with animated waves

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/next-wave-landing.git
cd next-wave-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Required Assets

Please add the following images to the `/public` directory:

- `logo.png` - Next Wave logo
- `app-preview.png` - Main app preview image
- `screenshot1.png` - Dashboard view screenshot
- `screenshot2.png` - Session recording screenshot
- `screenshot3.png` - Weather integration screenshot
- `app-store-badge.png` - App Store download badge

## Customization

- Colors can be customized in `tailwind.config.js`
- Animations can be adjusted in individual components
- Content can be modified in the respective component files

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [SF Pro Display](https://developer.apple.com/fonts/) - Typography

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## OS Switch Implementation

The website now includes an OS switch feature that allows users to toggle between iOS and Android content. This affects:

1. Screenshots display
2. Download links
3. Hero section text and images

## Required Image Files

For the OS switch to work properly, you need to have the following image files in the `public` directory:

### iOS Images
- `/app-interface-ios.png` (rename from existing `/app-interface.png`)
- `/app-preview-ios.png` (rename from existing `/app-preview.png`)
- `/app-store-badge.svg` (already exists)

### Android Images
- `/app-interface-android.png` (new file needed)
- `/app-preview-android.png` (new file needed)
- `/google-play-badge.png` (new file needed)

## How to Use

1. Rename the existing image files as suggested above
2. Add the new Android image files
3. Update the Google Play link in `src/components/Download.tsx` with your actual Android app link

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
``` 