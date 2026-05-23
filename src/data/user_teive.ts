import { Heteronym, Post } from '../types';

export const teiveUser: Heteronym = {
  id: 'baron_teive',
  name: 'Barão de Teive',
  handle: 'the_unproductive_baron',
  role: 'Aristocrata Solitário',
  category: 'ATIVOS',
  quote: 'Destruo todos os meus manuscritos porque a perfeição é impossível.',
  bio: 'Fidalgo incapaz de terminar qualquer obra. Suicidou-se num quarto de hotel de luxo, deixando um único manuscrito confessional sobre a cobardia literária.',
  avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
};

export const teivePosts: Post[] = [
  {
    id: 'post_teive_1',
    authorId: 'baron_teive',
    authorName: 'Barão de Teive',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    handle: 'the_unproductive_baron',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    title: 'A Prisão da Perfeição',
    content: `A perfeição é uma prisão invisível que nos impede de começar ou terminar qualquer projeto literário. Queimei todos os meus manuscritos. Ao fazê-lo, atingi uma paz estoica... 🕯️🔥`,
    hashtags: ['EstéticaDaDestruição', 'EstoicismoRadical', 'PazSilenciosa', 'FidalgoSolitário', 'FogoNasIdeias'],
    fullPoemText: `A PRISÃO DA PERFEIÇÃO\n\nA perfeição absoluta é uma barreira invisível e castradora que nos impede de começar ou terminar qualquer obra de valor literário.\nCompreendi que qualquer palavra escrita seria inevitavelmente uma traição vulgar ao pensamento puro originário. E por isso, queimei voluntariamente todos os manuscritos do meu baú.\n\nAo ver as chamas consumirem a minha prosa imperfeita, atingi enfim uma paz estoica e aristocrática indizível:\na única obra de arte de facto perfeita e imaculada é aquela maravilhosa ideia que conscientemente recusamos criar para o mundo banal.`,
    translationGenZ: `o perfeccionismo é uma paranoia secreta que te impede de sequer começar a produzir conteúdo. apaguei todos os meus rascunhos, cancelei o upload e fechei as abas do computador. Entrei em paz pura: a única cena de fato perfeita é aquela que tu escolhes guardar só para ti na tua cabeça, sem stresse e sem postar na net. #QuietQuitting #NoThoughts #UnproducedSuccess`,
    likes: 1100,
    commentsCount: 1,
    timestamp: '3 dias atrás',
    comments: [
      {
        id: 'c_guedes_teive_1',
        authorId: 'vicente_guedes',
        authorName: 'Vicente Guedes',
        authorAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'ATIVOS',
        handle: 'the_pre_soares',
        content: 'Barão, que dor profunda e lúcida! O tédio intelectual e o medo constante da imperfeição são as marcas distintivas dos espíritos verdadeiramente esclarecidos que recusam palcos públicos.',
        timestamp: '2h atrás',
        likes: 19
      }
    ]
  },
  {
    id: 'post_teive_2',
    authorId: 'baron_teive',
    authorName: 'Barão de Teive',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    handle: 'the_unproductive_baron',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600',
    title: 'A Cobardia Literária',
    content: `No silêncio estúpido do meu quarto de hotel em Lisboa. Olho para as minhas mãos e sinto orgulho na minha irrelevância e na renúncia absoluta... 🏬🥀`,
    hashtags: ['MãoVazia', 'DignidadeAristocrata', 'SuicídioEstético', 'SilêncioBelo', 'HotelDeLuxo'],
    fullPoemText: `A COBARDIA LITERÁRIA\n\nFechado no grande silêncio cinzento do meu quarto de hotel de luxo em Lisboa.\nOlho para as minhas mãos desprovidas de qualquer folha ou caneta, e sinto um orgulho imenso na minha renúncia absoluta a ser alguém relevante para os jornais mundanos.\n\nO aristocrata moderno não vai mendigar glórias literárias fútis pela praça pública.\nEle prefere suicidar-se na dignidade inviolável do seu silêncio,\ngarantindo que a sua arquitetura íntima de pensamentos permaneça intocada pela vulgaridade da fama.`,
    translationGenZ: `virei fantasma social deliberadamente. deitar fumo a tentar ser validado por estranhos ou tentar hits passageiros de popularidade é ultra cringe. prefiro o low profile e sumir silenciosamente da rede, guardando toda a sabedoria em modo offline. #GhostMode #LowProfile #Dignidade`,
    likes: 1350,
    commentsCount: 0,
    timestamp: '5 dias atrás',
    comments: []
  }
];
