/** @type {import('next').NextConfig} */
export default {
    reactStrictMode: true,
    swcMinify:       true,
    compiler:        { styledComponents: true },
    experimental:    { images: { allowFutureImage: true } },
    eslint:          {
        ignoreDuringBuilds: true,
    },
};
