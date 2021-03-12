$('.owl-carousel').owlCarousel({ //Painel de controle do carrossel, liga os arquivos css aos html
    loop:true, //Configura o loop carrossel. Se fosse falso, os filmes só apareceriam até o fim da listae depois pararia
    margin:10, //Margem entre um filme e outro
    nav:false, //Setinhas de navegação: desligado para não aparecerem
    responsive:{ //Quantidade de filmes a cada quantidade pixels da tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})