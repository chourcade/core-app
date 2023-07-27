const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // specify remotes
    login: `login@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    playground: `playground@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  };
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        exposes: {
          // Host app also can expose modules
        }
      })
    );

    return config;
  },
}

module.exports = nextConfig
