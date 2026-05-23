import { Heteronym, Post } from '../types';

export const reisUser: Heteronym = {
  id: 'reis',
  name: 'Ricardo Reis',
  handle: 'the_horatian',
  role: 'Latinista / Médico Clássico',
  category: 'VERIFICADOS',
  quote: 'Vem sentar-te comigo, Lídia, à beira do rio.',
  bio: 'Médico que vive exilado no Brasil devido às suas convicções monárquicas. Intelectual obsessivo, mestre do latim e da mitologia antiga. Acredita que devemos aceitar o destino inexorável da morte com calma estóica ("sábio é quem se contenta com o espetáculo do mundo").',
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
};

export const reisPosts: Post[] = [
  {
    id: 'post_reis_1',
    authorId: 'reis',
    authorName: 'Ricardo Reis',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    handle: 'the_horatian',
    imageUrl: 'https://images.unsplash.com/photo-1564399579883-451a5d44ff08?auto=format&fit=crop&q=80&w=600',
    title: 'Ode a Lídia: Beira do Rio',
    content: `Vem sentar-te comigo, Lídia, à beira do rio. / Sossegadamente fitemos o seu curso e aprendamos / Que a vida passa, e não estamos de mãos dadas. / (Enlacemos as mãos.)`,
    hashtags: ['EstiloClássico', 'EpicurismoTriste', 'Lídia', 'CarpeDiemModesto', 'FadoInexorável'],
    fullPoemText: `VEM SENTAR-TE COMIGO, LÍDIA, À BEIRA DO RIO\n\nVem sentar-te comigo, Lídia, à beira do rio.\nSossegadamente fitemos o seu curso e aprendamos\nQue a vida passa, e não estamos de mãos dadas.\n(Enlacemos as mãos.)\n\nDepois pensemos, crianças adultas, que a vida\nPassa e não fica, nada deixa e nunca regressa,\nVai para um mar muito longe, para o pé do Fado,\nMais longe que os deuses.\n\nDesenlacemos as mãos, porque não vale a pena\nCansarmo-nos. Quer gozemos, quer não gozemos, passamos\nComo o rio. Mais vale saber passar em silêncio\nE sem desassossegos.`,
    translationGenZ: `bora ali encostar, Lídia, em frente ao rio sem pressas. vamos ver a vida a correr como se fosse o feed a dar scroll e aceitar resignadamente que tudo passa depressa. estamos de mãos dadas, mas sem nos apegarmos demasiado ao futuro. somos só miúdos crescidos a jogar o jogo do destino. Carpe diem sem stresse. 🌊🧘‍♂️`,
    likes: 3100,
    commentsCount: 2,
    timestamp: '4 horas atrás',
    comments: [
      {
        id: 'c_campos_3',
        authorId: 'campos',
        authorName: 'Álvaro de Campos',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'naval_engineer_poet',
        content: 'Ricardo, essa tua Lídia parece uma estátua de gesso, farta de te ouvir falar sobre o fado! Se queres de facto segurar as mãos dela, apaixona-te a sério!',
        timestamp: '3h atrás',
        likes: 240
      },
      {
        id: 'c_mar_1',
        authorId: 'maria_jose',
        authorName: 'Maria José',
        authorAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'RAROS',
        handle: 'window_loneliness',
        content: 'Ah, quem me dera ter um poeta como o Dr. Ricardo Reis para se sentar comigo... Eu esperava por si toda a eternidade...',
        timestamp: '30m atrás',
        likes: 18
      }
    ]
  },
  {
    id: 'post_reis_2',
    authorId: 'reis',
    authorName: 'Ricardo Reis',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    handle: 'the_horatian',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600',
    title: 'Ode à Inteireza: Para ser grande',
    content: `Para ser grande, sê inteiro: nada / Teu exonera ou deforma. / Sê todo em cada coisa. Põe quanto és / No mínimo que fazes. 🏛️✨`,
    hashtags: ['EstoicismoAtivo', 'Inteireza', 'PreceClássica', 'Dignidade', 'SábioConselho'],
    fullPoemText: `PARA SER GRANDE, SÊ INTEIRO\n\nPara ser grande, sê inteiro: nada\nTeu exonera ou deforma.\nSê todo em cada coisa. Põe quanto és\nNo mínimo que fazes.\n\nAssim em cada lago a lua toda\nBrilha, porque alta vive.`,
    translationGenZ: `pra seres o "main character", sê completo de verdade. não tentes simular outra pessoa nem fujas das tuas verdades. foca-te a 100% no que estás a fazer, mesmo na tarefa mais simples. Dá o teu melhor. #Mindfulness #Focus`,
    likes: 2800,
    commentsCount: 1,
    timestamp: '4 dias atrás',
    comments: [
      {
        id: 'c_l_anis_1',
        authorId: 'paschoal_anis',
        authorName: "Paschoal de de l'Anis",
        authorAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'RAROS',
        handle: 'paschoal_anis',
        content: 'Magnífico conselho! No mapa astral, Marte diz-nos exatamente para colocarmos a inteireza em cada ação diária.',
        timestamp: '2h atrás',
        likes: 4
      }
    ]
  },
  {
    id: 'post_reis_3',
    authorId: 'reis',
    authorName: 'Ricardo Reis',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    handle: 'the_horatian',
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600',
    title: 'Ode a Lídia: Prefiro rosas',
    content: `Prefiro rosas, Lídia, à pátria, / E amar o seu silêncio curto e leve / Mais do que o tumulto épico dos reis... 🌹🍂`,
    hashtags: ['RosasSemTempo', 'PazInterior', 'AntiGuerra', 'AmorModesto', 'MitologiaPessoal'],
    fullPoemText: `PREFIRO ROSAS, LÍDIA, À PÁTRIA\n\nPrefiro rosas, Lídia, à pátria,\nE amar o seu silêncio curto e leve\nMais do que o tumulto épico dos reis e das guerras.\n\nEnquanto houver rosas e rios calmos\nEu poderei viver o meu paganismo triste\nNo recanto discreto desta quinta,\nAlheio à glória inútil do triunfo romano.`,
    translationGenZ: `prefiro o silêncio de um bouquet de rosas e um sunset tranquilo a qualquer debate aceso sobre geopolítica nacional. enquanto houver vibes limpas e caminhos de terra, estou fora de guerras de ego e política. #PeaceAndQuiet #Aesthetic`,
    likes: 3450,
    commentsCount: 1,
    timestamp: '1 semana atrás',
    comments: [
      {
        id: 'c_pessoa_reis_3',
        authorId: 'pessoa',
        authorName: 'Fernando Pessoa',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'orthonym_himself',
        content: 'Uma ode de uma perfeição métrica que faria inveja ao próprio Horácio. Ricardo, o teu paganismo é uma fortaleza.',
        timestamp: '1 semana atrás',
        likes: 85
      }
    ]
  },
  {
    id: 'post_reis_4',
    authorId: 'reis',
    authorName: 'Ricardo Reis',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    handle: 'the_horatian',
    imageUrl: 'https://images.unsplash.com/photo-1516054901282-df4d38bf9c43?auto=format&fit=crop&q=80&w=600',
    title: 'Ode à Brevidade: Beijos de despedida',
    content: `Como se cada beijo / Fora de despedida, Lídia, minha, / Beijemo-nos, calados, / Sem esperarmos o amanhã imutável. 💋⏳`,
    hashtags: ['Brevidade', 'BeijoEstóico', 'SemIlusões', 'SilêncioBelo', 'MitologiaDoFado'],
    fullPoemText: `COMO SE CADA BEIJO\n\nComo se cada beijo\nFora de despedida, Lídia, minha,\nBeijemo-nos, calados,,\nSem esperarmos que o amanhã exista.\n\nO Fado já fiou com fios escuros\na data exata do nosso último dia.\nAproveitemos o instante, sem promessas de eternidade\nQue nem os próprios deuses podem cumprir.`,
    translationGenZ: `vamos viver esta relação de forma desapegada, como se cada momento juntos fosse a despedida final. sem juras cringes de amor eterno que ninguém tanka. o fado é escuro, bora focar só no "agora" calados. #CaladosEConfortaveis #ZeroExpectations`,
    likes: 2150,
    commentsCount: 1,
    timestamp: '2 semanas atrás',
    comments: [
      {
        id: 'c_caeiro_reis_4',
        authorId: 'caeiro',
        authorName: 'Alberto Caeiro',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'nature_is_everything',
        content: 'Ricardo, para quem quer beijar estás a pensar demasiado na morte. Se beijas, beija e cala-te. Deixa lá o fiar do Fado.',
        timestamp: '2 semanas atrás',
        likes: 195
      }
    ]
  },
  {
    id: 'post_reis_5',
    authorId: 'reis',
    authorName: 'Ricardo Reis',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    handle: 'the_horatian',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=600',
    title: 'Ode ao Desapego: Não tenhas nada',
    content: `Não tenhas nada nas mãos / Nem uma memória na alma / Que quando te puserem nas mãos o óbulo de Caronte / Nada te caia... 🪙⛵`,
    hashtags: ['DesapegoTotal', 'Caronte', 'Óbulo', 'MorteLímpida', 'VencerODestino'],
    fullPoemText: `NÃO TENHAS NADA NAS MÃOS\n\nNão tenhas nada nas mãos\nNem uma memória na alma\nQue se te puserem nas mãos o óbulo de Caronte\n\nnada te caia.\nIde de mãos abertas para a morte\nSem posses terrenas, sem dores, sem saudades fúteis.\nO sábio viaja leve no barco dos mortos.`,
    translationGenZ: `viaja leve na vida, sem acumular trralhas materiais ou apegos emocionais pesados na mala. quando o barqueiro da morte pedir o pagamento da passagem de saída, vais de mãos abertas de forma digna e sem drama. #Minimalista #Leveza #StoicVibes`,
    likes: 4200,
    commentsCount: 1,
    timestamp: '3 semanas atrás',
    comments: [
      {
        id: 'c_soares_reis_5',
        authorId: 'soares',
        authorName: 'Bernardo Soares',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'office_dreams',
        content: 'Ir de mãos vazias é fácil, difícil é esvaziar a mente de todos os sonhos inúteis que nos assombram o tédio.',
        timestamp: '3 semanas atrás',
        likes: 154
      }
    ]
  },
  {
    id: 'post_reis_6',
    authorId: 'reis',
    authorName: 'Ricardo Reis',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    handle: 'the_horatian',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
    title: 'Ode à Firmeza: Seguro assento',
    content: `Seguro assento na coluna firme / Do que sou de verdade, / Deixo passar a corrente das águas do rio do Fado... 🏛️🌊`,
    hashtags: ['Firmeza', 'ColunaClássica', 'RioDoFado', 'EstiloEstóico', 'PazImutável'],
    fullPoemText: `SEGURO ASSENTO NA COLUNA FIRME\n\nSeguro assento na coluna firme\nDo que de mim construí de verdade,\nDeixo passar o rio do fado com o seu curso feroz.\n\nAssisto da margem imperturbável, sem medo,\nAo decorrer dos anos rápidos e das glórias\nQue caem como folhas secas de outono.`,
    translationGenZ: `trabalhei no meu próprio autoconhecimento e agora o meu psicológico é uma coluna de mármore inabalável. deixo os problemas mundanos e o caos correrem tipo cascata ao meu lado. sigo plácido e imperturbável. #Unshakable #VibeFirme`,
    likes: 1890,
    commentsCount: 0,
    timestamp: '1 mês atrás',
    comments: []
  }
];
