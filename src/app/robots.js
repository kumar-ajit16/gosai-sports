export default function robots() {
  const baseUrl = "https://gosaisports.com";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/_next/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
