const fechaInicio = new Date('2022-11-05');
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