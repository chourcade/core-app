const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const LOGIN_APP_URL =
  process.env.NEXT_PUBLIC_SHOP_APP_URL || 'http://localhost:3001/';

const PLAYGROUND_APP_URL =
  process.env.NEXT_PUBLIC_CONTENT_APP_URL || 'http://localhost:3002/';


const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // specify remotes
    login: `login@${LOGIN_APP_URL}_next/static/${location}/remoteEntry.js`,
    playground: `playground@${PLAYGROUND_APP_URL}_next/static/${location}/remoteEntry.js`,
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
        },
        extraOptions: {
          exposePages: true, // `false` by default
          enableImageLoaderFix: true, // `false` by default
          enableUrlLoaderFix: true, // `false` by default
        },
      })
    );

    return config;
  },
}

module.exports = nextConfig
