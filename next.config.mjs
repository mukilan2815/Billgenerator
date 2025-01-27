/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.postimg.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname:
          "/wikipedia/commons/thumb/4/45/Bharti_Airtel_Logo.svg/2560px-Bharti_Airtel_Logo.svg.png",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname:
          "/wikipedia/commons/thumb/1/13/Jio_logo.svg/2048px-Jio_logo.svg.png",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname:
          "/wikipedia/commons/thumb/9/96/Vodafone_Idea_Logo.svg/2560px-Vodafone_Idea_Logo.svg.png",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname:
          "/wikipedia/commons/thumb/0/0b/BSNL_logo.svg/2560px-BSNL_logo.svg.png",
      },
    ],
  },
};

export default nextConfig;
