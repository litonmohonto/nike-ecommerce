/** @type {import('tailwindcss').Config} */
export default {
          content: [
                    "./index.html",
                    "./src/**/*.{js,ts,jsx,tsx}",
          ],
          theme: {
                    extend: {
                              colors: {
                                        primary: "#138695"
                              },
                              fontFamily: {
                                        sans: ["Poppins", "sans-serif",],
                                        handeriting: ["Merienda", "cusive"]

                              },
                              container: {
                                        center: "true",
                                        padding: {
                                                  DEFAULT: "1rem",
                                                  sm: "1.5rem",
                                                  md: "2rem",
                                                  lg: "3rem",
                                                  xl: "4rem",
                                                  "2xl": "5rem",
                                        }

                              }
                    },
          },
          plugins: [],
}