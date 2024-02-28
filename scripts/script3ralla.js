document.addEventListener("DOMContentLoaded", function() {
    const celdas = document.querySelectorAll('.celda');
    let jugadorActual = 'X';

    // Agregar evento click a cada celda
    celdas.forEach(celda => {
        celda.addEventListener('click', function() {
            if (!celda.textContent) { // Verificar si la celda está vacía
                celda.textContent = jugadorActual; // Asignar el símbolo del jugador actual a la celda
                if (comprobarGanador()) {
                    alert('¡El jugador ' + jugadorActual + ' ha ganado!');
                    reiniciarJuego();
                } else if (comprobarEmpate()) {
                    alert('¡Empate!');
                    reiniciarJuego();
                } else {
                    cambiarTurno();
                }
            }
        });
    });

    // Función para cambiar el turno del jugador
    function cambiarTurno() {
        jugadorActual = jugadorActual === 'X' ? 'O' : 'X'; // Cambiar al siguiente jugador
    }

    // Función para comprobar si hay un ganador
    function comprobarGanador() {
        const combinacionesGanadoras = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
            [0, 4, 8], [2, 4, 6] // Diagonales
        ];

        return combinacionesGanadoras.some(comb => {
            const [a, b, c] = comb;
            return celdas[a].textContent && celdas[a].textContent === celdas[b].textContent && celdas[a].textContent === celdas[c].textContent;
        });
    }

    // Función para comprobar si hay un empate
    function comprobarEmpate() {
        return [...celdas].every(celda => celda.textContent); // Comprueba si todas las celdas están llenas
    }

    // Función para reiniciar el juego
    function reiniciarJuego() {
        celdas.forEach(celda => celda.textContent = ''); // Vaciar todas las celdas
        jugadorActual = 'X'; // Restablecer al primer jugador
    }
});
