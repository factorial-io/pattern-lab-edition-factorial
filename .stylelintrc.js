// .stylelintrc.js
const { Neutrino } = require('neutrino');

// Specify middleware to Neutrino prior to calling stylelintrc.
// Even if using .neutrinorc.js, you must specify it when using
// the API
module.exports = Neutrino({ root: __dirname })
  .use('.neutrinorc.js')
  .call('stylelintrc');
