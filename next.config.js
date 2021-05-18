
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['jUe33Vww77N2Gvrb2SZGNo'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  