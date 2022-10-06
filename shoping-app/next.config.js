/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// adding webpack config 
// adding svg icon external
module.exports = {
  webpack(config) {
    config.module.rules.push({
      
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      
    })
    return config
  }
}
