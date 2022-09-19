//CLASSES CRIADAS COM MÉTODO E ATRIBUTO

class Livro {
  constructor(titulo, autor, capa, resumo, categoria, id) {
    this.titulo = titulo;
    this.autor = autor;
    this.capa = capa;
    this.resumo = resumo;
    this.categoria = categoria;
    this.id = id;
  }
}

class Catalago {
  catalogo = [];
  addLivroCatalago(livro) {
    this.catalogo.push(livro);
  }
  removeLivroCatalago(livro) {
    var index = this.catalago.indexOf(livro);
    if (index > -1) {
      this.catalogo.splice(index, 1);
    }
  }
}

//OBJETO ARRAY/JSON E INSTANCIAMENTO DA CLASSE LIVRO

let livros = [new Livro('Cem Anos de Solidão',
  'Gabriel García Marques',
  'assets/images/ficcao/fic1.jpg',
  'Em Cem anos de solidão, um dos maiores clássicos da literatura, o prestigiado autor narra a incrível e triste história dos Buendía - a estirpe de solitários para a qual não será dada “uma segunda oportunidade sobre a terra” e apresenta o maravilhoso universo da fictícia Macondo, onde se passa o romance.',
  'fic',
  '0'),

new Livro('1984',
  'George Orwell',
  'assets/images/ficcao/fic2.jpg',
  'Uma das obras mais contundentes e influentes do século XX ganha nova e definitiva edição com projeto especial e ampla fortuna crítica. Romance incontornável, 1984 continua sendo o livro ao qual nos voltamos sempre que se mutila a verdade, distorce-se a linguagem e viola-se o poder.',
  'fic',
  '1'),


new Livro('Capitães da Areia',
  'Jorge Amado',
  'assets/images/ficcao/fic3.jpg',
  'Desde o seu lançamento, em 1937, Capitães da Areia causou escândalo: inúmeros exemplares do livro foram queimados em praça pública, por determinação do Estado Novo. Ao longo de sete décadas a narrativa não perdeu viço nem atualidade, pelo contrário: a vida urbana dos meninos pobres e infratores ganhou contornos trágicos e urgentes',
  'fic',
  '2'),


new Livro('Drácula',
  'Bram Stroker',
  'assets/images/ficcao/fic4.jpg',
  'Desde o seu lançamento, em 1937, Capitães da Areia causou escândalo: inúmeros exemplares do livro foram queimados em praça pública, por determinação do Estado Novo. Ao longo de sete décadas a narrativa não perdeu viço nem atualidade, pelo contrário: a vida urbana dos meninos pobres e infratores ganhou contornos trágicos e urgentes.',
  'fic',
  '3'),


new Livro('O Retrato de Dorian Gray',
  'Oscar Wilde',
  'assets/images/ficcao/fic5.jpg',
  'Em 1891, quando foi publicado em sua versão final, O retrato de Dorian Gray foi recebido com escândalo, e provocou um intenso debate sobre o papel da arte em relação à moralidade. Alguns anos mais tarde, o livro foi inclusive usado contra o próprio autor em processos judiciais, como evidência de que ele possuía “uma certa tendência” - no caso, a homossexualidade, motivo pelo qual acabou condenado a dois anos de prisão por atentado ao pudor.',
  'fic',
  '4'),


new Livro('Orgulho e Preconceito',
  'Jane Austen',
  'assets/images/ficcao/fic6.jpg',
  'Orgulho e preconceito é o livro mais famoso de Jane Austen e possui uma série de personagens inesquecíveis e um enredo memorável. Austen nos apresenta Elizabeth Bennet como heroína irresistível e seu pretendente aristocrático, o sr. Darcy.',
  'fic',
  '5'),


new Livro('Dom Casmurro',
  'Machado de Assis',
  'assets/images/ficcao/fic7.jpg',
  'Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira.',
  'fic',
  '6'),


new Livro('A Casa Torta',
  'Agatha Christie',
  'assets/images/ficcao/fic8.jpg',
  'Nos arredores de Londres há uma mansão com uma inusitada característica - ela é torta. É ali que o milionário octogenário Aristide Leonides mora com a esposa, cinquenta anos mais jovem, além de filhos, noras, netos e uma cunhada, irmã da primeira mulher. Quando a polícia descobre que o patriarca foi envenenado, todos os habitantes da casa se tornam suspeitos.',
  'fic',
  '7'),


new Livro('Os Testamentos',
  'Margaret Atwood',
  'assets/images/ficcao/fic9.jpg',
  'O conto da aia, a obra-prima distópica de Margaret Atwood, tornou-se um clássico de nossos tempos. E agora a autora oferece a seus leitores a sua aguardada e surpreendente continuação.QUINZE ANOS APÓS os eventos de O conto da aia, o regime teocrático da República de Gilead aparentemente se mantém firme no poder, mesmo após as sucessivas tentativas de insurgência.',
  'fic',
  '8'),

new Livro('Jane Eyre',
  'Charlotte Bronte',
  'assets/images/ficcao/fic10.jpg',
  'Durante uma viagem prolongada de seu marido, Luísa se deixa seduzir por Basílio, um primo seu que voltava a Portugal depois de uma temporada no Brasil. Imprudentes e indiscretos, os amantes acabam flagrados por Juliana, a empregada da casa, que passa a chantagear a patroa.',
  'fic',
  '9'),


new Livro('As Meninas',
  'Lygia Fagundes Telles',
  'assets/images/ficcao/fic11.jpg',
  'Num pensionato de freiras paulistano, em 1973, três jovens universitárias começam sua vida adulta de maneiras bem diversas. A burguesa Lorena, filha de família quatrocentona, nutre veleidades artísticas e literárias. ',
  'fic',
  '10'),


new Livro('O Primo Basílio',
  'Eça de Queirós',
  'assets/images/ficcao/fic12.jpg',
  'Durante uma viagem prolongada de seu marido, Luísa se deixa seduzir por Basílio, um primo seu que voltava a Portugal depois de uma temporada no Brasil. Imprudentes e indiscretos, os amantes acabam flagrados por Juliana, a empregada da casa, que passa a chantagear a patroa.',
  'fic',
  '11'),


new Livro('O Milagre da Manhã',
  'Hal Elrod',
  'assets/images/motivacional/mot1.jpg',
  'Neste novo clássico da autoajuda, Hal Elrod explica os benefícios de acordar cedo e desenvolver todo o nosso potencial e as nossas habilidades.',
  'mot',
  '12'),

new Livro('O Homem Mais Rico da Babilônia',
  'George S. Clason',
  'assets/images/motivacional/mot2.jpg',
  'Com mais de dois milhões de exemplares vendidos no mundo todo, O homem mais rico da Babilônia é um clássico sobre como multiplicar riqueza e solucionar problemas financeiros.',
  'mot',
  '13'),


new Livro('Pai Rico Pai Pobre',
  'Robert T. Kiyosaki',
  'assets/images/motivacional/mot3.jpg',
  'A escola prepara as crianças para o mundo real?  Essa é a primeira pergunta com a qual o leitor se depara neste livro.  O recado é ousado e direto: boa formação e notas altas não bastam para assegurar o sucesso de alguém.',
  'mot',
  '14'),

new Livro('Do Mil ao Milhão',
  'Thiago Nigro',
  'assets/images/motivacional/mot4.jpg',
  'Em seu primeiro livro, Thiago Nigro, criador da plataforma O Primo Rico, ensina aos leitores os três pilares para atingir a independência financeira: gastar bem, investir melhor e ganhar mais. Por meio de dados e de sua própria experiência como investidor e assessor, Nigro mostra que a riqueza é possível para todos – basta estar disposto a aprender e se dedicar.',
  'mot',
  '15'),


new Livro('Me Poupe!',
  'Nathalia Arcuri',
  'assets/images/motivacional/mot5.jpg',
  'Como economizar no dia a dia? Como enfrentar crises econômicas com tranquilidade? Como poupar mesmo ganhando pouco? Quais são os melhores (e os piores) investimentos? Será que está na hora de investir em ações? Como poupar para o futuro sem abrir mão dos desejos e necessidades do presente?',
  'mot',
  '16'),


new Livro('O Poder do Hábito',
  'Charles Duhigg',
  'assets/images/motivacional/mot6.jpg',
  'Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental.',
  'mot',
  '17'),


new Livro('Mais Esperto que o Diabo',
  'Napoleon Hill',
  'assets/images/motivacional/mot7.jpg',
  'Neste livro, inédito no Brasil, você vai descobrir, após 75 anos de segredo, por meio dessa entrevista exclusiva que Napoleon Hill fez, quebrando o código secreto da mente do Diabo: Quem é o Diabo? Onde ele habita? Quais suas principais armas mentais? Quem são os alienados e de que forma eles ou elas se alienam?',
  'mot',
  '18'),

new Livro('Anti-Frágil',
  'Nassim Nicholas Taleb',
  'assets/images/motivacional/mot8.jpg',
  'Em A lógica do Cisne Negro, Taleb demonstrou que acontecimentos altamente improváveis e imprevisíveis dominam a nossa existência. Em Antifrágil, o autor confere um novo conceito à incerteza, tornando-a desejável e até mesmo necessária.',
  'mot',
  '19'),

new Livro('Rápido e Devagar',
  'Daniel Kahneman',
  'assets/images/motivacional/mot9.jpg',
  'Em Rápido e devagar: duas formas de pensar, Daniel Kahneman nos leva a uma viagem pela mente humana e explica as duas formas de pensar: uma é rápida, intuitiva e emocional; a outra, mais lenta, deliberativa e lógica.',
  'mot',
  '20'),

new Livro('Os Segredos da mente milionária',
  'T. Harv Eker',
  'assets/images/motivacional/mot10.jpg',
  'Se as suas finanças andam na corda bamba, talvez esteja na hora de você refletir sobre o que T. Harv Eker chama de "o seu modelo de dinheiro" – um conjunto de crenças que cada um de nós alimenta desde a infância e que molda o nosso destino financeiro, quase sempre nos levando para uma situação difícil.',
  'mot',
  '21'),

new Livro('Seja Foda',
  'Caio Carneiro',
  'assets/images/motivacional/mot11.jpg',
  'Aposto que você quer, no final da sua vida, olhar para trás, bater no peito com o coração cheio de felicidade, sem falsa modéstia, com plena convicção e serenidade, e dizer: minha vida foi FODA.',
  'mot',
  '22'),

new Livro('A Sutil Arte de Ligar o Foda-se',
  'Mark Manson',
  'assets/images/motivacional/mot12.jpg',
  'Chega de tentar buscar um sucesso que só existe na sua cabeça. Chega de se torturar para pensar positivo enquanto sua vida vai ladeira abaixo. Chega de se sentir inferior por não ver o lado bom de estar no fundo do poço.',
  'mot',
  '23'),

new Livro('Os Sete Maridos de Evelyn Hugo',
  'Taylor Jenkins Reid',
  'assets/images/bestSellers/bs1.jpg',
  'Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez.',
  'bs',
  '24'),

new Livro('Torto Arado',
  'Itamar Vieira Junior',
  'assets/images/bestSellers/bs2.jpg',
  'Nas profundezas do sertão baiano, as irmãs Bibiana e Belonísia encontram uma velha e misteriosa faca na mala guardada sob a cama da avó.',
  'bs',
  '25'),

new Livro('Harry Potter e a Câmara Secreta',
  'J.K. Rowling',
  'assets/images/bestSellers/bs3.jpg',
  'Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry.',
  'bs',
  '26'),

new Livro('Jogos Vorazes',
  'Suzanne Collins',
  'assets/images/bestSellers/bs4.jpg',
  'Na abertura dos Jogos Vorazes, a organização não recolhe os corpos dos combatentes caídos e dá tiros de canhão até o final. Cada tiro, um morto.',
  'bs',
  '27'),

new Livro('Divergente',
  'Veronica Roth',
  'assets/images/bestSellers/bs5.jpg',
  'Uma escolha pode te transformar. Nesta versão futurista da cidade de Chicago, a sociedade se divide em cinco facções dedicadas ao cultivo de uma virtude – a Abnegação, a Amizade, a Audácia, a Franqueza e a Erudição.',
  'bs',
  '28'),

new Livro('A Garota do Lago',
  'Charlie Donlea',
  'assets/images/bestSellers/bs6.jpg',
  'Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.',
  'bs',
  '29'),

new Livro('Vermelho, Branco e Sangue Azul',
  'Casey Mcquiston',
  'assets/images/bestSellers/bs7.jpg',
  'Quando sua mãe foi eleita presidenta dos Estados Unidos, Alex Claremont-Diaz se tornou o novo queridinho da mídia norte-americana',
  'bs',
  '30'),

new Livro('O Código Da Vinci',
  'Dan Brown',
  'assets/images/bestSellers/bs8.jpg',
  'Um assassinato no Museu do Louvre traz à tona uma sinistra conspiração para revelar um segredo que foi protegido por uma sociedade secreta desde os tempos de Jesus Cristo.',
  'bs',
  '31'),

new Livro('A Mulher na Janela',
  'A.J. Finn',
  'assets/images/bestSellers/bs9.jpg',
  'Anna Fox mora sozinha na bela casa que um dia abrigou sua família feliz. Separada do marido e da filha e sofrendo de uma fobia que a mantém reclusa, ela passa os dias bebendo (muito) vinho, assistindo a filmes antigos, conversando com estranhos na internet e... espionando os vizinhos.',
  'bs',
  '32'),


new Livro('A Amiga Genial',
  'Elena Ferrante',
  'assets/images/bestSellers/bs10.jpg',
  'A reclusa autora italiana que conquistou a crítica internacional tem sua série napolitana lançada no Brasil pela Biblioteca AzulAclamada pela crítica e pelo público, Elena Ferrante se tornou conhecida por escrever sobre questões íntimas com muita clareza, sem se expor para divulgar seus livros.',
  'bs',
  '33'),

new Livro('Pessoas Normais',
  'Sally Rooney',
  'assets/images/bestSellers/bs11.jpg',
  'Na escola, no interior da Irlanda, Connell e Marianne fingem não se conhecer. Ele é a estrela do time de futebol, ela é solitária e preza por sua privacidade.',
  'bs',
  '34'),

new Livro('A Paciente Silenciosa',
  'Alex Michaelides',
  'assets/images/bestSellers/bs12.jpg',
  'Alicia Berenson tinha uma vida perfeita. Ela era uma pintora famosa casada com um fotógrafo bem-sucedido e morava numa área nobre de Londres que dá para o parque de Hampstead Heath. ',
  'bs',
  '35')
];

