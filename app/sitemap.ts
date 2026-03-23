import { MetadataRoute } from "next";
import { caseStudies } from "../src/content/caseStudies";

const baseUrl = "https://aronpaulorton.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/work",
    "/case-studies",
    "/contact",
    "/ai-editor",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : route === "/ai-editor" ? 0.9 : 0.8,
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
