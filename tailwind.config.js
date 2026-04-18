/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./compenents/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // 16px
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
    letterSpacing: {
      normal: '1px',
      wide: '2px',
      wider: '.4px',
      widest: '8px',
      widest: '12px'
    },
    // fontSize: {
    //   sm: ['14px', '20px'],
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
    // },
    extend: {
      boxShadow: {
        'green-glow': '0 4px 8px 0 rgb(165 214 69 / 45%), 0 6px 20px 0 rgb(165 214 89 / 48%)',
      },
      colors: {
        "main-g": "#A4D639",
        "secondary-main": "rgb(20, 27, 35)",
        "txt-c": "rgb(250, 250, 250)",
        "rgb": "rgb(31, 38, 46)",
      },
      backgroundImage: {
        'main-bg': "url('/imgs/one.jpg')",
        'service-bg': "url('/imgs/four.jpg')",
        'gallery-one': "url('/imgs/five.jpg')",
        'gallery-two': "url('/imgs/six.jpg')",
        'gallery-three': "url('/imgs/seven.jpg')",
        'gallery-four': "url('/imgs/eight.jpg')",
        'gallery-five': "url('/imgs/nine.jpg')",
        'gallery-six': "url('/imgs/ten.jpg')",
        'gallery-seven': "url('/imgs/eleven.jpg')",
        'gallery-eight': "url('/imgs/tweelve.jpg')",
        'gallery-nigh': "url('/imgs/last.jpg')",
        'review-one': "url('/imgs/review.jpg')",
        'review-two': "url('/imgs/review2.jpg')",
        'review-three': "url('/imgs/review3.jpg')",
      },
      width: {
        '0.25': "1px",
      }
    },
    plugins: [],
  }
}

