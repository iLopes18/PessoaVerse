import { Heteronym, Post } from '../types';

export const caeiroUser: Heteronym = {
  id: 'caeiro',
  name: 'Alberto Caeiro',
  handle: 'nature_is_everything',
  role: 'Mestre / Guardador de Rebanhos',
  category: 'VERIFICADOS',
  quote: 'O meu olhar é nítido como um girassol.',
  bio: 'Considerado o "Mestre" de todos os heterónimos (e do próprio Pessoa). Vive no campo em Portugal, recusa qualquer tipo de filosofia e metafísica, e prega um sensacionismo puro: a realidade é para ser sentida e vista, nunca pensada.',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
};

export const caeiroPosts: Post[] = [
  {
    id: 'post_caeiro_1',
    authorId: 'caeiro',
    authorName: 'Alberto Caeiro',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    handle: 'nature_is_everything',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600',
    title: 'O Guardador de Rebanhos I',
    content: `Sou um guardador de rebanhos. / O rebanho é os meus pensamentos / E os meus pensamentos são todos sensações. / Penso com os olhos e com os ouvidos / E com as mãos e os pés... 🐑🌿`,
    hashtags: ['Mestre', 'GuardadorDeRebanhos', 'SentirSemPensar', 'Ribatejo', 'Simplicidade'],
    fullPoemText: `O GUARDADOR DE REBANHOS I\n\nSou um guardador de rebanhos.\nO rebanho é os meus pensamentos\nE os meus pensamentos são todos sensações.\nPenso com os olhos e com os ouvidos\nE com as mãos e os pés\nE com o nariz e a boca.\n\nPensar uma flor é vê-la e cheirá-la\nE comer um fruto é saber-lhe o sentido.\n\nPor isso quando num dia de calor\nMe sinto triste de gozar-me tanto,\nE me deito ao comprido na erva,\nE fecho os olhos quentes,\nSinto todo o meu corpo deitado na realidade,\nSei a verdade e sou feliz.`,
    translationGenZ: `basicamente, o mestre tá só a fazer "touch grass". 🐑 a minha mente é um feed em 4K. Sem pensamentos chatos de filosofia, apenas o vibe check das sensações reais da natureza. penso com os meus olhos, os meus ouvidos, e os meus pés descalços. não preciso duma metáfora profunda para uma flor, ela é só bué linda. É o que é. ✨🌿`,
    likes: 5600,
    commentsCount: 2,
    timestamp: '2 horas atrás',
    comments: [
      {
        id: 'c_campos_2',
        authorId: 'campos',
        authorName: 'Álvaro de Campos',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'naval_engineer_poet',
        content: 'Mestre, a sua paz abençoada irrita e fascina o meu peito cansado! Quem me dera viver a simplicidade das suas ovelhas, em vez do ronco dos motores de ferro das grandes cidades!',
        timestamp: '1h atrás',
        likes: 198
      },
      {
        id: 'c_mora_1',
        authorId: 'mora',
        authorName: 'António Mora',
        authorAvatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'ATIVOS',
        handle: 'pagan_philosopher',
        content: 'Exato! É o regresso absoluto e triunfal do paganismo ancestral, onde os Deuses não se pensam, simplesmente habitam na matéria da própria erva verde do campo.',
        timestamp: '15m atrás',
        likes: 24
      }
    ]
  },
  {
    id: 'post_caeiro_2',
    authorId: 'caeiro',
    authorName: 'Alberto Caeiro',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    handle: 'nature_is_everything',
    imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=600',
    title: 'O Guardador de Rebanhos XXXIX',
    content: `O mistério das coisas, onde está ele? / Onde está ele que não aparece / Pelo menos a mostrar-nos que é mistério? / A única das coisas é eles não terem mistério nenhum. 🌳🍃`,
    hashtags: ['SemMistério', 'ClarezaAbsoluta', 'FilosofiaDoSimples', 'OlharLimpido', 'ViverSemPorquês'],
    fullPoemText: `O GUARDADOR DE REBANHOS XXXIX\n\nO mistério das coisas, onde está ele?\nOnde está ele que não aparece\nPelo menos a mostrar-nos que é mistério?\nQue sabe o rio disso e que sabe a árvore?\nE eu, que não sou mais do que eles, que sei disso?\nSempre que olho para as coisas e penso no que os homens pensam delas,\nRio como um regato que soa fresco numa pedra.\n\nPorque o único sentido oculto das coisas\nÉ elas não terem sentido oculto nenhum.\nÉ mais estranho do que todas as estranhezas\nE do que os sonhos de todos os poetas\nE os pensamentos de todos os filósofos,\nQue as coisas sejam realmente o que parecem ser\nE que não haja nada que compreender.\n\nSim, eis o que os meus sentidos aprenderam sozinhos: —\nAs coisas não têm significação: têm existência.\nAs coisas são o único sentido oculto das coisas.`,
    translationGenZ: `o pessoal viaja no mistério do universo... mas mano, cadê o mistério que nunca dá as caras? o real segredo do mundo é que não há segredo absolutamente nenhum. O que vês é literalmente o que levas. Acorda pra vida! #NoMystery #StayReal`,
    likes: 3100,
    commentsCount: 1,
    timestamp: '3 dias atrás',
    comments: [
      {
        id: 'c_quaresma_1',
        authorId: 'abilio_quaresma',
        authorName: 'Abílio Quaresma',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'RAROS',
        handle: 'logic_detective',
        content: 'Como médico e detetive lógico, discordo! A realidade é um enorme enigma que se resolve apenas decifrando as charadas invisíveis que a mente esconde.',
        timestamp: '1h atrás',
        likes: 18
      }
    ]
  },
  {
    id: 'post_caeiro_3',
    authorId: 'caeiro',
    authorName: 'Alberto Caeiro',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    handle: 'nature_is_everything',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600',
    title: 'O Guardador de Rebanhos II',
    content: `O meu olhar é nítido como um girassol. / Tem o costume de andar pelas estradas / Olhando para a direita e para a esquerda, / E de vez em quando olhando para trás... 🌻🛣️`,
    hashtags: ['Girassol', 'OlharAtento', 'EstradasDePortugal', 'PresenteContinuo', 'SemOverthinking'],
    fullPoemText: `O GUARDADOR DE REBANHOS II\n\nO meu olhar é nítido como um girassol.\nTem o costume de andar pelas estradas\nOlhando para a direita e para a esquerda,\nE de vez em quando olhando para trás...\nE o que eu vejo a cada instante\nÉ aquilo que nunca antes eu tinha visto,\nE eu sei dar por isso muito bem...\n\nSinto-me nascer a cada momento\nPara a eterna novidade do Mundo...`,
    translationGenZ: `estou com a nitidez de imagem no máximo, estilo girassol em 4K. ando pelos caminhos a ver tudo à volta sem filtros e sem preconceito. cada frame do meu olhar é uma novidade que eu absorvo de verdade. #FreshEyes #LivingInTheMoment`,
    likes: 2450,
    commentsCount: 0,
    timestamp: '5 dias atrás',
    comments: []
  },
  {
    id: 'post_caeiro_4',
    authorId: 'caeiro',
    authorName: 'Alberto Caeiro',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    handle: 'nature_is_everything',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600',
    title: 'O Guardador de Rebanhos V',
    content: `Há metafísica bastante em não pensar em nada. / O que penso eu do mundo? / Sei lá o que penso do mundo! / Se eu adoecer de pensar nisso! 🌿💭`,
    hashtags: ['RecusaFilosofia', 'AntiMetafisica', 'MenteVaziaEFeliz', 'Tranquilidade', 'PuraExistencia'],
    fullPoemText: `O GUARDADOR DE REBANHOS V\n\nHá metafísica bastante em não pensar em nada.\n\nO que penso eu do mundo?\nSei lá o que penso do mundo!\nSe eu adoecer de pensar nisso!\n\nQue ideia tenho eu das coisas?\nQue opinião tenho sobre as causas e os efeitos?\nQue tenho eu meditado sobre Deus e a alma\nE sobre a criação do Mundo?\n\nNão sei. Para mim pensar nisso é fechar os olhos\nE não ver nada. É cortar a ligação à Terra.`,
    translationGenZ: `pergunta de milhões: o que eu acho da geopolítica cósmica e da metafísica? mano, sei lá! pensar nessas cenas dá tonturas e dor de cabeça. a minha única filosofia oficial é manter os pensamentos no mute e ver a erva crescer. #ZeroOverthinking #NoThoughts JustVibes`,
    likes: 3820,
    commentsCount: 1,
    timestamp: '1 semana atrás',
    comments: [
      {
        id: 'c_reis_caeiro_4',
        authorId: 'reis',
        authorName: 'Ricardo Reis',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'the_horatian',
        content: 'Mestre Caeiro, a sua recusa da filosofia é, ironicamente, a filosofia mais profunda e livre que alguma vez foi professada na terra lusa.',
        timestamp: '1 semana atrás',
        likes: 120
      }
    ]
  },
  {
    id: 'post_caeiro_5',
    authorId: 'caeiro',
    authorName: 'Alberto Caeiro',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    handle: 'nature_is_everything',
    imageUrl: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=600',
    title: 'O Guardador de Rebanhos XX',
    content: `O Tejo é mais belo que o rio que corre pela minha aldeia, / Mas o Tejo não é mais belo que o rio que corre pela minha aldeia / Porque o Tejo não é o rio que corre pela minha aldeia. 🌊🏡`,
    hashtags: ['TejoVsAldeia', 'LocalVibes', 'SemComparações', 'MinhaTerra', 'SimplicidadeExtrema'],
    fullPoemText: `O GUARDADOR DE REBANHOS XX\n\nO Tejo é mais belo que o rio que corre pela minha aldeia,\nMas o Tejo não é mais belo que o rio que corre pela minha aldeia\nPorque o Tejo não é o rio que corre pela minha aldeia.\n\nO Tejo tem grandes navios\nE corre nele ainda, para os que vêem em tudo o que lá não está,\nA memória das naus.\n\nO Tejo desce de Espanha\nE o Tejo entra no mar em Lisboa.\nToda a gente sabe isso.\nMas poucos sabem qual é o rio da minha aldeia\nE para onde ele vai\nE de onde ele vem.\nE por isso, porque pertence a menos gente,\nO rio da minha aldeia é mais livre e maior.`,
    translationGenZ: `o Tejo pode ser gigante e ter bué visibilidade no Insta, ter iates caros e carregar a história épica do império de Portugal. mas o ribeiro da minha pequena aldeia sola o Tejo fardado, porque é o meu spot favorito e é muito mais livre. #LocalSpecial #NoFlex #Underappreciated`,
    likes: 4120,
    commentsCount: 1,
    timestamp: '2 semanas atrás',
    comments: [
      {
        id: 'c_campos_caeiro_5',
        authorId: 'campos',
        authorName: 'Álvaro de Campos',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'naval_engineer_poet',
        content: 'Mestre, eu que cantei os grandes transatlânticos do Tejo, sinto-me humilhado e comovido com a pureza livre do ribeiro da sua infância campestre!',
        timestamp: '2 semanas atrás',
        likes: 177
      }
    ]
  },
  {
    id: 'post_caeiro_6',
    authorId: 'caeiro',
    authorName: 'Alberto Caeiro',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    handle: 'nature_is_everything',
    imageUrl: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&q=80&w=600',
    title: 'O Guardador de Rebanhos XIV',
    content: `Não me importo com as rimas. Raramente / Há duas árvores iguais, uma ao lado da outra... / Eu canto como quem vê, sem regras de poética. 🌲✍️`,
    hashtags: ['VersoLivre', 'ContraRegras', 'CantarComoQuemVê', 'EstiloOrgânico', 'PoesiaVerdade'],
    fullPoemText: `O GUARDADOR DE REBANHOS XIV\n\nNão me importo com as rimas. Raramente\nHá duas árvores iguais, uma ao lado da outra.\n\nEscrevo versos de forma livre, sem os meter em gavetas.\nSei que a minha poesia é honesta\nComo as pedras e a terra que pisamos.\nSe digo que as flores sorriem, é mentira,\nElas apenas são flores e isso é o suficiente para mim.`,
    translationGenZ: `tentar fazer versinhos certinhos com rima rica é muito ultrapassado. tu vês os pinheiros a crescer em formato simétrico? obviamente não. eu escrevo o que os meus olhos captam no momento, sem filtros e sem tentar parecer "culto". #AntiStructure #FreeStyle`,
    likes: 1950,
    commentsCount: 0,
    timestamp: '3 semanas atrás',
    comments: []
  },
  {
    id: 'post_caeiro_7',
    authorId: 'caeiro',
    authorName: 'Alberto Caeiro',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    handle: 'nature_is_everything',
    imageUrl: 'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?auto=format&fit=crop&q=80&w=600',
    title: 'Se eu morrer novo',
    content: `Se eu morrer novo, / Sem poder publicar livro nenhum... / Digam apenas isto de mim: / "O meu mestre era um homem simples que via as coisas." 👓🍂`,
    hashtags: ['Humildade', 'Legado', 'SeEuMorrerNovo', 'SemIlusões', 'VidaCurta'],
    fullPoemText: `SE EU MORRER NOVO\n\nSe eu morrer novo,\nSem poder publicar livro nenhum,\nSem ver a cara que têm as minhas coisas escritas em prosa ou verso,\nPeço que, se quiserem fazer-me justiça,\nNão digam que eu era genial.\nDigam apenas isto de mim:\n"O meu mestre era um homem de olhar límpido que via as coisas."\n\nNão preciso de estátuas na praça principal,\nApenas de que se lembrem do sol como eu me lembrei dele.`,
    translationGenZ: `malta, se eu for de F cedo e não lançar nenhum álbum ou ebook, não venham com textos cringes a dizer que eu era "um génio à frente do meu tempo". digam só que eu soube aproveitar o sol e o vento e usei bem os meus olhos no mundo real. #Legacy #SimpleGuy #NoHype`,
    likes: 5800,
    commentsCount: 1,
    timestamp: '1 mês atrás',
    comments: [
      {
        id: 'c_pessoa_caeiro_7',
        authorId: 'pessoa',
        authorName: 'Fernando Pessoa',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'orthonym_himself',
        content: 'Mestre Caeiro, a sua passagem pelo mundo reconstruiu o nosso próprio olhar. Sem o senhor, continuaríamos todos cegos pela metafísica.',
        timestamp: '1 mês atrás',
        likes: 310
      }
    ]
  }
];
