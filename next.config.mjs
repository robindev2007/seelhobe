/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.bikroy-st.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
