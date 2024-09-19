//pegar os elementos HTML dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");


//identificar o cliente no botao
botoesCarrossel.forEach((botao, indice) =>
    botao.addEventListener("click", () => {
        console.log("clicou no botão");

        //desmacar o botao anterior
        const botaoSelecionado = document.querySelector(".selecionado");

        botaoSelecionado.classList.remove("selecionado")

        //marcar o botao atual
        botao.classList.add("selecionado");

        //esconder a imagem anterior
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");

        //mostrar a nova imagem
        imagens[indice].classList.add("ativa");

        //esconder a informação do dragão anterior
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");

        //mostrar a informação do dragão atual
        informacoes[indice].classList.add("ativa");
    })

)