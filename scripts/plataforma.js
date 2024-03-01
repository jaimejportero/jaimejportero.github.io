const holes = document.querySelectorAll('.hole');
let interval = 1000; // Intervalo inicial de 1000ms
let score = 0;

function getRandomHole() {
  const index = Math.floor(Math.random() * holes.length);
  return holes[index];
}

function showMole() {
  const hole = getRandomHole();
  hole.classList.add('mole');

  setTimeout(() => {
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
    }
  });
});

function updateScore() {
  const scoreElement = document.getElementById('score');
  if (scoreElement) { // Verificar si el elemento existe antes de actualizar la puntuación
    scoreElement.textContent = `Puntuación: ${score}`;
  } else {
    console.error('No se encontró el elemento con ID "score"');
  }
}

// Comprobamos si el marcador de puntuación se actualiza correctamente al inicio
updateScore();

showMole(); // Comenzar a mostrar topos
