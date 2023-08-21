/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#FF941A",
        "custom-black": "#1C1C1C",
        "custom-green": "#51C452",
        "custom-bg-org": "#FFF9F2",
        "custom-grey": "#BDBDBD",
        "text-grey": "#A3A3A3",
        "custom-bg-grey": "#F5F5F5",
        "custom-pink": "#FFF9F2",
      },
    },
  },
  plugins: [],
};
