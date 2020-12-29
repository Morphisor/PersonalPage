const basePath = process.env.NODE_ENV === 'production' ? '/PersonalPage' : '';
const assetPrefix = process.env.NODE_ENV === 'production' ? 'https://cdn.statically.io/gh/Morphisor/PersonalPage/gh-pages/' : ''
//const basePath = '/PersonalPage';

module.exports = {
  basePath,
  assetPrefix
};