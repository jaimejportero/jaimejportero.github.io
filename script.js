document.getElementById('generateBtn').addEventListener('click', function () {
    // Generar número aleatorio del 1 al 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Actualizar el porcentaje gradualmente
    let currentPercentage = 0;
    let barra = -10;
    const interval = setInterval(function () {
        currentPercentage++;
        barra++;
        const percentage = document.getElementById('percentage');
        percentage.textContent = currentPercentage + '%';
        const fill = document.getElementById('fill');
        fill.style.width = barra + '%';
        if (currentPercentage >= randomNumber) {
            clearInterval(interval);
        }
    }, 10);

    // Realizar el efecto de latido del corazón
    const heart = document.getElementById('heart');
    heart.style.transform = 'scale(1.1)'; // Hacer el corazón más grande
    setTimeout(function () {
        heart.style.transform = 'scale(1)'; // Volver al tamaño original
    }, 200); // Esperar 200 milisegundos antes de volver al tamaño original
});
// Fecha de inicio: 5 de noviembre de 2002