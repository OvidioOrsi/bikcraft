//Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){
    const url = window.location.href;
    const href = link.href

    if(url.includes(href)){
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)


//Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const element = document.getElementById(parametro);
    if(element){
        element.checked = true;
    }
}

parametros.forEach(ativarProduto);


//Perguntas frequentes abrir/fechar
const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls)
    
    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
    
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)


//Galeria de bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches//só vai executar se for maior que 1000xp
    if(media){
        galeriaContainer.prepend(img) //vai trocar a ordem das bicicletas
    }
    
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)


// Animação
if(window.SimpleAnime) {
    new SimpleAnime();
}
