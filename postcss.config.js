module.exports = {
  plugins: {
    'precss': {},
    'rucksack-css': {},
    'autoprefixer': { 'browsers': ['last 3 versions'] },
    'postcss-assets': { loadPaths: ['src/images/'] }
  }
}
