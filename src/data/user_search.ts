import { Heteronym, Post } from '../types';

export const searchUser: Heteronym = {
  id: 'alexander_search',
  name: 'Alexander Search',
  handle: 'english_intellect',
  role: 'Filósofo / Poeta de Língua Inglesa',
  category: 'ATIVOS',
  quote: 'My thoughts are wings that seek the high starry skies.',
  bio: 'Criado durante a juventude de Pessoa na África do Sul. Escreve exclusivamente em inglês, explorando dilemas metafísicos profundos sobre o bem e o mal, o crime e a redenção.',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
};

export const searchPosts: Post[] = [
  {
    id: 'post_search_1',
    authorId: 'alexander_search',
    authorName: 'Alexander Search',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    handle: 'english_intellect',
    imageUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=600',
    title: 'The Sickness of Today',
    content: `My thought is a sorrowful dream, / My life is a dark, heavy thing, / And all my hopes are but a gleam / Of light that dies in blossoming. 🌫️🖤`,
    hashtags: ['ExistentialDespair', 'VictorianVibes', 'EnglishFog', 'Metaphysics', 'Melancholy'],
    fullPoemText: `THE SICKNESS OF TODAY\n\nMy thought is a sorrowful dream,\nMy life is a dark, heavy thing,\nAnd all my hopes are but a gleam\nOf light that dies in blossoming.\n\nThe worlds are cold, the stars are blind,\nThe skies are but a shroud of blue;\nI seek for truth I cannot find,\nAnd dreams are all I ever knew.\n\nIndeed, we linger in the shadows of a dying era,\nWriting merely to pass the hours of our mortal confinement.`,
    translationGenZ: `uma bad vibe existencial profunda real. no fim do dia, escrever é apenas a sombra da nossa essência a vagar num nevoeiro denso de Londres. onde mora a verdade, no software do cérebro ou nos nossos devaneios em modo avião? #ExistentialDespair #LondonFog #SadBoyHours`,
    likes: 1800,
    commentsCount: 1,
    timestamp: 'Ontem',
    comments: [
      {
        id: 'c_camp_search_1',
        authorId: 'campos',
        authorName: 'Álvaro de Campos',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'naval_engineer_poet',
        content: 'Search, my dear English-educated self! That is a wonderfully sullen piece of Victorian twilight! Keep searching for that starry light!',
        timestamp: '3h atrás',
        likes: 45
      }
    ]
  },
  {
    id: 'post_search_2',
    authorId: 'alexander_search',
    authorName: 'Alexander Search',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    handle: 'english_intellect',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4ca6?auto=format&fit=crop&q=80&w=600',
    title: 'Sonnet of Regret',
    content: `Oh, to be free from this pale earthly night, / To fly towards the cold, majestic stars, / And leave behind the small, ignoble scars... 🌌⛓️`,
    hashtags: ['SonnetOfRegret', 'StarrySky', 'IntellectualChain', 'EnglishLover', 'Philosopher'],
    fullPoemText: `SONNET OF REGRET\n\nOh, to be free from this pale earthly night,\nTo fly towards the cold, majestic stars,\nAnd leave behind the small, ignoble scars\nOf human dreams, of shadow and of blight!\n\nBut here I linger, in the English fog,\nA prisoner of my own intellectual chain,\nRecording every sorrow and every pain,\nLike a lonely traveller bogged in the bog.`,
    translationGenZ: `estou farto de estar preso na rotina e em redes sociais cringes. gostava só de dar um double jump espacial e fugir para a paz das estrelas geladas, longe de dramas humanos desnecessários. mas sigo aqui a flutuar no lodo dos pensamentos e no feed sem fim. #RageQuitReality #Overthinking #CosmicFloat`,
    likes: 2450,
    commentsCount: 0,
    timestamp: '4 dias atrás',
    comments: []
  },
  {
    id: 'post_search_3',
    authorId: 'alexander_search',
    authorName: 'Alexander Search',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    handle: 'english_intellect',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600',
    title: 'The Solitary',
    content: `I am a king without a throne, / A shadow in a land of stone, / With thoughts that burn like silent fire... 👑🏰`,
    hashtags: ['TheSolitary', 'SilentFire', 'AbsurdUniverse', 'EnglishPoetry', 'ProudlyAlone'],
    fullPoemText: `THE SOLITARY\n\nI am a king without a throne,\nA shadow in a land of stone,\nWith thoughts that burn like silent fire.\n\nFor what are men but fleeting dust,\nAnd what is love but fragile trust,\nAnd what is life but vain desire?\n\nSo let me walk this world alone,\nIn silence, cold and all unknown.\n`,
    translationGenZ: `basicamante virei o "lone wolf" definitivo. sem trono, sem hype, só uma sombra observadora a queimar neurónios de forma discreta. o amor às vezes é flop, a vida cansa bué, por isso vou seguir o meu caminho solo na calada da noite. #SoloRun #Offline #IntrovertKing`,
    likes: 1980,
    commentsCount: 0,
    timestamp: '1 semana atrás',
    comments: []
  }
];
