import { Comment, Heteronym } from '../types';
import { ALL_HETERONYMS } from '../data/heteronyms';

export function resolveCommentAuthor(comment: Comment, list: Heteronym[] = ALL_HETERONYMS) {
  // Clean handle input, removing any leading '@'
  const rawHandle = (comment.handle || '').replace(/^@/, '').trim().toLowerCase();
  const rawAuthorId = (comment.authorId || '').trim().toLowerCase();

  const author = list.find(h => {
    const hHandleClean = h.handle.replace(/^@/, '').trim().toLowerCase();
    const hIdClean = h.id.trim().toLowerCase();
    
    if (rawHandle) {
      if (hHandleClean === rawHandle || hIdClean === rawHandle) {
        return true;
      }
    }
    if (rawAuthorId) {
      if (hIdClean === rawAuthorId || hHandleClean === rawAuthorId) {
        return true;
      }
    }
    return false;
  });

  if (author) {
    return {
      authorId: author.id,
      authorName: author.name,
      authorAvatar: author.avatar,
      handle: author.handle,
      authorCategory: author.category,
      isResolved: true
    };
  }

  // Fallback if not found (e.g. "visitante" or generic / custom handle)
  const displayHandle = comment.handle || comment.authorId || 'visitante';
  const cleanDisplayHandle = displayHandle.replace(/^@/, '');
  const isVisitante = cleanDisplayHandle.toLowerCase() === 'visitante';
  
  return {
    authorId: isVisitante ? 'visitante' : cleanDisplayHandle,
    authorName: comment.authorName || (isVisitante ? 'Visitante Anónimo' : cleanDisplayHandle),
    authorAvatar: comment.authorAvatar || `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100`,
    handle: cleanDisplayHandle,
    authorCategory: comment.authorCategory || 'NPCS',
    isResolved: false
  };
}
