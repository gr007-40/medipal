/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        config.experiments = {...config.experiments, topLevelAwait: true};
        return config;
    }
    // experimental: {
    //     topLevelAwait: true,
    // },
}

module.exports = nextConfig
