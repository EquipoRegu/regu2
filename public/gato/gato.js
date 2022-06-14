//GATO
$(function () {
    const socket = io();

    let tablero = [];
    let temp = 0;

    const btnPulsado = (e, pos) => {
        const btn = e.target;
            if (temp == 0) {
                const color = 'white';
                btn.style.backgroundColor = color;
                tablero[pos] = color;
                tablero[pos] = 1;
            } else if (temp == 1) {
                const color = 'black';
                btn.style.backgroundColor = color;
                tablero[pos] = color;
            } else if (temp == 2) {
                const color = 'salmon';
                btn.style.backgroundColor = color;
                tablero[pos] = color;
            } else if (temp == 3) {
                const color = 'palegreen';
                btn.style.backgroundColor = color;
                tablero[pos] = color;
            } else if (temp == 4) {
                temp = -1;
            }
            temp = temp+1;
    }

    document.querySelectorAll('#gato').forEach(
        (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i))
    );
});
