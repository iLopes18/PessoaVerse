import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Lock, Unlock, CheckCircle2, ChevronRight, X, Sparkles, RefreshCw, Eye } from 'lucide-react';
import { Heteronym, HeteronymCategory } from '../types';

interface BauPessoaProps {
  allHeteronyms: Heteronym[];
  unlockedList: string[];
  setUnlockedList: React.Dispatch<React.SetStateAction<string[]>>;
  onProfileClick: (id: string) => void;
}

export default function BauPessoa({ allHeteronyms, unlockedList, setUnlockedList, onProfileClick }: BauPessoaProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'ALL' | HeteronymCategory>('ALL');

  const totalCount = allHeteronyms.length;
  const unlockedCount = unlockedList.length;
  const syncPercentage = Math.round((unlockedCount / totalCount) * 100);

  // Filter based on query and tabs
  const filteredHeteronyms = useMemo(() => {
    return allHeteronyms.filter((h) => {
      // Matches tab
      if (activeCategory !== 'ALL' && h.category !== activeCategory) return false;

      // Unlocked search details
      const isUncovered = unlockedList.includes(h.id);
      const query = searchQuery.toLowerCase();

      if (isUncovered) {
        return (
          h.name.toLowerCase().includes(query) ||
          h.handle.toLowerCase().includes(query) ||
          h.role.toLowerCase().includes(query) ||
          h.quote.toLowerCase().includes(query)
        );
      } else {
        // Locked ones only searchable by "???" or hints, or they show up unless they search specifically for named ones that are hidden.
        return '???'.includes(query) || 'bloqueado'.includes(query) || h.category.toLowerCase().includes(query);
      }
    });
  }, [allHeteronyms, unlockedList, searchQuery, activeCategory]);

  const unlockAll = () => {
    if (confirm('🧠 Desejas fundir a alma inteira e desbloquear todos os 130 heterónimos de uma vez só para consulta completa?')) {
      const allIds = allHeteronyms.map((h) => h.id);
      setUnlockedList(allIds);
      localStorage.setItem('discovered_heteronyms', JSON.stringify(allIds));
    }
  };

  const resetAll = () => {
    if (confirm('🧹 Tens a certeza que queres reiniciar o teu Baú? Apenas os 4 heterónimos principais ficarão disponíveis.')) {
      const baseMain = ['caeiro', 'campos', 'reis', 'soares'];
      setUnlockedList(baseMain);
      localStorage.setItem('discovered_heteronyms', JSON.stringify(baseMain));
    }
  };

  return (
    <div className="space-y-8 pb-12 select-none">
      {/* Header section with Stats */}
      <div className="bg-gradient-to-r from-slate-900 to-[#121824] border border-slate-800 rounded-3xl p-6 relative overflow-hidden flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full filter blur-3xl pointer-events-none"></div>
        
        <div>
          <h2 className="font-display font-extrabold text-2xl text-white tracking-tight">O Teu Baú de Personalidades</h2>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-sm">
            "Minha alma é uma orquestra oculta; não sei que instrumentos tangem e rangem, cordas e harpas, timbales e tambores, dentro de mim."
          </p>
        </div>

        {/* Soul Sync Progress meter */}
        <div className="w-full md:w-64 bg-slate-950/80 border border-slate-800/80 p-4.5 rounded-2xl shrink-0">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="font-display uppercase tracking-widest text-slate-500 font-bold text-[10px]">Sincronização da Alma</span>
            <span className="font-mono font-bold text-cyan-400 text-sm">{unlockedCount} / {totalCount}</span>
          </div>
          <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-850 mb-2">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full transition-all duration-700 ease-out"
              style={{ width: `${syncPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>UNLOCKED: {syncPercentage}%</span>
            <span>RESTANTES: {totalCount - unlockedCount}</span>
          </div>
        </div>
      </div>

      {/* Inputs, filters and sandbox CTAs */}
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
          
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Procura fragmentos, alcunhas, versos no teu Baú..."
              className="w-full bg-[#121824] border border-slate-800 focus:border-cyan-500 pl-11 pr-4 py-3 rounded-xl text-sm focus:outline-none transition-all placeholder:text-slate-600 focus:bg-slate-950"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sandbox Helpers */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={unlockAll}
              className="px-4 py-3 bg-[#121824] hover:bg-cyan-500 hover:text-slate-950 border border-slate-800 hover:border-cyan-400 rounded-xl text-xs font-bold leading-none cursor-pointer transition-all flex items-center gap-2"
              title="Desbloquear os 130 utilizadores da Rede"
            >
              <Sparkles className="w-4 h-4" />
              <span>Sincronizar 100%</span>
            </button>
            <button
              onClick={resetAll}
              className="px-4 py-3 bg-[#121824] hover:bg-rose-500/10 hover:text-rose-400 border border-slate-800 hover:border-rose-500/30 rounded-xl text-xs font-bold leading-none cursor-pointer transition-all flex items-center gap-2"
              title="Reiniciar Poetadex"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reiniciar</span>
            </button>
          </div>
        </div>

        {/* Filter categories tabs */}
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none items-center">
          <button
            onClick={() => setActiveCategory('ALL')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase shrink-0 transition-all cursor-pointer ${
              activeCategory === 'ALL'
                ? 'bg-cyan-500 text-slate-950 font-extrabold scale-102 shadow-lg shadow-cyan-500/10'
                : 'bg-[#121824] hover:bg-slate-800 border border-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            Tudo ({allHeteronyms.length})
          </button>
          <button
            onClick={() => setActiveCategory('VERIFICADOS')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase shrink-0 transition-all cursor-pointer ${
              activeCategory === 'VERIFICADOS'
                ? 'bg-cyan-500 text-slate-950 font-extrabold scale-102 shadow-lg shadow-cyan-500/10'
                : 'bg-[#121824] hover:bg-slate-800 border border-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            Verificados (4)
          </button>
          <button
            onClick={() => setActiveCategory('ATIVOS')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase shrink-0 transition-all cursor-pointer ${
              activeCategory === 'ATIVOS'
                ? 'bg-cyan-500 text-slate-950 font-extrabold scale-102 shadow-lg shadow-cyan-500/10'
                : 'bg-[#121824] hover:bg-slate-800 border border-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            Ativos (3)
          </button>
          <button
            onClick={() => setActiveCategory('RAROS')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase shrink-0 transition-all cursor-pointer ${
              activeCategory === 'RAROS'
                ? 'bg-cyan-500 text-slate-950 font-extrabold scale-102 shadow-lg shadow-cyan-500/10'
                : 'bg-[#121824] hover:bg-slate-800 border border-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            Raros (3)
          </button>
          <button
            onClick={() => setActiveCategory('NPCS')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase shrink-0 transition-all cursor-pointer ${
              activeCategory === 'NPCS'
                ? 'bg-cyan-500 text-slate-950 font-extrabold scale-102 shadow-lg shadow-cyan-500/10'
                : 'bg-[#121824] hover:bg-slate-800 border border-slate-800/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            NPCs de Fórum ({allHeteronyms.filter(h => h.category === 'NPCS').length})
          </button>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {filteredHeteronyms.map((h) => {
            const isUncovered = unlockedList.includes(h.id);

            return (
              <motion.div
                key={h.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => onProfileClick(h.id)}
                className={`group bg-[#121824] border rounded-2.5xl p-5 relative overflow-hidden transition-all duration-300 flex flex-col justify-between h-[250px] shadow-md select-none cursor-pointer ${
                  isUncovered
                    ? 'border-slate-800 hover:border-cyan-400/50 hover:shadow-cyan-400/[0.02]/30 active:scale-98'
                    : 'border-slate-800/40 bg-slate-950/20 contrast-90 brightness-[0.7] border-dashed hover:border-slate-700/60'
                }`}
              >
                {/* Silhouette or real avatar */}
                <div className="flex justify-between items-start">
                  <div className="relative">
                    {isUncovered ? (
                      <img 
                        src={h.avatar} 
                        alt={h.name}
                        className="w-14 h-14 rounded-full border border-slate-700 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600 font-bold font-mono text-lg">
                        ?
                      </div>
                    )}
                    {isUncovered && h.category === 'VERIFICADOS' && (
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 fill-[#121824] absolute -bottom-0.5 -right-0.5" />
                    )}
                  </div>

                  {isUncovered ? (
                    <span className="text-[8px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                      {h.category}
                    </span>
                  ) : (
                    <span className="text-[8px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-800/80 text-slate-500 border border-slate-800">
                      BLOQUEADO
                    </span>
                  )}
                </div>

                {/* Info Text */}
                <div className="space-y-1 flex-1 mt-6">
                  <h3 className="font-display font-extrabold text-sm text-white group-hover:text-cyan-400 transition-colors truncate">
                    {isUncovered ? h.name : '???'}
                  </h3>
                  <p className="text-[10px] font-mono text-cyan-400/80 font-semibold uppercase truncate">
                    {isUncovered ? h.role : 'Utilizador Oculto'}
                  </p>
                  <p className="text-xs text-slate-500 italic mt-2 line-clamp-3">
                    {isUncovered ? `"${h.quote || h.bio}"` : '"Escondido nos comentários da Timeline. Explora as discussões para revelar este rascunho!"'}
                  </p>
                </div>

                {/* Card footer details */}
                <div className="border-t border-slate-800/30 pt-3 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>@{isUncovered ? h.handle : 'ficheiro_secreto'}</span>
                  {isUncovered ? (
                    <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center font-bold">
                      Consultar <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <span className="text-slate-600 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Requer Descoberta
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty Filter Search State */}
      {filteredHeteronyms.length === 0 && (
        <div className="py-24 text-center">
          <Lock className="w-12 h-12 text-slate-700 mx-auto mb-4" />
          <h4 className="font-display font-bold text-lg text-slate-400">Nenhum utilitário correspondente</h4>
          <p className="text-sm text-slate-600 mt-1.5 max-w-sm mx-auto leading-relaxed">
            Se procuras heterónimos bloqueados, digita '???' ou seleciona as abas 'Raros' ou 'NPCs' para visualizar onde eles habitam!
          </p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('ALL'); }}
            className="mt-6 px-4 py-2 text-xs font-bold text-cyan-300 border border-slate-800 hover:border-cyan-400 rounded-xl cursor-pointer"
          >
            Limpar Filtros e Pesquisa
          </button>
        </div>
      )}

    </div>
  );
}
