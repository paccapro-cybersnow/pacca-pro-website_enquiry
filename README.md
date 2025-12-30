# Pacca Pro - Premium Paint Solutions

A modern landing page for Pacca Pro paint distribution company with WhatsApp integration for customer enquiries.

## Features

- **Modern UI** - Clean, responsive design with Tailwind CSS
- **WhatsApp Integration** - One-click enquiry via WhatsApp
- **Optimized Structure** - Production-ready folder organization

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

## Project Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Root component
├── assets/               # Images and static files
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, etc.
│   └── ui/               # Reusable UI components
├── lib/
│   ├── constants.ts      # App configuration
│   └── utils.ts          # Helper functions
└── types/                # TypeScript interfaces
```

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Configuration

Update WhatsApp settings in `src/lib/constants.ts`:

```typescript
export const WHATSAPP_CONFIG = {
  phoneNumber: '918768786878',
  defaultMessage: 'WEBSITE_ENQUIRY',
};
```

## Build

```bash
npm run build
```

## License

© 2025 Pacca Pro. All rights reserved.
