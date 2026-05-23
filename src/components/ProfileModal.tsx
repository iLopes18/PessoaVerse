import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Compass, Sparkles, CheckCircle2, UserCheck, UserPlus, Grid, BookOpen, Heart, MessageCircle, ArrowLeft } from 'lucide-react';
import { Heteronym, Post } from '../types';

interface ProfileModalProps {
  heteronym: Heteronym;
  isOpen: boolean;
  onClose: () => void;
  isUnlocked: boolean;
  posts: Post[];
  onUnlock: () => void;
  onPostClick?: (postId: string) => void;
}

export default function ProfileModal({
  heteronym,
  isOpen,
  onClose,
  isUnlocked,
  posts,
  onUnlock,
  onPostClick
}: ProfileModalProps) {
  const [activeTab, setActiveTab ] = useState<'info' | 'posts'>('info');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [postGenZ, setPostGenZ] = useState<boolean>(false);

  useEffect(() => {
    if (selectedPost && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost, isOpen]);

  if (!isOpen) return null;

  // Filter posts specifically written by this heteronym
  const authorPosts = posts.filter(p => p.authorId === heteronym.id);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'VERIFICADOS':
        return 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/20';
      case 'ATIVOS':
        return 'bg-[#a855f7]/10 text-[#c084fc] border border-[#a855f7]/20';
      case 'RAROS':
        return 'bg-[#e11d48]/10 text-[#f43f5e] border border-[#e11d48]/20';
      default:
        return 'bg-slate-800/60 text-slate-400 border border-slate-700/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Back Button */}
      <div className="flex items-center justify-between pb-2">
        <button
          onClick={onClose}
          className="px-4 py-2.5 bg-slate-900/80 hover:bg-slate-800 hover:text-white text-slate-300 font-bold text-xs rounded-xl border border-slate-800 transition-all cursor-pointer flex items-center gap-2 group shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          <span>Voltar ao feed</span>
        </button>
      </div>

      {/* 2. Main Profile Card Page */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-slate-900/60 border border-slate-800/80 w-full rounded-3xl overflow-hidden shadow-xl relative flex flex-col"
      >
        {/* Top Banner Cover Accent */}
        <div className="h-32 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/80 relative">
          <div className="absolute inset-0 vintage-overlay opacity-20 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>

        {/* Profile Core Data Box */}
        <div className="px-6 pb-4 relative z-20">
          <div className="flex flex-col sm:flex-row sm:items-end gap-5 -mt-16 mb-4">
            
            {/* Profile Avatar Ring */}
            <div className="relative inline-block shrink-0">
              <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600">
                <img
                  src={heteronym.avatar}
                  alt={heteronym.name}
                  className="w-full h-full rounded-full object-cover border border-slate-900 bg-slate-950"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CheckCircle2 className="w-6 h-6 text-cyan-400 fill-[#0b0f17] absolute bottom-1 right-1" />
            </div>

            {/* Identity & Follow Counts */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display font-extrabold text-2xl text-white tracking-tight flex items-center gap-1.5 leading-none">
                  {heteronym.name}
                </h2>
                <span className={`text-[9.5px] font-mono font-extrabold tracking-wider px-2 py-0.5 rounded uppercase ${getCategoryBadgeClass(heteronym.category)}`}>
                  {heteronym.category}
                </span>
              </div>
              
              <p className="text-sm text-cyan-400/85 font-mono mt-0.5">@{heteronym.handle}</p>
              <p className="text-xs text-slate-400 font-mono mt-1 italic">{heteronym.role}</p>
            </div>

            {/* Action Buttons (Adicionar / Adicionado connected to Pessoadex) */}
            <div className="flex gap-2 shrink-0">
              <button
                onClick={isUnlocked ? undefined : onUnlock}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isUnlocked
                    ? 'bg-slate-800 border border-slate-700 text-slate-500 cursor-default'
                    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-400/10'
                }`}
              >
                {isUnlocked ? (
                  <>
                    <UserCheck className="w-4 h-4 text-cyan-400" />
                    <span>Adicionado</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span>Adicionar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Profile Statistics metrics row */}
          <div className="flex gap-6 py-3 border-y border-slate-800/60 text-xs font-mono text-slate-400">
            <div>
              <span className="text-white font-bold">{authorPosts.length}</span> publicações
            </div>
            <div>
              <span className="text-white font-bold">{(heteronym.id.charCodeAt(0) % 20) + 12}k</span> seguidores
            </div>
            <div>
              <span className="text-white font-bold">{(heteronym.id.charCodeAt(1) % 5) + 1}</span> parcerias
            </div>
          </div>
        </div>

        {/* Navigation Tabs (Sobre / Publicações) */}
        <div className="flex border-b border-slate-800/80 px-6">
          <button
            onClick={() => setActiveTab('info')}
            className={`py-3.5 px-4 font-display font-bold text-xs uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'info'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>Sobre & Filosofia</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`py-3.5 px-4 font-display font-bold text-xs uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'posts'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Grid className="w-4 h-4" />
              <span>Publicações ({authorPosts.length})</span>
            </div>
          </button>
        </div>

        {/* Tab Content Display Area */}
        <div className="p-6">
          {activeTab === 'info' ? (
            <div className="space-y-6">
              
              {/* Emblematic Quote Box */}
              <div className="relative p-5 bg-slate-950/55 rounded-2xl border-l-4 border-cyan-400 italic font-serif text-slate-200 text-sm leading-relaxed">
                <span className="text-cyan-400 font-extrabold text-2xl font-serif absolute top-1 left-2 select-none">“</span>
                <p className="pl-3 py-1 font-serif text-slate-200">
                  {heteronym.quote || 'As coisas não têm significado: têm existência.'}
                </p>
              </div>

              {/* Biography */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xs uppercase text-slate-400 tracking-wider flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Biografia Geral & Psicologia</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{heteronym.bio}</p>
              </div>

              {/* Warning for un-unlocked characters */}
              {!isUnlocked && (
                <div className="p-4 bg-purple-950/10 border border-purple-500/20 text-purple-300 rounded-2xl text-xs leading-relaxed flex gap-3 items-center">
                  <span className="text-lg">💡</span>
                  <p>
                    Este utilizador é um <span className="font-bold text-white">Rascunho Secundário</span>. Podes adicioná-lo clicando no botão "Adicionar" acima para o sincronizar com o teu Baú.
                  </p>
                </div>
              )}

            </div>
          ) : (
            <div>
              {/* Posts Grid Panel (Instagram Style) */}
              {authorPosts.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <span className="text-3xl block mb-2">📭</span>
                  <p className="text-xs font-mono">Nenhuma publicação arquivada para este utilizador.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {authorPosts.map((post, idx) => (
                    <div
                      key={post.id}
                      onClick={() => {
                        setSelectedPost(post);
                      }}
                      className="relative aspect-square rounded-xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer group hover:border-cyan-400/50 transition-all shadow-md"
                    >
                      {post.imageUrl ? (
                        <img
                          src={post.imageUrl}
                          alt="Feed post"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full p-4.5 flex flex-col justify-between bg-gradient-to-br from-slate-900/60 to-slate-950/80 group-hover:from-slate-900 overflow-hidden relative">
                          <span className="text-[10px] text-cyan-400 font-mono italic">#{idx + 1} Poesia</span>
                          <p className="text-[10.5px] font-serif text-slate-300 italic line-clamp-4 leading-normal mt-1 flex-1">
                            "{post.content}"
                          </p>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-xs font-mono text-white">
                        <div className="flex items-center gap-1">
                          <span>❤️</span> <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>💬</span> <span>{post.commentsCount}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* 3. POST DETAILS POPUP MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop click to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedPost(null)}></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[90vh] md:h-[600px]"
            >
              {/* Image Column or Left Panel Accent */}
              <div className="w-full md:w-1/2 bg-slate-950 relative aspect-video md:aspect-auto flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-800">
                {selectedPost.imageUrl ? (
                  <img
                    src={selectedPost.imageUrl}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="p-8 flex items-center justify-center text-center h-full bg-gradient-to-br from-slate-900 to-slate-950">
                    <span className="font-serif italic text-lg text-cyan-400/80">"A arte é uma confissão de que a vida não basta..."</span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] bg-cyan-500/10 text-cyan-400 font-mono font-extrabold uppercase tracking-wide border border-cyan-400/20 px-2 py-1 rounded">
                    Publicação Oficial
                  </span>
                </div>
              </div>

              {/* Text, Poetry, Translations Column */}
              <div className="w-full md:w-1/2 flex flex-col h-[50vh] md:h-full overflow-y-auto bg-slate-900">
                {/* Header info */}
                <div className="p-4 border-b border-slate-800/80 flex items-center justify-between sticky top-0 bg-slate-900 z-10">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedPost.authorAvatar}
                      alt={selectedPost.authorName}
                      className="w-9 h-9 rounded-full object-cover border border-slate-700"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">{selectedPost.authorName}</h4>
                      <p className="text-[10px] text-cyan-400 font-mono">@{selectedPost.handle}</p>
                    </div>
                  </div>
                  
                  {/* Close button for post modal */}
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-1.5 px-3 bg-slate-800 hover:bg-slate-755 text-slate-300 hover:text-white rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 border border-slate-700"
                    title="Fechar Post"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Fechar</span>
                  </button>
                </div>

                {/* Poem Body / Context Content */}
                <div className="p-5 flex-1 space-y-4">
                  <div>
                    <h3 className="font-display font-extrabold text-base text-white tracking-tight">
                      {selectedPost.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-mono mt-1">{selectedPost.timestamp}</p>
                  </div>

                  {/* Dynamic side-by-side or tabs for Translation */}
                  <div className="space-y-3">
                    <div className="flex gap-1.5 border-b border-slate-800/60 pb-1 text-[11px] font-bold uppercase tracking-wider">
                      <button
                        onClick={() => setPostGenZ(false)}
                        className={`pb-1 px-1 transition-all ${
                          !postGenZ ? 'text-cyan-400 border-b-2 border-cyan-400 font-bold' : 'text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        Manuscrito Original
                      </button>
                      <button
                        onClick={() => setPostGenZ(true)}
                        className={`pb-1 px-1 transition-all flex items-center gap-1 ${
                          postGenZ ? 'text-emerald-400 border-b-2 border-emerald-400 font-bold' : 'text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        Tradução Gen Z
                      </button>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-850 max-h-48 overflow-y-auto text-xs leading-relaxed select-text font-serif">
                      {!postGenZ ? (
                        <p className="text-slate-300 font-serif whitespace-pre-wrap">
                          {selectedPost.fullPoemText || selectedPost.content}
                        </p>
                      ) : (
                        <p className="text-emerald-300 font-mono whitespace-pre-wrap leading-relaxed">
                          {selectedPost.translationGenZ || "Sem tradução disponível."}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Hashtags list */}
                  {selectedPost.hashtags && selectedPost.hashtags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedPost.hashtags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-cyan-400/80 bg-cyan-400/5 px-2 py-0.5 border border-cyan-400/10 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Interaction summary */}
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/60 pt-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                      <span className="text-white font-bold">{selectedPost.likes}</span> gostos
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-white font-bold">{selectedPost.commentsCount}</span> comentários
                    </span>
                  </div>

                  {/* Comments lists */}
                  <div className="space-y-2 border-t border-slate-800/60 pt-3">
                    <h5 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">Historial de Comentários</h5>
                    {selectedPost.comments && selectedPost.comments.length > 0 ? (
                      <div className="space-y-2.5">
                        {selectedPost.comments.map(c => (
                          <div key={c.id} className="p-3 bg-slate-955/50 border border-slate-800 rounded-xl text-xs bg-slate-950/40">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-white">@{c.handle}</span>
                              <span className="text-[9px] font-mono text-slate-500">{c.timestamp}</span>
                            </div>
                            <p className="text-slate-300 leading-normal">{c.content}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[10.5px] font-mono text-slate-500 italic text-center py-4">Sem comentários guardados de outros heterónimos.</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
