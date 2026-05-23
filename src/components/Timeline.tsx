import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageCircle, CheckCircle2, Languages, AlertCircle, Sparkles, Smile, BookOpen, X } from 'lucide-react';
import { Post, Comment, Heteronym } from '../types';
import { resolveCommentAuthor } from '../utils/commentResolver';

interface TimelineProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  unlockedList: string[];
  unlockHeteronym: (id: string, name: string) => void;
  allHeteronyms: Heteronym[];
  globalTranslate: boolean;
  onProfileClick: (id: string) => void;
}

export default function Timeline({
  posts,
  setPosts,
  unlockedList,
  unlockHeteronym,
  allHeteronyms,
  globalTranslate,
  onProfileClick
}: TimelineProps) {
  const [activeCommentsPostId, setActiveCommentsPostId] = useState<string | null>(null);
  const [translatedPosts, setTranslatedPosts] = useState<Record<string, boolean>>({});
  const [commentInput, setCommentInput] = useState<{ [postId: string]: string }>({});
  const [selectedFullPoemPost, setSelectedFullPoemPost] = useState<Post | null>(null);

  const toggleTranslation = (postId: string) => {
    setTranslatedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleLikePost = (postId: string) => {
    setPosts(prev =>
      prev.map(p => {
        if (p.id === postId) {
          const hasLiked = !p.hasLiked;
          return {
            ...p,
            likes: hasLiked ? p.likes + 1 : p.likes - 1,
            hasLiked
          };
        }
        return p;
      })
    );
  };

  const handleBookmarkPost = (postId: string) => {
    setPosts(prev =>
      prev.map(p => {
        if (p.id === postId) {
          const hasBookmarked = !p.hasBookmarked;
          return {
            ...p,
            hasBookmarked
          };
        }
        return p;
      })
    );
  };

  const handleLikeComment = (postId: string, commentId: string) => {
    setPosts(prev =>
      prev.map(p => {
        if (p.id === postId) {
          return {
            ...p,
            comments: p.comments.map(c => {
              if (c.id === commentId) {
                const hasLiked = !c.hasLiked;
                return {
                  ...c,
                  likes: hasLiked ? c.likes + 1 : c.likes - 1,
                  hasLiked
                };
              }
              return c;
            })
          };
        }
        return p;
      })
    );
  };

  // Allow visitors to comment as "Visitante Anónimo" to participate in the dynamic forums
  const handleSubmitComment = (postId: string) => {
    const text = commentInput[postId]?.trim();
    if (!text) return;

    const newComment: Comment = {
      id: `anon_comment_${Date.now()}`,
      authorId: 'visitante',
      authorName: 'Visitante Anónimo 👤',
      authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
      authorCategory: 'NPCS',
      handle: 'anon_reader',
      content: text,
      timestamp: 'Agora mesmo',
      likes: 0
    };

    setPosts(prev =>
      prev.map(p => {
        if (p.id === postId) {
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            comments: [...p.comments, newComment]
          };
        }
        return p;
      })
    );

    setCommentInput(prev => ({ ...prev, [postId]: '' }));

    // Alert students when commenting that the system is simulated
    alert('💬 Comentário publicado! Vários heterónimos no baú estão a preparar respostas filosóficas na sua mente.');
  };

  const handleAvatarClick = (comment: Comment) => {
    const resolvedAuthor = resolveCommentAuthor(comment, allHeteronyms);
    const commentName = resolvedAuthor.authorName;
    const commentCategory = resolvedAuthor.authorCategory;
    const commentAuthorId = resolvedAuthor.authorId;

    const isNPC = commentCategory === 'NPCS' || commentCategory === 'RAROS' || commentCategory === 'ATIVOS';
    if (isNPC && commentAuthorId !== 'visitante') {
      const alreadyUnlocked = unlockedList.includes(commentAuthorId);
      if (!alreadyUnlocked) {
        unlockHeteronym(commentAuthorId, commentName);
      } else {
        alert(`💫 O heterónimo ${commentName} já está desbloqueado no teu Baú!`);
      }
    } else if (commentAuthorId === 'visitante') {
      alert('👤 Entraste como Visitante Anónimo. Explora os outros utilizadores com avatares cinzentos para desbloquear heterónimos reais!');
    } else {
      alert(`📚 ${commentName} é um dos 4 Heterónimos Centrais já desbloqueados por padrão no teu Baú de Pessoa.`);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Simulation Banner Notice */}
      <div className="bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/10 rounded-2xl p-5 flex gap-4 items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full filter blur-2xl pointer-events-none"></div>
        <AlertCircle className="w-8 h-8 text-cyan-400 shrink-0" />
        <div>
          <h4 className="font-display font-semibold text-sm text-cyan-300">Cápsula do Tempo Dinâmica</h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Estás a observar a rede social interna das personalidades de <span className="text-white font-semibold">Fernando Pessoa</span>. 
            Lê os poemas, traduz para o calão moderno e clica nos avatares no fórum de comentários abaixo para deparar e recrutar mais de 120 heterónimos secundários!
          </p>
        </div>
      </div>

      {/* Main Posts Feed Loop */}
      <div className="space-y-6">
        {posts.map((post) => {
          const isTranslated = !!translatedPosts[post.id] || globalTranslate;
          const showComments = activeCommentsPostId === post.id;

          const authorFull = allHeteronyms.find(h => h.id === post.authorId);
          const authorName = authorFull?.name || post.authorName || 'Utilizador';
          const authorAvatar = authorFull?.avatar || post.authorAvatar;
          const authorHandle = authorFull?.handle || post.handle;

          return (
            <motion.article 
              key={post.id}
              id={`post_${post.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#121824] border border-slate-800/80 rounded-3xl overflow-hidden shadow-xl transition-all"
            >
              {/* Card Header clickable to open profile */}
              <div 
                onClick={() => onProfileClick(post.authorId)}
                className="flex items-center justify-between p-5 border-b border-slate-800/40 cursor-pointer hover:bg-slate-800/20 active:bg-slate-800/30 transition-all group/header"
                title={`Ver perfil de ${authorName}`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative group-hover/header:scale-[1.03] transition-transform">
                    <img 
                      src={authorAvatar} 
                      alt={authorName}
                      className="w-11 h-11 rounded-full border border-slate-700/60 object-cover ring-2 ring-transparent group-hover/header:ring-cyan-500/50 transition-all"
                      referrerPolicy="no-referrer"
                    />
                    <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 fill-[#121824] absolute -bottom-1 -right-1" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-display font-bold text-sm text-white group-hover/header:text-cyan-400 transition-colors">{authorName}</h4>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-400 font-bold border border-cyan-400/10 font-mono">
                        {authorFull?.role ? authorFull.role.split(' / ')[0] : 'VERIFICADO'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono group-hover/header:text-cyan-400/70 transition-colors">@{authorHandle}</p>
                  </div>
                </div>
              </div>

              {/* Post Image Container */}
              {post.imageUrl && (
                <div className="relative aspect-[16/9] w-full bg-slate-900 border-b border-slate-800/40 group overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt="Creative poetry context illustration"
                    className="w-full h-full object-cover filter brightness-[0.70] group-hover:scale-102 transition-transform duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              )}

              {/* Post Content Area */}
              <div className="p-6 relative bg-gradient-to-b from-[#121824] to-[#0f1420]">
                {/* Vintage overlay for feel */}
                <div className="vintage-overlay absolute inset-0 opacity-10 pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Poetry content text */}
                  {post.title && !isTranslated && (
                    <h3 className="font-display font-medium text-white italic tracking-wide text-lg mb-2.5 pl-5">
                      {post.title}
                    </h3>
                  )}

                  <AnimatePresence mode="wait">
                    {!isTranslated ? (
                      <motion.div
                        key="original"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="border-l-2 border-cyan-400/40 pl-5 text-slate-200 text-lg leading-relaxed italic font-serif"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        "{post.content}"
                      </motion.div>
                    ) : (
                      <motion.div
                        key="genz"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-cyan-950/40 border border-cyan-500/20 py-4.5 px-5 rounded-2xl text-cyan-300 text-sm leading-relaxed font-mono relative"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase text-cyan-400 font-bold mb-2.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Mapeamento Geração Z Mode</span>
                        </div>
                        {post.translationGenZ}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hashtags, if present and not translated */}
                  {post.hashtags && post.hashtags.length > 0 && !isTranslated && (
                    <div className="flex flex-wrap gap-2 mt-4 pl-5">
                      {post.hashtags.map((tag) => (
                        <span key={tag} className="text-xs text-cyan-400/80 hover:text-cyan-300 transition-colors font-mono">
                          #{tag.replace('_✨', ' ✨')}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Translator and Full Poem Reader Buttons */}
                  <div className="mt-6 flex flex-wrap gap-3 justify-start">
                    <button
                      onClick={() => toggleTranslation(post.id)}
                      className={`flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isTranslated
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-900 hover:bg-slate-800 border border-cyan-500/20 text-cyan-400 hover:border-cyan-400/60'
                      }`}
                    >
                      <Languages className="w-4 h-4" />
                      <span>{isTranslated ? 'Ver Original (1914)' : 'Traduzir para o Século XXI ⚡'}</span>
                    </button>

                    {post.fullPoemText && !isTranslated && (
                      <button
                        onClick={() => setSelectedFullPoemPost(post)}
                        className="flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600/20 to-cyan-600/20 hover:from-purple-600/35 hover:to-cyan-600/35 border border-purple-500/30 hover:border-cyan-400/60 text-indigo-200 hover:text-white transition-all cursor-pointer shadow-md"
                      >
                        <BookOpen className="w-4 h-4 text-purple-400 animate-pulse" />
                        <span>Ler {post.title || 'Poema'} Completa</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Interaction Panel */}
              <div className="px-6 py-4.5 bg-slate-950/10 border-t border-slate-800/40 flex justify-between items-center text-slate-400 text-sm">
                <div className="flex gap-6">
                  <button 
                    onClick={() => handleLikePost(post.id)}
                    className={`flex items-center gap-2 font-mono hover:text-rose-500 transition-colors cursor-pointer group ${
                      post.hasLiked ? 'text-rose-500' : ''
                    }`}
                  >
                    <Heart className={`w-5 h-5 transition-transform group-hover:scale-110 duration-200 ${post.hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span>{post.likes}</span>
                  </button>

                  <button 
                    onClick={() => setActiveCommentsPostId(showComments ? null : post.id)}
                    className={`flex items-center gap-2 font-mono hover:text-cyan-400 transition-colors cursor-pointer ${
                      showComments ? 'text-cyan-400' : ''
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments.length} Comentários</span>
                  </button>
                </div>

              </div>

              {/* COMMENTS CARDS BLOCK (Pedagogical forum engine) */}
              {showComments && (
                <div className="bg-slate-950/40 border-t border-slate-800/60 p-6 space-y-5">
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-2 border-b border-slate-900 pb-3 font-semibold">
                    💬 Debate dos Heterónimos: Multiplicidade do Eu
                  </div>

                  <div className="space-y-4">
                    {post.comments.map((comment, commentIdx) => {
                      const resolvedAuthor = resolveCommentAuthor(comment, allHeteronyms);
                      const commentName = resolvedAuthor.authorName;
                      const commentAvatar = resolvedAuthor.authorAvatar;
                      const commentHandle = resolvedAuthor.handle;
                      const commentCategory = resolvedAuthor.authorCategory;
                      const commentAuthorId = resolvedAuthor.authorId;

                      const isUncovered = unlockedList.includes(commentAuthorId) || commentCategory === 'VERIFICADOS';

                      return (
                        <div key={comment.id || `comment_${commentIdx}_${commentHandle}`} className="flex gap-3 text-slate-300">
                          {/* Clicking the avatar triggers Poetadex unlock flow */}
                          <button
                            onClick={() => handleAvatarClick(comment)}
                            className="focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded-full h-10 w-10 shrink-0 cursor-pointer overflow-hidden transition-transform hover:scale-105"
                            title={isUncovered ? `Ver ${commentName}` : 'Desbloquear no Baú'}
                          >
                            <img 
                              src={commentAvatar} 
                              alt={commentName}
                              className={`w-full h-full rounded-full object-cover border border-slate-800/80 ${
                                !isUncovered ? 'grayscale contrast-[1.5] brightness-70' : ''
                              }`}
                              referrerPolicy="no-referrer"
                            />
                          </button>

                          <div className="flex-1 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/40">
                            <div className="flex justify-between items-center mb-1.5 flex-wrap gap-2">
                              {/* Name with unlocking details */}
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-slate-100 font-display">
                                  {isUncovered ? commentName : '???'}
                                </span>
                                {commentCategory === 'VERIFICADOS' ? (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                                ) : (
                                  <span className={`text-[8px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded leading-none uppercase ${
                                    isUncovered 
                                      ? 'bg-slate-800 text-teal-400' 
                                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/10 animate-pulse'
                                  }`}>
                                    {isUncovered ? commentCategory : 'ESCONDIDO'}
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-slate-500 font-mono">@{isUncovered ? commentHandle : '???'}</span>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed font-sans mt-1">
                              {comment.content}
                            </p>

                            <div className="flex gap-4.5 mt-3 items-center">
                              <span className="text-[10px] text-slate-500 font-mono font-medium">{comment.timestamp}</span>
                              <button 
                                onClick={() => handleLikeComment(post.id, comment.id)}
                                className={`flex items-center gap-1.5 text-[10px] font-mono hover:text-rose-500 cursor-pointer ${
                                  comment.hasLiked ? 'text-rose-500' : 'text-slate-500'
                                }`}
                              >
                                <Heart className={`w-3.5 h-3.5 ${comment.hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                                <span>{comment.likes}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Add Comments input (Simulating interactions for teens) */}
                  <div className="mt-5 border-t border-slate-900 pt-4 flex gap-3 text-slate-300 items-start">
                    <div className="h-9 w-9 rounded-full bg-slate-800 border border-slate-700 font-bold flex items-center justify-center text-sm font-mono shrink-0 select-none">
                      V
                    </div>
                    <div className="flex-1 flex gap-2">
                      <input 
                        type="text" 
                        value={commentInput[post.id] || ''}
                        onChange={(e) => setCommentInput(prev => ({ ...prev, [post.id]: e.target.value }))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSubmitComment(post.id);
                        }}
                        placeholder="Deixa um comentário como visitante anónimo no debate..."
                        className="flex-1 bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2 text-xs focus:outline-none transition-all placeholder:text-slate-600 focus:bg-slate-950 font-sans"
                      />
                      <button 
                        onClick={() => handleSubmitComment(post.id)}
                        className="px-4 bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 py-2 rounded-xl text-xs font-bold cursor-pointer font-sans text-slate-300 shrink-0 transition-all flex items-center gap-1"
                      >
                        <Smile className="w-4 h-4 text-cyan-400" />
                        <span>Comentar</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.article>
          );
        })}
      </div>

      {/* Full Poem Reader Modal Overlay */}
      <AnimatePresence>
        {selectedFullPoemPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedFullPoemPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-[#0b0f19] border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#0d1222]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-400/10 text-cyan-400 rounded-xl">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-white">
                      {selectedFullPoemPost.title || 'Obra Completa'}
                    </h2>
                    <p className="text-xs text-slate-400 font-mono">
                      por @{selectedFullPoemPost.handle || 'personalidade'} • {selectedFullPoemPost.authorName}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedFullPoemPost(null)}
                  className="p-2 hover:bg-slate-800/80 active:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all cursor-pointer"
                  title="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content Pane */}
              <div className="flex-1 overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-slate-800 bg-gradient-to-b from-[#0b0f19] to-[#080b12]">
                <div className="max-w-prose mx-auto">
                  <pre 
                    className="text-slate-200 text-sm sm:text-base leading-relaxed font-serif whitespace-pre-wrap pl-6 border-l border-cyan-500/30 font-medium selection:bg-cyan-500/20"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {selectedFullPoemPost.fullPoemText}
                  </pre>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-6 py-4.5 bg-[#0d1222]/80 border-t border-slate-800/60 flex justify-between items-center shrink-0">
                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                  Baú de Fernando Pessoa • Literário
                </span>
                <button
                  onClick={() => setSelectedFullPoemPost(null)}
                  className="px-5 py-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer border border-slate-700/60 hover:border-slate-600"
                >
                  Fechar Leitura
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
