const cdnUrl = 'https://cdn.statically.io/gh/Morphisor/PersonalPage/gh-pages';

const getAssetUrl = (assetUrl) => {
    let base = process.env.NODE_ENV === 'production' ? cdnUrl : '';
    return base + assetUrl;
}

export default getAssetUrl;