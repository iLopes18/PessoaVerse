import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Heteronym } from '../types';

interface InstagramSearchProps {
  allHeteronyms: Heteronym[];
  unlockedList: string[];
  onProfileClick: (id: string) => void;
}

export default function InstagramSearch({
  allHeteronyms,
  unlockedList,
  onProfileClick
}: InstagramSearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const saved = localStorage.getItem('recent_searches_pessoaverse');
    return saved ? JSON.parse(saved) : ['caeiro', 'campos', 'reis', 'soares'];
  });

  const searchRef = useRef<HTMLDivElement>(null);

  // Close search dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const saveRecentSearch = (id: string) => {
    const updated = [id, ...recentSearches.filter(x => x !== id)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recent_searches_pessoaverse', JSON.stringify(updated));
  };

  const removeRecentSearch = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = recentSearches.filter(x => x !== id);
    setRecentSearches(updated);
    localStorage.setItem('recent_searches_pessoaverse', JSON.stringify(updated));
  };

  const clearAllRecents = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRecentSearches([]);
    localStorage.setItem('recent_searches_pessoaverse', JSON.stringify([]));
  };

  // Filter accounts based on query
  const filteredAccounts = query.trim() === '' 
    ? []
    : allHeteronyms.filter(h => 
        h.name.toLowerCase().includes(query.toLowerCase()) || 
        h.handle.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6);

  const getRecentAccounts = () => {
    return recentSearches
      .map(id => allHeteronyms.find(h => h.id === id))
      .filter((h): h is Heteronym => !!h);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md mx-auto mb-6 z-35 select-none">
      
      {/* Absolute Search Input Container */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Pesquisar nos 130 utilizadores (ex: Caeiro)..."
          className="w-full pl-11 pr-10 py-2.5 bg-slate-900 border border-slate-800 focus:border-cyan-500/60 rounded-xl text-sm font-sans placeholder-slate-500 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all font-medium"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white rounded-full bg-slate-850 hover:bg-slate-800 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Dropdown Box Overlay */}
      {isOpen && (
        <div className="absolute top-13 left-0 w-full bg-slate-950 border border-slate-850 rounded-2xl shadow-2xl overflow-hidden z-55 flex flex-col max-h-[360px]">
          
          {query.trim() === '' ? (
            // RECENT SEARCHES
            <div className="p-4 flex-1 overflow-y-auto">
              <div className="flex items-center justify-between mb-3 text-xs font-mono font-bold tracking-wider text-slate-400">
                <span>RECENTES</span>
                {recentSearches.length > 0 && (
                  <button 
                    onClick={clearAllRecents}
                    className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer"
                  >
                    Limpar Tudo
                  </button>
                )}
              </div>

              {recentSearches.length === 0 ? (
                <div className="text-center py-6 text-slate-500 text-xs">
                  <Clock className="w-5 h-5 mx-auto mb-2 text-slate-650" />
                  <p>Sem pesquisas recentes.</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {getRecentAccounts().map(h => {
                    const isUnlocked = unlockedList.includes(h.id);
                    return (
                      <div
                        key={h.id}
                        onClick={() => {
                          saveRecentSearch(h.id);
                          onProfileClick(h.id);
                          setIsOpen(false);
                        }}
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-900/60 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={h.avatar}
                            alt={h.name}
                            className="w-10 h-10 rounded-full border border-slate-800 object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-white flex items-center gap-1">
                              {h.name}
                              {h.category === 'VERIFICADOS' && (
                                <CheckCircle2 className="w-3 h-3 text-cyan-400 fill-[#0b0f17]" />
                              )}
                            </h4>
                            <p className="text-[10px] text-slate-500 font-mono">@{h.handle}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${isUnlocked ? 'text-cyan-400 bg-cyan-450/5 border border-cyan-450/10' : 'text-slate-500'}`}>
                            {isUnlocked ? 'BAÚ ●' : 'LOCKED'}
                          </span>
                          <button
                            onClick={(e) => removeRecentSearch(h.id, e)}
                            className="p-1 hover:bg-slate-800 rounded-full text-slate-500 hover:text-red-400 transition-all"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            // SEARCH RESULTS
            <div className="p-4 flex-1 overflow-y-auto">
              <span className="text-xs font-mono font-bold tracking-wider text-slate-500 block mb-3">CONVERSADORES CORRESPONDENTES</span>
              
              {filteredAccounts.length === 0 ? (
                <div className="text-center py-6 text-slate-500 text-xs">
                  <HelpCircle className="w-5 h-5 mx-auto mb-2 text-slate-600" />
                  <p>Nenhuma mente coincidente...</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {filteredAccounts.map(h => {
                    const isUnlocked = unlockedList.includes(h.id);
                    return (
                      <div
                        key={h.id}
                        onClick={() => {
                          saveRecentSearch(h.id);
                          onProfileClick(h.id);
                          setIsOpen(false);
                          setQuery('');
                        }}
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-900/60 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img
                              src={h.avatar}
                              alt={h.name}
                              className="w-10 h-10 rounded-full border border-slate-800 object-cover"
                              referrerPolicy="no-referrer"
                            />
                            {h.category === 'VERIFICADOS' && (
                              <CheckCircle2 className="w-3 h-3 text-cyan-400 fill-[#0b0f17] absolute -bottom-0.5 -right-0.5" />
                            )}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-200">
                              {h.name}
                            </h4>
                            <p className="text-[10px] text-slate-500 font-mono">@{h.handle}</p>
                          </div>
                        </div>

                        <span className={`text-[8.5px] font-bold uppercase py-0.5 px-2 rounded-md ${
                          h.category === 'VERIFICADOS' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/20' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {h.category}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Quick instructions footer */}
          <div className="bg-slate-950 px-4 py-2 text-[10px] text-slate-500 text-center border-t border-slate-900/60 font-mono">
            Pressiona para abrir o perfil interativo do heterónimo
          </div>
        </div>
      )}

    </div>
  );
}
