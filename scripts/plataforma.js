const holes = document.querySelectorAll('.hole');
let interval = 1000; // Intervalo inicial de 1000ms
let score = 0;
let timeoutId; // Variable para almacenar el identificador del tiempo de espera

function getRandomHole() {
  const index = Math.floor(Math.random() * holes.length);
  return holes[index];
}

function showMole() {
  const hole = getRandomHole();
  hole.classList.add('mole');

  timeoutId = setTimeout(() => {
    hole.classList.remove('mole');
    interval *= 0.95; // Disminuir el intervalo en un 5% cada vez
    timeoutId = setTimeout(showMole, interval); // Cambiar el intervalo de aparición del topo
  }, interval); // Usar el intervalo actual
}

function resetGame() {
  clearInterval(timeoutId); // Limpiar el intervalo de tiempo
  interval = 1000; // Restaurar el intervalo inicial
  score = 0; // Restaurar el puntaje
  updateScore(); // Actualizar la puntuación en el HTML
  showMole();
}

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole.classList.contains('mole')) {
      hole.classList.remove('mole');
      score += 50; // Incrementa la puntuación
      updateScore(); // Actualiza la puntuación en el HTML
    } else {
      resetGame(); // Reiniciar el juego si se golpea el agujero equivocado
    }
  });
});

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Puntuación: ${score}`;
}

showMole(); // Comenzar a mostrar topos
document.getElementById('reiniciar').addEventListener('click', resetGame);
