export const getImageUrl = (path) => {
    // `反引号` 用于字符串模板
    return new URL(`/assets/${path}`, import.meta.url).href;
}