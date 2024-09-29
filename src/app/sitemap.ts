import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nsylke.com",
      lastModified: new Date(),
    },
  ];
}
