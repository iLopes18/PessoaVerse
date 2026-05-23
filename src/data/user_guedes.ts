import { Heteronym, Post } from '../types';

export const guedesUser: Heteronym = {
  id: 'vicente_guedes',
  name: 'Vicente Guedes',
  handle: 'the_pre_soares',
  role: 'Primeiro Escritor do Desassossego',
  category: 'ATIVOS',
  quote: 'O tédio não é a falta de nada para fazer, é a lucidez de que nada vale a pena.',
  bio: 'Antecessor direto de Bernardo Soares. Foi o responsável por organizar os primeiros rascunhos do baú até desaparecer misteriosamente de Lisboa em 1918.',
  avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200'
};

export const guedesPosts: Post[] = [
  {
    id: 'post_guedes_1',
    authorId: 'vicente_guedes',
    authorName: 'Vicente Guedes',
    authorAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200',
    handle: 'the_pre_soares',
    imageUrl: 'https://images.unsplash.com/photo-1548625361-155de0cbb568?auto=format&fit=crop&q=80&w=600',
    title: 'A Lucidez do Tédio',
    content: `O tédio não é a mera preguiça ou a ausência de tarefas cotidianas. É a lucidez intelectual profunda e implacável de que nenhuma ação tem qualquer significado real ou definitivo... 🌫️🏚️`,
    hashtags: ['EstudoDoTédio', 'DesassossegoOriginal', 'LisboaAntesDeSoares', 'LimboMundano', 'Sombrio'],
    fullPoemText: `A LUCIDEZ DO TÉDIO\n\nO tédio insuportável não é a mera preguiça física ou a fútil ausência de tarefas e obrigações cotidianas.\nÉ a lucidez intelectual profunda, fria e implacável de de que nenhuma ação humana - por mais messiânica que seja forjada pelas mentes febris - ostenta qualquer significado real ou definitivo no palco perene e silencioso do tempo.\n\nObservar os homens apressados pelas ruelas estreitas,\npagando impostos e comprando quinquilharias,\né apenas a constatação triste de como a humanidade prefere o ruído fictício à verdade augusta do vazio.`,
    translationGenZ: `o tédio real não é estares só sem nada para fazer no sofá. é aquela bad de domingo quando te apercebes que o grind inteiro do trabalho ou dos teus hobbies não significam nadinha no timeline cósmico do universo. Lucidez que cansa e desmotiva. #Existencialismo #SundayScaries #Overthinking`,
    likes: 1300,
    commentsCount: 1,
    timestamp: '4 dias atrás',
    comments: [
      {
        id: 'c_soares_guedes_1',
        authorId: 'soares',
        authorName: 'Bernardo Soares',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'office_dreams',
        content: 'Vicente, nós dividimos o mesmo desassossego sob a chuva de Lisboa. As suas palavras poderiam ter saído diretamente das minhas próprias gavetas de contabilidade.',
        timestamp: '1h atrás',
        likes: 60
      }
    ]
  },
  {
    id: 'post_guedes_2',
    authorId: 'vicente_guedes',
    authorName: 'Vicente Guedes',
    authorAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200',
    handle: 'the_pre_soares',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    title: 'As Sombras de Lisboa',
    content: `Antes mesmo de o outono chegar, já as minhas folhas caíram. Escrevo estes rascunhos sem pressa, num silêncio poeirento de Lisboa, sabendo que amanhã outro continuará... 🍂📄`,
    hashtags: ['SombrasDeLisboa', 'Amanuense', 'RascunhosCinzentos', 'Precursor', 'Insignificância'],
    fullPoemText: `AS SOMBRAS DE LISBOA\n\nAntes mesmo que o outono pouse na Baixa de Lisboa, já as minhas próprias folhas internas caíram e secaram.\nEscrevo estes rascunhos sem qualquer pressa literária ou esperança de glória, sentado neste silêncio poeirento do meu escritório, consciente de que amanhã outro amanuense continuará a registar esta inexorável dor cinzenta.\n\nO desassossego que sinto é de natureza puramente estética. É uma névoa fria que cobre silenciosamente a minha mesa de trabalho. Não somos donos legítimos das nossas próprias palavras; somos meros assistentes passivos das nossas sombras.`,
    translationGenZ: `o meu humor de hoje é outono prematuro. escrevo desabafos sem expetativas nehumas, sabendo que depois de mim virão outros relatar os mesmos sentimentos cringes e vácuos na internet de Lisboa. somos só secretários registando o próprio silêncio da noite. #ChuvaNoEscritorio #GhostWriter #VibeTriste`,
    likes: 1210,
    commentsCount: 0,
    timestamp: '6 dias atrás',
    comments: []
  }
];
