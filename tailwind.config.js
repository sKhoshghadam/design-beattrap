module.exports = {
  content: [
    "./index.html",
    "./pages/product-item.html",
  ],
  theme: {
    extend: {
      colors: {
        "darkBlack": "#12111f"
      },

      screens: {
        'ml': { 'max': '1000px' },
      },
    }
  },
  plugins: [],
}
