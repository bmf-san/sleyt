module.exports = {
  launch: {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  server: {
    command: 'npm run start',
    port: 8000,
    launchTimeout: 10000,
    debug: true
  }
};