//INSTANCIANDO CLASSE CATALOGO
let obj = new Catalago();

//UTLIZANDO MÉTODO DA CLASSE CRIADA
const teste = livros.forEach(livro => obj.addLivroCatalago(livro));

//MANIPULANDO O DOM PARA CRIAÇÃO DA PÁGINA INICIAL
let sectionLiteratura = document.getElementById('literatura');
let sectionMotivacional = document.getElementById('motivacional');
let sectionBestSeller = document.getElementById('bestSellers');
let sectionMinhaBiblioteca = document.getElementById('minhaBiblioteca');
let titulo_section = document.querySelectorAll('.titulo_section');
let existe_leitura = false;
let divSlickSlider0 = document.createElement('div');
let divSlickSlider1 = document.createElement('div');
let divSlickSlider2 = document.createElement('div');
let divSlickSlider3 = document.createElement('div');

const sections = [sectionLiteratura, sectionMotivacional, sectionBestSeller, sectionMinhaBiblioteca];
let arrayDivs = [divSlickSlider0, divSlickSlider1, divSlickSlider2, divSlickSlider3];

const renderiza = ()=>{arrayDivs.forEach(div => div.classList.add('carrosselMain'));
//SEÇÕES DE LITERATURA, MOTIVACIONAL E BESTSELLERS - CRIANDO DINAMICAMENTE O CARROSSEL
  for (let i = 0; i < obj.catalogo.length; i++) {
  divSlickSlider3.innerHTML += `<div class='carrosselItem capa' id='${obj.catalogo[i].id}'><a href="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="./${obj.catalogo[i].capa}" alt=${obj.catalogo[i].titulo} id='${obj.catalogo[i].id}' width="90%"></a></div>` 
  if (obj.catalogo[i].categoria === 'fic') {
    divSlickSlider0.innerHTML += `<div class='carrosselItem capa' id='${obj.catalogo[i].id}'><a href="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="./${obj.catalogo[i].capa}" alt=${obj.catalogo[i].titulo} id='${obj.catalogo[i].id}' width="90%"></a></div>`;
  } else if (obj.catalogo[i].categoria === 'mot') {
    divSlickSlider1.innerHTML += `<div class='carrosselItem capa' id='${obj.catalogo[i].id}'><a href="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="./${obj.catalogo[i].capa}" alt=${obj.catalogo[i].titulo} id='${obj.catalogo[i].id}' width="90%"></a></div>`
  } else if (obj.catalogo[i].categoria === 'bs') {
    divSlickSlider2.innerHTML += `<div class='carrosselItem capa' id='${obj.catalogo[i].id}'><a href="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="./${obj.catalogo[i].capa}" alt=${obj.catalogo[i].titulo} id='${obj.catalogo[i].id}' width="90%"></a></div>`
  }};
  arrayDivs.forEach(div => div.classList.add('slickSlider'));
  arrayDivs.forEach(div => div.style.paddingLeft = '1%');
  for (let i = 0; i < sections.length; i++) {
    sections[i].appendChild(arrayDivs[i]);
    // arrayDivs[i].classList.add('slickSlider');
    // arrayDivs[i].style.paddingLeft = '1%';
  }}

