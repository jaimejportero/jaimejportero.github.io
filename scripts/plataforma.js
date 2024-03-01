const holes = document.querySelectorAll('.hole');

function getRandomHole() {
  const index = Math.floor(Math.random() * holes.length);
  return holes[index];
}

function showMole() {
  const hole = getRandomHole();
  hole.classList.add('mole');

  setTimeout(() => {
    hole.classList.remove('mole');
    setTimeout(showMole, 1000); // Change mole appearance interval as desired
  }, 1000); // Change mole visibility duration as desired
}

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole.classList.contains('mole')) {
      hole.classList.remove('mole');
      // Increment score or perform other actions
    }
  });
});

showMole(); // Start showing moles
