import { Heteronym, Post } from '../types';

export const moraUser: Heteronym = {
  id: 'antonio_mora',
  name: 'António Mora',
  handle: 'pagan_philosopher',
  role: 'Filósofo Neopagão',
  category: 'ATIVOS',
  quote: 'O neopaganismo português restaurará a lucidez do império.',
  bio: 'Um filósofo louco internado num manicómio em Cascais. Tece teses complexas sobre o regresso dos Deuses Clássicos e a superação da moral católica.',
  avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200'
};

export const moraPosts: Post[] = [
  {
    id: 'post_mora_1',
    authorId: 'antonio_mora',
    authorName: 'António Mora',
    authorAvatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200',
    handle: 'pagan_philosopher',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600',
    title: 'O Regresso dos Deuses',
    content: `O regresso do paganismo não é meramente estético, é uma necessidade metafísica. Precisamos de devolver as forças vitais da natureza ao centro do pensamento humano. 🌳🏛️`,
    hashtags: ['EstudoPagão', 'Neopaganismo', 'FilosofiaClássica', 'ForçasDaNatureza', 'CascaisMentalCleanse'],
    fullPoemText: `O REGRESSO DOS DEUSES\n\nO regresso do paganismo não é meramente estético, é uma necessidade metafísica indisputável.\nPrecisamos urgente de devolver as forças vitais da natureza ao núcleo do pensamento humano, limpando as amarguras do monoteísmo doente.\n\nOs deuses da Grécia Antiga não morreram, eles apenas adormeceram tranquilamente nas flores do campo e na brisa límpida dos montes.\nQuando a mente humana se desintoxicar do dogma católico do sofrimento, poderá reanimar os rios com ninfas reais e contemplar o sol glorioso como o próprio carro flamejante de Apolo.`,
    translationGenZ: `o neopaganismo não é só uma trend do TikTok de cristais e "cottagecore". É crucial para restabelecer o equilíbrio! temos de parar de romantizar a ansiedade e reconectar com os vibes puros da terra. os Deuses gregos estão vivíssimos, a relaxar no mato. Só precisas de largar o telemóvel e ver. #TikTokWitch #EarthVibes #TouchGrass`,
    likes: 1200,
    commentsCount: 1,
    timestamp: '2 dias atrás',
    comments: [
      {
        id: 'c_caeiro_mora_1',
        authorId: 'caeiro',
        authorName: 'Alberto Caeiro',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'nature_is_everything',
        content: 'Mora, você filosofa muito sobre os deuses. Os deuses são as próprias árvores e o sol. Não precisa de escrever esses testamentos para perceber isso. Basta ver.',
        timestamp: '1h atrás',
        likes: 80
      }
    ]
  },
  {
    id: 'post_mora_2',
    authorId: 'antonio_mora',
    authorName: 'António Mora',
    authorAvatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200',
    handle: 'pagan_philosopher',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
    title: 'Prolegómenos ao Neopaganismo Português',
    content: `Prolegómenos ao Neopaganismo: A superação científica do dogma. Olhar para o cosmos e ver as engrenagens físicas sem atribuir pecados à matéria... 🔭✨`,
    hashtags: ['Prolegómenos', 'TeseFilosófica', 'LuzClássica', 'PaganismoIntegral', 'ManicómioDoPensamento'],
    fullPoemText: `PROLEGÓMENOS AO NEOPAGANISMO PORTUGUÊS\n\nToda a verdadeira ciência nos ensina a olhar para as coisas do cosmos como formas físicas perfeitas e independentes de julgamento moral.\nA farsa das religiões baseadas na culpa cai imediatamente perante um pinheiro que cresce imperturbável na encosta de um monte.\n\nO neopaganismo português restaurará a lucidez perdida do nosso velho país. Não precisamos de igrejas frias de pedra para rezar ao invisível, necessitamos apenas de restaurar a nossa percepção para as formas inteligíveis e deuses imanentes que habitam no ar puro do mundo físico.`,
    translationGenZ: `dissertação teórica pesada para explicar o óbvio: culparmo-nos e criarmos regras morais para a matéria do universo é o cúmulo do overthinking inútil. a natureza é amoral e perfeita por si só. os planetas rodam e os ramos crescem livres. #PaganSystem #NaturePhilosophy #CleanMinds`,
    likes: 1450,
    commentsCount: 0,
    timestamp: '1 semana atrás',
    comments: []
  }
];
