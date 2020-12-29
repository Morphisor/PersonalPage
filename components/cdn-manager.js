const cdnUrl = 'https://github.com/Morphisor/PersonalPage/blob/gh-pages';

const getAssetUrl = (assetUrl) => {
    let base = process.env.NODE_ENV === 'production' ? cdnUrl : '';
    return base + assetUrl;
}

export default getAssetUrl;