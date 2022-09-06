/** @type {import('next').NextConfig} */
export default {
    i18n: {
        locales:       [ 'en' ],
        defaultLocale: 'en',
    },
    reactStrictMode: true,
    swcMinify:       true,
    compiler:        { styledComponents: true },
    experimental:    { images: { allowFutureImage: true } },
};
