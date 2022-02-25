/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    swcMinify: true,
    poweredByHeader: false,
    compress: process.env.NODE_ENV === 'production'
};
