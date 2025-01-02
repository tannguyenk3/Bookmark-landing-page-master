/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./style/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: {
          soft_blue: 'hsl(231, 69%, 60%)',
          soft_red: 'hsl(0, 94%, 66%)',
        },
        neutral: {
          grayish_blue: 'hsl(229, 8%, 60%)',
          very_dark_blue: 'hsl(229, 31%, 21%)',
        },
      },
      height: {
        '32vh': '32vh',
      },
      width: {
        '20px': '20px',
        '290px': '290px',
        '500px': '500px',
        '1024px': '1024px',
      },
      spacing: {
        '30rem': '30rem',
        '25rem': '25rem',
        '33rem': '33rem',
        '27rem': '27rem',
        '22.9rem': '22.9rem',
        '22rem': '22rem',
        '18rem': '18rem', 
        '15rem': '15rem',
        '13rem': '13rem',
        '10rem': '10rem',
        '8rem': '8rem',
        '5rem': '5rem',
        '1rem': '1rem',
        '0.3rem': '0.3rem',
      },
    },
  },
  plugins: [],
}

