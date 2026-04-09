import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent MIME type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Prevent clickjacking (allow only same-origin framing)
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Control referrer information
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Enforce HTTPS
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Permissions Policy — restrict browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  // XSS Protection (legacy but still useful for older browsers)
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  // Remove X-Powered-By header (don't expose Next.js)
  poweredByHeader: false,

  // Security headers on all routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Image optimization config
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Google Maps embed thumbnails
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
      // Instagram embeds (if widget added later)
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
    ],
  },
};

export default nextConfig;