for (titulo of titulo_section) {
  titulo.style.textAlign = 'center';
}

//FUNÇÕES NECESSÁRIAS

//FUNÇÃO JS
function criandoSlider(nomeDaClasse) {
  $(nomeDaClasse).slick({
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });
}

//FUNÇÃO PARA ESVAZIAR O MODAL
function esvaziar(){
  titulo_modal.innerText = '';
  descricao_livro_modal.innerText = '';
  capa_livro_modal.innerHTML = '<div class="modal-body text-light" id="capaLivroModal"></div>';
  btn_add_livro.id = '';
}

//CHAMANDO FUNÇÃO PARA RENDERIZAR A TELA
renderiza();


//SEÇÃO MINHA BIBLIOTECA - CRIAÇÃO DINÂMICA
//let textoInicial = document.getElementById('textoInicial');
// textoInicial.innerText = 'Sua biblioteca está vazia';

//IMPLEMENTANDO O MODAL DINÂMICO, POPOVER, SPINNER E PLACEHOLDERS
let titulo_modal = document.getElementById('tituloLivroModal');
let capa_livro_modal = document.getElementById('capaLivroModal');
let descricao_livro_modal = document.getElementById('descricaoLivroModal');
const btn_modal_close = document.querySelector('.btn-close');
let carrossel_item = document.querySelectorAll('.carrosselItem');
const btn_voltar_menu = document.getElementById('btn_voltar_menu');
const btn_add_livro = document.querySelector('.btn_add_livro');
const placeHolderInicial = document.getElementById('placeholderInicial');
let semPlaceholder = document.getElementById('semPlaceholder');

