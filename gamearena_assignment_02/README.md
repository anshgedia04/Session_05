<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app (JavaScript Version)

This contains everything you need to run your app locally. This is the JavaScript version of the GameArena project.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Key Changes from TypeScript Version

- Removed TypeScript-specific dependencies (`typescript`, `@types/node`)
- Converted all `.tsx` files to `.jsx` files
- Converted all `.ts` files to `.js` files
- Removed TypeScript type annotations and interfaces
- Updated Vite config from `.ts` to `.js`
- Updated HTML script reference from `index.tsx` to `index.jsx`
- Maintained all React functionality and Tailwind styling