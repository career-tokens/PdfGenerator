/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: 'images.unsplash.com'
            },
            {
                protocol: "https",
                hostname: 'res.cloudinary.com'
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
              },
              {
                protocol: "https",
                hostname:"img.icons8.com"
              }]
    },
};

export default nextConfig;
