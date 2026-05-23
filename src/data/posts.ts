import { Post } from '../types';
import { camposPosts } from './user_campos';
import { caeiroPosts } from './user_caeiro';
import { reisPosts } from './user_reis';
import { soaresPosts } from './user_soares';
import { searchPosts } from './user_search';
import { moraPosts } from './user_mora';
import { teivePosts } from './user_teive';
import { guedesPosts } from './user_guedes';
import { normalPosts } from './users_normal';
import { rarePosts } from './users_rare_npc';

export const INITIAL_POSTS: Post[] = [
  ...camposPosts,
  ...caeiroPosts,
  ...reisPosts,
  ...soaresPosts,
  ...searchPosts,
  ...moraPosts,
  ...teivePosts,
  ...guedesPosts,
  ...normalPosts,
  ...rarePosts
];
