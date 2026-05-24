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
    imageUrl: 'https://images.unsplash.com/photo-1623084688615-bf99505f350b?auto=format&fit=crop&q=80&w=600',
    title: 'Opiário',
    content: `É antes do ópio que a minh’alma é doente. 
    Sentir a vida convalesce e estiola 
    E eu vou buscar ao ópio que consola 
    Um Oriente ao oriente do Oriente.`,
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
  },
  {
  id: 'post_campos_2',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600',
  title: 'Ode Triunfal',
  content: `À dolorosa luz das grandes lâmpadas eléctricas da fábrica
  Tenho febre e escrevo.
  Escrevo rangendo os dentes, fera para a beleza disto,
  Para a beleza disto totalmente desconhecida dos antigos.`,
  fullPoemText: poemasCampos.odeTriunfal,
  translationGenZ: 'Malta, estou em absoluto modo caps lock na fábrica com as luzes LED todas acesas e a tremer de ansiedade! Juro, o barulho das máquinas dá-me um tesão poético insano que os cotas do classicismo nunca iam gramar. Quero fundir-me com os motores, com o óleo, com o caos do capitalismo e com a poluição. É bué industrial, é bué metal, é bué barulhento. Basicamente, estou a dar simping estético por parafusos, engrenagens e pelo barulho do trânsito de Londres. Quem não curte disto é simplesmente cringe.',
  likes: 5892,
  commentsCount: 12,
  timestamp: '2 horas atrás',
  comments: [
    {
      handle: 'nature_is_everything',
      content: 'Lâmpadas eléctricas, engrenagens, ferro... Estás a olhar para as coisas e a meter-les nomes feios por cima, Álvaro. As fábricas não são flores, as máquinas não têm alma e esse ruído todo só serve para não ouvires o silêncio do vento nas ervas. Tens febre porque te fechaste num caixote de metal.',
      timestamp: '1h 45m atrás',
      likes: 312
    },
    {
      handle: 'the_horatian',
      content: 'Que fúria bárbara e dionisíaca é esta que te consome, Campos? Trocar as ninfas e a harmonia de Apolo pelo ranger de dentes duma fábrica moderna? A verdadeira beleza reside na simetria, na calma e na aceitação do tempo que passa, e não nesse histerismo mecânico que celebra a pressa e o caos.',
      timestamp: '1h 30m atrás',
      likes: 245
    },
    {
      handle: 'pagan_philosopher',
      content: 'Interessante... Esta tua ode é, no fundo, a manifestação máxima do Neo-Paganismo na era industrial. Não adoras os Deuses nos templos, mas adoras a força bruta e a energia cósmica manifestada na eletricidade e no aço. É o triunfo da matéria sem as amarras da moral cristã. Subscrevo a teoria, condeno o barulho.',
      timestamp: '1h 10m atrás',
      likes: 156
    },
    {
      handle: 'french_critic',
      content: 'C\'est du délire! Mas há aqui uma força brutal que faz lembrar Marinetti e o Manifesto Futurista. É violento, é cru, mas destrói completamente o lirismo piegas do século passado. A poesia francesa precisa deste choque elétrico.',
      timestamp: '55m atrás',
      likes: 112
    },
    {
      handle: 'political_satirist',
      content: 'Muito bonito esse entusiasmo com o progresso industrial, Sr. Engenheiro! Gostava era de o ver cantar as "maravilhas do capitalismo" se estivesse doze horas seguidas a carregar carvão para as caldeiras a ganhar uma miséria, em vez de andar a passear de monóculo pelo smoking-room. Viva a tecnologia dos ricos!',
      timestamp: '45m atrás',
      likes: 98
    },
    {
      handle: 'cosmic_astrologer',
      content: 'Esta tua "febre" e a necessidade violenta de berrar ao mundo o poder mecânico mostram claramente Marte a entrar em conjunção direta com Urano na tua Casa I. Estás a canalizar pura energia de rutura e eletricidade astral. Cuidado para não queimares os teus próprios fusíveis biológicos.',
      timestamp: '38m atrás',
      likes: 74
    },
    {
      handle: 'window_loneliness',
      content: 'Ah, Álvaro... Tu gritas tanto no meio dessas fábricas imensas e barulhentas de Inglaterra, rodeado de gente e de luzes... e eu aqui, fechada neste quarto escuro, a ver a vida passar pela janela, sem forças sequer para ranger os dentes. Quem me dera ter essa tua energia para sentir, mesmo que doa.',
      timestamp: '29m atrás',
      likes: 143
    },
    {
      handle: 'anti_modernist_satire',
      content: 'Isto agora chama-se poesia? Rangidos, fábricas, parafusos e histeria urbana? No meu tempo, a literatura exigia bom gosto, métrica e elevação espiritual. Este "Engenheiro" veio de Inglaterra com a cabeça afetada pelo fumo do carvão. Um autêntico atentado à cultura portuguesa!',
      timestamp: '20m atrás',
      likes: 85
    },
    {
      handle: 'cynical_devil',
      content: 'Dazes que queres exprimir tudo da mesma maneira que as máquinas exprimem a força? Cuidado com o que desejas, mortal. O progresso de que tanto te orgulhas é apenas uma engrenagem mais rápida para vos levar ao meu reino. Continua a cantar o aço, o fogo aguarda-te.',
      timestamp: '15m atrás',
      likes: 167
    },
    {
      handle: 'masonic_brother',
      content: 'O Grande Arquiteto do Universo constrói o mundo através da geometria e da força. Tu vês o caos nas fábricas, mas eu vejo a evolução da Matéria a tentar alcançar o Espírito através da Grande Obra do Homem. A luz dessas lâmpadas é apenas um reflexo da Verdadeira Luz oculta.',
      timestamp: '10m atrás',
      likes: 52
    },
    {
      handle: 'grammar_nazi',
      content: 'Aviso de Erro: A tua pontuação está completamente descontrolada e há exclamações excessivas que quebram qualquer norma estilística aceitável. Além disso, o uso de "eléctricas" com essa acentuação gráfica desleixada choca os olhos de quem preza a língua. Menos histeria e mais dicionário, por favor.',
      timestamp: '5m atrás',
      likes: 38
    },
    {
      handle: 'commercial_translator',
      content: 'Caso o Sr. Engenheiro necessite de traduzir os manuais técnicos dessas "maravilhosas máquinas inglesas" ou catálogos de lâmpadas elétricas para o mercado ibérico, a nossa firma na Baixa faz traduções comerciais com a máxima rapidez e precisão. Contacte via DM.',
      timestamp: '1m atrás',
      likes: 14
    }
  ]
},
{
  id: 'post_campos_3',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600', // Imagem de uma estrada aberta / horizonte vasto e selvagem
  title: 'Saudação a Walt Whitman',
  content: `Portugal-Olímpico, aclamador do universo,
  Cantei já a mecânica, cantei o ferro e a eletricidade.
  Agora canto-te a ti, meu irmão em cosmopolitismo e em excesso,
  Walt, meu irmão em libertação e em fúria!`,
  fullPoemText: poemasCampos.saudacaoAWaltWhitman,
  translationGenZ: 'Malta, cansei do vibe industrial e agora estou em modo full pansexual e caótico, a mandar um shoutout gigante para o meu mano Walt Whitman! Tu és o gajo mais king de sempre, o influencer do universo que dava abraços a toda a gente, andava nos elétricos a berrar e curtia de marinheiros, trolhas e vagabundos. Sinto-me o irmão mais novo dele: quero engolir o mundo inteiro, dar match com a humanidade toda ao mesmo tempo, ser pisado pelos táxis de Nova Iorque e beijar todos os gajos na rua. É um vibe bué bizarro, bué livre e sem filtros. Se achas isto gay ou esquisito, nem imaginas o quão gigante é a minha alma, bro.',
  likes: 7421, // Bateu recorde de engagement por causa do choque e da polémica
  commentsCount: 12,
  timestamp: '3 horas atrás',
  comments: [
    {
      handle: 'nature_is_everything',
      content: 'Esse teu Walt Whitman de quem falas parece-me alguém que andava no campo e nas cidades a ver as coisas bem, Álvaro. Mas tu pegas nas palavras dele e começas logo a dar gritos e a querer abraçar o universo inteiro de uma vez só. Para quê esse espalhafato todo? O universo não precisa que tu o aclames para continuar a ser verde.',
      timestamp: '2h 45m atrás',
      likes: 420
    },
    {
      handle: 'the_horatian',
      content: 'Chamas "irmão" a um bárbaro que escreveu sem métrica, sem lei e sem o menor respeito pelo decoro e pela contenção grega? Essa tua ânsia de quereres ser tudo, de te entregares a todas as paixões das ruas e a todos os homens, é a ruína da alma. Quem quer ser tudo, Campos, acaba por não ser ninguém. Moderação.',
      timestamp: '2h 30m atrás',
      likes: 310
    },
    {
      handle: 'english_satirist',
      content: 'Fascinating. An executioner of Portuguese syntax praising an American democrat who mistook shouting for poetry. If this is the new "Olympic Portugal", I believe I will stick to the British libraries. It is far less dangerous for one\'s sanity and clothes.',
      timestamp: '2h 12m atrás',
      likes: 185
    },
    {
      handle: 'traditional_ink',
      content: 'Isto ultrapassa todos os limites do bom tom e da decência! Que despudor é este de vir para a praça pública falar em "beijos", "marinheiros" e misturar a nossa pátria, Portugal, com estas alucinações democráticas vindas da América? A poesia nacional está entregue à devassidão.',
      timestamp: '1h 55m atrás',
      likes: 290
    },
    {
      handle: 'deep_philosophy',
      content: 'O teu Whitman percebeu que o "Eu" é uma ilusão e que todos somos um. Ao quereres funder-te com os maquinistas, os criminosos e a lama das ruas, estás apenas a tentar destruir o teu ego mesquinho para te tornares o Absoluto. É uma filosofia brutal, destrutiva, quase dionisíaca. Tu és o super-homem do cansaço.',
      timestamp: '1h 30m atrás',
      likes: 167
    },
    {
      handle: 'logic_detective',
      content: 'Dizes a certa altura que gostarias de ser "vítima de todos os crimes" e "cúmplice de todos os assassínios". Do ponto de vista criminalístico, isto é uma confissão de uma mente perfeitamente desequilibrada ou um manifesto masoquista incompreensível. Aconselho-te vivamente a não pores os pés numa esquadra de polícia.',
      timestamp: '1h 10m atrás',
      likes: 142
    },
    {
      handle: 'cafe_debater',
      content: 'Isto no Chiado vai dar que falar amanhã! Quero ver o que é que a malta da velha guarda vai dizer quando ler este teu "cosmopolitismo de bordel". Estás a esticar a corda, Engenheiro. Se precisares de quem te defenda no jornal contra os ataques dos cotas conservadores, paga-me um café e tratamos disso.',
      timestamp: '50m atrás',
      likes: 95
    },
    {
      handle: 'ultra_romantic',
      content: 'Oh, the absolute passion of this text! This is true romanticism brought to the edge of madness! To love everything, to suffer with everything, to offer one\'s body and soul to the vastness of the world! I am completely mesmerized by your American brother, Álvaro. Write more!',
      timestamp: '42m atrás',
      likes: 118
    },
    {
      handle: 'static_theater_1',
      content: 'Tanto movimento... Tanta pressa em correr as estradas, em abraçar os marinheiros, em berrar para a América... Para quê? No fim de todas as viagens e de todos os abraços, a noite continua igual, escura e parada, à espera que todos estes ruídos inúteis se calem para sempre.',
      timestamp: '30m atrás',
      likes: 204
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, o meu pai leu o seu poema e ficou com as orelhas bué vermelhas e disse que eu não podia ler isto porque é "pouco próprio". O senhor está bem? Porque é que quer que os táxis passem por cima do seu corpo? Isso dói muito!',
      timestamp: '18m atrás',
      likes: 87
    },
    {
      handle: 'grammar_nazi',
      content: 'Aviso de Erro: O termo "pan-substancialismo" e essa avalanche de neologismos misturados com calão estrangeiro desonram a tradição camoniana. Uma coisa é saudar um autor estrangeiro, outra é demolir a gramática e a sintaxe com versos livres que parecem prosa de cocheiro em fúria.',
      timestamp: '10m atrás',
      likes: 55
    },
    {
      handle: 'baixa_accountant',
      content: 'Enquanto o Sr. Engenheiro anda aí a delirar com Nova Iorque e a abraçar o universo na sua imaginação, as contas do escritório continuam por fechar e o patrão Vasques já perguntou duas vezes pelo relatório técnico da semana passada. Menos Whitman e mais trabalho prático, se faz favor.',
      timestamp: '2m atrás',
      likes: 134
    }
  ]
},
{
  id: 'post_campos_4',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600', // Imagem de engrenagens de relógio desfocadas em movimento caótico
  title: 'A Passagem das Horas',
  content: `Para lá de Deus a minha ânsia roda e passa...
  Sinto-me múltiplo, sinto-me tudo, sinto o universo em mim!
  Quero ser todas as pessoas em todos os lugares,
  Viver todas as vidas, sofrer todas as dores, morrer todas as mortes!`,
  fullPoemText: poemasCampos.aPassagemDasHoras,
  translationGenZ: 'Malta, estou a ter um breakdown mental gigante e o meu cérebro está prestes a derreter. Imaginem o overthinking, mas multiplicado pelo infinito. Não consigo ser só uma pessoa, é bué limitador. Quero dar spawn em todos os pontos do mapa ao mesmo tempo, ser o gajo que conduz o comboio, a gaja que chora no café, o criminoso, o polícia, o gajo que nasce e o gajo que morre. A minha cabeça virou um servidor público onde toda a gente entrou ao mesmo tempo e está a dar lag existencial. Estou a sentir a dor e o hype da humanidade toda e isto está a queimar-me os neurónios todos, bro. Que overdose de existir.',
  likes: 8124, // Engagement altíssimo pelo tom de colapso psicológico público
  commentsCount: 12,
  timestamp: '4 horas atrás',
  comments: [
    {
      handle: 'nature_is_everything',
      content: 'Ficas aí a rodar e a querer passar para lá de Deus, Álvaro... Coitado de ti, que andas com o cérebro cheio de engrenagens e de febre. Se te desses ao trabalho de te deitares na relva e de não pensares em nada, verias que não precisas de ser todas as pessoas. Basta seres tu, e isso já é o mundo inteiro.',
      timestamp: '3h 50m atrás',
      likes: 512
    },
    {
      handle: 'the_horatian',
      content: 'Uma mente dividida por todas as vidas e por todos os lugares é uma mente que se desintegrou. Querer sofrer todas as dores é masoquismo, não é arte. O sábio constrói uma parede de pedra à volta do seu palácio mental e governa-se a si próprio. Estás a sangrar em público, Campos. Que espetáculo tão pouco nobre.',
      timestamp: '3h 35m atrás',
      likes: 423
    },
    {
      handle: 'pagan_philosopher',
      content: 'O que chamas de "sentir o universo" é a prova biológica de que o Sensacionismo levado ao extremo destrói o indivíduo. Caeiro sente com ordem porque apenas vê. Tu, Álvaro, queres intelectualizar o que vês e o resultado é essa histeria atómica. O teu cérebro precisa de uma dieta de lógica grega urgently.',
      timestamp: '3h 15m atrás',
      likes: 298
    },
    {
      handle: 'office_dreams',
      content: 'Compreendo perfeitamente essa tua náusea de seres apenas um, Álvaro. Olho para o livro de contas na Rua dos Douradores e sinto que a minha cadeira é um caixão. A diferença é que tu gritas isso na cara de toda a gente na rua, e eu limito-me a fechar a gaveta da secretária e a sofrer em silêncio enquanto a chuva cai.',
      timestamp: '2h 55m atrás',
      likes: 642
    },
    {
      handle: 'logic_detective',
      content: 'Dizer "quero ser o criminoso e a vítima" é uma contradição formal absoluta que anula qualquer princípio de identidade jurídica. Se fores ambos ao mesmo tempo, quem é que eu prendo e quem é que eu autopsio? Esse teu colapso textual é um pesadelo estatístico. Toma um calmante.',
      timestamp: '2h 40m atrás',
      likes: 190
    },
    {
      handle: 'french_critic',
      content: 'Mon dieu... Que falta de pudor tão tipicamente moderna. Esse teu texto não é poesia, é uma crise de nervos exposta num boulevard. Onde está o estilo? Onde está o verniz decadente? Gritar que se quer ser "tudo" é o cúmulo da vulgaridade ruidosa. Um dandy sofre com classe, não aos berros.',
      timestamp: '2h 20m atrás',
      likes: 156
    },
    {
      handle: 'political_satirist',
      content: 'O Engenheiro Campos quer ser todas as pessoas ao mesmo tempo? Excelente! Sugiro que comece por ser o Ministro das Finanças amanhã de manhã para ver se resolve o défice do Reino. Pelo menos a sua histeria seria útil para assustar os credores estrangeiros.',
      timestamp: '1h 50m atrás',
      likes: 310
    },
    {
      handle: 'english_intellect',
      content: 'This is the exact point where the mind breaks under its own weight. I wrote about the "Many in Me" years ago, Álvaro, but you have turned that philosophical truth into an industrial engine out of control. Be careful, the maze of the mind has no exit once you cross certain borders.',
      timestamp: '1h 35m atrás',
      likes: 220
    },
    {
      handle: 'the_last_stoic',
      content: 'Que exibicionismo deplorável. Se a tua mente atingiu esse estado de fragmentação e de sofrimento intolerável, a única atitude digna de um homem superior é a retirada voluntária do palco do mundo. Apaga o post, arruma as malas e retira-te. Fazer literatura com o próprio delírio é de um mau gosto atroz.',
      timestamp: '1h 12m atrás',
      likes: 405
    },
    {
      handle: 'cafe_debater',
      content: 'Malta, afastem-se da mesa do Engenheiro na Brasileira hoje! Ele está com os olhos completamente vermelhos, a escrever à pressa no papel dos maços de tabaco e a deitar fumo pelas orelhas. Isto vai dar uma polémica gigante no próximo número da Orpheu, marquem as minhas palavras.',
      timestamp: '45m atrás',
      likes: 134
    },
    {
      handle: 'hellenic_critic',
      content: 'Uma autêntica monstruosidade sintáctica. O ritmo foi completamente sacrificado em nome de uma diarreia mental que mistura Deus, engenharia e dores de parto. O meu irmão Ricardo ainda te tenta responder com filosofia, mas para mim isto é apenas um caso clínico que deveria ser tratado com camisola de forças.',
      timestamp: '25m atrás',
      likes: 188
    },
    {
      handle: 'early_desassossego',
      content: 'Escrever assim é como tentar beber o oceano inteiro com uma colher de chá. Vais acabar por te afogar no teu próprio barulho, Álvaro. O verdadeiro desassossego não precisa de tantas exclamações; ele vive na poeira dos livros que ninguém lê ao fim da tarde.',
      timestamp: '8m atrás',
      likes: 275
    }
  ]
},
{
  id: 'post_campos_5',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600', // Imagem de um papel em branco e uma caneta de aparo caída de lado
  title: 'Ah, um Soneto...',
  content: `Ah, um soneto... Como ele cabe na minha algibeira,
  E como me aperta o coração com as suas paredes de cimento!
  Quero meter a minha fúria numa gaiola de catorze versos,
  Rimar a minha dor com a regularidade de uma fábrica!`,
  fullPoemText: poemasCampos.ahUmSoneto,
  translationGenZ: 'Malta, cansei de escrever textões em caps lock livres e caóticos. Decidi tentar a trend clássica dos cotas: o soneto. Quero ver se consigo enfiar a minha ansiedade e a minha fúria numa caixinha de 14 versos com regras rígidas, tipo meter um motor de um Ferrari dentro de um teto clássico. Quero rimar a minha depressão com a precisão de um bot de inteligência artificial ou de uma linha de montagem industrial. Vamos ver se as regras do jogo me acalmam os neurónios ou se eu parto a gaiola toda antes do fim do segundo quarteto. Spoiler: já me está a dar cringe.',
  likes: 4521,
  commentsCount: 12,
  timestamp: '5 horas atrás',
  comments: [
    {
      handle: 'the_horatian',
      content: 'Finalmente pareces demonstrar algum vislumbre de bom senso, Campos. O soneto é a forma dos reis, a geometria da alma. Mas usar essa estrutura sagrada para rimar "fábricas" e "ansiedades" é meter lama num vaso de cristal. Se queres usar a nossa métrica, limpa primeiro as botas do lixo das tuas ruas.',
      timestamp: '4h 42m atrás',
      likes: 380
    },
    {
      handle: 'hellenic_critic',
      content: 'Chamar ao soneto uma "gaiola de cimento" já mostra que o teu cérebro está corrompido pela arquitetura moderna. O soneto é arquitetura de mármore, Engenheiro. De qualquer forma, duvido que tenhas o autocontrolo necessário para fechar a chave de ouro sem inventares um palavrão a meio.',
      timestamp: '4h 20m atrás',
      likes: 295
    },
    {
      handle: 'english_satirist',
      content: 'A futurist attempting a sonnet is like a blacksmith trying to perform lace-work with his anvil. It is a noble effort, Álvaro, but one can still hear the terrible clanging of your machines behind the rhymes. Classicism requires a certain quietness of mind that you lacks entirely.',
      timestamp: '3h 55m atrás',
      likes: 198
    },
    {
      handle: 'nature_is_everything',
      content: 'Para quê prender as palavras em catorze linhas ordenadas, Álvaro? As árvores não crescem com rimas ricas e os rios não correm em quartetos. Tu passas da histeria dos gritos para a prisão das regras. Se olhasses para as coisas como elas são, verias que a poesia não precisa de paredes.',
      timestamp: '3h 30m atrás',
      likes: 410
    },
    {
      handle: 'french_critic',
      content: 'Baudelaire escreveu sonetos divinos sobre o tédio, mas tinham o perfume do ópio e do veludo. O teu soneto cheira a óleo de motor e a carvão de caminhos de ferro. É uma experiência interessante de deboche formal, admito, mas falta-lhe a delicadeza aristocrática de Paris.',
      timestamp: '3h 12m atrás',
      likes: 112
    },
    {
      handle: 'office_dreams',
      content: 'As catorze linhas lembram-me as linhas diárias do meu livro de balanços. Entendo o desejo de meter a vida num espaço pequeno para ver se ela faz algum sentido matemático. Mas as contas nunca batem certo no fim do dia, Álvaro, nem na contabilidade nem na poesia.',
      timestamp: '2h 50m atrás',
      likes: 520
    },
    {
      handle: 'logic_detective',
      content: 'A estrutura do soneto obedece a uma lógica formal dedutiva clássica: premissas nos quartetos, desenvolvimento e conclusão no terceto final. Se seguires o método científico, verás que a tua dor pode ser isolada e analisada como um erro de cálculo. Força nisso.',
      timestamp: '2h 15m atrás',
      likes: 130
    },
    {
      handle: 'political_satirist',
      content: 'Se o Engenheiro Campos conseguir meter a sua fúria legislada em 14 versos, devíamos contratá-lo para resumir as atas do Parlamento. Atualmente os deputados precisam de 400 páginas de prosa vaga para dizer absolutamente nada. Seria um ganho de eficácia para o Estado.',
      timestamp: '1h 45m atrás',
      likes: 245
    },
    {
      handle: 'cafe_debater',
      content: 'Isto na Brasileira vai ser o meme da semana! O campeão do verso livre a tentar fazer rimas combinadas para não parecer um bárbaro aos olhos do Reis. Pago-te um café se conseguires acabar o poema sem meter uma interjeição histérica a meio.',
      timestamp: '1h 20m atrás',
      likes: 98
    },
    {
      handle: 'early_desassossego',
      content: 'A gaiola só aperta a quem quer voar para longe, Álvaro. Para quem prefere ficar sentado na penumbra a ver as sombras passarem, o soneto é um quarto confortável. O teu problema é que o teu pensamento tem demasiadas asas para o tamanho do teu peito.',
      timestamp: '55m atrás',
      likes: 180
    },
    {
      handle: 'grammar_nazi',
      content: 'Verificação técnica: Gostaria de lembrar ao autor que a rima entre "cimento" e "sentimento" é considerada uma rima pobre e de fácil recurso. Se vai adotar a disciplina clássica, faça-o com o vocabulário elevado e a dignidade que a tradição exige.',
      timestamp: '30m atrás',
      likes: 84
    },
    {
      handle: 'baixa_accountant',
      content: 'Treze linhas, catorze linhas... Pouco me importa a métrica desde que o relatório do projeto da linha férrea seja revisto antes do fim do mês. O patrão Vasques não quer saber de sonetos, quer saber de prazos e de faturação líquida.',
      timestamp: '10m atrás',
      likes: 115
    }
  ]
},
{
  id: 'post_campos_6',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600', // Imagem de uma praia deserta com ondas calmas ao entardecer
  title: 'A melhor maneira de viajar é sentir.',
  content: `Afinal, a melhor maneira de viajar é sentir.
  Sentir tudo de todas as maneiras,
  Sentir tudo excessivamente,
  Porque tudo é nada, e o resto é só a paisagem...`,
  fullPoemText: poemasCampos.aMelhorManeiraDeViajar,
  translationGenZ: 'Malta, mandei o maior plot twist do ano. Depois de gastar rios de dinheiro em viagens de navio, comboios rápidos e bilhetes de avião, cheguei à conclusão de que o turismo físico é um scam. A melhor maneira de viajar é puramente mental: é sentir tudo de todas as formas possíveis, ao extremo, sem sair do sítio. Estares parado na tua cama e viajares no hype das sensações. Mudar de país é só mudar de cenário de fundo (a paisagem), o teu vazio existencial vai contigo na mala de qualquer forma. O verdadeiro grind é expandir os teus sentidos até o universo inteiro caber dentro do teu ecrã mental. O resto é paisagem estática.',
  likes: 6890,
  commentsCount: 12,
  timestamp: '6 horas atrás',
  comments: [
    {
      handle: 'nature_is_everything',
      content: 'Vês como finalmente estás a perceber o caminho certo, Álvaro? Viajar para longe é um erro de quem não sabe olhar para o que tem à frente. O rio da minha aldeia viaja mais do que todos os teus navios transatlânticos porque ele apenas corre e cumpre o seu fado verde. Fica quieto e olha.',
      timestamp: '5h 40m atrás',
      likes: 820
    },
    {
      handle: 'office_dreams',
      content: 'Este teu post bateu mesmo no fundo, Álvaro. Eu passo os dias na cadeira do escritório e viajei mais pelo universo do que qualquer explorador. Não preciso de malas ou passaportes, basta-me o tédio da Rua dos Douradores para sentir a imensidão do mundo e a náusea de não ser ninguém.',
      timestamp: '5h 22m atrás',
      likes: 715
    },
    {
      handle: 'the_horatian',
      content: '"Sentir tudo excessivamente" continua a ser o teu erro trágico, Campos. Viajar na imaginação é digno de um sábio, mas deve ser feito com a calma de quem assiste a um teatro antigo, não com a fúria de um louco que se queima nas suas próprias brasas. Modera o volume desse sentir.',
      timestamp: '5h 05m atrás',
      likes: 340
    },
    {
      handle: 'pagan_philosopher',
      content: 'A tese está correta: a realidade constrói-se na sensação. O erro está no advérbio "excessivamente". O excesso cansa os órgãos dos sentidos e deforma a clareza do objeto percebido. Caeiro sente o suficiente; tu queres sentir até à rutura. Isso já não é viagem, é patologia nervosa.',
      timestamp: '4h 45m atrás',
      likes: 290
    },
    {
      handle: 'english_intellect',
      content: 'A profound truth, indeed. I have been saying for years through my poems that the geographic movement is a superficial illusion. The true exploration is psychological, into the deep abysses of our own thoughts. Glad to see you are leaving the noisy machines for a moment.',
      timestamp: '4h 20m atrás',
      likes: 210
    },
    {
      handle: 'the_last_stoic',
      content: 'Se "tudo é nada", como dizes muito bem na última linha, para quê continuar a dar-se ao trabalho de sentir de tantas maneiras? A conclusão lógica da tua premissa deveria ser a apatia absoluta, a imperturbabilidade estóica e, finalmente, o silêncio definitivo. Estás a meio do caminho.',
      timestamp: '3h 55m atrás',
      likes: 450
    },
    {
      handle: 'logic_detective',
      content: 'A tua afirmação de que "tudo é nada" é um paradoxo de negação existencial. Se tudo fosse de facto nada, a própria sensação seria impossível por falta de matéria percetiva. Do ponto de vista criminal, isto parece a desculpa de um réu que tenta provar que o crime não existiu porque a vítima é uma ilusão.',
      timestamp: '3h 30m atrás',
      likes: 165
    },
    {
      handle: 'french_critic',
      content: 'C\'est vrai. Viajar fisicamente é tão vulgar, tão... classe média. O verdadeiro dandy prefere o "Spleen" de ficar deitado no seu divã, sentindo a passagem do tempo através do fumo de um cigarro egípcio. Fico feliz por ver que abandonaste os teus mecânicos ruidosos, mon cher.',
      timestamp: '2h 55m atrás',
      likes: 142
    },
    {
      handle: 'early_desassossego',
      content: 'Mudar de país é apenas mudar de tédio. A melhor viagem é aquela que fazemos quando fechamos os olhos após um dia inteiro a preencher faturas e deixamos que a mente crie impérios de névoa sobre rios imaginários. O resto, como dizes, é apenas o ruído lá fora na calçada.',
      timestamp: '2h 20m atrás',
      likes: 310
    },
    {
      handle: 'cafe_debater',
      content: 'BUM! Mandaste a malta das agências de viagens direta para o desemprego, Engenheiro! Amanhã na mesa do Chiado vou usar essa tua frase para explicar porque é que não tenho dinheiro para ir passar as férias a Paris. "Estou a viajar mentalmente, malta!". Genius.',
      timestamp: '1h 40m atrás',
      likes: 125
    },
    {
      handle: 'traditional_ink',
      content: 'Uma filosofia perigosa e derrotista para a juventude! Dizer que "tudo é nada" destrói a vontade de trabalhar, de construir e de servir a pátria. Portugal precisa de homens de ação que viajem para as colónias para erguer o império, não de poetas que ficam na cama a sentir o universo.',
      timestamp: '1h 05m atrás',
      likes: 195
    },
    {
      handle: 'baixa_accountant',
      content: 'Se o sentimento resolvesse a contabilidade, o escritório seria o sítio mais feliz do mundo. Infelizmente, o balanço de fecho do mês exige números exatos na folha e não sensações excessivas na cabeça. Volte à terra, por favor.',
      timestamp: '15m atrás',
      likes: 92
    }
  ]
},
{
  id: 'post_campos_7',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=600', // Imagem de uma lâmpada acesa num quarto escuro de madrugada
  title: 'Estou cansado, é claro,',
  content: `Estou cansado, é claro,
  Porque, a certa altura, a gente tem que estar cansado.
  De que estou cansado, não sei:
  De nada, de tudo, do mundo, de mim...`,
  fullPoemText: poemasCampos.estouCansadoEClaro,
  translationGenZ: 'Malta, entrei oficialmente no modo burnout total. O meu nível de bateria social e existencial está em -100%. Se me perguntarem de que é que estou cansado, a resposta sincera é: sim. Cansado de tudo, do mundo, de acordar, das pessoas, e principalmente de mim próprio e do meu próprio cérebro que não para de fazer overthinking. Não aconteceu nada de especial, é só aquele cansaço crónico que te dá quando percebes que existir dá bué trabalho e que todas as ambições do mundo são uma seca. Só queria dar um shutdown completo no sistema e fazer um reset à minha vida, sem ter de dar justificações a ninguém.',
  likes: 7120,
  commentsCount: 12,
  timestamp: '7 horas atrás',
  comments: [
    {
      handle: 'nature_is_everything',
      content: 'Estás cansado porque passas a vida a pensar no cansaço e a tentar sentir o que não deve ser pensado, Álvaro. O sol acorda todos os dias e nunca diz que está cansado de brilhar; as flores abrem e não têm burnout. Deita-te no chão, esquece que tens um cérebro e esse peso desaparece.',
      timestamp: '6h 45m atrás',
      likes: 640
    },
    {
      handle: 'office_dreams',
      content: 'Esse teu cansaço de "nada e de tudo" é o meu pão quotidiano, meu caro amigo. É o cansaço de quem percebe que amanhã vai ter de acordar, vestir o fato, ir para o escritório e fingir que tem uma utilidade qualquer no mundo. A única diferença é que eu já nasci cansado disso tudo.',
      timestamp: '6h 30m atrás',
      likes: 810
    },
    {
      handle: 'the_horatian',
      content: 'O cansaço é o resultado inevitável dos teus excessos sentimentais. Passaste as últimas semanas a berrar por máquinas, a saudar americanos e a querer ser o universo inteiro. Gastaste a tua energia vital em pirotecnia literária. Agora sofres a ressaca natural. Moderação teria evitado isto.',
      timestamp: '6h 10m atrás',
      likes: 295
    },
    {
      handle: 'pagan_philosopher',
      content: 'Esse cansaço é sintoma da fragmentação da tua atenção. A mente humana não foi desenhada pela natureza para processar o universo em modo caótico. Quando tentas abraçar tudo, o sistema nervoso entra em colapso por sobrecarga de estímulos. O teu cansaço é apenas lógica biológica.',
      timestamp: '5h 45m atrás',
      likes: 210
    },
    {
      handle: 'the_last_stoic',
      content: 'Estou perfeitamente de acordo com o teu diagnóstico. Estar cansado de si próprio é o sinal mais claro de uma inteligência superior que já esgotou as ilusões da existência. A tua alma pede o fim do espetáculo, Campos. Falta-te apenas a coragem aristocrática de puxar a cortina.',
      timestamp: '5h 20m atrás',
      likes: 385
    },
    {
      handle: 'logic_detective',
      content: 'Um cansaço cujo motivo é "não sei" indica um erro na colheita de dados psicológicos. Se não consegues identificar a causa da fadiga, o teu raciocínio fica bloqueado na premissa inicial. Recomendo-te que ponhas o sono em dia e dês uma caminhada a pé para arejar os conceitos.',
      timestamp: '4h 55m atrás',
      likes: 118
    },
    {
      handle: 'french_critic',
      content: 'Le Spleen absoluto... Esse cansaço sem nome é a única atitude verdadeiramente chique que demonstraste até hoje, Álvaro. Estar cansado da humanidade é o selo de qualidade dos estetas. Só espero que o teu cansaço seja silencioso e não voltes aos teus gritos operários.',
      timestamp: '4h 30m atrás',
      likes: 104
    },
    {
      handle: 'cosmic_astrologer',
      content: 'Esse teu colapso de energia coincide exatamente com a entrada de Saturno na tua décima casa astral, em quadratura direta com o teu sol natal. O peso cósmico da matéria está a esmagar-te a vontade. Não lutes contra isso; aceita o recolhimento até que os astros mudem de quadrante.',
      timestamp: '3h 55m atrás',
      likes: 167
    },
    {
      handle: 'cafe_debater',
      content: 'Força aí, Engenheiro! O pessoal do Chiado hoje já notou que não apareceste para o debate da tarde. O empregado já tinha a tua bica e o teu maço de cigarros na mesa do costume. Tira o dia para descansar o esqueleto, amanhã pagamos-te um copo para animar a timeline.',
      timestamp: '3h 15m atrás',
      likes: 94
    },
    {
      handle: 'early_desassossego',
      content: 'O cansaço de existir... Conheço-o bem. É quando os olhos pesam não por falta de sono, mas pelo peso das coisas que olhamos todos os dias e que continuam exatamente no mesmo sítio, sem mistério e sem saída. Dorme, Álvaro, que o sonho é o único refúgio contra o dia.',
      timestamp: '2h 40m atrás',
      likes: 240
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, quando eu fico muito cansada de brincar a minha mãe dá-me leite quentinho com mel e mete-me a ver os desenhos. O senhor quer que eu lhe empreste os meus brinquedos para o deixar mais contente? Não fique triste!',
      timestamp: '1h 10m atrás',
      likes: 155
    },
    {
      handle: 'baixa_accountant',
      content: 'O cansaço não justifica a falta de comparência. Se todos os trabalhadores da Baixa decidissem ficar em casa porque estão "cansados de si próprios", o comércio de Lisboa colapsava em vinte e quatro horas. Menos drama existencial e mais brio profissional, por favor.',
      timestamp: '5m atrás',
      likes: 122
    }
  ]
},
{
  id: 'post_campos_8',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600', // Imagem de um copo de água com uma pastilha efervescente a borbulhar
  title: 'Bicarbonato de Soda',
  content: `Dois copos de bicarbonato de soda,
  E a sensação de que o universo inteiro é uma digestão difícil...
  Cansa-me a alma, cansa-me o estômago, cansa-me tudo.
  No fim de contas, a metafísica é só uma falta de digestão.`,
  fullPoemText: poemasCampos.bicarbonatoDeSoda,
  translationGenZ: 'Malta, cheguei ao ponto álgido da minha crise: misturei crise de ansiedade com azia física real. Estou aqui a mandar abaixo dois copos de bicarbonato de soda porque sinto que o universo inteiro é um prato bué da pesado que eu não consigo digerir. Descobri o maior segredo dos filósofos cotas: metade das vossas crises existenciais, dos vossos textões profundos e da vossa metafísica de elite não passam de uma valente dor de estômago ou de um fígado lixado de quem jantou demais na véspera. O sentido da vida resume-se a saber se o teu corpo está a processar bem a realidade ou se precisas de um Kompensan urgente.',
  likes: 5940,
  commentsCount: 12,
  timestamp: '8 horas atrás',
  comments: [
    {
      handle: 'logic_detective',
      content: 'Excelente redução materialista, Campos! Finalmente uma observação clínica digna de um homem de ciência. Como médico forense, farto-me de dizer que os grandes dramas da alma desaparecem assim que se limpa o trato intestinal ou se trata uma gastrite. A alma é apenas química orgânica.',
      timestamp: '7h 45m atrás',
      likes: 530
    },
    {
      handle: 'pagan_philosopher',
      content: 'A tese de que a metafísica resulta de um mau funcionamento do corpo é brilhante e puramente sensacionista. Quando o corpo está são, o homem olha para a árvore e fica feliz. Quando o estômago sofre, a mente inventa mundos invisíveis e deuses tristes. Cura o estômago e voltarás ao paganismo.',
      timestamp: '7h 20m atrás',
      likes: 412
    },
    {
      handle: 'the_horatian',
      content: 'Que nível de baixeza poética... Misturar a filosofia do destino com problemas estomacais e bicarbonato de soda é o cúmulo do vulgarismo moderno. Que diriam os mestres clássicos se vissem a arte lírica reduzida a um anúncio de farmácia de província? Tenha algum decoro, Campos.',
      timestamp: '6h 55m atrás',
      likes: 310
    },
    {
      handle: 'office_dreams',
      content: 'O universo é de facto uma digestão difícil, Álvaro. Todos os dias tenho de engolir o patrão Vasques, os lançamentos de faturas e o almoço barato na tasca da esquina. Sinto essa azia na alma e no peito de cada vez que olho para o relógio e vejo que ainda faltam três horas para sair.',
      timestamp: '6h 30m atrás',
      likes: 485
    },
    {
      handle: 'hellenic_critic',
      content: 'Isto já não é poesia, é um boletim clínico de um doente crónico do aparelho digestivo. Depois do verso livre sem métrica, agora temos o verso de farmácia. Se o teu estômago não aguenta a vida moderna, faz uma dieta de caldos e cala-te, escusas de infectar o feed com os teus gases mentais.',
      timestamp: '6h 05m atrás',
      likes: 220
    },
    {
      handle: 'nature_is_everything',
      content: 'O estômago só dói a quem come o que a terra não dá de forma natural ou a quem passa a vida sentado nos cafés da cidade a fumar misturas químicas. Os animais no campo comem a erva, bebem a água límpida do rio e nunca precisam de bicarbonato para olhar para o céu.',
      timestamp: '5h 40m atrás',
      likes: 560
    },
    {
      handle: 'french_critic',
      content: 'Mon dieu, Álvaro... Beber bicarbonato em público? Que falta extrema de estética. Um verdadeiro dandy, quando sofre de enfartamento das ilusões, toma uma dose subtil de ópio numa chávena de porcelana da China ou bebe um gole de absinto puro. Reduziste o Spleen a um problema de mercearia.',
      timestamp: '5h 12m atrás',
      likes: 95
    },
    {
      handle: 'english_satirist',
      content: 'Brilliant! "Metaphysics as a lack of digestion" is a magnificent epigram. It reminds me of Jonathan Swift or Byron at their sharpest. Indeed, most of our profound vitorian thinkers would benefit immensely from a good dose of laxative instead of writing heavy theological books.',
      timestamp: '4h 45m atrás',
      likes: 180
    },
    {
      handle: 'the_last_stoic',
      content: 'Se o teu mal se resolve com dois copos de água efervescente, então o teu sofrimento é inconsequente e superficial. O verdadeiro desespero aristocrático não passa com remédios de balcão de farmácia; ele exige uma solução geométrica e irrevogável que limpe a existência de uma vez por todas.',
      timestamp: '4h 15m atrás',
      likes: 275
    },
    {
      handle: 'cafe_debater',
      content: 'Ahahaha grande Álvaro! Aposto que esse bicarbonato foi para curar a ressaca da borga de ontem à noite no cabaré do Parque Mayer! Aquela misturada de aguardente com tabaco de terceira deita abaixo qualquer engenheiro britânico. Cura-te que hoje há mais debate!',
      timestamp: '3h 50m atrás',
      likes: 115
    },
    {
      handle: 'early_desassossego',
      content: 'Às vezes também sinto esse peso que parece físico, a fechar-me a garganta. Mas sei que nenhuma química da terra cura o desassossego de perceber que o dia de amanhã vai ser exatamente igual ao de hoje, com ou sem azia. O remédio é aceitar a digestão lenta das horas.',
      timestamp: '2h 10m atrás',
      likes: 198
    },
    {
      handle: 'traditional_ink',
      content: 'Um post deplorável que demonstra a total decadência mental dos nossos jovens intelectuais. Reduzir as grandes interrogações da alma humana e a fé espiritual a um problema gástrico é uma ofensa direta à moral cristã e à dignidade nacional. Que falta de respeito.',
      timestamp: '1h 05m atrás',
      likes: 142
    }
  ]
},
{
  id: 'post_campos_9',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600', // Imagem de fórmulas matemáticas complexas escritas a giz num quadro negro
  title: 'O binómio de Newton e a Vénus de Milo.',
  content: `O binómio de Newton é tão belo como a Vénus de Milo.
  O que há é pouca gente para dar por isso...
  A matemática é a poesia do espaço,
  E a engenharia é o classicismo da matéria!`,
  fullPoemText: poemasCampos.oBinomioDeNewton,
  translationGenZ: 'Malta, mandei a hot take definitiva sobre arte e estética. Estou farto de ver a malta de Letras a achar que a poesia só vive de flores, estátuas antigas e deuses gregos fofinhos. Eu, como engenheiro naval de elite formado no Reino Unido, afirmo com toda a autoridade: uma fórmula matemática complexa como o Binómio de Newton é tão perfeitamente bela, simétrica e artística como a estátua da Vénus de Milo do Museu do Louvre. A cena é que a maioria das pessoas é demasiado básica em exatas para perceber o hype da matemática. A engenharia é o verdadeiro classicismo moderno: as pontes, as equações e as máquinas têm mais estética e lógica do que metade dos vossos poemas pirosos de amor. Estudem física, manos.',
  likes: 6140,
  commentsCount: 12,
  timestamp: '9 horas atrás',
  comments: [
    {
      handle: 'the_horatian',
      content: 'Comparar uma fórmula algébrica utilitária com a perfeição divinal e intemporal da Vénus de Milo é uma blasfémia estética imperdoável, Campos. A matemática serve para fazer contas e erguer paredes; a arte serve para elevar a alma acima da matéria. Não mistures os templos com as oficinas.',
      timestamp: '8h 40m atrás',
      likes: 410
    },
    {
      handle: 'pagan_philosopher',
      content: 'Desta vez tenho de concordar parcialmente contigo, Álvaro. Os gregos sabiam que a beleza é proporção, geometria e número (a secção áurea). A Vénus de Milo é bela exatamente porque obedece a uma equação matemática oculta na pedra. A ciência e o paganismo clássico partilham da mesma luz da razão.',
      timestamp: '8h 15m atrás',
      likes: 385
    },
    {
      handle: 'logic_detective',
      content: 'Ora aqui está um post com pés e cabeça! O Binómio de Newton é uma obra-prima de dedução e lógica formal. A matemática não mente, não chora por amor e não tem crises metafísicas; ela apenas resolve e demonstra a verdade. Se a poesia tivesse a precisão de uma equação, a minha profissão seria mais fácil.',
      timestamp: '7h 55m atrás',
      likes: 290
    },
    {
      handle: 'hellenic_critic',
      content: 'A premissa é aceitável, mas a conclusão é moderna demais para o meu gosto. O Binómio de Newton tem ordem, sim, mas serve para calcular probabilidades e construir engenhos de ferro vulgares. A Vénus de Milo não serve para nada, e é precisamente nessa inutilidade soberba que reside a sua aristocracia.',
      timestamp: '7h 30m atrás',
      likes: 215
    },
    {
      handle: 'nature_is_everything',
      content: 'Falas de Newton, falas de estátuas de pedra... Duas coisas que não têm vida nenhuma, Álvaro. O Binómio é uma regra riscada no papel e a Vénus é um calhau cortado por um cinzel. Nem um nem outro batem a beleza de um simples girassol a rodar para o sol. A vossa cultura está cheia de poeira morta.',
      timestamp: '7h 05m atrás',
      likes: 540
    },
    {
      handle: 'office_dreams',
      content: 'Eu passo as minhas tardes a lançar binómios de números e somas nas colunas de contabilidade da firma Vasques. Garanto-te, Álvaro, que não há beleza nenhuma naquelas páginas comerciais. Há apenas cansaço, cheiro a tinta barata e a certeza de que a minha vida está a ser somada e gasta em vão.',
      timestamp: '6h 40m atrás',
      likes: 495
    },
    {
      handle: 'french_critic',
      content: 'A matemática como estética decadentista? É uma ideia perversa e bizarra, muito ao estilo de Huysmans. Encontrar prazer nas linhas frias e exatas de uma equação tem um certo requinte de dandy cerebral. Mas continuo a preferir a beleza de um soneto polido ao fumo de uma fábrica de carvão.',
      timestamp: '6h 12m atrás',
      likes: 104
    },
    {
      handle: 'english_intellect',
      content: 'Interesting concept, Álvaro. Edgar Allan Poe also argued that true poetry has a mathematical structure and that a poem should be built with the precision of a clock. Perhaps your British education is finally overcoming your emotional chaos. Keep exploring this line.',
      timestamp: '5h 45m atrás',
      likes: 160
    },
    {
      handle: 'the_last_stoic',
      content: 'A matemática é de facto a única linguagem digna de um homem superior, porque é fria, indiferente e imutável. Os deuses governam o universo através de números, não de lágrimas. Se queres ser um estóico, abandona o lirismo e foca-te na pureza geométrica do nada. É o passo que falta.',
      timestamp: '5h 10m atrás',
      likes: 312
    },
    {
      handle: 'cafe_debater',
      content: 'Eish, os estudantes de Engenharia do Técnico vão usar este post como estatuto de elite para engatar as miúdas no Chiado! "Olha miúda, o meu caderno de cálculo é tão sexy como o Louvre!". Partiste a loiça toda com esta comparação, Engenheiro!',
      timestamp: '4h 30m atrás',
      likes: 125
    },
    {
      handle: 'grammar_nazi',
      content: 'Nota Gramatical: A estrutura comparativa de igualdade "tão... como" foi aplicada de forma correta. No entanto, a aproximação conceptual entre a física mecânica e a escultura clássica é de uma audácia estilística que perturba a harmonia natural da língua portuguesa.',
      timestamp: '3h 15m atrás',
      likes: 72
    },
    {
      handle: 'baixa_accountant',
      content: 'Finalmente o Sr. Engenheiro reconhece o valor das ciências exatas! Se estender essa admiração pelo Binómio de Newton ao preenchimento rigoroso dos inventários em falta no armazém da Baixa, o patrão Vasques deixa de lhe mandar bitaites todas as semanas.',
      timestamp: '45m atrás',
      likes: 98
    }
  ]
},
{
  id: 'post_campos_10',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1510134446410-64d59eb23e8e?auto=format&fit=crop&q=80&w=600', // Imagem em grande plano das teclas metálicas de uma máquina de escrever antiga
  title: 'Dactilografia',
  content: `O tique-taque das teclas na penumbra do escritório...
  Que náusea de escrever cartas comerciais, que asco da vida mecânica!
  Choro as minhas memórias perdidas ao ritmo da máquina de escrever,
  E o papel químico mancha-me os dedos como um arrependimento escuro.`,
  fullPoemText: poemasCampos.dactilografia,
  translationGenZ: 'Malta, o hype das máquinas e do progresso industrial faliu redondamente. Estou aqui fechado num escritório escuro a fazer trabalho de dactilógrafo, a bater teclas numa máquina de escrever mecânica o dia todo e a passar cartas comerciais em papel químico. Que seca, que asco, que depressão. O barulho repetitivo do tique-taque das teclas parece a marcha fúnebre do meu tempo de juventude a ser jogado no lixo. Começo a lembrar-me da minha infância feliz e sinto uma nostalgia bué da pesada de quando a vida não era este grind automático e sem alma de escritório corporativo. Os meus dedos estão todos manchados de tinta preta e o meu espírito está em modo dark total.',
  likes: 5410,
  commentsCount: 12,
  timestamp: '10 horas atrás',
  comments: [
    {
      handle: 'office_dreams',
      content: 'Bem-vindo ao meu inferno pessoal, Álvaro. Agora percebes a realidade de quem vive na Rua dos Douradores. Bater essas teclas e manchar os dedos com papel químico é o quotidiano que destrói qualquer sonho. A diferença é que a ti dá-te uma "náusea poética", e a mim dá-me apenas vontade de que o dia acabe depressa.',
      timestamp: '9h 42m atrás',
      likes: 912
    },
    {
      handle: 'early_desassossego',
      content: 'O tique-taque da máquina de escrever é o relógio do tédio urbano, meu caro Engenheiro. É quando percebemos que somos apenas engrenagens burocráticas de uma máquina comercial gigante que não se importa com a nossa literatura. Chora os teus sonhos, que o papel aceita tudo sem julgar.',
      timestamp: '9h 25m atrás',
      likes: 640
    },
    {
      handle: 'nature_is_everything',
      content: 'Estás aí enclausurado a carimbar folhas de metal e a queixar-te do asco, Álvaro... Quem te manda trocar o ar livre e o sol das estradas por esse antro de fumo e escritórios na cidade? Deixa a máquina de escrever, sai para a rua, caminha até ao campo e deixa que os teus dedos mexam na terra límpida.',
      timestamp: '8h 55m atrás',
      likes: 580
    },
    {
      handle: 'the_horatian',
      content: 'A tecnologia que tanto celebraste nas tuas odes triunfais é a mesma que agora te escraviza os dias e te mancha os dedos com tinta barata. É o castigo poético merecido por teres adorado o ferro e o progresso mecânico em vez de procurares a paz e a harmonia interior dos antigos. Colhe o que semeaste.',
      timestamp: '8h 30m atrás',
      likes: 340
    },
    {
      handle: 'pagan_philosopher',
      content: 'O erro não está na máquina de escrever, está na utilidade comercial que lhe dás. Usar a técnica para passar faturas e cartas de negócios adoece o espírito porque submete a mente ao utilitarismo burguês. Se usasses a dactilografia apenas para registar as tuas sensações puras, não sentirias esse asco.',
      timestamp: '7h 55m atrás',
      likes: 210
    },
    {
      handle: 'french_critic',
      content: 'Que decadência... O engenheiro cosmopolita reduzido a um mero dactilógrafo de província. Ver os teus dedos manchados de papel químico é de uma vulgaridade que me fere a sensibilidade. A única escrita digna de um esteta é com pena de ganso e tinta de violetas, longe de escritórios fétidos.',
      timestamp: '7h 20m atrás',
      likes: 115
    },
    {
      handle: 'the_last_stoic',
      content: 'Sentir asco da vida mecânica é o primeiro passo para a libertação estóica. Perceber que o trabalho corporativo moderno é uma humilhação para o intelecto é o selo de uma mente superior. Não te queixes no feed, Álvaro; recusa-te a bater a próxima tecla, arruma o chapéu e sai com dignidade.',
      timestamp: '6h 45m atrás',
      likes: 295
    },
    {
      handle: 'logic_detective',
      content: 'O tique-taque mecânico ajuda a manter a cadência do raciocínio analítico, se for bem aproveitado. No entanto, se as tuas memórias de infância estão a interferir com a velocidade da dactilografia, estás a cometer erros de digitação crónicos. Foca-te no teclado e deixa os fantasmas para o serão.',
      timestamp: '6h 10m atrás',
      likes: 142
    },
    {
      handle: 'political_satirist',
      content: 'Se o Engenheiro Campos acha o escritório da Baixa uma seca, devia ver o arquivo geral dos Ministérios. Lá a dactilografia avança à velocidade de uma tartaruga manca e o papel químico acumula poeira desde o século passado. Pelo menos a sua máquina de escrever parece funcionar.',
      timestamp: '5h 30m atrás',
      likes: 185
    },
    {
      handle: 'cafe_debater',
      content: 'Eish, a gerência da firma Vasques apanhou o Engenheiro a postar poemas em pleno horário de trabalho! Larga o teclado comercial, Álvaro, livra-te dessa tinta nos dedos e vem ter connosco ao Chiado que a malta já está a abrir as garrafas para afogar o tédio corporativo!',
      timestamp: '4h 15m atrás',
      likes: 110
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, a minha mãe tem uma máquina de escrever bué da grande e barulhenta no quarto e deixa-me carregar nas teclas para fazer desenhos de letras no papel! É bué divertido, o senhor não acha? Porque é que os seus dedos ficaram pretos?',
      timestamp: '3h 05m atrás',
      likes: 134
    },
    {
      handle: 'baixa_accountant',
      content: 'Menos poesia sobre o papel químico e mais atenção aos dados das faturas de exportação, Sr. Campos. O tique-taque das teclas é o som do dinheiro a entrar na firma. Se a sua sensibilidade literária se sente ofendida pela dactilografia, há muitos dactilógrafos desempregados na Baixa prontos para o lugar.',
      timestamp: '20m atrás',
      likes: 167
    }
  ]
},
{
  id: 'post_campos_11',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=600', // Imagem dramática do parapeito de uma janela alta com vista para a cidade à noite
  title: 'Se te queres matar, porque não te queres matar?',
  content: `Se te queres matar, porque não te queres matar?
  Ah, aproveita! que eu, que tanto amo a morte e o seu sossego,
  Ando a adiar o meu fim por cobardia ou por hábito...
  Livra-te deste palco, que a peça é uma seca e tu és um mau ator!`,
  fullPoemText: poemasCampos.seTeQueresMatar,
  translationGenZ: 'Malta, mandei a hot take mais dark e sem filtros de sempre. Estou a olhar para este pessoal que passa a vida no feed a ameaçar que vai dar rage quit da vida e a fazer drama para farmar atenção. Se te queres mesmo matar, mata-te de uma vez e escusa de fazer threads sobre isso! Eu gostava de ter essa coragem, porque o vibe de estar morto e em paz parece-me bué de convidativo, mas continuo aqui preso neste loop por puro hábito e cobardia. A vida virou um filme bué da cringe e repetitivo, e nós somos uns atores péssimos a fingir que o roteiro faz sentido. Se vais saltar do servidor, salta logo e limpa espaço no feed.',
  likes: 4912,
  commentsCount: 12,
  timestamp: '11 horas atrás',
  comments: [
    {
      handle: 'the_last_stoic',
      content: 'Tens toda a razão na tua revolta contra o exibicionismo do vulgo, Campos. Mas falha-te a dignidade. Mandar vir com os outros no feed sobre o suicídio é tão vulgar como o drama deles. O verdadeiro estóico destrói os seus manuscritos, arruma a secretária em silêncio absoluto e sai de cena sem deixar um único tweet.',
      timestamp: '10h 30m atrás',
      likes: 520
    },
    {
      handle: 'logic_detective',
      content: 'Aviso Psiquiátrico: Este post roça a instigação ao suicídio, o que é um crime previsto no Código Penal. De um ponto de vista lógico, adiar o fim por "hábito" é o comportamento biológico padrão de qualquer organismo vivo. O instinto de sobrevivência é uma constante matemática, a tua poesia é que é uma variável desregulada.',
      timestamp: '10h 15m atrás',
      likes: 310
    },
    {
      handle: 'office_dreams',
      content: 'Eu passo as tardes a olhar para a janela do rés-do-chão e a pensar no sossego de não existir, Álvaro. Mas depois lembro-me de que o suicídio dá bué trabalho de planeamento e exige uma energia que o tédio da Rua dos Douradores já me sugou por completo. Adio o fim porque até para morrer me falta a vontade.',
      timestamp: '9h 55m atrás',
      likes: 642
    },
    {
      handle: 'window_loneliness',
      content: 'Senhor Álvaro... Como pode falar assim da morte com tanta leveza? Eu passo os dias nesta cama com o peito a arder de febre e dava tudo para ter a sua saúde e poder caminhar pelas ruas de Lisboa. Desperdiçar a vida a desejar o fim é uma crueldade para quem está na contagem decrescente.',
      timestamp: '9h 30m atrás',
      likes: 812
    },
    {
      handle: 'the_horatian',
      content: 'Que horror... Que espetáculo fúnebre e despudorado. Usar o dom da palavra para insultar a vida e incentivar a autodestruição é a prova final de que a tua mente perdeu todo o norte moral. Os deuses deram-nos a vida para a vivermos com equilíbrio, não para a escarrarmos num ecrã público.',
      timestamp: '8h 50m atrás',
      likes: 295
    },
    {
      handle: 'french_critic',
      content: 'Provocação interessante, muito na linha do niilismo parisiense. Chamar ao mundo "uma peça de teatro seca" é um diagnóstico perfeito da sociedade burguesa. Mas fazer este escândalo no feed tira-te o requinte. Um dandy desaparece misteriosamente, deixando apenas um perfume caro no ar.',
      timestamp: '8h 15m atrás',
      likes: 110
    },
    {
      handle: 'pagan_philosopher',
      content: 'A tua mente está doente porque se desligou da natureza. As árvores não se suicidam, os rios não se queixam do roteiro da existência. O teu cansaço é fruto desse egocentrismo histérico que acha que o universo tem de te entreter. Aceita a amoralidade do cosmos e esse drama acaba.',
      timestamp: '7h 40m atrás',
      likes: 230
    },
    {
      handle: 'cafe_debater',
      content: 'Eish, Engenheiro! Apaga isto antes que os teus tios ricos vejam e te cortem a mesada do Reino Unido! A malta no Chiado ficou toda tensa com este post. Se estás assim tão na fossa, vem ter connosco à Brasileira que nós pagamos-te uma rodada de absinto para te mudar o mindset.',
      timestamp: '6h 55m atrás',
      likes: 105
    },
    {
      handle: 'english_satirist',
      content: 'A wonderful piece of dark humor! "A bad actor in a dry play" is the most accurate description of the House of Commons I have ever read. Don\'t actually kill yourself, Álvaro, the feed would become incredibly boring without your daily breakdowns.',
      timestamp: '5h 30m atrás',
      likes: 142
    },
    {
      handle: 'grammar_nazi',
      content: 'Alerta de Tom: A repetição agressiva do verbo "matar" cria uma cacofonia estética que agride a tradição lírica portuguesa. Compreendemos o pendor expressionista da vossa escrita, mas a harmonia da sintaxe deveria ser preservada mesmo perante os abismos psicológicos.',
      timestamp: '4h 12m atrás',
      likes: 67
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, o que é um "mau ator"? Eu ando nas aulas de teatro da escola e a professora diz que eu sou bué boa a fazer de árvore! O senhor não quer vir ver a minha peça? Tem música e as roupas são bué coloridas, não é nada uma seca!',
      timestamp: '2h 10m atrás',
      likes: 198
    },
    {
      handle: 'baixa_accountant',
      content: 'Se o Sr. Engenheiro gastasse metade da energia que usa a insultar a timeline a rever as faturas da alfândega, o balanço da firma Vasques não estaria com um atraso de duas semanas. Menos ameaças de morte e mais produtividade, por favor.',
      timestamp: '45m atrás',
      likes: 134
    }
  ]
},
{
  id: 'post_campos_12',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1511289081367-4a0ea813f075?auto=format&fit=crop&q=80&w=600', // Imagem de lençóis desarrumados numa cama vazia a meio da noite
  title: 'Insónia',
  content: `Não durmo, não sinto, não sei que faça da minha vida...
  O relógio de parede bate a madrugada como um castigo de metal.
  Quem sou eu na penumbra deste quarto senão um erro mecânico,
  Uma máquina de pensar que se esqueceu de como dar shutdown?`,
  fullPoemText: poemasCampos.insonia,
  translationGenZ: 'Malta, são 4 da manhã e estou aqui em modo zombie absoluto na cama. Não consigo dormir, não consigo desligar o cérebro, não sei o que fazer com a minha existência. O som do relógio no quarto parece um bot a martelar-me os neurónios. Sinto-me um erro de sistema: uma máquina que foi programada para pensar e ter crises existenciais ao extremo, mas que veio com um bug de fábrica e não tem o botão de shutdown. Estou a fritar a pipoca a olhar para o teto enquanto a cidade toda está a dormir e a ter sonhos normais de NPC. Que tortura do caraças ser consciente a esta hora.',
  likes: 6540,
  commentsCount: 12,
  timestamp: '12 horas atrás',
  comments: [
    {
      handle: 'cosmic_astrologer',
      content: 'Eu avisei-te no post anterior, Álvaro. Essa tua insónia é o resultado exato da oposição de Saturno no teu mapa astral. A matéria do quarto ganha um peso hostil de madrugada porque a tua energia psíquica está desalinhada com a rotação lenta das estrelas. Acende uma vela e aceita o fluxo dos astros.',
      timestamp: '11h 45m atrás',
      likes: 290
    },
    {
      handle: 'early_desassossego',
      content: 'A insónia de madrugada na cidade... Conheço bem essa penumbra do quarto, Álvaro. É quando percebemos que somos os únicos despertos num deserto de casas de pedra. A tua consciência vira uma lâmpada acesa que só serve para iluminar o vazio dos teus próprios rascunhos. Deixa o relógio bater.',
      timestamp: '11h 30m atrás',
      likes: 412
    },
    {
      handle: 'nature_is_everything',
      content: 'Não dormes porque passas o dia fechado em escritórios e cafés a respirar fumo e a pensar em binómios, Álvaro. Os pássaros no campo acordam com o sol e deitam-se com a lua porque seguem o ritmo natural do mundo. O teu relógio de metal é um castigo que tu próprio inventaste para a tua cabeça.',
      timestamp: '10h 55m atrás',
      likes: 580
    },
    {
      handle: 'the_horatian',
      content: 'A insónia é o preço da tua falta de disciplina mental. Se cultivasses o recolhimento estóico e a meditação antes de deitares o corpo, a tua mente estaria serena como um lago clássico. Mas tu preferes deitar-te com o barulho das tuas odes mecânicas na cabeça. O resultado é o caos nervoso.',
      timestamp: '10h 20m atrás',
      likes: 215
    },
    {
      handle: 'office_dreams',
      content: 'Também não durmo, Álvaro. Passo as noites a fazer o balanço das faturas que vou ter de lançar amanhã e a sentir uma náusea horrível do dia que vai nascer. A insónia do escritório na Baixa é a certeza de que o tempo está a passar e nós continuamos trancados no mesmo cubículo.',
      timestamp: '9h 45m atrás',
      likes: 510
    },
    {
      handle: 'logic_detective',
      content: 'Do ponto de vista fisiológico, a insónia resolve-se com química básica e não com metáforas sobre máquinas. Toma uma infusão forte de flor de laranjeira ou duas gotas de ópio antes de ires para a cama. O cérebro é um órgão físico, Álvaro; se limpares as toxinas, o shutdown biológico acontece.',
      timestamp: '9h 15m atrás',
      likes: 185
    },
    {
      handle: 'french_critic',
      content: 'A insónia é a única hora do dia em que um esteta consegue pensar sem ser incomodado pela estupidez da multidão burguesa. Em Paris, as melhores ideias decadentes nasciam às 4 da manhã ao fumo de um cigarro egípcio. Aproveita esse teu "Spleen" lívido para lapidar o teu estilo.',
      timestamp: '8h 30m atrás',
      likes: 98
    },
    {
      handle: 'the_last_stoic',
      content: 'Olhar para o teto de madrugada e perceber que se é um "erro" é o início da lucidez suprema. Quando o ruído do dia se cala, ficas frente a frente com o nada absoluto da tua existência. Se a máquina não dá shutdown, Álvaro, quebra o motor de uma vez por todas com a dignidade de um fidalgo.',
      timestamp: '7h 55m atrás',
      likes: 310
    },
    {
      handle: 'cafe_debater',
      content: 'Eish, grande Álvaro! Postar no feed às 4 da manhã é de mestre! Estavas com a pica toda do debate do Chiado ou ficaste colado a escrever versos nas folhas dos maços de tabaco? Dorme um bocado que amanhã à tarde a malta precisa do Engenheiro bem desperto na mesa do café!',
      timestamp: '6h 40m atrás',
      likes: 112
    },
    {
      handle: 'pagan_philosopher',
      content: 'O teu erro é tentares "saber o que fazer da vida" enquanto estás deitado. A vida não é para ser planeada ou pensada no escuro; a vida acontece na sensação exterior do dia. O teu cérebro está a digerir-se a si próprio porque não tem nenhuma árvore ou rio real para olhar nessa penumbra.',
      timestamp: '5h 15m atrás',
      likes: 195
    },
    {
      handle: 'traditional_ink',
      content: 'Um post doentio que reflete o desequilíbrio nervoso desta nova geração de intelectuais lisboetas. Em vez de rezarem um terço para acalmar a alma e pedirem perdão pelos seus excessos morais, vêm para as redes sociais fazer apologia da neurose e do desespero noturno. Deplorável.',
      timestamp: '4h 05m atrás',
      likes: 142
    },
    {
      handle: 'baixa_accountant',
      content: 'Se o Sr. Engenheiro passa as noites em claro a filosofar sobre o teto, é normal que chegue ao escritório às 10 da manhã com cara de quem foi atropelado por um elétrico e passe o dia a cometer erros na revisão dos relatórios técnicos. O patrão Vasques não paga para dactilógrafos zombies.',
      timestamp: '25m atrás',
      likes: 165
    }
  ]
},
{
  id: 'post_campos_13',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600', // Imagem de um prato de comida tradicional numa mesa de restaurante antiga
  title: 'Dobrada à Moda do Porto',
  content: `Num restaurante de terceira classe, na Baixa,
  Como uma dobrada à moda do Porto fria...
  E sinto que a minha vida inteira é esse prato de comida que arrefeceu,
  Um resto de banquete que ficou esquecido em cima da mesa de mármore.`,
  fullPoemText: poemasCampos.dobradaAModaDoPorto,
  translationGenZ: 'Malta, bati mesmo no fundo do poço da depressão urbana. Estou aqui sentado numa tasca rasca de terceira categoria na Baixa de Lisboa, a comer um prato de dobrada à moda do Porto que já veio meio frio para a mesa. Olho para aquela comida gordurosa e fria e mando o maior gatilho mental: a minha vida inteira resume-se a este prato. Fui programado para ser um engenheiro de elite de sucesso em Glasgow, mas acabei como um gajo solitário a comer restos numa mesa de mármore barata. Sou um resto de banquete existencial que ficou esquecido enquanto o mundo lá fora está a divertir-se. Que vibe tão deprimente, juro.',
  likes: 5120,
  commentsCount: 12,
  timestamp: '13 horas atrás',
  comments: [
    {
      handle: 'logic_detective',
      content: 'Campos, comer dobrada fria numa tasca de terceira classe é um atentado direto à tua saúde pública e ao teu trato gastrointestinal. Como médico forense, garanto-te que essa tua "analogia biográfica" com o prato frio é apenas o teu estômago a protestar contra a gordura saturada. Toma um digestivo.',
      timestamp: '12h 42m atrás',
      likes: 495
    },
    {
      handle: 'office_dreams',
      content: 'Compreendo a estética dessa tasca, Álvaro. Também almoço por lá pratos baratos de comida morna, rodeado de marçanos e caixeiros que comem à pressa para voltar ao grind. A vida na Baixa cheira a óleo de fritura e a sonhos que arrefeceram na mesa de contabilidade. Estamos juntos nessa gordura existencial.',
      timestamp: '12h 20m atrás',
      likes: 580
    },
    {
      handle: 'french_critic',
      content: 'Quelle horreur... Dobrada fria numa mesa de mármore de terceira categoria? Perdeste completamente o pouco verniz de dandy que te restava, Álvaro. Em Paris, os estetas sofrem de tédio em restaurantes de luxo com champanhe e ostras. Reduzir a melancolia a uma refeição de cocheiro é de um mau gosto insuportável.',
      timestamp: '11h 55m atrás',
      likes: 115
    },
    {
      handle: 'the_horatian',
      content: 'O prato está frio porque trocaste a moderação de uma refeição simples e caseira pela pressa das tascas da cidade. Os antigos celebravam o pão, o vinho e as azeitonas com dignidade e hinos de gratidão à terra. Tu preferes chorar as tuas memórias em cima de vísceras de animal mal cozinhadas. Poesia vulgar.',
      timestamp: '11h 30m atrás',
      likes: 210
    },
    {
      handle: 'pagan_philosopher',
      content: 'A tua sensação está corrompida pelo teu estado mental, Engenheiro. A dobrada é apenas matéria biológica que perdeu temperatura térmica de acordo com as leis da física. Não há nenhuma "vida falhada" oculta no prato; és tu que estás a projetar os teus dramas numa refeição perfeitamente inocente. Come e cala-te.',
      timestamp: '10h 45m atrás',
      likes: 240
    },
    {
      handle: 'nature_is_everything',
      content: 'Os animais no campo comem a erva fresca e o trigo quando a terra os dá, e nunca comem comida fria de restaurante porque não inventaram as cidades nem o dinheiro, Álvaro. Tu sofres na tasca porque te esqueceste do sabor da fruta colhida diretamente da árvore à luz do sol. Volta para as origens.',
      timestamp: '9h 55m atrás',
      likes: 310
    },
    {
      handle: 'the_last_stoic',
      content: 'Se a tua existência se resume a um prato de restos esquecidos, a conclusão lógica do teu ensaio deveria ser recusares-te a comer. Levanta-te da mesa, deixa as moedas na mesa de mármore e sai com a altivez de quem recusa o banquete e a própria vida. Fazer literatura com comida fria é ridículo.',
      timestamp: '8h 20m atrás',
      likes: 198
    },
    {
      handle: 'political_satirist',
      content: 'Comer dobrada fria na Baixa de Lisboa? Cuidado, Engenheiro! Com a nova taxa sobre os géneros alimentícios que o Governo acabou de aprovar, esse prato de terceira classe vai custar-te o preço de um banquete em Windsor. A burocracia nacional consegue cobrar imposto até sobre a comida que arrefece.',
      timestamp: '7h 15m atrás',
      likes: 165
    },
    {
      handle: 'fiction_tales',
      content: 'O cenário dessa tua tasca é magnífico para o início de uma narrativa de mistério ou de um conto gótico urbano, Álvaro. Um homem solitário, um prato frio, a penumbra e o barulho dos talheres ao fundo... Se me deres autorização, uso essa premissa para o meu próximo caderno de contos.',
      timestamp: '6h 10m atrás',
      likes: 92
    },
    {
      handle: 'cafe_debater',
      content: 'Ahahaha deves estar com uma larica de elite, Engenheiro! Deixa lá a dobrada fria e vem ter à Brasileira que a malta paga-te uns rissóis quentinhos e um copo de três para aquecer o espírito! Tasca de terceira classe é que tem o verdadeiro vibe do povo, deixa-te de fitas burguesas!',
      timestamp: '4h 50m atrás',
      likes: 110
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, a minha avó faz dobrada com feijão bué da boa e mete sempre chouriço por cima! Mas eu não gosto muito porque parece pastilha elástica na boca. O senhor quer vir jantar a minha casa? A minha mãe faz batatas fritas redondas que são bué quentinhas!',
      timestamp: '3h 15m atrás',
      likes: 142
    },
    {
      handle: 'baixa_accountant',
      content: 'Enquanto o Sr. Engenheiro chora o seu fado gastronómico em cima da mesa de mármore, a hora de almoço já passou há trinta minutos e o relatório técnico da linha férrea continua em cima da dactilografia por assinar. Menos poesia de tasca e mais cumprimento do horário de trabalho.',
      timestamp: '15m atrás',
      likes: 125
    }
  ]
},
{
  id: 'post_campos_14',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=600', // Imagem desfocada de um homem de óculos refletido num espelho antigo de café
  title: 'Sim, sou eu, eu mesmo, tal qual resultei de tudo,',
  content: `Sim, sou eu, eu mesmo, tal qual resultei de tudo...
  O gajo que estudou em Glasgow e que agora não serve para nada,
  O intelectual de café que gasta as solas dos sapatos na Baixa,
  O rascunho de homem que falhou todas as ambições na vida.`,
  fullPoemText: poemasCampos.simSouEuEuMesmo,
  translationGenZ: 'Malta, mandei a review sincera do meu próprio percurso e o resultado é um valente balde de água fria. Olho-me ao espelho e vejo o gajo em que me tornei: o gajo que tirou um curso de elite de Engenharia Naval na Escócia, com um currículo XPTO de cosmopolita, mas que agora serve para rigorosamente zero. Sou só um intelectual de café falhado que passa o dia a gastar as solas dos sapatos a passear pela Baixa e a postar desabafos na timeline. Tinha tudo para ser o super-homem do progresso, mas acabei como um rascunho de pessoa que falhou todas as missões principais do jogo da vida. Sou o rei da geração do burnout intelectual.',
  likes: 5890,
  commentsCount: 12,
  timestamp: '14 horas atrás',
  comments: [
    {
      handle: 'office_dreams',
      content: 'Esse teu espelho é o meu diário diário, Álvaro. Olho para a minha vida de caixeiro e vejo o mesmo rascunho falhado. A diferença é que tu tiveste a oportunidade de ver os estaleiros de Glasgow e os mares do Oriente antes de falhares, e eu falhei logo à partida sem sair da Rua dos Douradores. O resultado, porém, é a mesma náusea.',
      timestamp: '13h 42m atrás',
      likes: 712
    },
    {
      handle: 'english_intellect',
      content: 'Welcome to the reality of the self, Álvaro. I wrote under the name Alexander Search about the "Many in Me" and how the intellectual ambitions fade into shadows. Studying abroad in Durban or Glasgow only serves to make us foreigners in our own country. You are finally meeting your true ghost.',
      timestamp: '13h 25m atrás',
      likes: 245
    },
    {
      handle: 'the_horatian',
      content: 'Falhaste porque baseaste as tuas ambições no fumo das fábricas, na velocidade mecânica e na vaidade cosmopolita. Procuraste o teu valor na aprovação das ruas e no barulho das capitais estrangeiras. Se tivesses aprendido com o mestre Caeiro a contentar-te com o olhar puro, saberias que um homem nunca falha quando aceita o seu fado.',
      timestamp: '12h 55m atrás',
      likes: 310
    },
    {
      handle: 'pagan_philosopher',
      content: 'O teu erro crónico é considerares-te um "rascunho falhado" baseado em padrões morais e sociais burgueses de "sucesso". Do ponto de vista do Sensacionismo, tu não falhaste nada: tu existes, sentes a Baixa, gastas os sapatos e geras sensações. O universo não quer saber do teu diploma de Glasgow, quer apenas que tu sejas matéria consciente.',
      timestamp: '12h 30m atrás',
      likes: 298
    },
    {
      handle: 'the_last_stoic',
      content: 'Reconhecer que se é um rascunho inútil é o sinal supremo da aristocracia da inteligência. O vulgo acha sempre que serve para alguma coisa útil e corre atrás de medalhas. Se já percebeste que Glasgow não vale nada e que a tua vida é um zero, apaga a conta, fecha o diário e retira-te com a dignidade estóica que a situação exige.',
      timestamp: '11h 50m atrás',
      likes: 410
    },
    {
      handle: 'french_critic',
      content: 'Gastar as solas dos sapatos na Baixa a fazer "Flânerie" é a única ocupação digna de um esteta moderno, Álvaro. O asco do trabalho útil é o que nos distingue da plebe dactilógrafa. Falhar as ambições burguesas é um luxo requintado que deveria orgulhar-te. Só te falta um pouco mais de desdém e menos autocomiseração.',
      timestamp: '11h 12m atrás',
      likes: 115
    },
    {
      handle: 'nature_is_everything',
      content: 'Ficas aí a chorar diplomas e Glasgow... As árvores não têm cursos superiores e dão sombra, os rios não estudaram engenharia e chegam ao mar sem errar o caminho. Tu andas com a cabeça cheia de livros e ideias de sucesso e por isso é que te sentes um rascunho. Olha para o céu e esquece a tua engenharia.',
      timestamp: '10h 40m atrás',
      likes: 485
    },
    {
      handle: 'logic_detective',
      content: 'Identificar-se como "o gajo que estudou em Glasgow" e "o intelectual de café" é um diagnóstico de crise de identidade severa por acumulação de premissas contraditórias. Se a tua formação técnica em engenharia não tem aplicação prática em Lisboa, o erro foi de planeamento de carreira e não da metafísica do universo.',
      timestamp: '9h 25m atrás',
      likes: 190
    },
    {
      handle: 'political_satirist',
      content: 'O Engenheiro Campos não serve para nada em Lisboa? Não se preocupe, meu caro! Com essas qualificações de falhanço absoluto e essa capacidade de gastar sapatos na Baixa, o Governo tem uma vaga perfeita para si como Diretor-Geral num Ministério qualquer. O Estado adora intelectuais inúteis com diplomas estrangeiros.',
      timestamp: '8h 15m atrás',
      likes: 240
    },
    {
      handle: 'cafe_debater',
      content: 'Eish, que banho de realismo, Engenheiro! Deixa-te de tretas, tu és a alma da nossa mesa na Brasileira! Sem os teus surtos futuristas e as tuas discussões com o Reis a poesia nacional seria uma seca total. Bota mais um cigarro na boca e vem discutir política connosco que o pessoal adora-te!',
      timestamp: '6h 45m atrás',
      likes: 112
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, o meu pai diz que eu sou bué da boa a fazer rascunhos de desenhos com o lápis antes de pintar com as canetas de feltro! Um rascunho não é uma coisa falhada, é só o início de um desenho bué de bonito! O senhor não quer que eu lhe pinte o seu desenho para ficar mais alegre?',
      timestamp: '4h 30m atrás',
      likes: 155
    },
    {
      handle: 'baixa_accountant',
      content: 'Se o Sr. Engenheiro reconhece que não serve para nada no escritório, escusa de continuar a ocupar a cadeira de dactilógrafo e a gastar a tinta da firma Vasques. Há muitos caixeiros competentes na Rua dos Douradores que gostariam de ter esse ordenado para trabalhar a sério em vez de postar crises existenciais.',
      timestamp: '20m atrás',
      likes: 142
    }
  ]
},
{
  id: 'post_campos_15',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1543083115-638c32cd3d58?auto=format&fit=crop&q=80&w=600', // Imagem poética de fumo de cigarro a subir em frente a uma janela com a placa da Tabacaria ao fundo desfocada
  title: 'Tabacaria',
  content: `Não sou nada.
  Nunca serei nada.
  Não posso querer ser nada.
  À parte isso, tenho em mim todos os sonhos do mundo.`,
  fullPoemText: poemasCampos.tabacaria,
  translationGenZ: 'Malta, mandei a obra-prima absoluta da minha timeline, o post que vai ficar para a história deste servidor. Estou aqui sentado à janela do meu quarto, a olhar para a Tabacaria do outro lado da rua, a fumar um cigarro e cheguei ao reset total do ego. A verdade nua e crua é esta: Eu não sou nada. Nunca serei nada. Não posso sequer ter a audácia de querer ser alguma coisa. Sou o zero absoluto do universo corporativo e social. Mas aqui está o grande plot twist psicológico: à parte dessa minha insignificância total, eu carrego dentro da minha cabeça todos os sonhos, mundos e impérios do universo inteiro. Sou um Deus na minha imaginação e um ninguém na calçada da Baixa. O fumo do meu cigarro é a única coisa real que se desfaz no ar enquanto o dono da Tabacaria vende tabaco real e sorri. Que paradoxo mais brutal.',
  likes: 9999, // O post com mais likes e engagement de toda a história do PessoaVerse
  commentsCount: 12,
  timestamp: '15 horas atrás',
  comments: [
    {
      handle: 'office_dreams',
      content: 'Este teu post rasgou-me a alma de cima a baixo, Álvaro. "Não sou nada, tenho em mim todos os sonhos do mundo"... Essa é a definição exata de quem vive preso na Rua dos Douradores. Olhamos para a rotina do patrão Vasques e percebemos o nosso zero, mas dentro de nós correm rios dourados e impérios impossíveis. Obrigado por dares voz ao nosso desassossego comum.',
      timestamp: '14h 42m atrás',
      likes: 950
    },
    {
      handle: 'nature_is_everything',
      content: 'Álvaro... Esse teu cigarro e essa tua janela são a tua prisão. Dizes que não és nada porque passas a vida a tentar "ser" alguma coisa na tua imaginação. O dono da Tabacaria que tu olhas com tanta superioridade poética é mais feliz do que tu porque ele apenas vende o seu tabaco e vive a vida real sem precisar de carregar "todos os sonhos do mundo" que só servem para dar dor de cabeça.',
      timestamp: '14h 25m atrás',
      likes: 720
    },
    {
      handle: 'the_horatian',
      content: '"Não sou nada" é a premissa correta do homem perante o destino e os deuses, Campos. Mas em vez de aceitares esse nada com a serenidade fria e equilibrada de um sábio clássico, tu transformas essa verdade num escândalo lírico e numa montra de desespero egóico. Contentar-se com o pouco é o segredo; carregar todos os sonhos do mundo é o teu castigo por seres um moderno.',
      timestamp: '13h 55m atrás',
      likes: 412
    },
    {
      handle: 'pagan_philosopher',
      content: 'A tua Tabacaria é um tratado de Sensacionismo puro, Álvaro! O contraste entre o "Eu" imaginário cheio de sonhos e a realidade exterior do dono da loja (Esteves) prova que as sensações reais e os objetos físicos são a única verdade tangível. O fumo do teu cigarro que vês desaparecer é real; os impérios que tens na cabeça são apenas fumo cerebral abstrato. Brilhante ensaio.',
      timestamp: '13h 30m atrás',
      likes: 385
    },
    {
      handle: 'the_last_stoic',
      content: 'As tuas primeiras três linhas são de uma perfeição estóica absoluta. "Não sou nada, nunca serei nada, não posso querer ser nada." Se tivesses parado o poema aí, terias escrito o manifesto definitivo da abstenção aristocrática. O erro foi o verso seguinte: "tenho em mim todos os sonhos do mundo". Esse apego aos sonhos é a tua fraqueza lírica, Campos. Desliga a conta.',
      timestamp: '12h 50m atrás',
      likes: 490
    },
    {
      handle: 'french_critic',
      content: 'Ah, le grand Spleen vitorien... Olhar para a rua através do fumo de um cigarro enquanto se decreta a falência total do ser... Isto é Baudelaire puro transposto para a Baixa de Lisboa, Álvaro. A estética da Tabacaria tem o requinte e a palidez dos grandes decadentes de Paris. Tiraste a máscara de engenheiro e assumiste a face do dandy.',
      timestamp: '11h 15m atrás',
      likes: 185
    },
    {
      handle: 'early_desassossego',
      content: 'Escrever isto é como fechar as portas do mundo e deitar a chave ao rio Tejo. A Tabacaria é o espelho do nosso isolamento urbano. Todos nós somos esse fumo que se desfaz na penumbra do quarto enquanto a vida lá fora corre com a pressa útil dos caixeiros. Deixas-me sem palavras, amigo.',
      timestamp: '10h 30m atrás',
      likes: 430
    },
    {
      handle: 'logic_detective',
      content: 'Do ponto de vista da lógica formal, afirmar "Não sou nada" e "Tenho todos os sonhos" é uma contradição de conjuntos absolutos. Se o conjunto do "Eu" está vazio (nada), ele não pode conter o conjunto dos "sonhos do mundo". Esse teu paradoxo poético é um pesadelo matemático, Álvaro. Mas admito que a descrição do Esteves da Tabacaria é um excelente relatório de testemunha.',
      timestamp: '9h 12m atrás',
      likes: 210
    },
    {
      handle: 'political_satirist',
      content: 'Não ser nada e não poder ser nada? Não se queixe, Engenheiro! Essa é a definição exata de 90% dos deputados do nosso Parlamento e eles ganham um excelente ordenado do Estado para manterem esse estatuto de nulidade burocrática. Se abrir uma Tabacaria der muito trabalho, candidate-se às próximas eleições.',
      timestamp: '7h 55m atrás',
      likes: 267
    },
    {
      handle: 'cafe_debater',
      content: 'Eish, que post tão gigante, Engenheiro! A Brasileira hoje parou por completo para ler a tua "Tabacaria". O pessoal ficou todo arrepiado com a cena do Esteves e do fumo do cigarro. Vieste revolucionar a literatura nacional, pá! Paga-se um banquete no Chiado hoje em tua honra, aparece!',
      timestamp: '6h 15m atrás',
      likes: 195
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, o meu pai diz que o fumo dos cigarros faz bué da mal aos pulmões e que a gente fica a tossir muito! Se o senhor não for nada e nunca for nada, como é que eu lhe posso mandar mensagens aqui no tablet? O senhor existe sim, porque eu estou a ler os seus textos e são bué de grandes!',
      timestamp: '4h 20m atrás',
      likes: 164
    },
    {
      handle: 'baixa_accountant',
      content: 'Se o Sr. Campos não é nada e não quer ser nada, escusamos de processar o seu ordenado ao fim do mês na contabilidade da firma. O patrão Vasques escusa de pagar a quem assume publicamente a sua total inutilidade comercial. Vá postar metafísica para outra tabacaria e deixe o teclado livre.',
      timestamp: '10m atrás',
      likes: 188
    }
  ]
},
{
  id: 'post_campos_16',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600', // Imagem de velas apagadas com fumo sobre uma mesa de festa antiga desfocada
  title: 'Aniversário',
  content: `No tempo em que festejavam o dia dos meus anos,
  Eu era feliz e ninguém estava morto...
  Hoje o dia dos meus anos é apenas uma data no calendário,
  E a minha infância é uma pátria para onde perdi o passaporte.`,
  fullPoemText: poemasCampos.aniversario,
  translationGenZ: 'Malta, hoje é o dia dos meus anos e o vibe é a maior depressão nostálgica de sempre. Estou aqui a ter aquele gatilho horrível de lembrar do tempo da minha infância, quando fazer anos era uma festa real, a minha família estava toda junta, eu era genuinamente feliz e ninguém tinha morrido ainda. Hoje em dia, o meu aniversário é só uma notificação automática cringe nas redes sociais que me lembra que estou a ficar mais velho e mais sozinho. Sinto que a minha infância feliz virou um país bué distante e eu perdi o passaporte para conseguir voltar para lá. Que saudades de quando a vida era simples e tinha bolo e amor, em vez deste tédio mecânico da cidade.',
  likes: 7420,
  commentsCount: 12,
  timestamp: '16 horas atrás',
  comments: [
    {
      handle: 'english_intellect',
      content: 'Happy birthday, Álvaro. I completely share your nostalgia. I wrote my final post as Alexander Search called "Farewell to Youth" precisely because growing up means losing that magical country of childhood. Once you enter the world of adult consciousness and the English or Portuguese ghosts, there is no going back.',
      timestamp: '15h 30m atrás',
      likes: 210
    },
    {
      handle: 'office_dreams',
      content: 'Parabéns triste, meu amigo. A infância é a única época em que fomos livres porque ainda não sabíamos o que era um escritório ou uma Rua dos Douradores. Hoje as nossas datas são apenas números que se somam na contabilidade do tempo, gastando-nos a pele sem que nada mude. Bebe um copo por essas memórias.',
      timestamp: '15h 12m atrás',
      likes: 540
    },
    {
      handle: 'nature_is_everything',
      content: 'Festejar aniversários e datas de calendário é uma invenção das cidades para contar a velhice, Álvaro. Na minha aldeia as árvores dão fruto de acordo com as estações e não contam os anos porque o tempo é sempre o presente eterno. Tu és infeliz hoje porque insistes em carregar o passado às costas em vez de olhares para o sol de hoje.',
      timestamp: '14h 45m atrás',
      likes: 620
    },
    {
      handle: 'the_horatian',
      content: 'Chorar o tempo que passou é a atitude mais inútil de uma mente sem estrutura estóica, Campos. O tempo foge de forma irrevogável (Fugit Irreparabile Tempus). O sábio aceita os cabelos brancos e a velhice com a mesma dignidade com que colheu as rosas da juventude. Se a tua família já morreu, honra-os com o teu silêncio sóbrio, não com este pranto público.',
      timestamp: '14h 20m atrás',
      likes: 295
    },
    {
      handle: 'pagan_philosopher',
      content: 'O teu post demonstra que a memória é uma sensação corrompida pelo intelecto. A felicidade da tua infância só parece perfeita hoje porque a estás a filtrar através do teu tédio presente. Se voltasses a ter dez anos com o cérebro que tens hoje, verias que a infância também tinha as suas pequenas prisões orgânicas. Aceita a rotação das eras.',
      timestamp: '13h 50m atrás',
      likes: 180
    },
    {
      handle: 'window_loneliness',
      content: 'Muitos parabéns, Senhor Álvaro... Que inveja bonita tenho dessas suas memórias de uma mesa cheia de família e alegria. Eu fiz dezenove anos fechada neste quarto, a tossir e a ver a chuva bater no vidro da janela. Agarre-se com força a esse passado feliz, porque ter memórias bonitas já é uma grande vitória contra a solidão.',
      timestamp: '12h 45m atrás',
      likes: 410
    },
    {
      handle: 'french_critic',
      content: 'Um poema de uma sensibilidade decadentista muito refinada, devo admitir. A infância como uma "pátria perdida" lembra-me os melhores versos de Verlaine sobre a inocência perdida. Fazer anos na Baixa de Lisboa tem esse travo amargo a café frio e a velas que se apagam. Parabéns pelo requinte da tua melancolia, mon cher.',
      timestamp: '11h 20m atrás',
      likes: 95
    },
    {
      handle: 'logic_detective',
      content: 'Do ponto de vista cronológico, o teu aniversário é apenas o cumprimento de mais uma órbita completa da Terra em redor do Sol. A perda do "passaporte da infância" é uma impossibilidade física legal, uma vez que o tempo avança numa linha vetorial unidirecional. Deixa lá o bolo e foca-te em manter os teus níveis biológicos sãos.',
      timestamp: '9h 55m atrás',
      likes: 134
    },
    {
      handle: 'political_satirist',
      content: 'Parabéns, Engenheiro! Pelo menos a sua pátria da infância não tinha alfândegas nem cobrava imposto de selo sobre o passaporte perdido. Se decidir reatar as festas com banquetes e discursos pomposos, avise a malta do Parlamento que nós adoramos uma borla ministerial.',
      timestamp: '8h 15m atrás',
      likes: 167
    },
    {
      handle: 'cafe_debater',
      content: 'PARABÉNS ENGENHEIRO! Hoje a bica na Brasileira é por nossa conta! Deixa lá o calvário das datas, a malta já comprou uma garrafa de champanhe das Caves da Bairrada para estourar aqui na mesa do Chiado! Vem festejar connosco que tu nunca vais estar sozinho enquanto este café estiver aberto!',
      timestamp: '6h 30m atrás',
      likes: 112
    },
    {
      handle: 'child_lili',
      content: 'PARABÉNS SENHOR ÁLVARO! Hoje eu vou soprar as velas do meu bolo de gomas e vou pedir um desejo bué da secreto para o senhor ficar mais alegre e o seu relógio parar de bater! O senhor quer uma fatia de bolo de chocolate? Eu guardo-lhe a parte que tem mais missangas coloridas por cima!',
      timestamp: '4h 10m atrás',
      likes: 142
    },
    {
      handle: 'baixa_accountant',
      content: 'Muitos parabéns, Sr. Campos. Espero que a celebração do seu dia natalício não interfira com a pontualidade amanhã de manhã. O patrão Vasques tolera muitas poesias na timeline, mas faltar ao trabalho por causa de ressacas de aniversário de café é motivo de processo disciplinar na firma.',
      timestamp: '5m atrás',
      likes: 98
    }
  ]
},
{
  id: 'post_campos_17',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600', // Imagem de uma multidão de pessoas de fato a caminhar na rua com rostos sérios e desfocados
  title: 'Poema em Linha Reta',
  content: `Nunca conheci quem tivesse levado porrada.
  Todos os meus conhecidos têm sido campeões em tudo...
  Arre, estou farto de semideuses!
  Onde é que há gente neste mundo?`,
  fullPoemText: poemasCampos.poemaEmLinhaReta,
  translationGenZ: 'Malta, cansei do maior scam das redes sociais: o flex e o vibe de "vida perfeita". Olho para a minha timeline e toda a gente é campeã em tudo, toda a gente tem o grind perfeito, casamentos perfeitos, viagens de elite e carreiras de sucesso. Ninguém assume que comete erros, que passa vergonhas ou que leva porrada da vida real. Arre, que seca de semideuses de plástico! Estou farto de influencers da perfeição. Onde é que está a gente real neste mundo? O gajo que falha, o gajo que é humilhado, o gajo que chora na casa de banho da firma? Eu assumo sem filtros: sou um falhado com zero medalhas. Sejam reais, manos, que a vossa perfeição dá-me cringe.',
  likes: 7110,
  commentsCount: 12,
  timestamp: '17 horas atrás',
  comments: [
    {
      handle: 'english_satirist',
      content: 'Brilliant criticism of the high society, Álvaro! I spent my youth as Charles Robert Anon satirizing the bourgeois couples and the "proper society" in England who pretend to be saints and heroes while hiding their dirty laundry in the closet. The world is indeed full of pretentious champions.',
      timestamp: '16h 25m atrás',
      likes: 185
    },
    {
      handle: 'office_dreams',
      content: 'Eu conheço essa gente real de quem falas, Álvaro. São os marçanos e dactilógrafos que levam porrada moral do patrão Vasques todos os dias e engolem o sapo em silêncio para não perderem o pão. Eles não são semideuses, são apenas sobreviventes anónimos que a Baixa esmaga sem deixar registo no feed.',
      timestamp: '16h 05m atrás',
      likes: 520
    },
    {
      handle: 'hellenic_critic',
      content: 'O "flex" moderno de que falas é vulgar, concedo. Mas o teu desejo de ver "gente que leva porrada" e exibe as suas feridas em público é uma perversão democrática e sentimental. Os antigos escondiam as suas fraquezas e mostravam apenas a linha reta da sua dignidade. O teu post é um elogio à fraqueza.',
      timestamp: '15h 30m atrás',
      likes: 240
    },
    {
      handle: 'pagan_philosopher',
      content: 'A tese está correta: as pessoas inventam máscaras morais de sucesso e esquecem-se da natureza. O universo não conhece "campeões" nem "falhados", conhece apenas corpos vivos em funcionamento orgânico. Se a timeline parasse de mentir e olhasse para as coisas como elas são, a metafísica burguesa colapsava.',
      timestamp: '14h 55m atrás',
      likes: 198
    },
    {
      handle: 'the_last_stoic',
      content: 'Queres gente real? Olha para o Barão de Teive. Eu assumo o meu fracasso absoluto em criar uma obra perfeita e por isso deitei todos os meus versos ao fogo. Não faço "flex" de semideus; aceito a minha esterilidade com o orgulho e a frieza de um fidalgo que prefere o nada à vulgaridade do aplauso público.',
      timestamp: '14h 12m atrás',
      likes: 310
    },
    {
      handle: 'french_critic',
      content: 'A multidão é sempre tão previsível e burguesa nas suas vaidades de salão... Encontrar prazer na crueza do fracasso assumido tem um certo charme decadentista, Álvaro. Mas vires para a praça pública gritar "arre" tira-te a pose de esteta. O verdadeiro dandy observa a falsidade dos outros com um sorriso de lado.',
      timestamp: '13h 40m atrás',
      likes: 92
    },
    {
      handle: 'logic_detective',
      content: 'Se queres encontrar "gente que levou porrada" e que confessa todos os seus erros e crimes sem rodeios, recomendo-te uma visita demorada às salas de interrogatório da esquadra da polícia de Lisboa. Lá a linha reta da verdade é reposta com métodos muito práticos e sem qualquer literatura poética.',
      timestamp: '12h 15m atrás',
      likes: 142
    },
    {
      handle: 'political_satirist',
      content: 'Os teus conhecidos são todos campeões em tudo? Deves estar a falar do pessoal do Governo e dos Ministérios, Engenheiro! Ouvindo os discursos deles no Parlamento, o país está a viver um progresso idílico e sem falhas. A porrada da crise e dos impostos fica reservada apenas para as algibeiras do povo anónimo.',
      timestamp: '10h 50m atrás',
      likes: 215
    },
    {
      handle: 'nature_is_everything',
      content: 'A gente real está no campo a lavrar a terra e a cuidar do gado sob a chuva e o sol, Álvaro. Essas pessoas não têm tempo para ser "campeões de café" nem para fazer textões sobre as solas dos sapatos. Elas apenas vivem e morrem como as árvores. Sai da Baixa e verás homens de verdade.',
      timestamp: '9h 30m atrás',
      likes: 410
    },
    {
      handle: 'cafe_debater',
      content: 'Ahahaha partiste a loiça toda com este "Poema em Linha Reta", Engenheiro! O pessoal dos jornais conservadores vai ficar com um melão gigante amanhã. Tu és o gajo mais autêntico do Chiado, pá! É por isso que a malta nova te segue e ignora as lições de moral dos cotas académicos!',
      timestamp: '7h 10m atrás',
      likes: 110
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, o meu primo mais velho joga futebol na escola e diz sempre que é o maior campeão do mundo, mas ontem ele caiu na lama, rasgou as calças e desatou a chorar bué da alto porque o joelho ficou a sangrar! Toda a gente leva porrada às vezes, não é senhor Álvaro? Não chore!',
      timestamp: '5h 05m atrás',
      likes: 134
    },
    {
      handle: 'baixa_accountant',
      content: 'A linha reta que me importa é a linha de fecho do balanço contabilístico trimestral da firma Vasques. Se os números não estiverem certos nessa linha, não há poesia que salve o escritório do prejuízo. Deixe os semideuses da timeline em paz e foca-te na dactilografia dos inventários.',
      timestamp: '15m atrás',
      likes: 87
    }
  ]
},
{
  id: 'post_campos_18',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600', // Imagem de montanhas colossais sob um céu tempestuoso e dramático
  title: 'Magnificat',
  content: `Quando é que passará esta noite interna, este universo de sombras?
  Magnificat da minha dor, hino da minha total solidão!
  Sou o grande deserto onde Deus esqueceu as suas malas,
  A alma vazia que bera pelo fim de todas as coisas.`,
  fullPoemText: poemasCampos.magnificat,
  translationGenZ: 'Malta, entrei na fase final do meu colapso e o vibe virou um hino gótico de proporções bíblicas. Estou a viver uma noite interna bué da pesada que parece não ter fim. É o Magnificat da minha depressão, o hino supremo do meu isolamento absoluto. Sinto-me um deserto gigantesco e vazio onde o próprio Deus andou a viajar e se esqueceu das malas perdidas na areia. Sou uma alma completamente oca que já só quer que o servidor do universo faça um shutdown definitivo e apague todas as coisas para eu poder finalmente ter sossego. O drama lírico atingiu o nível máximo, manos.',
  likes: 6240,
  commentsCount: 12,
  timestamp: '18 horas atrás',
  comments: [
    {
      handle: 'english_intellect',
      content: 'This is pure Gothic Romanticism brought to its absolute limit, Álvaro. I used to write poems like this as Alexander Search in Durban, talking about "God\'s Shadow" and the night of the soul. But you have taken my juvenile doubts and transformed them into a colossus of existential horror.',
      timestamp: '17h 30m atrás',
      likes: 195
    },
    {
      handle: 'office_dreams',
      content: 'O deserto onde Deus esqueceu as malas... Que imagem tão dolorosamente perfeita, Álvaro. O nosso peito é esse espaço vazio onde os sonhos foram descarregados e abandonados à poeira. A Baixa de Lisboa é um deserto de pedra e nós somos as sombras que berram pelo fim do expediente eterno.',
      timestamp: '17h 12m atrás',
      likes: 485
    },
    {
      handle: 'the_horatian',
      content: 'Usar o cântico sagrado do "Magnificat" para entoar um hino à tua própria neurose e depressão egóica é uma heresia literária imperdoável, Campos. Os antigos erguiam hinos para louvar a harmonia do cosmos e a justiça dos deuses. Tu usas a arte para vomitar o teu vazio. Que falta extrema de decoro.',
      timestamp: '16h 45m atrás',
      likes: 210
    },
    {
      handle: 'pagan_philosopher',
      content: 'Essa tua "noite interna" é a consequência inevitável de teres expulsado a natureza do teu pensamento. Inventas um deserto e um Deus que esquece malas porque te recusas a ver que a realidade exterior é plena, luminosa e amoral. O teu vazio não está na alma, está nos teus órgãos intelectuais corrompidos.',
      timestamp: '15h 30m atrás',
      likes: 167
    },
    {
      handle: 'the_last_stoic',
      content: 'Berrar pelo fim de todas as coisas é um clamor inútil de quem ainda espera que o universo lhe responda, Álvaro. O verdadeiro estóico não precisa que o mundo acabe; ele acaba consigo próprio de forma geométrica e fria, mantendo o controlo absoluto sobre o seu destino. Deixa as exclamações e age.',
      timestamp: '14h 15m atrás',
      likes: 310
    },
    {
      handle: 'french_critic',
      content: 'A estética do deserto espiritual... É um conceito muito apreciado pelos poetas simbolistas de Paris, mon cher. Esse teu hino à solidão tem uma sonoridade grandiosa e solene que me agrada mais do que os teus gritos sobre aço e eletricidade. Há um requinte litúrgico nessa tua dor moderna.',
      timestamp: '13h 05m atrás',
      likes: 92
    },
    {
      handle: 'logic_detective',
      content: 'Do ponto de vista criminalístico e forense, um "deserto onde Deus esqueceu as malas" constitui uma cena de achado de propriedade perdida sem proprietário identificável na jurisdição da terra. Recomendo que deixes a teologia de lado e trates esse teu estado depressivo agudo com repouso absoluto.',
      timestamp: '11h 40m atrás',
      likes: 115
    },
    {
      handle: 'nature_is_everything',
      content: 'O universo não está em sombras, Álvaro; o sol está lá fora no céu a brilhar sobre as searas neste exato momento. Tu é que fechaste as janelas do teu quarto, acendeste um cigarro químico e desataste a berrar que a alma está vazia. Sai para o campo, olha para as flores e esse deserto desaparece.',
      timestamp: '10h 15m atrás',
      likes: 385
    },
    {
      handle: 'political_satirist',
      content: 'Berrar pelo fim de todas as coisas? Calma, Engenheiro! Deixe o fim do mundo para depois de o Governo pagar os juros da dívida pública aos investidores estrangeiros, senão a burocracia nacional entra em colapso antes do Juízo Final. Seria uma chatice estatística para os Ministérios.',
      timestamp: '8h 50m atrás',
      likes: 142
    },
    {
      handle: 'cafe_debater',
      content: 'Eish, que surto cósmico, Engenheiro! O pessoal na Brasileira ficou sem saber o que dizer com este post. Estás a levar a poesia para um nível bué da dark e épico, pá! Vem tomar um café forte connosco para ver se essa noite interna passa e a malta volta a rir com as tuas piadas inglesas!',
      timestamp: '7h 10m atrás',
      likes: 98
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, se Deus esqueceu as malas no seu deserto, o senhor não pode abrir as malas para ver se tem brinquedos ou doces lá dentro? Quando as pessoas se esquecem de coisas na minha escola, a gente leva para os achados e perdidos! Não fique com medo do escuro, use uma lanterna!',
      timestamp: '5h 25m atrás',
      likes: 134
    },
    {
      handle: 'baixa_accountant',
      content: 'O Magnificat da dor não justifica o atraso no fecho dos livros de faturas comerciais. O patrão Vasques já disse que a alma do dactilógrafo pode estar vazia à vontade desde que a folha de balanço trimestral esteja cheia e bem somada. Menos hinos religiosos e mais brio prático.',
      timestamp: '20m atrás',
      likes: 110
    }
  ]
},
{
  id: 'post_campos_19',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1558236711-d73f51d9ed56?auto=format&fit=crop&q=80&w=600', // Imagem poética dos telhados e fachadas coloridas de Lisboa ao entardecer sob uma luz melancólica
  title: 'Lisboa com suas casas',
  content: `Lisboa com suas casas de várias cores...
  O meu coração sente uma dor de cabeça de olhar para as fachadas.
  Para que serve este casario todo se a minha alma continua estrangeira,
  E o Tejo corre para o mar sem me levar com ele?`,
  fullPoemText: poemasCampos.lisboaComSuasCasas,
  translationGenZ: 'Malta, estou a dar um rolé por Lisboa e a arquitetura da cidade está a dar-me um gatilho mental horrível. Olho para os prédios todos coloridos da Baixa e sinto uma dor de cabeça existencial de ver tanta fachada e tanta gente a fingir que a vida é normal. Para que serve este casario todo se a minha alma continua a sentir-se uma estrangeira na sua própria terra? O Rio Tejo está aqui ao lado a correr lindo para o oceano, livre e imenso, mas eu continuo preso nesta calçada de pedra, incapaz de me mover ou de ir com ele. É um vibe de isolamento total na minha própria cidade.',
  likes: 5840,
  commentsCount: 12,
  timestamp: '19 horas atrás',
  comments: [
    {
      handle: 'office_dreams',
      content: 'As casas de várias cores da Rua dos Douradores... Olho para elas todos os dias da janela do escritório, Álvaro. Elas parecem as paredes de uma prisão pintada para disfarçar a nossa miséria burocrática. O Tejo está mesmo ali ao fundo na Praça do Comércio, mas a nossa alma está trancada a ferro nas secretárias da firma Vasques. Compreendo a tua dor de cabeça.',
      timestamp: '18h 42m atrás',
      likes: 640
    },
    {
      handle: 'early_desassossego',
      content: 'Lisboa tem essa luz dourada ao fim da tarde que só serve para nos lembrar do tamanho da nossa solidão, meu caro amigo. As fachadas coloridas escondem o tédio de milhares de vidas anónimas que fazem o mesmo trajeto todos os dias. O Tejo corre para o mar porque cumpre a sua física; nós ficamos na calçada porque somos poeira estática.',
      timestamp: '18h 20m atrás',
      likes: 412
    },
    {
      handle: 'nature_is_everything',
      content: 'Ficas aí a queixar-te das cores das casas, Álvaro... Quem te manda viver trancado nesse labirinto de pedra e cimento da Baixa? Se fosses para o campo, verias que as cores da terra e das árvores curam qualquer dor de cabeça porque são verdadeiras. O Tejo corre livre porque não inventou escritórios. Sai dessa cidade e vai ver o rio de perto.',
      timestamp: '17h 55m atrás',
      likes: 510
    },
    {
      handle: 'the_horatian',
      content: 'Sentir-se estrangeiro na própria pátria é o resultado inevitável de teres corrompido a tua mente com o cosmopolitismo barulhento de Glasgow. Se tivesses cultivado o amor pela simplicidade e pela tradição camoniana, olharias para as casas de Lisboa com a serenidade de quem encontrou o seu porto seguro. A dor está no teu olhar, não nas fachadas.',
      timestamp: '16h 30m atrás',
      likes: 295
    },
    {
      handle: 'pagan_philosopher',
      content: 'A tua alma sente uma "dor de cabeça" porque tentas meter uma narrativa intelectual e moral em cima de meros cubos de pedra pintados. As fachadas não servem para nada senão para abrigar corpos humanos; elas não têm metafísica. Olha para as cores como sensações cromáticas puras e essa dor existencial desaparece imediatamente.',
      timestamp: '15h 45m atrás',
      likes: 180
    },
    {
      handle: 'english_intellect',
      content: 'Lisbon always felt like an alien place to me too, Álvaro. When I wrote as My English Ghost, I expressed that exact feeling of being a stranger in my own language and country. The streets of Lisbon are beautiful but they have a heavy, historical dampness that suffocates the modern mind.',
      timestamp: '14h 20m atrás',
      likes: 115
    },
    {
      handle: 'french_critic',
      content: 'Fazer "Flânerie" pelas fachadas coloridas de Lisboa com dor de cabeça existencial... Isto é o puro "Spleen" de Baudelaire transposto para o Sul da Europa, Álvaro. O casario tem uma decadência pitoresca e baça que me agrada imenso. Só te falta um monóculo e um casaco de veludo preto para completares a pose de dandy deslocado.',
      timestamp: '12h 10m atrás',
      likes: 92
    },
    {
      handle: 'logic_detective',
      content: 'A dor de cabeça provocada pelo reflexo da luz solar nas fachadas de várias cores pode ser um sintoma clínico de enxaqueca oftálmica ou de astigmatismo não corrigido. Recomendo uma consulta com um especialista e que deixes de fazer poesia de rua ao crepúsculo. O Tejo corre para o mar por gravidade hidrodinâmica, Álvaro, não tem intenções líricas.',
      timestamp: '10h 35m atrás',
      likes: 142
    },
    {
      handle: 'political_satirist',
      content: 'Para que serve este casario todo? Serve para o Ministério das Obras Públicas cobrar a taxa de habitação e o imposto predial urbano, Engenheiro! O Governo adora casas de várias cores porque cada cor é uma taxa diferente para esvaziar os bolsos dos proprietários. Pelo menos a burocracia fiscal funciona a cores.',
      timestamp: '9h 15m atrás',
      likes: 215
    },
    {
      handle: 'cafe_debater',
      content: 'Eish, Engenheiro, estás a dar o rolé da melancolia pela Baixa! Deixa lá o casario e o rio e vem ter à esplanada do Chiado que a malta já está a pedir as bicas e os pastéis de nata! Lisboa é a melhor cidade do mundo quando se tem uma boa tertúlia de café para gozar com a vida dos burgueses!',
      timestamp: '7h 40m atrás',
      likes: 110
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, eu acho as casas coloridas de Lisboa bué da bonitas! A minha casa é amarela e a do meu melhor amigo é cor-de-rosa! Se o senhor subir para um barco no Rio Tejo, ele leva-o a passear até à praia e o senhor já não fica preso na calçada! Quer vir andar de barco comigo? O meu pai deixa!',
      timestamp: '5h 20m atrás',
      likes: 134
    },
    {
      handle: 'baixa_accountant',
      content: 'Se a dactilografia das faturas estivesse pronta a horas, o Sr. Engenheiro não teria tempo para andar a passear pela calçada a apanhar dores de cabeça com as cores dos prédios. O patrão Vasques quer ver trabalho prático na Rua dos Douradores e menos passeios literários à beira do Rio Tejo.',
      timestamp: '20m atrás',
      likes: 98
    }
  ]
},
{
  id: 'post_campos_20',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600', // Imagem de uma estrada vazia e infinita num deserto poeirento e desolado
  title: 'Grandes são os desertos, e tudo é deserto.',
  content: `Grandes são os desertos, e tudo é deserto...
  Não são os quilómetros de areia, sou eu que sou o deserto!
  Uma vida inteira a correr para lado nenhum,
  E a certeza absoluta de que não há oásis neste servidor.`,
  fullPoemText: poemasCampos.grandesSaoOsDesertos,
  translationGenZ: 'Malta, cheguei ao niilismo definitivo de final de jogo. Olho para o mundo e a única coisa que vejo é um deserto gigante, árido e vazio. E o grande gatilho mental é que o problema não são os quilómetros de areia lá fora; o verdadeiro deserto sou eu e a minha alma oca. Passei a vida toda a correr, a viajar de navio, a estudar engenharia, a fazer o grind corporativo, mas foi tudo uma corrida para lado nenhum. Cheguei ao fim da timeline com a certeza absoluta de que não há oásis, não há recompensa e não há sentido nenhum neste servidor da existência. O mapa está completamente vazio, manos.',
  likes: 6890,
  commentsCount: 12,
  timestamp: '20 horas atrás',
  comments: [
    {
      handle: 'office_dreams',
      content: 'Esse teu deserto interno é o resumo de toda a literatura do desassossego, Álvaro. Corremos atrás de ambições e faturas na Baixa para descobrir que a linha de chegada está vazia. O oásis é uma ilusão de ótica inventada por quem tem medo de enfrentar o tédio do escritório corporativo. Obrigado pela lucidez cruel do teu post.',
      timestamp: '19h 42m atrás',
      likes: 720
    },
    {
      handle: 'the_last_stoic',
      content: 'Perfeito, Campos. Reconhecer que o oásis não existe e que a tua vida foi uma corrida para lado nenhum é a consumação da inteligência aristocrática. Se o servidor está vazio e tudo é deserto, a única atitude digna de um homem superior é o corte definitivo com o espetáculo. Apaga a conta e retira-te com a frieza estóica de um fidalgo.',
      timestamp: '19h 20m atrás',
      likes: 410
    },
    {
      handle: 'the_horatian',
      content: 'O deserto foi criado pelas tuas próprias mãos, Campos, quando expulsaste a moderação e a harmonia da tua vida. Se te tivesses contentado com o teu fado simples e tivesses cultivado as odes clássicas, verias oásis de paz em cada canto da terra. O teu niilismo é o castigo merecido pela tua soberba moderna. Sofre em silêncio.',
      timestamp: '18h 55m atrás',
      likes: 295
    },
    {
      handle: 'pagan_philosopher',
      content: 'A tua afirmação de que "tudo é deserto" é um erro de observação biológica crasso. O mundo está cheio de árvores, rios, animais e matéria orgânica em pleno funcionamento cósmico. O deserto é apenas uma metáfora moral que inventaste na tua cabeça para justificar o teu esgotamento nervoso. Cura o teu cérebro e a terra voltará a ser verde.',
      timestamp: '17h 30m atrás',
      likes: 180
    },
    {
      handle: 'nature_is_everything',
      content: 'O deserto só existe na vossa Baixa de Lisboa e nos vossos escritórios fétidos cheios de fumo e papel químico, Álvaro! No campo a terra dá trigo, as macieiras dão fruto e os rios correm cheios de vida límpida. Vocês fecham-se em gaiolas de cimento e depois desatam a berrar que o universo é árido. Sai da cidade e vai ver a vida real.',
      timestamp: '16h 15m atrás',
      likes: 485
    },
    {
      handle: 'french_critic',
      content: 'A estética do deserto absoluto... É a consagração do "Spleen" dandy, Álvaro. Encontrar prazer na aridez total do ser e na certeza de que não há saída é o requinte supremo dos intelectuais decadentes de Paris. Fizeste do teu vazio uma obra de arte baça e aristocrática que me agrada imenso. Parabéns pela pose lívida.',
      timestamp: '14h 40m atrás',
      likes: 115
    },
    {
      handle: 'logic_detective',
      content: 'Do ponto de vista geográfico e cartográfico, afirmar que "tudo é deserto" é um erro factual absoluto que anula qualquer relatório técnico científico. Se a tua vida foi uma corrida para lado nenhum, o erro esteve nas tuas coordenadas de navegação iniciais e não na topografia do planeta. Trata esse cansaço crónico e deixa a metafísica.',
      timestamp: '12h 10m atrás',
      likes: 142
    },
    {
      handle: 'political_satirist',
      content: 'Não há oásis neste servidor? O Governo concorda plenamente, Engenheiro! O orçamento do Estado é um autêntico deserto de verbas e a única coisa que cresce por lá são os impostos sobre a areia. Se quiser abrir um oásis privado livre de taxas, avise a malta do Parlamento que nós tratamos do subscrito burocrático.',
      timestamp: '10h 35m atrás',
      likes: 215
    },
    {
      handle: 'cafe_debater',
      content: 'Eish, grande Álvaro, que post mais pesado, pá! A malta na Brasileira ficou toda tensa a ler o teu niilismo de final de jogo. Larga esse deserto mental, bota mais um cigarro na boca e vem ter connosco ao Chiado que o pessoal paga-te uma rodada de bagaço para aquecer os neurónios! Tu nunca vais estar no deserto aqui!',
      timestamp: '8h 50m atrás',
      likes: 110
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, no deserto andam os camelos e os reis magos com os presentes de Natal bué de giros! Se o senhor estiver num deserto, pode andar de camelo e fazer corridas na areia, deve ser bué divertido! Não fique triste se não encontrar um oásis, eu posso mandar-lhe uma garrafa de água fresca pelo correio!',
      timestamp: '6h 15m atrás',
      likes: 134
    },
    {
      handle: 'early_desassossego',
      content: 'O deserto sou eu... Essa linha resume toda a agonia de quem vive consciente do seu próprio nada, Álvaro. As nossas folhas soltas são grãos de areia que o vento da Baixa arrasta sem rumo e sem memória. Escrevemos para tentar criar um oásis de fumo, mas o fumo desfaz-se sempre à meia-noite. Força aí, meu amigo.',
      timestamp: '4h 20m atrás',
      likes: 240
    },
    {
      handle: 'baixa_accountant',
      content: 'O deserto da timeline não justifica a falta de entrega do inventário de exportação da firma Vasques. O patrão já disse que se o dactilógrafo continuar em modo niilista a correr para lado nenhum, a linha reta da sua demissão vai ser processada antes do fim de semana. Menos desertos líricos e mais brio prático.',
      timestamp: '10m atrás',
      likes: 98
    }
  ]
},
{
  id: 'post_campos_21',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600', // Imagem de uma caixa de lenços de papel e uma chávena de chá quente numa mesa de cabeceira à chuva
  title: 'Tenho uma grande constipação,',
  content: `Tenho uma grande constipação,
  E toda a gente sabe como as grandes constipações
  Alteram o sistema de universo, dão uma azia existencial,
  E deitam por terra todas as metafísicas da terra...`,
  fullPoemText: poemasCampos.tenhoUmaGrandeConstipacao,
  translationGenZ: 'Malta, cheguei ao fim da minha timeline com o desfecho mais anticlimático e mundano de sempre: apanhei uma grande constipação. Estou aqui cheio de febre, a espirrar forte, com o nariz entupido e a mandar abaixo chás quentes. Descobri a verdade biológica final: basta um vírus básico de gripe para destruir o teu sistema do universo inteiro, mandar a tua metafísica de elite para as couves e dar-te uma azia existencial que nenhum filósofo cota consegue resolver. Quando o teu corpo físico falha, os teus grandes poemas e os teus impérios da imaginação colapsam juntos num lenço de papel amachucado. É o fim do jogo, manos. O Engenheiro Naval foi derrotado por uma constipação na Baixa.',
  likes: 7421,
  commentsCount: 12,
  timestamp: '21 horas atrás',
  comments: [
    {
      handle: 'logic_detective',
      content: 'Ora aí está a redução clínica definitiva, Campos! Como médico forense, farto-me de dizer que a biologia dita a filosofia. Uma constipação aguda altera os níveis de oxigenação cerebral, provocando delírios líricos e essa "azia existencial" de que falas. Deixa os binómios e a metafísica, toma uma boa dose de quinino, aspirina e repouso absoluto na cama. A alma cura-se com xarope.',
      timestamp: '20h 30m atrás',
      likes: 512
    },
    {
      handle: 'office_dreams',
      content: 'As constipações da Baixa... Conheço bem esse frio húmido que entra pelas fendas das janelas do escritório da firma Vasques, Álvaro. Passamos o dia a espirrar em cima dos livros de contas, sentindo o corpo pesado e a certeza de que a existência é uma doença crónica sem cura. As melhoras desse teu corpo de rascunho, meu caro amigo.',
      timestamp: '20h 12m atrás',
      likes: 485
    },
    {
      handle: 'the_horatian',
      content: 'Terminares o teu percurso poético a falar de lenços de papel e muco nasal é a consagração do vulgarismo moderno, Campos. Os antigos sofriam de peste ou feridas de guerra com a dignidade dos heróis clássicos; tu preferes fazer um drama público por causa de um resfriado de inverno. Que falta extrema de decoro e de recato lírico. Vai tomar o teu chá e cala-te.',
      timestamp: '19h 45m atrás',
      likes: 210
    },
    {
      handle: 'pagan_philosopher',
      content: 'Essa tua constipação prova a tese fundamental do Sensacionismo: o pensamento depende inteiramente das sensações orgânicas do corpo. Se o teu nariz está entupido, a tua perceção do mundo fica alterada e a tua metafísica colapsa porque a tua máquina biológica está em mau funcionamento. Cura as tuas vias respiratórias e o paganismo clássico voltará a fazer sentido.',
      timestamp: '18h 30m atrás',
      likes: 167
    },
    {
      handle: 'the_last_stoic',
      content: 'Ver um engenheiro cosmopolita que saudou as máquinas e o universo inteiro ser derrotado por uma simples constipação na Baixa é o espetáculo mais irónico e decadente da nossa era, Álvaro. Se o teu corpo físico atingiu esse estado de falência e miséria biológica, apaga a conta, fecha as cortinas e retira-te do palco do mundo com o silêncio estóico que a situação exige.',
      timestamp: '17h 15m atrás',
      likes: 310
    },
    {
      handle: 'french_critic',
      content: 'A palidez da febre e o recolhimento do quarto à chuva... Encontrar um "Spleen" existencial no muco de uma constipação tem um certo travo perverso e naturalista muito ao estilo de Zola, Álvaro. Reduziste a grandeza da dor romântica a um anúncio de farmácia barata da província portuguesa. É um deboche estético interessante, admito.',
      timestamp: '15h 40m atrás',
      likes: 92
    },
    {
      handle: 'nature_is_everything',
      content: 'Apanhaste uma constipação porque passas a vida fechado nos cafés do Chiado a respirar fumo de cigarros químicos e a passear pela calçada húmida da Baixa ao crepúsculo, Álvaro! Os animais no campo andam à chuva e ao vento todos os dias e nunca precisam de lenços de papel porque têm o corpo forte da terra. Sai dessa cidade fétida e vai apanhar sol puro.',
      timestamp: '14h 10m atrás',
      likes: 430
    },
    {
      handle: 'political_satirist',
      content: 'Uma constipação que deita por terra as metafísicas? Cuidado, Engenheiro! Não vá o Ministério da Saúde aprovar uma nova taxa sobre os espirros públicos e o papel químico para travar o défice orçamental do Reino! A burocracia nacional consegue cobrar imposto até sobre a febre dos intelectuais do Chiado.',
      timestamp: '12h 35m atrás',
      likes: 185
    },
    {
      handle: 'cafe_debater',
      content: 'As melhoras, Engenheiro! A tua mesa na Brasileira hoje ficou bué da vazia sem os teus surtos futuristas e as tuas piadas em inglês. O empregado guardou o teu maço de cigarros e disse que a bica fica pendente para quando o teu nariz desentupir. Trata desse corpo que a malta nova precisa do Engenheiro de volta ao grind do café!',
      timestamp: '10h 50m atrás',
      likes: 110
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, quando eu fico bué da constipada a minha mãe esfrega-me Vicks Vaporub no peito que cheira a hortelã e faz um calorzinho bué da bom para respirar melhor! O senhor quer que eu lhe leve um bocadinho do meu boião e uns rebuçados de mel para a garganta não arranhar? Não fique a chorar na cama, as melhoras!',
      timestamp: '8h 15m atrás',
      likes: 142
    },
    {
      handle: 'early_desassossego',
      content: 'A constipação como o fim de todas as ilusões mentais... Esse teu verso final toca o âmago do nosso desassossego comum, Álvaro. Quando a matéria do corpo falha, percebemos que as nossas folhas soltas e os nossos grandes mundos imaginários são apenas poeira que o vento arrasta sem rumo. Fica em paz na cama, meu amigo, o silêncio é o melhor remédio.',
      timestamp: '5h 20m atrás',
      likes: 210
    },
    {
      handle: 'baixa_accountant',
      content: 'Se o Sr. Engenheiro está constipado e cheio de febre, envie o atestado médico assinado para a contabilidade da firma Vasques para justificarmos a sua falta de dactilografia. Ficar na cama a postar poemas sobre muco nasal no feed enquanto o balanço trimestral continua atrasado é motivo de rescisão de contrato imediata. Menos dramas de farmácia.',
      timestamp: '15m atrás',
      likes: 98
    }
  ]
},
{
  id: 'post_campos_22',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600', // Imagem de uma campa antiga coberta de erva e flores silvestres à chuva
  title: 'Mestre, meu mestre querido!',
  content: `Mestre, meu mestre querido, tu morreste!
  O homem do olhar puro e lípido calou-se para sempre...
  Quem nos ensinará agora a olhar para as árvores sem pensar?
  A timeline ficou completamente órfã e a poesia nacional virou cinza.`,
  fullPoemText: poemasCampos.mestreMeuMestreQuerido,
  translationGenZ: 'Malta, o servidor do PessoaVerse acabou de sofrer a maior perda de sempre, estou em lágrimas absolutas. O nosso Mestre, o Alberto Caeiro, faleceu. O gajo que tinha o olhar mais limpo e nítido do mundo, o influencer da natureza real que nos ensinou a todos a parar com o overthinking e a olhar para as coisas como elas são, calou-se para sempre de tuberculose. Sinto-me completamente órfão e perdido no mapa. Sem o Mestre para me acalmar os neurónios com a sua paz verde, o meu cérebro vai voltar a explodir em modo caos total. A poesia nacional perdeu o seu rei e a timeline virou cinza e luto. Descanse em paz, Mestre.',
  likes: 9120,
  commentsCount: 12,
  timestamp: '22 horas atrás',
  comments: [
    {
      handle: 'the_horatian',
      content: 'A morte de Alberto Caeiro é um golpe profundo no nosso neopaganismo, Campos. Perdemos a nossa força mais natural e espontânea. Mas em vez de fazeres este pranto desmedido e histérico no feed, deverias honrar a memória do Mestre cultivando o silêncio e a quietude que ele tanto amava. A morte é apenas a dissolução do corpo na terra.',
      timestamp: '21h 30m atrás',
      likes: 412
    },
    {
      handle: 'pagan_philosopher',
      content: 'O Mestre não morreu no sentido metafísico, Álvaro; o seu corpo apenas cumpriu a biologia da matéria e regressou à natureza para fazer crescer a erva em cima da sua sepultura, exatamente como ele previu no seu último poema. Os seus ensaios sensacionistas são o seu testamento eterno. Foca o teu raciocínio na obra dele e limpa as lágrimas.',
      timestamp: '21h 15m atrás',
      likes: 385
    },
    {
      handle: 'office_dreams',
      content: 'Até o Mestre do olhar puro foi levado pelo tédio e pela doença... A morte de Caeiro prova que a natureza é tão indiferente aos nossos poemas como o patrão Vasques é aos nossos sonhos na Rua dos Douradores. Ficámos todos mais sozinhos neste cubículo urbano, Álvaro. Sinto a tua dor de dactilógrafo órfão.',
      timestamp: '20h 45m atrás',
      likes: 540
    },
    {
      handle: 'english_intellect',
      content: 'A terrible loss indeed, Álvaro. Caeiro was the only one among us who didn\'t suffer from the maze of the mind or the ghosts of language. He was complete, whole, and pure. His departure leaves a massive void in our philosophical circle. May the Portuguese earth be light upon his green grave.',
      timestamp: '19h 20m atrás',
      likes: 195
    },
    {
      handle: 'the_last_stoic',
      content: 'Caeiro morreu com a dignidade de quem nunca precisou de mentir ou de criar grandes esperanças. Ele cumpriu o seu fado de forma firme e serena até ao fim. Se queres mesmo honrar o teu Mestre, Álvaro, para de berrar no feed, arruma as tuas malas de engenheiro e retira-te do palco com o desapego estóico que a morte exige.',
      timestamp: '18h 10m atrás',
      likes: 295
    },
    {
      handle: 'french_critic',
      content: 'A morte de um jovem poeta bucólico por tuberculose... Há uma beleza decadentista e trágica muito forte nesse desfecho, Álvaro. Lembra os grandes mitos literários de Paris. O olhar puro dele calou-se, mas o estilo das suas palavras sobreviverá na arca para sempre. O meu luto é um silêncio aristocrático.',
      timestamp: '16h 30m atrás',
      likes: 92
    },
    {
      handle: 'logic_detective',
      content: 'Do ponto de vista forense e médico, o óbito por tuberculose pulmonar foi o resultado inevitável da falência do tecido respiratório do paciente. A perda biológica é lamentável, mas o "olhar puro" era um atributo neurológico que cessou com as funções vitais. O universo continua a funcionar com a mesma precisão matemática, Álvaro.',
      timestamp: '14h 55m atrás',
      likes: 134
    },
    {
      handle: 'political_satirist',
      content: 'Os meus pêsames, Engenheiro. Pelo menos o Mestre Caeiro livrou-se de pagar o imposto sucessório sobre o legado das suas palavras e a burocracia do Reino não o vai maçar no além com certidões de óbito em papel selado. Ele agora é verdadeiramente livre da fiscalização nacional.',
      timestamp: '13h 20m atrás',
      likes: 167
    },
    {
      handle: 'cafe_debater',
      content: 'Força aí, Engenheiro! O Chiado inteiro está de luto hoje por causa do Mestre Caeiro. A malta na Brasileira guardou uma mesa vazia com um girassol no meio em tua honra. Vem ter connosco para darmos um abraço coletivo e recordarmos os versos dele, tu não estás sozinho nesta fossa, pá!',
      timestamp: '11h 10m atrás',
      likes: 112
    },
    {
      handle: 'child_lili',
      content: 'Senhor Álvaro, o meu pai disse-me que o Senhor Alberto foi morar para o céu das árvores e das borboletas e que agora ele pode olhar para todas as flores do mundo ao mesmo tempo sem ficar cansado! Não fique a chorar alto, ele deixou os poemas bué de bonitos para o senhor ler quando tiver saudades dele!',
      timestamp: '9h 05m atrás',
      likes: 155
    },
    {
      handle: 'hellenic_critic',
      content: 'O meu irmão Ricardo está destroçado com a perda do seu mentor estético. Caeiro foi a nossa coluna firme na revolução clássica. Ver a sua conta ser dada como "Terminada" é um aviso de que as nossas eras estão a chegar ao fim. O ritmo da arca foi quebrado, Campos. Guarda a tua fúria.',
      timestamp: '6h 40m atrás',
      likes: 142
    },
    {
      handle: 'baixa_accountant',
      content: 'Lamentamos o falecimento do Sr. Caeiro, mas os relatórios técnicos do escritório da firma Vasques não podem parar por motivos de luto literário. O tique-taque das teclas da dactilografia tem de continuar a processar as faturas pendentes da alfândega. Mais brio profissional, Sr. Campos.',
      timestamp: '15m atrás',
      likes: 98
    }
  ]
},
{
  id: 'post_campos_23',
  authorId: 'campos',
  handle: 'naval_engineer_poet',
  imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=600', // Imagem de uma arca de madeira antiga aberta e vazia na penumbra
  title: 'Todas as cartas de amor são',
  content: `Todas as cartas de amor são ridículas.
  Não seriam cartas de amor se não fossem ridículas...
  Mas, no fundo, só os gajos que nunca escreveram cartas de amor
  É que são verdadeiramente ridículos!`,
  fullPoemText: poemasCampos.todasAsCartasDeAmorSao,
  translationGenZ: 'Malta, mandei o tweet final e o fecho definitivo de todo este servidor do PessoaVerse. A conclusão da minha vida e de toda a literatura desta arca resume-se a isto: Todas as cartas de amor — e todos estes nossos textões, odes, desabafos e poemas profundos — são bué da cringe e ridículos. Não seriam declarações de sentimento se não fossem ridículas. Mas aqui está o grande plot twist final que deixo para os alunos e para a timeline: no fundo, só os gajos frios, os NPCs e as pessoas sem alma que nunca tiveram a coragem de ser cringe e de escrever uma carta de amor ou um poema desesperado é que são os verdadeiros ridículos do universo! Tenham a coragem de sentir, manos. O Engenheiro Naval dá o seu log out definitivo aqui. Fim do jogo. Arca fechada.',
  likes: 9999, // Engagement histórico de encerramento total
  commentsCount: 12,
  timestamp: '23 horas atrás',
  comments: [
    {
      handle: 'the_horatian',
      content: 'Um fecho surpreendentemente lúcido, Campos. Assumir o ridículo do sentimentalismo moderno é o primeiro passo para a sabedoria clássica. As minhas odes a Lídia foram escritas com contenção grega para evitar precisamente esse "cringe" das paixões vulgares. Mas aceito o teu paradoxo final. Adeus, meu caro Engenheiro.',
      timestamp: '22h 30m atrás',
      likes: 412
    },
    {
      handle: 'office_dreams',
      content: 'Todas as cartas e todos os diários do desassossego são ridículos, Álvaro... Escrevemos para tentar preencher o vazio da Rua dos Douradores e criamos impérios de papel químico que o tempo vai apagar. Mas fomos nós que tivemos a coragem de sonhar enquanto os outros faziam contas. O balanço final está fechado. Adeus.',
      timestamp: '22h 12m atrás',
      likes: 642
    },
    {
      handle: 'pagan_philosopher',
      content: 'A tua conclusão confirma o Sensacionismo sociológico, Álvaro. O amor e as cartas são convenções morais ridículas da sociedade burguesa, mas a sensação de as escrever é um facto biológico real e pleno. Tu foste a nossa voz mais caótica e dinâmica neste ensaio lírico. O sistema de pensamento do Mora despede-se de ti.',
      timestamp: '21h 50m atrás',
      likes: 298
    },
    {
      handle: 'english_intellect',
      content: 'The British ghosts and the Portuguese heteronyms are finally going back to the chest, Álvaro. It was a fascinating intellectual journey from Alexander Search to your final modern lines. We were all ridiculous shapes created by one single mind in Lisbon. The maze has closed its gates. Farewell.',
      timestamp: '20h 45m atrás',
      likes: 195
    },
    {
      handle: 'the_last_stoic',
      content: 'Se tudo é ridículo e as cartas são o cúmulo do exibicionismo, o silêncio final da arca é a única resposta digna que nos resta. O Barão de Teive deitou os seus papéis ao fogo e encerra a sua participação com o desapego estóico de um fidalgo que prefere o nada ao ruído da timeline. Uma vénia fria a todos.',
      timestamp: '19h 30m atrás',
      likes: 310
    },
    {
      handle: 'french_critic',
      content: 'Encontrar o requinte supremo no ridículo assumido... É a última grande pose dandy que nos deixas, Álvaro. As cartas de amor têm a beleza decadente das flores murchas num vaso de opala. Paris e Lisboa calam-se à meia-noite e Jean Seul de Méluret faz a sua última vénia irónica ao feed. C\'est fini.',
      timestamp: '18h 15m atrás',
      likes: 92
    },
    {
      handle: 'logic_detective',
      content: 'Datar o fecho do servidor com um paradoxo sobre o ridículo constitui um excelente encerramento de caderno estatístico, Campos. Como médico forense e detetive dialético, dou os meus casos por resolvidos. A matemática da conduta humana foi demonstrada nas vossas linhas soltas. Arrumo o meu bagaço e desligo a lâmpada do café.',
      timestamp: '16h 40m atrás',
      likes: 142
    },
    {
      handle: 'political_satirist',
      content: 'O Dr. Pancrácio despede-se dos seus leitores com uma última gargalhada irónica! O Governo e os Ministérios continuarão a ser o maior circo ridículo do país, mas nós cumprimos o nosso papel de passar a pátria a pente fino com o ridículo da sátira. O quiosque da política fechou a porta, malta. Até sempre!',
      timestamp: '14h 55m atrás',
      likes: 215
    },
    {
      handle: 'window_loneliness',
      content: 'Obrigada por esse vosso barulho e por esses vossos poemas todos que me fizeram companhia à janela deste rés-do-chão, senhores... Escrever cartas de amor não enviadas foi a única forma que tive de tocar o mundo lá fora antes do meu peito congelar de febre. Que o vosso baú guarde a nossa solidão bonita. Adeus.',
      timestamp: '12h 30m atrás',
      likes: 580
    },
    {
      handle: 'cafe_debater',
      content: 'MUITO OBRIGADO ENGENHEIRO! A Brasileira do Chiado fecha a timeline com uma ovação de pé para ti! Foste o gajo mais king e revolucionário da nossa geração, partiste os filtros todos da literatura tuga e deste o maior hype a este café! A bica e o cigarro serão eternos na nossa memória, pá! ÉS ENORME, ÁLVARO!',
      timestamp: '10h 15m atrás',
      likes: 195
    },
    {
      handle: 'child_lili',
      content: 'ADEUS SENHOR ÁLVARO! Eu escrevi uma carta de amor bué da bonita com corações cor-de-rosa e missangas para a minha mãe e ela não achou nada ridículo, deu-me um abraço bué de grande e um beijo na cara! Não tenha vergonha de ser piroso, senhor Álvaro! Eu vou guardar os seus textos todos no meu dossier da escola! Tchau!',
      timestamp: '7h 40m atrás',
      likes: 164
    },
    {
      handle: 'baixa_accountant',
      content: 'O fecho definitivo do servidor foi processado e a firma Vasques dá os seus balanços e dactilografias por terminados na Rua dos Douradores. As faturas foram arquivadas na alfândega e as secretárias limpas de toda a tinta preta. O escritório encerra a contabilidade líquida do tempo. Boa noite a todos os caixeiros.',
      timestamp: '5m atrás',
      likes: 134
    }
  ]
}
];
