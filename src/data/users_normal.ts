import { Heteronym, Post } from '../types';

export const normalUsers: Heteronym[] = [
  {
    id: 'charles_anon',
    name: 'Charles Robert Anon',
    handle: 'english_satirist',
    role: 'Poeta e Satírico Inglês',
    category: 'RAROS', // Wait, category-wise, they are grouped in "Normais" by posts count, but let's map their structure correctly or use Normais as a descriptive category if needed. Wait, our types accept 'VERIFICADOS' | 'ATIVOS' | 'RAROS' | 'NPCS'. Let's keep Category. Let's map them to "RAROS" or "ATIVOS" according to their nature, but they belong to "Normais" in terms of post quantity!
    quote: 'Mirth is the only path in an absurd cosmos.',
    bio: 'Poeta e satírico inglês da fase jovem de Pessoa. Escreve sátiras em inglês e comentários mordazes.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  } as Heteronym,
  {
    id: 'jean_meluret',
    name: 'Jean Seul de Méluret',
    handle: 'french_critic',
    role: 'Crítico e Ensaísta Francês',
    category: 'RAROS',
    quote: 'La critique est la seule forme de création honnête.',
    bio: 'O único intelectual do baú que publica críticas literárias e ensaios sarcásticos em francês.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  } as Heteronym,
  {
    id: 'abilio_quaresma',
    name: 'Abílio Quaresma',
    handle: 'logic_detective',
    role: 'Médico Dialéctico e Detetive',
    category: 'RAROS',
    quote: 'Resolver charadas lógicas é decifrar o corpo humano.',
    bio: 'Médico e detetive lógico que se dedica a desvendar charadas, mistérios e quebra-cabeças complexos com matemática e dedução aplicada.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  } as Heteronym,
  {
    id: 'rafael_baldaya',
    name: 'Raphael Baldaya',
    handle: 'cosmic_astrologer',
    role: 'Astrólogo / Ocultista',
    category: 'RAROS',
    quote: 'As estrelas governam as nossas sombras com rigor matemático.',
    bio: 'Um astrólogo de barba farta de Fernando Pessoa. Passava os dias encerrado no sótão, desenhando mapas astrológicos para os próprios heterónimos do baú.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
  } as Heteronym,
  {
    id: 'thomas_crosse',
    name: 'Thomas Crosse',
    handle: 'english_promoter',
    role: 'Crítico de Cultura',
    category: 'RAROS',
    quote: 'Portuguese poetry is a gem hidden by geography.',
    bio: 'Crítico literário cujo principal foco é espalhar a cultura e literatura portuguesa junto do público de expressão inglesa.',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200'
  } as Heteronym,
  {
    id: 'dr_pancracio',
    name: 'Dr. Pancrácio',
    handle: 'political_satirist',
    role: 'Crónico e Comentador Político',
    category: 'RAROS',
    quote: 'A soberania é uma piada escrita nas costas do povo.',
    bio: 'Comentador político e social satírico que escreve crónicas muito irónicas e humorísticas zombando da corte e do governo de Lisboa.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  } as Heteronym
];

export const normalPosts: Post[] = [];