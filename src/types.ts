export type HeteronymCategory = 'VERIFICADOS' | 'ATIVOS' | 'RAROS' | 'NPCS';

export interface Comment {
  id: string;
  authorId: string;
  authorName?: string;
  authorAvatar?: string;
  authorCategory?: HeteronymCategory;
  handle?: string;
  content: string;
  timestamp: string;
  likes: number;
  hasLiked?: boolean;
}

export interface Post {
  id: string;
  authorId: string;
  authorName?: string;
  authorAvatar?: string;
  handle?: string;
  imageUrl?: string;
  location?: string;
  content: string; // Original Portuguese poem or quote
  translationGenZ: string; // The "Século XXI" Translated version
  title?: string;
  hashtags?: string[];
  fullPoemText?: string;
  likes: number;
  commentsCount: number;
  timestamp: string;
  comments: Comment[];
  hasLiked?: boolean;
  hasBookmarked?: boolean;
}

export interface Heteronym {
  id: string;
  name: string;
  handle: string;
  role: string;
  category: HeteronymCategory;
  quote: string;
  bio: string;
  avatar: string;
}
