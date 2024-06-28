/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: 'images.unsplash.com'
            }, {
                protocol: "https",
                hostname: 'res.cloudinary.com'
            }]
    },
};

export default nextConfig;
