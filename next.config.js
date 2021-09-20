/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
    API_SERVER_URL: 'http://localhost:5000',

    // hi: process.env.HI,
  },
};
