module.exports = {
  plugins: {
    'precss': {},
    'rucksack-css': {},
    'autoprefixer': { 'browserslist': ['last 15 versions'] },
    'postcss-assets': { loadPaths: ['src/images/'] }
  }
}
