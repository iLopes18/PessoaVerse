import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, GraduationCap, Brain, Compass, Users, Sparkles, CheckCircle2, UserCheck, UserPlus, Grid, BookOpen } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'info' | 'posts'>('info');

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

  const getCategoryImage = (index: number) => {
    const arr = [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400'
    ];
    return arr[index % arr.length];
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto select-none">
        
        {/* Direct Background tap to close */}
        <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>

        {/* Floating Close Button (Viewport locked) */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 p-2.5 bg-slate-900/95 hover:bg-slate-950 text-slate-400 hover:text-white rounded-full border border-slate-800 transition-all cursor-pointer flex items-center justify-center shadow-lg hover:scale-105 active:scale-95"
          style={{ zIndex: 60 }}
          title="Fechar Perfil"
        >
          <X className="w-5 h-5" />
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] z-10"
        >
          {/* Top Banner Cover Accent */}
          <div className="h-28 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/80 relative">
            <div className="absolute inset-0 vintage-overlay opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>

          {/* Profile Core Data Box */}
          <div className="px-6 pb-4 relative z-20">
            <div className="flex flex-col sm:flex-row sm:items-end gap-5 -mt-14 mb-4">
              
              {/* Profile Avatar Ring */}
              <div className="relative inline-block shrink-0">
                <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600">
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
                  <span className={`text-[9px] font-mono font-extrabold tracking-wider px-2 py-0.5 rounded font-bold uppercase ${getCategoryBadgeClass(heteronym.category)}`}>
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
                      ? 'bg-slate-800 border border-slate-700 text-slate-400 cursor-default'
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
              {isUnlocked ? (
                <div className="text-cyan-400 flex items-center gap-1 font-semibold ml-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>Sincronizado no Baú</span>
                </div>
              ) : (
                <div className="text-slate-500 flex items-center gap-1 font-semibold ml-auto">
                  <span>🔒 Rascunho Prévio</span>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Tabs (Sobre / Publicações) */}
          <div className="flex border-b border-slate-800/80 px-6">
            <button
              onClick={() => setActiveTab('info')}
              className={`py-3.5 px-4 font-display font-bold text-xs uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                activeTab === 'info'
                  ? 'border-cyan-400 text-cyan-400 font-bold'
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
                  ? 'border-cyan-400 text-cyan-400 font-bold'
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
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-800">
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
                      Este utilizadora é um <span className="font-bold text-white">Rascunho Secundário</span>. Podes sincronizá-lo clicando no botão para o enviar permanentemente para o teu Baú.
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
                    <p className="text-xs font-mono">Nenhuma publicação arquivada para este utilizor.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {authorPosts.map((post, idx) => (
                      <div
                        key={post.id}
                        onClick={() => {
                          if (onPostClick) {
                            onPostClick(post.id);
                            onClose();
                          }
                        }}
                        className="relative aspect-square rounded-xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer group hover:border-cyan-400/50 transition-all shadow"
                      >
                        {post.imageUrl ? (
                          <img
                            src={post.imageUrl}
                            alt="Square feed post item"
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
      </div>
    </AnimatePresence>
  );
}