//PLACEHOLDER
document.addEventListener('DOMContentLoaded', function() {setTimeout(()=>{
  criandoSlider('.slickSlider');
  placeHolderInicial.style.display = 'none';
  semPlaceholder.style.display = 'block';
}, 1000)});

//MODAL DINÂMICO
carrossel_item.forEach(car_item => car_item.addEventListener('click', (event) => {
  esvaziar();
  let item_id = event.target.id;
  titulo_modal.innerText += obj.catalogo[item_id].titulo;
  descricao_livro_modal.innerText += obj.catalogo[item_id].resumo;
  capa_livro_modal.innerHTML += `<img src="${obj.catalogo[item_id].capa}" id="capaLivroModal" class="img-fluid" alt="${obj.catalogo[item_id].titulo}" width="30%">`
  btn_add_livro.id = item_id;
})) ;

//SPINNER
btn_comecar_ler.addEventListener('click', () => {
  const carregando = '<div class="d-flex align-items-center"><p class="text-danger fw-bold">Carregando o Livro Escolhido...</p><div class="spinner-border ms-auto text-danger" role="status" aria-hidden="true"></div></div>'
  descricao_livro_modal.innerHTML = carregando;
})

//FUNCIONALIDADES PARA OUTROS BOTÕES
btn_modal_close.addEventListener('click', () => {
  esvaziar();
})

btn_voltar_menu.addEventListener('click', () => {
  esvaziar();
})


//CÓDIGO JS DO POPOVER DO BOOTSTRAP
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));