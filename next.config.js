const basePath = process.env.NODE_ENV === 'production' ? '/PersonalPage' : '';
//const basePath = '/PersonalPage';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};