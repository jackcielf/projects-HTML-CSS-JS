let card = document.querySelector('.card');
card.addEventListener('mousemove', moviment);

function moviment(e) {
    let cardWidth = card.offsetWidth; /* Passa a largura do cartão */
    let cardHeight = card.offsetHeight; /* Passa a altura do cartão */
    
    /* "offsetLeft" é o espaço entre o elemento e borda esquerda */
    let centerX = card.offsetLeft + (cardWidth / 2); /* Pegar o centro do cartão no eixo X */
    let centerY = card.offsetTop + (cardHeight / 2); /* Pegar o centro do cartão no eixo Y */
    
    let positionX = e.clientX - centerX; /* Passa detalhadamente as cordenadas do eixo X */
    let positionY = e.clientY - centerY; /* Passa detalhadamente as cordenadas no eixo Y */

    let rotateX = ((+1) * 25 * positionY / (cardHeight / 2)).toFixed(2);
    let rotateY = ((-1) * 25 * positionY / (cardWidth / 2)).toFixed(2);
    card.style.transform = "perspective(500px) rotateX($(rotateX)deg) rotateY($(rotateY)deg)";
}
