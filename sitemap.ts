import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base='https://durgapurbuzz.in'; return [{url:base,lastModified:new Date(),changeFrequency:'hourly',priority:1},{url:`${base}/search`,changeFrequency:'weekly',priority:.4}]; }
