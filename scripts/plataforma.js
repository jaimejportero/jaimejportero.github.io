const holes = document.querySelectorAll('.hole');
let interval = 1000; // Intervalo inicial de 1000ms
let score = 0;
var hole;
let hitCorrectHole = false; // Variable para verificar si el jugador ha tocado un agujero correctamente

function getRandomHole() {
  const index = Math.floor(Math.random() * holes.length);
  return holes[index];
}

function showMole() {
  hole = getRandomHole();
  hole.classList.add('mole');

  setTimeout(() => {
    if (!hitCorrectHole) { // Si el jugador no ha tocado un agujero correctamente
      resetGame(); // Reiniciar el juego
    }
    hole.classList.remove('mole');
    interval *= 0.95; // Disminuir el intervalo en un 5% cada vez
    setTimeout(showMole, interval); // Cambiar el intervalo de aparición del topo
  }, interval); // Usar el intervalo actual
}

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole.classList.contains('mole')) {
      hole.classList.remove('mole');
      score += 50; // Incrementa la puntuación
      updateScore(); // Actualiza la puntuación en el HTML
      hitCorrectHole = true; // Marcar que el jugador ha tocado un agujero correctamente
    }
  });
});

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Puntuación: ${score}`;
}

function resetGame() {
  score = 0; // Reiniciar el marcador
  interval = 1000; // Reiniciar el intervalo
  updateScore(); // Actualizar el marcador en el HTML
}

showMole(); // Comenzar a mostrar topos
