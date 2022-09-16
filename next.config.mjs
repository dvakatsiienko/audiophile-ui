const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API = new URL(API_URL);

const protocol = API.protocol.replace(':', '');
const { hostname } = API;

/** @type {import('next').NextConfig} */
export default {
    reactStrictMode: true,
    swcMinify:       true,
    compiler:        { styledComponents: true },
    eslint:          { ignoreDuringBuilds: true },
    images:          { remotePatterns: [{ protocol, hostname }] },
};
