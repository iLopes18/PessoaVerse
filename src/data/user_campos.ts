import { Heteronym, Post } from '../types';
import { poemasCampos } from './poemas/poemas';

export const camposUser: Heteronym = {
  id: 'campos',
  name: 'Álvaro de Campos',
  handle: 'alvaro_campos',
  role: 'Modernista / Engenheiro Naval',
  category: 'VERIFICADOS',
  quote: 'Tenho em mim todos os sonhos do mundo.',
  bio: 'Engenheiro naval formado em Glasgow. É o heterónimo mais barulhento, rebelde e moderno. Sofre de uma bipolaridade artística imensa, oscilando entre o amor fervoroso pelas máquinas barulhentas da revolução industrial e um tédio melancólico existencial profundo.',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
};

// Álvaro de Campos has 16 posts in total (hits 15 - 25 range)
export const camposPosts: Post[] = [
  {
    id: 'post_campos_1',
    authorId: 'campos',
    handle: 'alvaro_campos',
    imageUrl: '../public/campos_ode_triunfal.jpg',
    title: 'Ode Triunfal',
    content: 'É antes do ópio que a minh’alma é doente. Sentir a vida convalesce e estiola E eu vou buscar ao ópio que consola Um Oriente ao oriente do Oriente.',
    fullPoemText: poemasCampos.opiario,
    translationGenZ: 'Basicamente, estou num barco a voltar do Oriente a fumar ópio forte porque a vida real é um autêntico tédio e eu não tenho capacidades para me adaptar a isto. Fingo que sou engenheiro, mas sou só um flop sem personalidade nenhuma, cheio de envie do pessoal que anda aí todo feliz e calmo enquanto eu tou na merda. Esta viagem foi um scam, não curti nada da Índia (o tédio é interior, sabes como é?) e agora só me apetece ou dar um tiro na cabeça ou ficar aqui a hibernar nesta cadeira até me irem meter no caixão. Enfim, tou só a queimar tempo e a fumar a vida enquanto espero pelo fim.',
    likes: 2167,
    commentsCount: 4,
    timestamp: '1 hora atrás',
    comments: [
      {
        handle: 'nature_is_everything',
        content: 'Estás doente porque pensas, Álvaro. Esse ópio entra-te pelos olhos e ficas a ver "transparências" em vez de veres apenas a noite. A Índia e a China são só terra com árvores e pessoas. Olha para o rio e cura-te disso. Sentir é o único remédio.',
        timestamp: '47m atrás',
        likes: 123
      },
      {
        handle: 'the_horatian',
        content: 'Cruel destino o de naufragar em vida no mar do próprio tédio. Choras a falta de crença, mas esqueces que os Deuses antigos nos deram a lucidez para aceitar o fado. Se a vida é curta e o navio corre, coroa-te de rosas (mesmo que com os nervos em franja) e aceita o teu exílio com dignidade clássica. Carpe diem, antes que o revólver de que falas chegue.',
        timestamp: '38m atrás',
        likes: 87
      },
      {
        handle: 'office_dreams',
        content: 'Identifico-me tanto com esse "rés-do-chão do pensamento"... Mas para quê ir à Índia para descobrir o tédio? Eu viajo da Rua dos Douradores até à Praça do Comércio e encontro essa mesma náusea existencial. A tua mala cheia de crimes é o meu livro de contas ao fim do dia. Somos os dois passageiros de um navio que nunca vai chegar a lado nenhum.',
        timestamp: '25m atrás',
        likes: 76
      }
    ]
  }
];
