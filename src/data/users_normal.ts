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

export const normalPosts: Post[] = [
  // Charles Anon
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: `post_anon_${i + 1}`,
    authorId: 'charles_anon',
    authorName: 'Charles Robert Anon',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    handle: 'english_satirist',
    content: `Anon Satires #${i + 1}\nAn English poem of young critical rebellion, teasing the status quo with sharp humor and rhythm.`,
    translationGenZ: `Sátira jovem #${i + 1}\nComédia crítica inglesa que desanca nos influencers e na burguesia da altura. Muito riso e sarcasmo.`,
    likes: 410 + i * 30,
    commentsCount: 0,
    timestamp: `${i + 4} dias atrás`,
    comments: []
  })),

  // Jean Seul de Méluret
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: `post_meluret_${i + 1}`,
    authorId: 'jean_meluret',
    authorName: 'Jean Seul de Méluret',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    handle: 'french_critic',
    content: `Critique de Méluret #${i + 1}\nL'art d'écrire en français, de juger le style et de démolir les fausses génies littéraires de l'époque.`,
    translationGenZ: `Crítica chique #${i + 1}\nEnsaio sarcástico em francês a explicar porquê que a maioria dos escritores modernos são só "hype" sem conteúdo do bom.`,
    likes: 380 + i * 20,
    commentsCount: 0,
    timestamp: `${i + 5} dias atrás`,
    comments: []
  })),

  // Abílio Quaresma
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: `post_quaresma_${i + 1}`,
    authorId: 'abilio_quaresma',
    authorName: 'Abílio Quaresma',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    handle: 'logic_detective',
    content: `Charada Dialéctica #${i + 1}\nEis uma equação de mistério: se um cadáver jaz numa carruagem selada sem janelas, qual o segredo duma morte puramente simbólica?`,
    translationGenZ: `Dedução Sherlock #${i + 1}\nEnigmas de lógica pura para exercitar os neurónios. Consegues resolver? Deixa um comentário!`,
    likes: 490 + i * 15,
    commentsCount: 0,
    timestamp: `${i + 3} dias atrás`,
    comments: []
  })),

  // Raphael Baldaya
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: `post_baldaya_${i + 1}`,
    authorId: 'rafael_baldaya',
    authorName: 'Raphael Baldaya',
    authorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    handle: 'cosmic_astrologer',
    content: `Previsão Ocultista e dos Signos #${i + 1}\nAstrologia rigorosa e os destinos traçados pelas constelações de Sagitário e Capricórnio. A verdade das sombras astrológicas.`,
    translationGenZ: `Horóscopo do Mês #${i + 1}\nBora decifrar a energia dos planetas e signos. Alerta Mercúrio Retrógrado iminente! Fiquem de olho. #Astrologia #Signos`,
    likes: 620 + i * 25,
    commentsCount: 0,
    timestamp: `${i + 2} dias atrás`,
    comments: []
  })),

  // Thomas Crosse
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: `post_thomas_${i + 1}`,
    authorId: 'thomas_crosse',
    authorName: 'Thomas Crosse',
    authorAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200',
    handle: 'english_promoter',
    content: `English Promotion of Portugal #${i + 1}\nThis lyrical nation holds secrets of the soul unnamed in English textbooks. Let the world read our Pessoa's friends!`,
    translationGenZ: `Fato bilingue #${i + 1}\nDivulgando a arte tuga para a comunidade gringa, porque o nosso país exporta talento literário de topo.`,
    likes: 400 + i * 18,
    commentsCount: 0,
    timestamp: `${i + 7} dias atrás`,
    comments: []
  })),

  // Dr. Pancrácio
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: `post_pancracio_${i + 1}`,
    authorId: 'dr_pancracio',
    authorName: 'Dr. Pancrácio',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    handle: 'political_satirist',
    content: `Crónica Satírica e Política #${i + 1}\nO governo em Lisboa decide de forma bizarra sobre estradas inacabadas, enquanto discursa eloquentemente no palácio.`,
    translationGenZ: `Memes Políticos #${i + 1}\nZombaria clássica com a velha política que só faz discursos mas entrega zero progresso. Super atual!`,
    likes: 450 + i * 22,
    commentsCount: 0,
    timestamp: `${i + 6} dias atrás`,
    comments: []
  }))
];
