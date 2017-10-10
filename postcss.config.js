module.exports = {
  plugins: {
    'precss': {},
    'autoprefixer': { browserslist: 'last 10 versions' },
    'postcss-assets': { loadPaths: ['src/images/'] }
  }
}
