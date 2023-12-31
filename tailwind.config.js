/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'strength': "url('/counter-bg.jpg')",
        'html': "url('/html&css-logo.png')",
        'box1': "url('/dtl_box1.jpg')",
        'box2': "url('/dtl_box2.jpg')",
        'box3': "url('/dtl_box3.jpg')",
        'portfolio-image': "url('/portfolio-image.png')",
      },

      colors: {
        "primary-color": "#f6483b",
        "hover": "#212529",
        "hover-text": '#b7b7b7',
        "exp-color": '#111111', 
         "all-bg": '#101010',
        "nav-color": '#020202,  '
      }
    },
  },
  plugins: [],
}

