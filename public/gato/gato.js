//GATO
$(function () {
    const socket = io();

    let turno = 0;
    let tablero = [];
    const resultado = $('#resultado');

    const btnPulsado = (e, pos) => {
        const btn = e.target;
        if (btn.style.backgroundColor) {
            console.log("Pulsa otra casilla")
        } else {

            turno++;
            const color = turno % 2 ? 'salmon' : 'palegreen';
            btn.style.backgroundColor = color;
            tablero[pos] = color;
            console.log(turno);
            console.log(pos, tablero)
            console.log(haGanado())
            
            if(haGanado() == true){
                resultado.append(`<div class="msg-area mb-2" style="background-color:${color}"><p><b>Felicidades jugador </b>: ${color}</p></div>`);
                turno = 0;
                tablero = [];
            }
        }
    }

    const haGanado = () => {
        if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
            return true;
        } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
            return true;
        } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
            return true;
        } else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) {
            return true;
        } else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
            return true;
        } else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
            return true;
        } else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) {
            return true;
        } else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) {
            return true;
        }
        return false;
    }

    document.querySelectorAll('#gato').forEach(
        (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i))
    );

});
