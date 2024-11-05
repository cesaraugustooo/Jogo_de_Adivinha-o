let estado = 'introducao';

function PassarDireita() {
    let div = document.getElementsByClassName('modos')[0];
    let h1 = document.getElementById('h1');
    let nivelLink = document.getElementById('nivelLink');

    div.classList.add('fade-out');

    setTimeout(() => {
        if (estado === 'introducao') {
            div.style.background = 'linear-gradient(to right, #E4E6E9, #EDEEF1, #D8DBE0)';
            h1.innerText = `Nivel Facil`;
            estado = 'facil';
            nivelLink.href = 'facil.html';
        } else if (estado === 'facil') {
            div.style.background = 'linear-gradient(to right, #B0E0E6, #E6E6FA, #D3D3D3)';
            h1.innerText = `Nivel Médio`;
            estado = 'Medio';
            nivelLink.href = 'medio.html';
        } else if (estado === 'Medio') {
            div.style.background = 'linear-gradient(to right, #FFB6C1, #FF69B4, #FF1493)';
            h1.innerText = `Nivel Dificil`;
            estado = 'Dificil';
            nivelLink.href = 'dificil.html';
        } else {
            h1.innerText = `Modos de Jogo`;
            div.style.background = 'linear-gradient(to right, #C0C0C0, #A9A9A9, #808080)';
            estado = 'introducao';
            nivelLink.href = '#';

        }

        div.classList.remove('fade-out');
        div.classList.add('fade-in');

        setTimeout(() => {
            div.classList.remove('fade-in');
        }, 500);
    }, 500);
}

function VoltarEsquerda() {
    let div = document.getElementsByClassName('modos')[0];
    let h1 = document.getElementById('h1');

    div.classList.add('fade-out');

    setTimeout(() => {
        if (estado === 'Dificil') {
            div.style.background = 'linear-gradient(to right, #B0E0E6, #E6E6FA, #D3D3D3)';
            h1.innerText = `Nivel Médio`;
            estado = 'Medio';
        } else if (estado === 'Medio') {
            div.style.background = 'linear-gradient(to right, #E4E6E9, #EDEEF1, #D8DBE0)';
            h1.innerText = `Nivel Facil`;
            estado = 'facil';
        } else if (estado === 'facil') {
            div.style.background = 'linear-gradient(to right, #C0C0C0, #A9A9A9, #808080)';
            h1.innerText = `Modos de Jogo`;
            estado = 'introducao';
        } else {
            h1.innerText = `Modos de Jogo`;
            div.style.background = 'linear-gradient(to right, #C0C0C0, #A9A9A9, #808080)';
            estado = 'introducao';
        }

        div.classList.remove('fade-out');
        div.classList.add('fade-in'); n

        setTimeout(() => {
            div.classList.remove('fade-in');
        }, 500);
    }, 500);
}