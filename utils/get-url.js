/**
 * Returns the url with the proper env prefix
 * @param {string} url the base url
 */
export default function getUrl(url) {
    return `${process.env.BACKEND_URL}/{url}`;
}