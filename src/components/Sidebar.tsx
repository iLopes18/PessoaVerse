import React from 'react';
import { LayoutDashboard, Library, Users, Languages, Sparkles } from 'lucide-react';

interface SidebarProps {
  activeTab: 'timeline' | 'bau';
  setActiveTab: (tab: 'timeline' | 'bau') => void;
  unlockedCount: number;
  totalCount: number;
  globalTranslate: boolean;
  setGlobalTranslate: (val: boolean) => void;
}

export default function Sidebar({
  activeTab,
  setActiveTab,
  unlockedCount,
  totalCount,
  globalTranslate,
  setGlobalTranslate
}: SidebarProps) {
  const syncPercentage = Math.round((unlockedCount / totalCount) * 100);

  return (
    <aside className="w-64 bg-[#0d121c] border-r border-slate-800 flex flex-col justify-between h-screen sticky top-0 shrink-0 text-slate-300 select-none z-10 transition-colors">
      <div className="p-6">
        {/* Header Branding */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-6 mb-6">
          <div>
            <h1 className="font-display font-bold text-lg text-white leading-tight tracking-tight">PessoaVerse</h1>
            <p className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">MULTIPLE SELVES</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-all ${
              activeTab === 'timeline'
                ? 'bg-gradient-to-r from-slate-800 to-slate-900 border-l-2 border-cyan-400 text-white shadow-md'
                : 'hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <LayoutDashboard className={`w-5 h-5 ${activeTab === 'timeline' ? 'text-cyan-400' : 'text-slate-400'}`} />
            <span>Timeline Geral</span>
          </button>

          <button
            onClick={() => setActiveTab('bau')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-all ${
              activeTab === 'bau'
                ? 'bg-gradient-to-r from-slate-800 to-slate-900 border-l-2 border-cyan-400 text-white shadow-md'
                : 'hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <Library className={`w-5 h-5 ${activeTab === 'bau' ? 'text-cyan-400' : 'text-slate-400'}`} />
              <span>Baú de Pessoa</span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 roundedbg-slate-900 text-cyan-400 border border-cyan-500/10 font-bold">
              {unlockedCount}/130
            </span>
          </button>
        </nav>

        {/* Sincronização Progress summary inside sidebar */}
        <div className="mt-8 bg-slate-950/40 border border-slate-800/60 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-400 font-medium">Sincronização da Alma</span>
            <span className="text-xs font-mono font-bold text-cyan-400">{syncPercentage}%</span>
          </div>
          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-500 ease-out"
              style={{ width: `${syncPercentage}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
            Explora posts e descobre novos rascunhos nos comentários para sincronizar a mente de Pessoa.
          </p>
        </div>
      </div>

      {/* Global Translate CTA */}
      <div className="p-6 border-t border-slate-800 bg-slate-950/20">
        <button
          onClick={() => setGlobalTranslate(!globalTranslate)}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg hover:scale-[1.02] ${
            globalTranslate 
              ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/20 glow'
              : 'bg-slate-900 border border-cyan-500/20 text-cyan-400 hover:border-cyan-400'
          }`}
        >
          <Languages className="w-4 h-4" />
          <span>Tradutor Século XXI {globalTranslate ? 'ON' : 'OFF'}</span>
        </button>
        <div className="text-[10px] text-slate-500 text-center mt-2 font-mono">
          "Uma mente, mais de 130 utilizadores"
        </div>
      </div>
    </aside>
  );
}
