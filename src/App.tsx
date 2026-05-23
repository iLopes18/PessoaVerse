import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy, CheckCircle2, ChevronRight, X, Heart, MessageCircle, Menu, BookOpen, GraduationCap, Languages, Home, Library, Users, Award } from 'lucide-react';

import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import BauPessoa from './components/BauPessoa';
import ProfileModal from './components/ProfileModal';
import InstagramSearch from './components/InstagramSearch';

import { ALL_HETERONYMS, MAJOR_HETERONYMS } from './data/heteronyms';
import { INITIAL_POSTS } from './data/posts';
import { Post, Heteronym } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'bau'>('timeline');
  const [globalTranslate, setGlobalTranslate] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);
  const [feedScrollPosition, setFeedScrollPosition] = useState<number>(0);
  
  const handleProfileClick = (id: string) => {
    setFeedScrollPosition(window.scrollY);
    setSelectedProfileId(id);
    window.scrollTo({ top: 0 });
  };
  
  // Progress tracker of discovered heteronyms
  const [unlockedList, setUnlockedList] = useState<string[]>([]);
  
  // Custom notification state for discovering a new heteronym
  const [discoveredAlert, setDiscoveredAlert] = useState<{ active: boolean; name: string; id: string } | null>(null);

  // Editable posts state for likes and custom comments additions
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);

  // Drawer menu state for mobile navigation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('discovered_heteronyms');
    const baseMain = ['caeiro', 'campos', 'reis', 'soares'];
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 4) {
          setUnlockedList(parsed);
          return;
        }
      } catch (e) {
        console.error('Failure parsing discovered heteronyms, defaulting...');
      }
    }
    // If empty or corrupted, set the core 4
    setUnlockedList(baseMain);
    localStorage.setItem('discovered_heteronyms', JSON.stringify(baseMain));
  }, []);

  // Helper trigger to unlock any NPC/Secondary heteronym
  const unlockHeteronym = (id: string, name: string) => {
    setUnlockedList((prev) => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      localStorage.setItem('discovered_heteronyms', JSON.stringify(updated));
      
      // Trigger visual high-motivation reward pop-up
      setDiscoveredAlert({
        active: true,
        name,
        id
      });

      // Automatically dismiss alert after 5.5 seconds
      setTimeout(() => {
        setDiscoveredAlert(null);
      }, 5500);

      return updated;
    });
  };

  const handlePostClick = (postId: string) => {
    setActiveTab('timeline');
    setTimeout(() => {
      const element = document.getElementById(`post_${postId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('ring-2', 'ring-cyan-450');
        setTimeout(() => {
          element.classList.remove('ring-2', 'ring-cyan-450');
        }, 1550);
      }
    }, 150);
  };

  const syncPercentage = Math.round((unlockedList.length / 130) * 100);

  const activeProfileHeteronym = ALL_HETERONYMS.find(h => h.id === selectedProfileId);

  return (
    <div className="flex bg-[#0b0f17] min-h-screen text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* 1. SIDEBAR NAVIGATION CONTROLS (Desktop Only) */}
      <div className="hidden md:block">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          unlockedCount={unlockedList.length}
          totalCount={130}
          globalTranslate={globalTranslate}
          setGlobalTranslate={setGlobalTranslate}
        />
      </div>

      {/* Main portal space container */}
      <div className="flex-1 flex flex-col min-w-0 max-w-7xl mx-auto md:p-6 lg:p-8 p-4">
        
        {/* MOBILE PORTAL BAR (Small screens only) */}
        <header className="md:hidden flex items-center justify-between py-4 border-b border-slate-800 mb-4 bg-[#0b0f17] sticky top-0 z-30">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></span>
            <span className="font-display font-extrabold text-lg text-white">PessoaVerse</span>
            <span className="text-[9px] bg-cyan-500/10 text-cyan-400 px-1.5 py-0.5 border border-cyan-400/20 rounded font-mono font-bold uppercase">
              {unlockedList.length}/130
            </span>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
        </header>

        {/* 2. MOBILE MENU FULLSCREEN DRAWER OVERLAY */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden fixed inset-x-0 top-16 bg-slate-950 border-b border-slate-800 p-6 z-40 shadow-2xl flex flex-col gap-5 text-slate-300 select-none"
            >
              <div className="flex justify-between items-center bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400">Progresso Sincronização:</span>
                <span className="text-xs text-cyan-400 font-mono font-bold">{unlockedList.length} / 130 heterónimos</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setActiveTab('timeline');
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase flex items-center justify-center gap-2 ${
                    activeTab === 'timeline' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'bg-slate-900'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Timeline</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('bau');
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase flex items-center justify-center gap-2 ${
                    activeTab === 'bau' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'bg-slate-900'
                  }`}
                >
                  <Library className="w-4 h-4" />
                  <span>O Baú</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setGlobalTranslate(!globalTranslate);
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-3 rounded-xl text-xs font-bold uppercase flex items-center justify-center gap-2 border ${
                  globalTranslate 
                    ? 'bg-[#121824] border-cyan-400 text-cyan-400' 
                    : 'bg-slate-900 border-slate-800 hover:border-cyan-400 text-slate-400'
                }`}
              >
                <Languages className="w-4 h-4" />
                <span>Modo Geração Z: {globalTranslate ? 'LIGADO' : 'DESLIGADO'}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Brand Slogan and Search Layout header row */}
        <div className="hidden md:flex items-center justify-between border-b border-slate-800/50 pb-4 mb-6 z-20">
          <div>
            <h1 className="font-display font-extrabold text-2xl text-white tracking-tight">PessoaVerse</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">Uma mente, mais de 130 utilizadores.</p>
          </div>
          <div className="w-80">
            <InstagramSearch 
              allHeteronyms={ALL_HETERONYMS}
              unlockedList={unlockedList}
              onProfileClick={handleProfileClick}
            />
          </div>
        </div>

        {/* Mobile Search block (below header) */}
        <div className="md:hidden w-full mb-4 z-25">
          <InstagramSearch 
            allHeteronyms={ALL_HETERONYMS}
            unlockedList={unlockedList}
            onProfileClick={handleProfileClick}
          />
        </div>

        {/* 3. CORE ROUTING RENDERING ENGINE */}
        <main className="flex-1">
          {selectedProfileId && activeProfileHeteronym ? (
            <ProfileModal
              heteronym={activeProfileHeteronym}
              isOpen={!!selectedProfileId}
              onClose={() => {
                setSelectedProfileId(null);
                setTimeout(() => {
                  window.scrollTo({ top: feedScrollPosition, behavior: 'auto' });
                }, 10);
              }}
              isUnlocked={unlockedList.includes(selectedProfileId)}
              posts={posts}
              onUnlock={() => unlockHeteronym(selectedProfileId, activeProfileHeteronym.name)}
              onPostClick={handlePostClick}
            />
          ) : (
            <>
              {activeTab === 'timeline' && (
                <div className="space-y-6">
                  <Timeline 
                    posts={posts}
                    setPosts={setPosts}
                    unlockedList={unlockedList}
                    unlockHeteronym={unlockHeteronym}
                    allHeteronyms={ALL_HETERONYMS}
                    globalTranslate={globalTranslate}
                    onProfileClick={handleProfileClick}
                  />
                </div>
              )}

              {activeTab === 'bau' && (
                <BauPessoa 
                  allHeteronyms={ALL_HETERONYMS}
                  unlockedList={unlockedList}
                  setUnlockedList={setUnlockedList}
                  onProfileClick={handleProfileClick}
                />
              )}
            </>
          )}
        </main>
      </div>

      {/* 4. VISUAL REWARD DISCOVERY MODAL ALERT (Poetadex Unlocked!) */}
      <AnimatePresence>
        {discoveredAlert && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="bg-gradient-to-br from-slate-900 via-[#121824] to-cyan-950 border border-cyan-500/30 max-w-sm w-full rounded-3xl p-6 shadow-2xl text-center relative select-none"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full filter blur-2xl pointer-events-none"></div>
              
              {/* Glowing reward ring icon */}
              <div className="w-16 h-16 bg-cyan-500/10 border-2 border-cyan-400/30 rounded-full flex items-center justify-center mx-auto mb-5 animate-bounce">
                <Trophy className="w-8 h-8 text-cyan-400" />
              </div>

              <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                🎉 No Baú de Pessoa!
              </span>

              <h3 className="font-display font-extrabold text-lg text-white mt-4">
                Novo Heterónimo Descoberto!
              </h3>
              
              <div className="my-4.5 bg-slate-950/60 p-4 border border-slate-850 rounded-2xl">
                <p className="text-sm font-bold text-cyan-300 font-display">
                  {discoveredAlert.name}
                </p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  @{discoveredAlert.id}_bot
                </p>
                <p className="text-xs text-slate-400 italic mt-3">
                  "Eu sou um rascunho de Fernando Pessoa libertado do baú."
                </p>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Este rascunho de utilizador foi arquivado no teu <span className="text-white font-semibold">Baú de Pessoa</span>. Explora a Poetadex para ler a sua biografia e metadados históricos e literários!
              </p>

              <div className="mt-6 flex gap-2">
                <button
                  onClick={() => {
                    setDiscoveredAlert(null);
                    setActiveTab('bau');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex-1 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 rounded-xl text-xs font-bold cursor-pointer transition-all hover:shadow-lg hover:shadow-cyan-400/10"
                >
                  Consultar Baú
                </button>
                <button
                  onClick={() => setDiscoveredAlert(null)}
                  className="px-4 py-3 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-bold cursor-pointer"
                >
                  Continuar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Sticky Mobile Menu Bar (Handhelds only) */}
      <div className="md:hidden fixed bottom-5 inset-x-5 bg-[#121824]/90 backdrop-blur-md border border-slate-800 rounded-2xl flex justify-around py-3.5 px-4 z-40 shadow-xl">
        <button
          onClick={() => {
            setActiveTab('timeline');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            activeTab === 'timeline' ? 'text-cyan-400' : 'text-slate-400'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[9px] font-bold uppercase tracking-wider">Timeline</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('bau');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            activeTab === 'bau' ? 'text-cyan-400' : 'text-slate-400'
          }`}
        >
          <Library className="w-5 h-5" />
          <span className="text-[9px] font-bold uppercase tracking-wider">O Baú</span>
        </button>
      </div>

    </div>
  );
}
