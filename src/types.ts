export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  serviceType: string;
  location: string;
  badge?: string;
  isNew?: boolean;
}

export interface Project {
  id: string;
  title: string;
  suburb: string;
  category: 'Tile-to-Tin' | 'Residential' | 'Commercial' | 'Gutters & Fascia';
  description: string;
  colorbondColour: string;
  colourHex: string;
  image: string;
  beforeImage?: string;
  scope: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
  content: string[];
}

export interface ColorbondSwatch {
  name: string;
  hex: string;
  category: 'Contemporary' | 'Classic' | 'Matt';
  description: string;
}
