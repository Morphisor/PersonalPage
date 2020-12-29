const basePath = process.env.NODE_ENV === 'production' ? '/PersonalPage' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};