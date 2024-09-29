const plugins = [];

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "standalone",
};

module.exports = () => plugins.reduce((acc, next) => next(acc), config);
