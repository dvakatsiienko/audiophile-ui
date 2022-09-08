/** @type {import('next').NextConfig} */
export default {
    reactStrictMode: true,
    swcMinify:       true,
    compiler:        { styledComponents: true },
    eslint:          { ignoreDuringBuilds: true },
};
