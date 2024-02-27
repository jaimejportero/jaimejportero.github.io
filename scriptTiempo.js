const fechaInicio = new Date('2023-11-05');
// Fecha actual del sistema
const fechaActual = new Date();
console.log(fechaActual);
// Calcula la diferencia en milisegundos
const diferencia = fechaActual - fechaInicio;
console.log(diferencia);

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
document.getElementById('horas').textContent = Math.floor(horasTotales);
document.getElementById('minutos').textContent = Math.floor(minutosTotales);
document.getElementById('segundos').textContent = Math.floor(segundosTotales);