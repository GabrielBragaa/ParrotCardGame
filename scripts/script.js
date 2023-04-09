const imagens = ['<img src="./img/bobrossparrot.gif" alt="" data-test="face-up-image"></img>', '<img src="./img/explodyparrot.gif" alt="" data-test="face-up-image"></img>', '<img src="./img/fiestaparrot.gif" alt="" data-test="face-up-image"></img>', '<img src="./img/metalparrot.gif" alt="" data-test="face-up-image"></img>', '<img src="./img/revertitparrot.gif" alt="" data-test="face-up-image"></img>', '<img src="./img/tripletsparrot.gif" alt="" data-test="face-up-image"></img>', '<img src="./img/unicornparrot.gif" alt="" data-test="face-up-image"></img>'];
let cartasViradas = 0, imgSelecionadas = [], primeiraCarta, segundaCarta, pontos = 0, tempo = 1;
const intervalo = '';

function qtdCarta() {
    const deck = document.querySelector('.deck');
    qtd = prompt('Com quantas cartas quer jogar?');
    while (qtd < 4 || qtd > 14 || qtd % 2 !== 0) {
        qtd = prompt('Com quantas cartas quer jogar?');
    }

    for (let contador = 0; contador < (qtd/2); contador++) {
        let carta = imagens[contador];
        imgSelecionadas.push(carta);
        imgSelecionadas.push(carta);
    }

    imgSelecionadas.sort(embaralha);

    for (let contador = 0; contador < qtd; contador++) {
        deck.innerHTML += `<div class="carta" onclick="virarCarta(this)" data-test="card"><div class="face frente"><img src="./img/back.png" alt="" data-test="face-down-image"></div><div class="face verso">${imgSelecionadas[contador]}</div></div>`;
    }
    intervalo = setInterval(cronometro, 1000);
}

function virarCarta(carta) {
    if ( primeiraCarta === undefined || segundaCarta === undefined){
        carta.classList.add('virada');
        cartasViradas++;
        if (primeiraCarta === undefined) {
            primeiraCarta = carta;
        } else if (segundaCarta === undefined) {
            segundaCarta = carta;
            if (primeiraCarta.innerHTML === segundaCarta.innerHTML) {
                if (pontos !== qtd/2) {
                    pontos++;
                    resetCarta();
                }
                if (pontos === qtd/2) {
                    alert(`Você ganhou em ${cartasViradas} jogadas! A duração do jogo foi de ${tempo - 1} segundos!`);
                    clearInterval(intervalo);
                    reiniciaJogo();
                }
            } else {
                setTimeout(voltaCarta, 1000);
            }
    }
}
}

function voltaCarta() {
    primeiraCarta.classList.remove('virada');
    segundaCarta.classList.remove('virada');
    resetCarta();
}

function embaralha() {
	return Math.random() - 0.5;
}

function resetCarta() {
    primeiraCarta = undefined;
    segundaCarta = undefined;
}

function cronometro() {
    const elemento = document.querySelector('.cronometro');
    elemento.innerText = '';
    elemento.innerText = tempo++;
}

function resetJogo() {
    cartasViradas = 0;
    imgSelecionadas = [];
    pontos = 0;
    tempo = 1;

    const deck = document.querySelector('.deck');
    deck.innerHTML = '';
}

function reiniciaJogo() {
    let resposta = prompt('Você gostaria de reiniciar a partida? (sim ou não)');
    while (resposta !== "sim" && resposta !== "não") {
        resposta = prompt('Gostaria de reiniciar a partida?');
    }
    if (resposta === "sim") {
            resetJogo();
            resetCarta();
            qtdCarta();
    } else if (resposta === "não") {
            document.querySelectorAll('.carta').removeAttribute('onclick');
    }
}

qtdCarta();
