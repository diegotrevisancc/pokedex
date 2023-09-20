/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["raw.githubusercontent.com"] //we should add all the image cdn providers into this array to nextJS understand this is trustable
    }
}

module.exports = nextConfig
