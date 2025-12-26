import { LucideIcon } from 'lucide-react';

export type Page = 'home' | 'products' | 'solutions' | 'blog' | 'contact';

export type ProductCategory = 'all' | 'skill-reel' | 'fish-table' | 'skill-arcade';

export type ProductFormFactor = 'machine' | 'kit';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  title: string;
  formFactor: ProductFormFactor; 
  category: ProductCategory;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TechSpecItem {
  label: string;
  value: string;
}

export interface ComparisonItem {
  feature: string;
  competitor: string;
  us: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
}

export interface CaseStudy {
  title: string;
  metrics: string; // e.g., "+300% Revenue"
  summary: string;
}

export interface IndustrySolution {
  id: string;
  title: string;
  icon: LucideIcon;
  headline: string;
  description: string; // Short intro
  deepDive: string; // Long SEO text
  painPoints: string[];
  benefits: string[];
  imageUrl: string;
  recommendedProductIds?: string[];
  
  // Tank Page Extras
  faqs: FAQItem[];
  techSpecs: TechSpecItem[]; // Installation requirements
  roiComparison: ComparisonItem[]; // Vs Standard Vending/Arcade
  buyersGuide: string[]; // Bullet points on what to look for
  caseStudy: CaseStudy;
  testimonial: Testimonial;
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
}

export interface MarketSegment {
  name: string;
  icon: LucideIcon;
  benefit: string;
}

export interface CalculationData {
  month: string;
  revenue: number;
}