import type { MetadataRoute } from "next";
import { siteUrl } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      images: [
        `${siteUrl}/images/perfecto-cousu.jpg`,
        `${siteUrl}/images/poche-passepoilee.jpg`,
        `${siteUrl}/images/prenom-brode.jpg`,
        `${siteUrl}/images/broderie-machine.jpg`,
      ],
    },
  ];
}
