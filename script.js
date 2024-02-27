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
const fechaInicio = new Date('2002-11-05');
// Fecha actual del sistema
const fechaActual = new Date();

// Calcula la diferencia en milisegundos
const diferencia = fechaActual - fechaInicio;

// Convierte la diferencia de milisegundos a años, meses, días, horas, minutos y segundos
const segundosTotales = diferencia / 1000;
const minutosTotales = segundosTotales / 60;
const horasTotales = minutosTotales / 60;
const diasTotales = horasTotales / 24;
const mesesTotales = diasTotales / 30.4375; // Aproximadamente, asumiendo 365.25 días por año
const añosTotales = diasTotales / 365.25; // Año bisiesto cada 4 años

// Muestra el tiempo transcurrido en la página HTML
document.getElementById('años').textContent = Math.floor(añosTotales);
document.getElementById('meses').textContent = Math.floor(mesesTotales);
document.getElementById('días').textContent = Math.floor(diasTotales);
document.getElementById('horas').textContent = Math.floor(horasTotales % 24);
document.getElementById('minutos').textContent = Math.floor(minutosTotales % 60);
document.getElementById('segundos').textContent = Math.floor(segundosTotales % 60);
