import { Heteronym, Post } from '../types';

export const camposUser: Heteronym = {
  id: 'campos',
  name: 'Álvaro de Campos',
  handle: 'naval_engineer_poet',
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
    authorName: 'Álvaro de Campos',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    handle: 'naval_engineer_poet',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&q=80&w=600',
    title: 'Ode Triunfal',
    content: `À luz dolorosa das grandes lâmpadas eléctricas da fábrica / Tenho febre e escrevo. / Escrevo rangendo os dentes, fera para a beleza disto, / Para a beleza disto totalmente desconhecida dos antigos! ⚙️💥🔥`,
    hashtags: ['FúriaDasMáquinas', 'SentirTudoDeTodasAsManeiras', 'Futurismo', 'EngenheiroComFebre', 'GasolinaNaAlma'],
    fullPoemText: `ODE TRIUNFAL

À dolorosa luz das grandes lâmpadas eléctricas da fábrica
Tenho febre e escrevo.
Escrevo rangendo os dentes, fera para a beleza disto,
Para a beleza disto totalmente desconhecida dos antigos.

Ó rodas, ó engrenagens, r-r-r-r-r-r-r eterno!
Forte espasmo retido dos maquinismos em fúria!
Em fúria fora e dentro de mim,
Por todos os meus nervos dissecados fora,
Por todos as papilas fora de tudo com que eu sinto!
Tenho os lábios secos, ó grandes ruídos modernos,
De vos ouvir demasiadamente de perto,
E arde-me a cabeça de vos querer cantar com um excesso
De expressão de todas as minhas sensações,
Com um excesso contemporâneo de vós, ó máquinas!

Em febre e olhando os motores como a uma Natureza tropical —
Grandes trópicos humanos de ferro e fogo e força —
Canto, e canto o presente, e também o passado e o futuro,
Porque o presente é todo o passado e todo o futuro
E há Platão e Virgílio dentro das máquinas e das luzes eléctricas
Só porque houve outrora e foram humanos Virgílio e Platão,
E pedaços do Alexandre Magno do século talvez cinquenta,
Átomos que hão-de ir ter febre para o cérebro do Ésquilo do século cem,
Andam por estas correias de transmissão e por estes êmbolos e por estes volantes,
Rugindo, rangendo, ciciando, estrugindo, ferreando,
Fazendo-me um acesso de carícias ao corpo numa só carícia à alma.

Ah, poder exprimir-me todo como um motor se exprime!
Ser completo como uma máquina!
Poder ir na vida triunfante como um automóvel último-modelo!
Poder ao menos penetrar-me fisicamente de tudo isto,
Rasgar-me todo, abrir-me completamente, tornar-me passento
A todos os perfumes de óleos e calores e carvões
Desta flora estupenda, negra, artificial e insaciável!

Fraternidade com todas as dinâmicas!
Promíscua fúria de ser parte-agente
Do rodar férreo e cosmopolita
Dos comboios estrénuos,
Da faina transportadora-de-cargas dos navios,
Do giro lúbrico e lento dos guindastes,
Do tumulto disciplinado das fábricas,
E do quase-silêncio ciciante e monótono das correias de transmissão!

Horas europeias, produtoras, entaladas
Entre maquinismos e afazeres úteis!
Grandes cidades paradas nos cafés,
Nos cafés — oásis de inutilidades ruidosas
Onde se cristalizam e se precipitam
Os rumores e os gestos do Útil
E as rodas, e as rodas-dentadas e as chumaceiras do Progressivo!
Nova Minerva sem-alma dos cais e das gares!
Novos entusiasmos de estatura do Momento!
Quilhas de chapas de ferro sorrindo encostadas às docas,
Or a seco, erguidas, nos planos-inclinados dos portos!
Actividade internacional, transatlântica, Canadian-Pacific!
Luzes e febris perdas de tempo nos bares, nos hotéis,
Nos Longchamps e nos Derbies e nos Ascots,
E Piccadillies e Avenues de L'Opéra que entram
Pela minh'alma dentro!

Hé-lá as ruas, hé-lá as praças, hé-lá-hô la foule!
Tudo o que passa, tudo o que pára às montras!
Comerciantes; vários; escrocs exageradamente bem-vestidos;
Membros evidentes de clubes aristocráticos;
Esquálidas figuras dúbias; chefes de família vagamente felizes
E paternais até na corrente de oiro que atravessa o colete
De algibeira a algibeira!
Tudo o que passa, tudo o que passa e nunca passa!
Presença demasiadamente acentuada das cocotes
Banalidade interessante (e quem sabe o quê por dentro?)
Das burguesinhas, mãe e filha geralmente,
Que andam na rua com um fim qualquer;
A graça feminil e falsa dos pederastas que passam, lentos;
E toda a gente simplesmente elegant que passeia e se mostra
E afinal tem alma lá dentro!

(Ah, como eu desejaria ser o souteneur disto tudo!)

A maravilhosa beleza das corrupções políticas,
Deliciosos escândalos financeiros e diplomáticos,
Agressões políticas nas ruas,
E de vez em quando o cometa dum regicídio
Que ilumina de Prodígio e Fanfarra os céus
Usuais e lúcidos da Civilização quotidiana!

Notícias desmentidas dos jornais,
Artigos políticos insinceramente sinceros,
Notícias passez à-la-caisse, grandes crimes —
Duas colunas deles passando para a segunda página!
O cheiro fresco a tinta de tipografia!
Os cartazes postos há pouco, molhados!
Vients-de-paraître amarelos como uma cinta branca!
Como eu vos amo a todos, a todos, a todos,
Como eu vos amo de todas as maneiras,
Com os olhos e com os ouvidos e com o olfacto
E com o tacto (o que palpar-vos representa para mim!)
E com a inteligência como uma antena que fazeis vibrar!
Ah, como todos os meus sentidos têm cio de vós!

Adubos, debulhadoras a vapor, progressos da agricultura!
Química agrícola, e o comércio quase uma ciência!
Ó mostruários dos caixeiros-viajantes,
Dos caixeiros-viajantes, cavaleiros-andantes da Indústria,
Prolongamentos humanos das fábricas e dos calmos escritórios!

Ó fazendas nas montras! Ó manequins! Ó últimos figurinos!
Ó artigos inúteis que toda a gente quer comprar!
Olá grandes armazéns com várias secções!
Olá anúncios eléctricos que vêm e estão e desaparecem!
Olá tudo com que hoje se constrói, com que hoje se é diferente de ontem!
Eh, cimento armado, beton de cimento, novos processos!
Progressos dos armamentos gloriosamente mortíferos!
Couraças, canhões, metralhadoras, submarinos, aeroplanos!
Amo-vos a todos, a tudo, como uma fera.
Amo-vos carnivoramente.
Pervertidamente e enroscando a minha vista
Em vós, ó coisas grandes, banais, úteis, inúteis,
Ó coisas todas modernas,
Ó minhas contemporâneas, forma actual e próxima
Do sistema imediato do Universo!
Nova Revelação metálica e dinâmica de Deus!

Ó fábricas, ó laboratórios, ó music-halls, ó Luna-Parks,
Ó couraçados, ó pontes, ó docas flutuantes —
Na minha mente turbulenta e encandescida
Possuo-vos como a uma mulher bela,
Completamente vos possuo como a uma mulher bela que não se ama,
Que se encontra casualmente e se acha interessantíssima.

Eh-lá-hô fachadas das grandes lojas!
Eh-lá-hô elevadores dos grandes edifícios!
Eh-lá-hô recomposições ministeriais!
Parlamentos, políticas, relatores de orçamentos,
Orçamentos falsificados!
(Um orçamento é tão natural como uma árvore
E um parlamento tão belo como uma borboleta).

Eh-lá o interesse por tudo na vida,
Porque tudo é a vida, desde os brilhantes nas montras
Até à noite ponte misteriosa entre os astros
E o mar antigo e solene, lavando as costas
E sendo misericordiosamente o mesmo
Que era quando Platão era realmente Platão
Na sua presença real e na sua carne com a alma dentro,
E falava com Aristóteles, que havia de não ser discípulo dele.

Eu podia morrer triturado por um motor
Com o sentimento de deliciosa entrega duma mulher possuída.
Atirem-me para dentro das fornalhas!
Metam-me debaixo dos comboios!
Espanquem-me a bordo de navios!
Masoquismo através de maquinismos!
Sadismo de não sei quê moderno e eu e barulho!

Up-lá hô jockey que ganhaste o Derby,
Morder entre dentes o teu cap de duas cores!

(Ser tão alto que não pudesse entrar por nenhuma porta!
Ah, olhar é em mim uma perversão sexual!)

Eh-lá, eh-lá, eh-lá, catedrais!
Deixai-me partir a cabeça de encontro às vossas esquinas.

E ser levado da rua cheio de sangue
Sem ninguém saber quem eu sou!

Ó tramways, funiculares, metropolitanos,
Roçai-vos por mim até ao espasmo!
Hilla! hilla! hilla-hô!
Dai-me gargalhadas em plena cara,
Ó automóveis apinhados de pândegos e de...,
Ó multidões quotidianas nem alegres nem tristes das ruas,
Rio multicolor anónimo e onde eu me posso banhar como quereria!
Ah, que vidas complexas, que coisas lá pelas casas de tudo isto!
Ah, saber-lhes as vidas a todos, as dificuldades de dinheiro,
As dissensões domésticas, os deboches que não se suspeitam,
Os pensamentos que cada um tem a sós consigo no seu quarto
E os gestos que faz quando ninguém pode ver!
Não saber tudo isto é ignorar tudo, ó raiva,
Ó raiva que como uma febre e um cio e uma fome
Me põe a magro o rosto e me agita às vezes as mãos
Em crispações absurdas em pleno meio das turbas
Nas ruas cheias de encontrões!

Ah, e a gente ordinária e suja, que parece sempre a mesma,
Que emprega palavrões como palavras usuais,
Cujos filhos roubam às portas das mercearias
E cujas filhas aos oito anos — e eu acho isto belo e amo-o! —
Masturbam homens de aspecto decente nos vãos de escada.
A gentalha que anda pelos andaimes e que vai para casa
Por vielas quase irreais de estreiteza e podridão.
Maravilhosamente gente humana que vive como os cães
Que está abaixo de todos os sistemas morais,
Para quem nenhuma religião foi feita,
Nenhuma arte criada,
Nenhuma política destinada para eles!
Como eu vos amo a todos, porque sois assim,
Nem imorais de tão baixos que sois, nem bons nem maus,
Inatingíveis por todos os progressos,
Fauna maravilhosa do fundo do mar da vida!

(Na nora do quintal da minha casa
O burro anda à roda, anda à roda,
E o mistério do mundo é do tamanho disto.
Limpa o suor com o braço, trabalhador descontente.
A luz do sol abafa o silêncio das esferas
E havemos todos de morrer,
Ó pinheirais sombrios ao crepúsculo,
Pinheirais onde a minha infância era outra coisa
Do que eu sou hoje...)

Mas, ah outra vez a raiva mecânica constante!
Outra vez a obsessão movimentada dos ónibus.
E outra vez a fúria de estar indo ao mesmo tempo dentro de todos os comboios
De todas as partes do mundo,
De estar dizendo adeus de bordo de todos os navios,
Que a estas horas estão levantando ferro ou afastando-se das docas.
Ó ferro, ó aço, ó alumínio, ó chapas de ferro ondulado!
Ó cais, ó portos, ó comboios, ó guindastes, ó rebocadores!

Eh-lá grandes desastres de comboios!
Eh-lá desabamentos de galerias de minas!
Eh-lá naufrágios deliciosos dos grandes transatlânticos!
Eh-lá-hô revoluções aqui, ali, acolá,
Alterações de constituições, guerras, tratados, invasões,
Ruído, injustiças, violências, e talvez para breve o fim,
A grande invasão dos bárbaros amarelos pela Europa,
E outro Sol no novo Horizonte!

Que importa tudo isto, mas que importa tudo isto
Ao fúlgido e rubro ruído contemporâneo,
Ao ruído cruel e delicioso da civilização de hoje?
Tudo isso apaga tudo, salvo o Momento,
O Momento de tronco nu e quente como um fogueiro,
O Momento estridentemente ruidoso e mecânico,
O Momento dinâmico passagem de todas as bacantes
Do ferro e do bronze e da bebedeira dos metais.

Eia comboios, eia pontes, eia hotéis à hora do jantar,
Eia aparelhos de todas as espécies, férreos, brutos, mínimos,
Instrumentos de precisão, aparelhos de triturar, de cavar,
Engenhos brocas, máquinas rotativas!

Eia! eia! eia!
Eia electricidade, nervos doentes da Matéria!
Eia telegrafia-sem-fios, simpatia metálica do Inconsciente!
Eia túneis, eia canais, Panamá, Kiel, Suez!
Eia todo o passado dentro do presente!
Eia todo o futuro já dentro de nós! eia!
Eia! eia! eia!
Frutos de ferro e útil da árvore-fábrica cosmopolita!
Eia! eia! eia! eia-hô-ô-ô!
Nem sei que existo para dentro. Giro, rodeio, engenho-me.
Engatam-me em todos os comboios.
Içam-me em todos os cais.
Giro dentro das hélices de todos os navios.
Eia! eia-hô! eia!
Eia! sou o calor mecânico e a electricidade!

Eia! e os rails e as casas de máquinas e a Europa!
Eia e hurrah por mim-tudo e tudo, máquinas a trabalhar, eia!

Galgar com tudo por cima de tudo! Hup-lá!

Hup-lá, hup-lá, hup-lá-hô, hup-lá!
Hé-la! He-hô! H-o-o-o-o!

Z-z-z-z-z-z-z-z-z-z-z-z!

Ah não ser eu toda a gente e toda a parte!

Álvaro de Campos`,
    translationGenZ: `mano, debaixo destas luzes fluorescentes de escritório
tou com febre e a digitar em fúria absoluta.
digito a ranger os dentes, obstinado com a estética caótica do cyber-futuro.
esta beleza mecânica que os velhos do classicismo não tankam!
só sinto o r-r-r-r-r-r do processador em overdrive, focado 100% no grind. #Grindset #Cyberpunk`,
    likes: 4200,
    commentsCount: 4,
    timestamp: '1 hora atrás',
    comments: [
      {
        id: 'c_caeiro_1',
        authorId: 'caeiro',
        authorName: 'Alberto Caeiro',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'nature_is_everything',
        content: 'Álvaro, desliga o computador e para de escrever. Não vês que as lâmpadas elétricas não são o sol? Olha antes para o campo, rapaz. Sentir em excesso é uma doença dos olhos.',
        timestamp: '45m atrás',
        likes: 120
      },
      {
        id: 'c_reis_1',
        authorId: 'reis',
        authorName: 'Ricardo Reis',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'the_horatian',
        content: 'Esta histeria industrial corrompe a calma da alma. O homem sensato colhe o dia à beira do rio, imperturbável ao ruído das tuas rodas e engrenagens. Modera estes teus excessos de febre.',
        timestamp: '30m atrás',
        likes: 85
      },
      {
        id: 'c_moscow_1',
        authorId: 'adolf_moscow',
        authorName: 'Adolf Moscow',
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'NPCS',
        handle: 'disgruntled_pessimist',
        content: 'Ótimo rito histérico futurista... Mas aposto que se a eletricidade for abaixo, o teu sensacionismo poético inteiro crasha duma vez. 😂',
        timestamp: '15m atrás',
        likes: 12
      }
    ]
  },
  {
    id: 'post_campos_2',
    authorId: 'campos',
    authorName: 'Álvaro de Campos',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    handle: 'naval_engineer_poet',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=600',
    title: 'Tabacaria',
    content: `Não sou nada. / Nunca serei nada. / Não posso querer ser nada. / À parte isso, tenho em mim todos os sonhos do mundo. 🚬☕`,
    hashtags: ['CriseExistencial', 'JanelaDoQuarto', 'GajoDaTabacaria_✨', 'NemEuSeiQuemSou', 'DesassossegoTotal', 'Abulismo'],
    fullPoemText: `TABACARIA

Não sou nada.
Nunca serei nada.
Não posso querer ser nada.
À parte isso, tenho em mim todos os sonhos do mundo.

Janelas do meu quarto,
Do meu quarto de um dos milhões de bicho da terra que conhecem todos os dias da vida
(E o que sabem do que conhecem?),
Dás para o mistério duma rua com gente constantemente a passar,
Para uma rua inacessível a todos os pensamentos,
Real, impossivelmente real, certa, desconhecidamente certa,
Com o mistério das coisas por baixo das pedras e dos seres,
Com a morte a pôr humidade nas paredes e cabelos brancos nos homens,
Com o Destino a conduzir a carroça de tudo pela estrada de nada.

Hoje estou vencido, como se soubesse a verdade.
Hoje estou lúcido, como se estivesse para morrer,
E não tivesse outro parentesco com as coisas
Senão uma despedida, tornando-se este edifício e esta fila de chaminés
A fita de avisos de que parte um comboio,
Ou uma partida de bordo, ou o apito de partida
De dentro da minha cabeça,
E uma sacudidela de comboios nos meus nervos e nas minhas ossadas.

Fiz de mim o que não soube,
E o que podia fazer de mim não o fiz.
O dominó que vesti era errado.
Conheceram-me logo por quem não era e não desmenti, e perdi-me.
Quando quis tirar a máscara,
Estava pegada à cara.
Quando a tirei e me vi no espelho,
Já tinha envelhecido.
Estava bêbado, já não sabia vestir o dominó que não tinha tirado.
Deitei fora a máscara e dormi no vestiário
Como um cão tolerado pela gerência
Por ser inofensivo
E vou escrever esta história para provar que sou sublime.

Essência musical dos meus versos inúteis,
Quem me dera encontrar-te como coisa que eu fizesse,
E não ficasse sempre defronte da Tabacaria de defronte,
Calcando aos pés a consciência de estar existindo,
Como um tapete em que um bêbado tropeça
Ou uma esteira que os ciganos roubaram e não valia nada.

Mas o Dono da Tabacaria chegou à porta e ficou à porta.
Olhou-o com o desconforto da cabeça mal voltada
E com o desconforto da alma mal compreendida.
Ele morrerá e eu morrerei.
Ele deixará a tabuleta, eu deixarei versos.
A certa altura morrerá a tabuleta também, e os versos também.
Depois de certa altura morrerá a rua onde esteve a tabuleta,
E a língua em que foram escritos os versos.
Morrerá depois o planeta de fiação em que tudo isto se deu.
Em outros satélites de outros sistemas qualquer coisa como gente
Continuará fazendo coisas como versos e vivendo por baixo de coisas como tabuletas,
Sempre uma coisa defronte da outra,
Sempre uma coisa tão inútil como a outra,
Sempre o impossível tão estúpido como o real,
Sempre o mistério do fundo tão certo como o mistério do sono da superfície,
Sempre isto ou outra coisa ou nem uma coisa nem outra.

Mas um homem entrou na Tabacaria (para comprar tabaco?).
E a realidade plausível cai de repente em cima de mim.
Ergo-me energicamente, convencido, humano, e vou tentar escrever estes versos
Em que digo o contrário.

Acendo um cigarro ao pensar em escrevê-los
E saboroso no cigarro a libertação de todos os pensamentos.
Sigo o fumo como uma rota própria,
E gozo, num momento sensitivo e competente,
A libertação de todas as especulações
E a consciência de que a metafísica é uma consequência de estar mal disposto.

Depois deito-me para trás na cadeira
E continuo fumando.
Enquanto o Destino mo conceder, continuarei fumando.

(Se eu casasse com a filha da minha lavadeira
Talvez fosse feliz).
Visto isto, levanto-me da cadeira. Vou à janela.

O homem saiu da Tabacaria (metendo o troco na algibeira das calças?).
Ah, conhece-o: é o Esteves sem metafísica.
(O Dono da Tabacaria sorriu).`,
    translationGenZ: `sou literalmente um ninguém.
nunca serei ninguém relevante.
nem consigo focar-me para tentar ser algo.
mas tirando isso, a minha mente é um feed infinito de ideias visionárias que nunca vou realizar. #Desespero #Real`,
    likes: 5400,
    commentsCount: 2,
    timestamp: 'Ontem',
    comments: [
      {
        id: 'c_soares_2',
        authorId: 'soares',
        authorName: 'Bernardo Soares',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'office_dreams',
        content: 'Isto tocou-me na alma. Somos todos rascunhos de sonhos que nunca saem do papel da Rua dos Douradores.',
        timestamp: '18h atrás',
        likes: 99
      },
      {
        id: 'c_faustino_1',
        authorId: 'faustino_antunes',
        authorName: 'Faustino Antunes',
        authorCategory: 'NPCS',
        handle: 'faustino_antunes',
        content: 'Álvaro, essa auto-depreciação constante e essa bipolaridade produtiva parecem requerer terapia de urgência. Quando quiser agendar uma consulta...',
        timestamp: '2h atrás',
        likes: 7
      }
    ]
  },
  // Add 14 simpler posts to fill up to 16 posts cleanly without being too wordy
  ...Array.from({ length: 14 }).map((_, i) => ({
    id: `post_campos_extra_${i + 1}`,
    authorId: 'campos',
    authorName: 'Álvaro de Campos',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    handle: 'naval_engineer_poet',
    content: `Fragmento de Sensações Modernas #${i + 1}
Sentir tudo de todas as maneiras,
Viver tudo de todos os lados,
Ser a mesma coisa de todos os modos possíveis ao mesmo tempo!`,
    translationGenZ: `Sensações caóticas #${i + 1}\nQuero experimentar todas as tracks de vida possíveis,\nEstou a jogar em todos os servidores possíveis ao mesmo tempo! #Multitasking #Overload`,
    likes: 1200 + i * 150,
    commentsCount: 0,
    timestamp: `${i + 3} dias atrás`,
    comments: []
  }))
];
