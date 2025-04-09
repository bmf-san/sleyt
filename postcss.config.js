module.exports = (ctx) => ({
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'custom-properties': true,
        'nesting-rules': true
      }
    }),
    require('autoprefixer'),
    ctx.env === 'production' ? require('cssnano') : false
  ]
});