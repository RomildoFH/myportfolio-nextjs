const projects = [
  {
    name: "Uni Duni Tê Kids",
    thumbs: "https://i.postimg.cc/s2SPKqcc/unidunite.png",
    url: "https://unidunitekids.vercel.app/",
    description: "O projeto Uni Duni Tê foi criado para uma loja de roupas infantis com o mesmo nome. O objetivo desta iniciativa é impulsionar o volume de vendas da empresa por meio da implementação de uma solução completa de ponta a ponta. Essa solução permite a gestão perfeita dos produtos da empresa e da base de clientes, além de facilitar o processo de vendas.",
  },
  {
    name: "Drink Delivery",
    thumbs: "https://i.postimg.cc/d1P6Yw1p/drink-delivery.png",
    url: "https://drink-delivery.vercel.app/login",
    description: "O Drink Delivery é uma plataforma full-stack abrangente e inovadora desenvolvida para simplificar e aprimorar a experiência de compra e venda de bebidas. Esta aplicação oferece a capacidade de realizar cadastros detalhados de produtos, vendedores e clientes, proporcionando uma visão completa de todo o processo de transação. Com o Drink Delivery, os usuários podem acompanhar de perto cada etapa da jornada, desde a escolha de itens até a conclusão da venda, tudo dentro de uma única e conveniente ferramenta.",
  },
  {
    name: "Recipes App",
    thumbs: "https://i.postimg.cc/TPW0FpRn/recipe-app.png",
    url: "https://recipes-app-fullstack.vercel.app/",
    description: "O Recipes App oferece uma proposta inovadora e envolvente, permitindo aos usuários criar contas e desfrutar de um vasto acervo de receitas culinárias, tanto para pratos quanto para bebidas. Concebido com foco na experiência móvel, este projeto visa proporcionar acesso fácil e conveniente a uma infinidade de opções gastronômicas. Aqui, você pode explorar uma ampla gama de receitas de dar água na boca, com a praticidade de ter tudo ao alcance do seu smartphone. Seja você um chef experiente ou um amante da culinária, o Recipes App está pronto para tornar a sua jornada gastronômica ainda mais deliciosa e inspiradora.",
  },
  {
    name: "Silva e Vieira",
    thumbs: "https://i.postimg.cc/PxW4f9vx/silvaevieira.png",
    url: "https://romildofh.github.io/e-social/",
    description: "Este projeto foi concebido para atender às necessidades pessoais decorrentes da minha carreira como engenheiro de segurança do trabalho. Aqui, tenho a oportunidade de apresentar às empresas o sistema e-Social, uma iniciativa governamental brasileira. Além disso, posso fornecer orientações detalhadas sobre os requisitos das atividades empresariais. Por meio do preenchimento de formulários específicos, o sistema gera orçamentos para auxiliar as empresas na implementação das adequações necessárias. Este projeto é uma valiosa ferramenta que visa simplificar e otimizar os processos de conformidade regulatória e contribuir para um ambiente de trabalho mais seguro e eficiente.",
  },
  {
    name: "Car Flow",
    thumbs: "https://i.postimg.cc/RZYGgczM/carflow.png",
    url: "https://car-flow.vercel.app/",
    description: "Esta aplicação front-end foi criada como parte do processo seletivo para a empresa Ultra Car. Ela oferece uma solução abrangente para a gestão do fluxo de manutenção de veículos em uma oficina. Através dessa aplicação, os usuários têm a capacidade de administrar facilmente uma lista de peças e serviços previamente cadastrados. Além disso, a aplicação possibilita a geração de códigos QR, que permitem rastrear todo o processo de manutenção, tanto pelo cliente quanto pelos mecânicos. Além disso, a aplicação possui recursos de geração de relatórios para fornecer informações detalhadas sobre o andamento dos serviços. Esta solução é uma valiosa ferramenta para garantir a eficiência e a transparência no processo de manutenção de veículos em oficinas.",
  },
  {
    name: "Trivia",
    thumbs: "https://i.postimg.cc/Gh7jpktk/trivia.png",
    url: "https://trivia-jade-tau.vercel.app/",
    description: "Trivia é uma aplicação front-end que oferece aos usuários a oportunidade de se registrarem utilizando o armazenamento local (localStorage) do seu navegador. Uma vez registrados, os usuários podem participar de um emocionante jogo de quiz, no qual são apresentadas uma variedade de perguntas desafiadoras. Os jogadores são avaliados com base em suas respostas corretas e no tempo que levam para responder a todas as perguntas. A aplicação se conecta à API REST Trivia para obter uma ampla gama de perguntas e respostas, tornando a experiência do jogo ainda mais dinâmica e envolvente. Com a Trivia, os usuários podem testar seus conhecimentos, competir com amigos e desfrutar de horas de diversão enquanto respondem a perguntas de diferentes áreas. É uma maneira cativante de desafiar a mente e aprender ao mesmo tempo.",
  },
  {
    name: "Trybeshopping",
    thumbs: "https://i.postimg.cc/138rVfVb/trybeshopping.png",
    url: "https://romildofh.github.io/shopping-cart/",
    description: "O projeto Trybeshopping é uma aplicação front-end que se integra à API REST do Mercado Livre para oferecer aos usuários uma vasta lista de produtos disponíveis para compra. Os usuários têm a capacidade de realizar buscas específicas para encontrar os itens desejados e até mesmo adicionar produtos a um carrinho de compras virtual. Essa aplicação proporciona uma experiência de compra interativa e amigável, permitindo que os usuários naveguem por uma variedade de produtos, visualizem detalhes, adicionem produtos ao carrinho e realizem compras de forma conveniente. O Trybeshopping é uma ferramenta eficaz para explorar e adquirir produtos no Mercado Livre com facilidade e praticidade.",
  },
  {
    name: "Pixel Art",
    thumbs: "https://i.postimg.cc/d3njrCBc/pixelart.png",
    url: "https://pixel-art-chi-jet.vercel.app/",
    description: "O pixel art é uma plataforma que oferece uma abordagem simples e criativa para que os usuários possam criar desenhos usando pixels com um número limitado de cores. Essa proposta desafia a criatividade dos usuários, incentivando-os a expressar suas ideias e habilidades artísticas dentro das restrições proporcionadas pelo formato pixelado. É uma forma divertida e cativante de explorar a arte digital e criar imagens únicas e detalhadas por meio da simplicidade dos pixels.",
  },
  {
    name: "To do list",
    thumbs: "https://i.postimg.cc/Dfcg9VKp/todolist.png",
    url: "https://romildofh.github.io/todo-list/",
    description: "Com certeza, todos precisamos de uma ajudinha para nos organizarmos no dia a dia! O To-Do List é uma ferramenta que permite aos usuários registrar uma lista de atividades em seu dispositivo, armazenando essas informações no localStorage. Para facilitar ainda mais a organização, as atividades são geradas com base em um plano de ação 5W2H, o que proporciona uma estrutura clara e eficaz para planejar e acompanhar o status de todas as tarefas. É uma maneira prática e eficiente de manter o controle das atividades diárias e garantir que nada seja esquecido.",
  },
  {
    name: "Tryunfo",
    thumbs: "https://i.postimg.cc/cHSRzhkN/tryunfo.png",
    url: "https://romildofh.github.io/tryunfo-project/",
    description: "O Tryunfo é uma recriação do clássico jogo de cartas Trunfo. Neste projeto, os usuários têm a oportunidade de criar seu próprio baralho de cartas personalizadas, definindo imagens e atributos para cada uma delas. Embora, atualmente, ainda não seja possível jogar, o objetivo futuro é implementar a funcionalidade de jogo. Com o Tryunfo, você pode exercitar sua criatividade na criação de cartas personalizadas e aguardar ansiosamente o momento em que poderá desfrutar de partidas emocionantes deste jogo tão tradicional.",
  },
  {
    name: "Solar sistem",
    thumbs: "https://i.postimg.cc/BQQgshSS/solar-sistem.png",
    url: "https://romildofh.github.io/solar-system-project/",
    description: "O Solar System é mais um dos nossos projetos front-end, e nele você tem a oportunidade de explorar e aprender sobre várias missões espaciais realizadas da Terra para o espaço. Este projeto é uma ótima maneira de conhecer mais sobre as incríveis jornadas que a humanidade empreendeu para explorar o universo ao nosso redor. Venha descobrir as façanhas fascinantes da exploração espacial no Solar System!",
  },
  {
    name: "Trybewarts",
    thumbs: "https://i.postimg.cc/T3BqVfr1/trybewarts.png",
    url: "https://romildofh.github.io/trybewarts/",
    description: "Esse projeto foi desenvolvido exclusivamente com HTML, CSS e JavaScript, e tem como objetivo recriar a atmosfera mágica dos bons tempos de Harry Potter. Nele, os usuários têm a oportunidade de preencher um formulário de inscrição para a escola de magia, mergulhando no mundo mágico e misterioso que cativou milhões de fãs ao redor do mundo. Prepare-se para uma experiência encantadora enquanto se inscreve nesta escola de magia virtual!",
  },
]

export default projects;
