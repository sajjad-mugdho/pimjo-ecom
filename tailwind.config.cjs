/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // you can map the DM Sans variable here if you prefer to use font-sans utility
      fontFamily: {
        // use the --font-sans variable defined in globals.css which in turn
        // references --font-dm-sans. This lets us change the underlying
        // provider (next/font) without updating Tailwind config.
        sans: ["var(--font-sans)", "DM Sans", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
