exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:3000/src/',

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['src/test/e2e/*.spec.js']
};