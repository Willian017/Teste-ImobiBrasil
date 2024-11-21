// 1 - Alterar o Texto na Seção "HOME"

function AlterarH1()
{
    document.querySelector('.hero-content h1').innerHTML = "Bem-vindo ao Nosso Site";

    //Altera os h1 que estão dentro do container de classe hero-content
}

//2 - Alterar Imagem

function AlterarImg()
{
    let imgs = document.querySelectorAll('.hero-content button img');

    //Seleciona todas as imagens que estão dentro do container de classe hero-content

    imgs.forEach(img => {
    img.setAttribute('src', 'https://svgsilh.com/svg/2831367.svg');
    img.style.width = "30px";
    img.style.height = "30px";
    });

    //Usa o forEach para percorrer por todas as imgs e atribuilas um novo src, largura e altura
    
}

//3 - Esconder Elemento

function Esconder()
{
    let Esconder = document.querySelector('.availability-content');
    Esconder.style.display = "none";

    //Seleciona a classe availability-conten e depois muda seu display para none
}

//4 - Estilizar um Parágrafo no Rodapé

function EstilizaRodape()
{
    let TextoRodape = document.querySelector('.footer-head p');
    TextoRodape.style.fontweight = "1000";
    TextoRodape.style.color = "blue";

    //Seleciona a classe availability-conten e depois muda seu display para none
}

//5 - Mover Elemento

function MoverElemento()
{
    // Seleciona os elementos
    let hero = document.querySelector('.hero');
    let find = document.querySelector('.find');

    hero.insertAdjacentElement('afterend', find);

    //Cria duas variaveis que recebem o valor da classe hero e da classe find, depois move a classe find para baixo da classe hero
}

//6 - Adicionar Comportamento ao Botão "CONTACT US"

function BotaoClicar()
{
    let BotaoContato = document.querySelector(".find-content-details a");

    //Pega o link da classe find-content-details

    BotaoContato.id = 'btn-contact';

    //Atribui um Id a esse link

    BotaoContato.addEventListener("click", function(){
        alert("BotaoClicado");
    });

    //Cria um evento que quando o Botao for clicado emite um alerta 
}

//7 - Adicionar Nova Opção no Formulário "RENT"

function AdicionarPP()
{
    let novoOption = document.createElement('option');
    novoOption.value = 'Presidente Prudente';
    novoOption.textContent = 'Presidente Prudente';

    //Cria um novo elemento Option e atribui a ele um valor e um texto

    document.querySelector('.search-1 select').appendChild(novoOption);

    //Adiciona ao select a Option Criada a cima


    // Adicionar em todos os Selects

    // function adicionarOption(select, value, texto) 
    // {
    //     let novoOption = document.createElement('option');
    //     novoOption.value = value;
    //     novoOption.textContent = texto;

    //     select.appendChild(novoOption);
    // }

    // let selects = document.querySelectorAll('select[name="location"]');

    // selects.forEach(select => {
    //     adicionarOption(select, 'Presidente Prudente', 'Presidente Prudente');
    // });
}

//8 - Adicionar Item no Menu de Navegação

function AdicionarMenu()
{
    let NavBar = document.querySelector('.navbar-list');

    //Cria uma variavel da Navbar

    let NovoItem = document.createElement('li');

    //Cria uma nova Li

    let link = document.createElement('a');
    link.href = '#';
    if (window.innerWidth <= 768) 
        link.textContent = 'ABOUT US';
    else 
        link.textContent = 'About Us';

    //Cria um novo link e adiciona a ele o Href e o Texto já adequado a versão mobile ou a versão de Pc

    NovoItem.appendChild(link);

    //Adiciona o link criado no Li

    let UltimoItem = NavBar.lastElementChild;

    //Seleciona o ultimo elemento do NavBar

    NavBar.insertBefore(NovoItem, UltimoItem);

    //Insere antes do ultimo elemento do NavBar
}

//9 - Validação de Formulário no Rodapé

function Desafio()
{
    let BotaoForms = document.querySelector(".footer-subscribe button");

    //Botão do Formulario

    BotaoForms.addEventListener("click", function(){
        let TextoForm = document.querySelector(".footer-subscribe input");

        //Texto do formulario 

        if (TextoForm.value.trim() === "") 
            alert("O campo de email está vazio");

        //Faz a verificação se o campo esta vazio ou não
          
    });
    
}

AlterarH1();

AlterarImg();

Esconder();

BotaoClicar();

MoverElemento();

EstilizaRodape();

AdicionarPP();

AdicionarMenu();

Desafio();
