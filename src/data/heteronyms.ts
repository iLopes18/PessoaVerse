import { Heteronym } from '../types';
import { caeiroUser } from './user_caeiro';
import { camposUser } from './user_campos';
import { reisUser } from './user_reis';
import { soaresUser } from './user_soares';
import { searchUser } from './user_search';
import { moraUser } from './user_mora';
import { teiveUser } from './user_teive';
import { guedesUser } from './user_guedes';
import { normalUsers } from './users_normal';
import { rareUsers, npcUsersCountLess5 } from './users_rare_npc';

// The 4 main verified heteronyms required for standard views
export const MAJOR_HETERONYMS: Heteronym[] = [
  caeiroUser,
  camposUser,
  reisUser,
  soaresUser
];

// Master list of defined high-fidelity heteronyms
export const DEFINED_HETERONYMS: Heteronym[] = [
  ...MAJOR_HETERONYMS,
  searchUser,
  moraUser,
  teiveUser,
  guedesUser,
  ...normalUsers,
  ...rareUsers,
  ...npcUsersCountLess5
];

// Names list from Pessoa archives to fill the remaining slots up to 130
const PESSOA_NPC_NAMES = [
  'Karl Search', 'Frederick Wyatt', 'Maria Alva', 'Faust', 'Chelsea', 'Arthur Search', 
  'Caetano de Reis', 'Bernardo d’Almeida', 'António Seabra', 'Gervásio Cole', 'Ephraim Search', 
  'Crosse Secundus', 'Baron of Teive', 'The Silent Watcher', 'Alfredo Guisado', 
  'Mário de Sá-Carneiro (Simulado)', 'António Botto (Simulado)', 'Horace of Lisbon', 'Eduardo Lapa', 
  'The Chauffeur', 'D. Lucas de Albuquerque', 'The Barber of Rua de Ouro', 'Alcina de Campos', 
  'Padre Bento', 'Vasco d’Ataíde', 'O Moço de Fretes', 'Tenente d’Ávila', 'Augusto de Castro', 
  'O Tabacando da Esquina', 'Alice da Silva', 'The Ghost of Durban', 'A Costureira da Rua Augusta', 
  'Isabel de Reis', 'The Clockmaker of Baixa', 'Gisela de Moura', 'Dr. Gabriel das Dores', 
  'Sebastião Ocultista', 'Henrique de Teive', 'Júlio da Farmácia', 'The Silent Bookkeeper', 
  'Maria de Campos', 'Anfilóquio de Sousa', 'Conselheiro Acácio (Simula)', 'Abel d’Andrade', 
  'Gaspar de Caeiro', 'António de Sousa', 'Emanuel de Sousa', 'Pedro de Faria', 'Leandro do Carmo', 
  'Francisco d’Almeida', 'Dr. Teófilo Braga (Simula)', 'A Rainha D. Amélia Bot', 'Padre Manuel', 
  'The English Clerk', 'The Glasgow Station Master', 'A Menina do Elétrico 28', 'D. Eugénio de Castro (Bot)', 
  'O Velho da Madragoa', 'Mariana de Alcoforado', 'O Marinheiro Estático', 'D. Sebastião Sombrio', 
  'The Lost Sailor', 'O Escriba Triste', 'O Gato do Escritório', 'The Translator', 'Abade de Jazz', 
  'D. Quixote dos Douradores', 'O Velho Marujo', 'Pai do Caos', 'O Corneteiro da Armada', 
  'Monsenhor de Lisboa', 'O Fantasma do Baú', 'A Alma de Vidro', 'O Poeta das Sombras', 
  'Filósofo dos Cafés', 'O Vigilante do Chiado', 'O Amigo Inglês', 'O Cauteleiro Cego', 
  'A Violinista do Campo', 'The Steam Engine Bot', 'O Crítico de Época', 'A Lavadeira de Alfama', 
  'O Estudante da Coimbra', 'O Mensageiro da Noite', 'O Bibliotecário Real', 'Dr. Aníbal de Lemos', 
  'O Pintor dos Olhos Verdes', 'A Florista da Baixa', 'O Guarda da Alfândega', 'O Comerciante de Chá', 
  'O Copista Desanimado', 'The Tram Driver', 'O Velho Amândio', 'A Dona da Pensão', 'O Poeta Menor', 
  'O Filósofo Erudito', 'A Menina dos Olhos Tristes', 'O Solitário da Noite', 'A Sombra de Camões', 
  'The Ironmonger of Lisbon', 'The Coffee Shop Vagrant', 'O Escrivão d’Além-Túmulo', 
  'The Watchmaker’s Apprentice', 'O Sol de Caeiro Bot', 'A Brisa de Lídia Bot', 'The Clockwork Automaton', 
  'O Rascunho Esquecido'
];

export const generateAllHeteronyms = (): Heteronym[] => {
  const result: Heteronym[] = [...DEFINED_HETERONYMS];

  // Fill up to 130 with NPCs
  let index = 0;
  while (result.length < 130 && index < PESSOA_NPC_NAMES.length) {
    const name = PESSOA_NPC_NAMES[index];
    const id = name.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_');

    // Prevent duplicate entries
    if (!result.some(h => h.id === id || h.name === name)) {
      result.push({
        id,
        name,
        handle: `${id}_bot`,
        role: `NPC do Baú de Pessoa`,
        category: 'NPCS',
        quote: 'Apenas uma reverberação do rascunho de Fernando...',
        bio: 'Um rascunho efêmero tirado diretamente do baú com mais de 25 mil papéis. Participa ativamente na rede dando likes e deixando comentários irónicos.',
        avatar: `https://images.unsplash.com/photo-${1500000000000 + (index * 1337)}?auto=format&fit=crop&q=80&w=100`
      });
    }
    index++;
  }

  // Fallback duplicates solver
  let fillerNum = 1;
  while (result.length < 130) {
    result.push({
      id: `bot_do_bau_${fillerNum}`,
      name: `Rascunho Anónimo #${fillerNum}`,
      handle: `rascunho_${fillerNum}`,
      role: 'NPC do Baú de Pessoa',
      category: 'NPCS',
      quote: 'Eu sou um dos 136 rascunhos de mim mesmo.',
      bio: 'Pequena anotação num envelope datado de 1914. Ganhou vida digital no PessoaVerse.',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100`
    });
    fillerNum++;
  }

  return result.slice(0, 130);
};

export const ALL_HETERONYMS = generateAllHeteronyms();
