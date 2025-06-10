/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['lucide-react'],
        esmExternals: 'loose',
    },
    images: {
        domains: ['localhost'],
    },
    transpilePackages: ['framer-motion'],
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            'framer-motion': require.resolve('framer-motion'),
        }
        return config
    },
}

module.exports = nextConfig 