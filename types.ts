export type Lang = 'bn' | 'hi' | 'en';
export type Article = {
 id?: string; slug: string; titleBn: string; titleHi?: string; titleEn?: string;
 excerptBn: string; excerptHi?: string; excerptEn?: string;
 bodyBn: string; bodyHi?: string; bodyEn?: string;
 category: string; image: string; videoUrl?: string; author: string; status: 'published'|'draft';
 featured?: boolean; createdAt?: any; updatedAt?: any;
};
export type SiteSettings = { logo?: string; siteName?: string; tagline?: string; breakingText?: string; accent?: string; favicon?: string };
