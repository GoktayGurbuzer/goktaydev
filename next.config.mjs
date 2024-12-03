/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-images-1.medium.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'unsplash.com',
            }
        ],
    },
    experimental: {
        optimizeCss: true, // CSS optimizasyonunu etkinleştirir
    },
    compress: true,
};

export default nextConfig;
