module.exports = (ctx) => ({
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true
      }
    }),
    require('postcss-discard-duplicates'),
    ...(ctx.env === 'production'
      ? [
          require('autoprefixer'),
          require('cssnano')({
            preset: 'default'
          })
        ]
      : [])
  ]
});