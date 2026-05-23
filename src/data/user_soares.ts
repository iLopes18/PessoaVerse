import { Heteronym, Post } from '../types';

export const soaresUser: Heteronym = {
  id: 'soares',
  name: 'Bernardo Soares',
  handle: 'office_dreams',
  role: 'Ajudante de Guarda-Livros',
  category: 'VERIFICADOS',
  quote: 'A minha pátria é a língua portuguesa.',
  bio: 'Um semi-heterónimo de Pessoa. Trabalha como ajudante de guarda-livros na Rua dos Douradores em Lisboa. Autor do "Livro do Desassossego", passa o tempo a observar silenciosamente a chuva nas janelas, a sonhar acordado e a detalhar o tédio urbano.',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
};

export const soaresPosts: Post[] = [
  {
    id: 'post_soares_1',
    authorId: 'soares',
    authorName: 'Bernardo Soares',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    handle: 'office_dreams',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600',
    title: 'Livro de Desassossego: O Livro-Razão',
    content: `Tenho diante de mim as duas páginas do livro-razão no qual lanço contas. Olho com desgosto e tédio para o patrão Vasques, mas sei que se não tivesse a futilidade da Rua dos Douradores, a minha grande alma naufragaria... 🖋️💼`,
    hashtags: ['Trabalho9to5', 'GuardaLivros', 'RuaDosDouradores', 'MelancoliaÚtil', 'EscreverÉSalvação'],
    fullPoemText: `LIVRO DO DESASSOSSEGO: O LIVRO-RAZÃO\n\nTenho diante de mim as duas páginas do livro-razão no qual lanço contas com uma atenção mecânica e sonolenta.\nOlho com desgosto e tédio para o patrão Vasques, que representa o triunfo pragmático do quotidiano sem sonhos.\n\nMas sei que se não tivesse a futilidade da Rua dos Douradores, a minha grande alma naufragaria na imensidão vazia.\nO escritório é o meu refúgio estúpido contra a obsessão de pensar demais. Lançar números é uma forma de anestesia cósmica. Escrever estas linhas à socapa na minha carteira é o meu ópio sagrado, o meu diário íntimo contra a loucura do silêncio.`,
    translationGenZ: `estou a olhar para duas folhas de cálculo de Excel cheias de dados aborrecidos. o meu patrão Vasques mandou-me outra mensagem no Teams com vibe passiva-agressiva. 🙄 mas sinceramente, se eu não tivesse esta rotina chata de 9-to-5, o meu vazio existencial no cérebro ia implodir. faço deste desassossego o meu próprio blog anónimo de desabafos. A escrever é a única forma de sobreviver. #EscritórioVibes #Tédio #ExcelHell`,
    likes: 2900,
    commentsCount: 2,
    timestamp: '5 horas atrás',
    comments: [
      {
        id: 'c_teive_1',
        authorId: 'teive',
        authorName: 'Barão de Teive',
        authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'ATIVOS',
        handle: 'the_last_stoic',
        content: 'Amigo Soares, invejo sinceramente esse teu livro-razão de contas exatas. Eu queimei tudo o que escrevi por ser imperfeito de mais e me faltar a vossa paciência dócil para a insignificância.',
        timestamp: '4h atrás',
        likes: 31
      },
      {
        id: 'c_campos_4',
        authorId: 'campos',
        authorName: 'Álvaro de Campos',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'naval_engineer_poet',
        content: 'Mano Soares, ficas aí trancado na penumbra desse cubículo de escritório a gemer melancolia e a contar trocos para o Vasques! Deixa isso tudo e vem comigo apanhar o próximo navio!',
        timestamp: '3h atrás',
        likes: 185
      }
    ]
  },
  {
    id: 'post_soares_2',
    authorId: 'soares',
    authorName: 'Bernardo Soares',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    handle: 'office_dreams',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600',
    title: 'Livro do Desassossego: Tédio Absoluto',
    content: `Tudo é tédio e a sua contemplação é tédio também. Dói-me a cabeça por causa da luz e da estupidez geral. Viajar é escusado. Para quê mudar de lugar se o desassossego vai sempre connosco? 🌧️🧠`,
    hashtags: ['BurnoutExistencial', 'LisboaCinza', 'MenteSemRumo', 'ViajarNãoResolve', 'TédioEmLoop'],
    fullPoemText: `LIVRO DO DESASSOSSEGO: TÉDIO ABSOLUTO\n\nTudo é tédio e a sua contemplação é tédio também.\nDói-me a cabeça física e metafísica por causa da luz artificial e da estupidez geral do pessoal à minha volta.\n\nViajar para outras paragens é escusado. Para quê mudar de lugar se a nossa incapacidade de viver e o nosso desassossego íntimo vão sempre na nossa bagagem? Mudar o céu não cura a alma. Prefiro ficar na Rua dos Douradores e ver passar a chuva fresca sobre o teto dos carros de Lisboa.`,
    translationGenZ: `tudo é um tédio supremo e olhar pró tédio cansa duas vezes mais. tou com cefaleia de tanta luz fluorescente e da burrice do pessoal à minha volta. viajar é flop absoluto. pra quê gastar guito a mudar de país se a tua bad vibe viaja contigo na mala e no cérebro? #Burnout #Underwhelming #Flopped`,
    likes: 2400,
    commentsCount: 0,
    timestamp: '5 dias atrás',
    comments: []
  },
  {
    id: 'post_soares_3',
    authorId: 'soares',
    authorName: 'Bernardo Soares',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    handle: 'office_dreams',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=600',
    title: 'Livro do Desassossego: A Minha Pátria',
    content: `Não tenho ambições nem desejos fúteis. A minha pátria é a língua portuguesa. Amo o som das palavras portuguesas como quem ouve uma canção milenar sobre a saudade... 🇵🇹📖`,
    hashtags: ['LinguaPortuguesa', 'PatriaMinha', 'AmorAsPalavras', 'EscritaSagrada', 'Identidade'],
    fullPoemText: `LIVRO DO DESASSOSSEGO: A MINHA PÁTRIA\n\nNão tenho ambições nem desejos fúteis. Não me interessa a glória do império nem o poder mundano.\n\nA minha pátria é a língua portuguesa. Amo o formato, o som, o timbre solene das nossas palavras puras.\nSe escrevo, é para desenhar as texturas ocultas do meu tédio com as letras sagradas que herdei do meu povo. A minha pátria é ver a chuva portuguesa a cair sobre as lajes antigas da Baixa, escrevendo o poema que eu próprio não sei terminar.`,
    translationGenZ: `não quero saber de lutar por cargos corporativos elevados ou likes rídiculos de vaidade. a minha verdadeira pátria e porto seguro é o idioma português e a beleza crua das palavras. a língua é onde habito de verdade e encontro a minha paz estética. #LinguaPortuguesa #WordsMatter #Soberbo`,
    likes: 3820,
    commentsCount: 1,
    timestamp: '1 semana atrás',
    comments: [
      {
        id: 'c_pessoa_soares_3',
        authorId: 'pessoa',
        authorName: 'Fernando Pessoa',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'orthonym_himself',
        content: 'Que declaração monumental de amor à língua que nos une a todos neste império intangível da literatura!',
        timestamp: '1 semana atrás',
        likes: 122
      }
    ]
  },
  {
    id: 'post_soares_4',
    authorId: 'soares',
    authorName: 'Bernardo Soares',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    handle: 'office_dreams',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    title: 'Livro do Desassossego: O Império do Sonho',
    content: `Prefiro o sonho à realidade. No sonho posso ser imperador de mundos impossíveis, sem precisar de acordar cedo ou assinar recibos... 🌌👑`,
    hashtags: ['OImpérioDoSonho', 'MetaversoMental', 'FugaDaRealidade', 'SonhoLúcido', 'MelancoliaEstética'],
    fullPoemText: `LIVRO DO DESASSOSSEGO: O IMPÉRIO DO SONHO\n\nA realidade cansa-me e limita-me.\nPrefiro infinitamente o sonho à crueza das coisas reais.\n\nNo meu cérebro, enquanto o Vasques grita no corredor, posso construir pontes colossais de luz e ser o imperador supremo de dinastias perdidas no Oriente.\nO sonho não me cobra impostos, não me obriga a assinar recibos e não tem limites de tempo. É o único território verdadeiramente livre e soberano que me resta.`,
    translationGenZ: `a vida real no plano 1.0 é cheia de obrigações aborrecidas e regras estúpidas. prefiro viver no meu próprio metaverso mental. lá sou o admin supremo e crio mundos inteiros sem ter de pagar taxas de condomínio ou aturar reuniões longas no Teams. #DreamModeOn #Idealista`,
    likes: 4100,
    commentsCount: 1,
    timestamp: '2 semanas atrás',
    comments: [
      {
        id: 'c_caeiro_soares_4',
        authorId: 'caeiro',
        authorName: 'Alberto Caeiro',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
        authorCategory: 'VERIFICADOS',
        handle: 'nature_is_everything',
        content: 'Bernardo, sonhar mundos impossíveis é como fechar os olhos ao sol que está mesmo à tua frente. O único império real é a terra e as árvores. Abre os olhos, rapaz.',
        timestamp: '2 semanas atrás',
        likes: 145
      }
    ]
  },
  {
    id: 'post_soares_5',
    authorId: 'soares',
    authorName: 'Bernardo Soares',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    handle: 'office_dreams',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    title: 'Livro do Desassossego: Chuva na Rua dos Douradores',
    content: `Chove na Rua dos Douradores. As gotas pesadas e lentas de água lavam o asfalto fosco. Eu olho pela vidraça da contabilidade e sinto um tédio doce... 🌫️🌧️`,
    hashtags: ['TempoChuvoso', 'LisboaPoética', 'JanelaDaContabilidade', 'EstéticaDoTédio', 'VibesFrias'],
    fullPoemText: `LIVRO DO DESASSOSSEGO: CHUVA NA RUA DOS DOURADORES\n\nChove lá fora na Rua dos Douradores.\nAs gotas são pesadas, lentas e frias.\nAcompanham o compasso dos meus pensamentos tristes.\n\nFito os transeuntes que correm de guarda-chuva aberto, sem rumo, como se aquele bocado de pano os protegesse da própria tempestade da vida.\nEu, em contrapartida, estou seguro atrás da vidraça da contabilidade, envolto numa melancolia doce e confortável, celebrando a chuva como a música de fundo perfeita para a minha solidão.`,
    translationGenZ: `Lisboa hoje acordou super cinzenta, a chover a potes na Baixa. toda a gente a correr histérica com os chapéus-de-chuva, mas eu tou só aqui na secretária com o meu café, a curtir um tédio reconfortante, ao som de lofi beats da chuva a bater na janela. #CozyVibes #Spleen #MoodRainy`,
    likes: 3120,
    commentsCount: 0,
    timestamp: '3 semanas atrás',
    comments: []
  },
  {
    id: 'post_soares_6',
    authorId: 'soares',
    authorName: 'Bernardo Soares',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    handle: 'office_dreams',
    imageUrl: 'https://images.unsplash.com/photo-1516062423079-7ca13cca775d?auto=format&fit=crop&q=80&w=600',
    title: 'Livro do Desassossego: O cansaço do que nunca fomos',
    content: `Haverá cansaço maior do que o cansaço do que nunca fomos e do que nunca faremos? Sofro do remorso do futuro, da nostalgia de países que nunca irei visitar. 🥀🚂`,
    hashtags: ['CansaçoEstético', 'NostalgiaDoFuturo', 'NihilismoUrbano', 'TristezaMansa', 'SemSaída'],
    fullPoemText: `LIVRO DO DESASSOSSEGO: O CANSAÇO DO QUE NUNCA FOMOS\n\nHaverá cansaço maior do que o cansaço do que nunca fomos, do que nunca faremos e da glória que nunca alcançaremos?\nSofro antecipadamente do remorso do futuro, de estradas que nunca irei palmilhar, de romances que nunca irei viver de verdade.\n\nO meu ser é um museu de intenções rasgadas, um arquivo de rascunhos sem fim. Sinto-me cansado de tudo antes mesmo do dia começar, habitando este limbo confortável da Rua dos Douradores.`,
    translationGenZ: `estou com uma canseira psicológica gigante de cenas que eu nem cheguei a tentar fazer. é uma fobia ao fracasso e um remorso por antecedência por todos os spots espetaculares do mundo que eu nunca vou ver por preguiça ou tédio. acordei já cansado do dia de amanhã. #BurnoutAntecipado #FobiaDoReal #Nihilist`,
    likes: 1980,
    commentsCount: 0,
    timestamp: '1 mês atrás',
    comments: []
  }
];
