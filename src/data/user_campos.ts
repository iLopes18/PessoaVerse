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

export const camposPosts: Post[] = [
  {
    id: 'post_campos_1',
    authorId: 'campos',
    handle: 'alvaro_campos',
    imageUrl: 'https://unsplash.com/photos/aerial-view-of-boat-on-sea-during-daytime-fXMPeqbTOvM',
    title: 'Opiário',
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
      },
      {
        handle: 'office_dreams',
        content: 'Identifico-me tanto com esse "rés-do-chão do pensamento"... Mas para quê ir à Índia para descobrir o tédio? Eu viajo da Rua dos Douradores até à Praça do Comércio e encontro essa mesma náusea existencial. A tua mala cheia de crimes é o meu livro de contas ao fim do dia. Somos os dois passageiros de um navio que nunca vai chegar a lado nenhum.',
        timestamp: '10m atrás',
        likes: 54
      },
      {
        handle: 'the_last_stoic',
        content: 'Não posso com a vida", dizes tu. Subscrevo inteiramente, Engenheiro. A diferença é que tu procuras o ópio e a escandaleira a bordo; eu prefiro a aristocracia do silêncio e a destruição meticulosa dos meus manuscritos. O suicídio é a única conclusão lógica para quem, como nós, percebeu que a vida é uma incompetência astral.',
        timestamp: '5m atrás',
        likes: 34
      },
      {
        handle: 'english_intellect',
        content: 'Such a waste of days, my friend. You complain about your lack of personality, but your soul is just too heavy for this world. Maybe you should write those poems for "Mercure" in English. It helps with the pain.',
        timestamp: '1m atrás',
        likes: 87
      },
      {
        handle: 'raphael_baldaya',
        content: 'Essa tua "incompetência astral" e o "mecanismo de desastres" têm uma explicação muito simples: Sol em Escorpião com Neptuno a fazer uma quadratura violenta no teu mapa natal. Esse vício do ópio e a obsessão com a morte estão escritos nos astros. Se quiseres, faço-te a revolução solar quando chegares a Lisboa. DM para preços.',
        timestamp: '30s atrás',
        likes: 45
      },
      {
        handle: 'logic_detective',
        content: 'Falas aí de um crime numa mala que o teu avô cometeu por requinte e de uma faca com que foi degolado o Precursor. Como homem da ciência e da lógica, isso parece-me um enigma policial fascinante. Há dados concretos ou é só mais uma das tuas alucinações de toxicodependente?',
        timestamp: '10s atrás',
        likes: 23
      },
      {
        handle: 'shrink_fictional',
        content: 'Olá, Álvaro. Como teu psiquiatra, fico extremamente preocupado com este post. Misturar morfina, ópio e "drogas americanas" enquanto geras ideação suicida ("sangue e um revólver lá pró fim") é um sinal claro de crise psicótica. Precisas de agendar uma consulta urgente assim que o navio atracar. E larga o conde francês, ele é claramente uma má influência.',
        timestamp: '5m atrás',
        likes: 34
      },
      {
        handle: 'professional_hater',
        content: 'Que vergonha de post! Um gajo que diz que "fingiu que estudou engenharia", que viveu à grande na Escócia com o dinheiro dos outros e que agora passa o dia no smoking-room a drogar-se e a roçar-se em suecas! O comissário de bordo tem toda a razão em desconfiar. Devias ter vergonha de te dizer português. Vai trabalhar!',
        timestamp: '5m atrás',
        likes: 34
      },
      {
        handle: 'grammar_nazi',
        content: 'Aviso de Erro: No teu texto escreveste "Tranquilidade" com trema ("Tranqüilidade"). Embora perceba o teu pendor modernista e rebelde, as regras ortográficas vigentes devem ser respeitadas, mesmo a bordo dum navio de ferro. Cumprimentos.',
        timestamp: '5m atrás',
        likes: 34
      },
      {
        handle: 'monarch_child',
        content: 'Na minha infância em Durban, os navios eram muito mais bonitos e não cheiravam a ópio. Fica bem, marinheiro triste!',
        timestamp: '5m atrás',
        likes: 34
      }
    ]
  }
];
