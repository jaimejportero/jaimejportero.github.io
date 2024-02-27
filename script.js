
document.getElementById('generateBtn').addEventListener('click', function() {
    // Generar número aleatorio del 1 al 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    // Actualizar la barra de progreso
    const fill = document.getElementById('fill');
    fill.style.width = randomNumber + '%';
  
    // Actualizar el porcentaje
    const percentage = document.getElementById('percentage');
    percentage.textContent = randomNumber + '%';
  });
  