const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 20,
  speedX: 5,
  speedY: -5,
};

let platforms = [
  { x: 100, y: 500, width: 100, height: 20 },
  { x: 300, y: 400, width: 100, height: 20 },
  { x: 500, y: 300, width: 100, height: 20 },
];

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function drawPlatforms() {
  platforms.forEach(platform => {
    ctx.beginPath();
    ctx.rect(platform.x, platform.y, platform.width, platform.height);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  });
}

function update() {
  // Move the ball
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  // Check collision with platforms
  platforms.forEach(platform => {
    if (ball.y + ball.speedY > platform.y &&
      ball.y + ball.speedY < platform.y + platform.height &&
      ball.x > platform.x &&
      ball.x < platform.x + platform.width) {
      ball.speedY = -ball.speedY; // Reverse the vertical speed
      removePlatformsBelow(platform);
      generateNewPlatforms();
    }
  });

  // Apply gravity
  ball.speedY += 0.1;

  // Check collision with walls
  if (ball.x + ball.speedX > canvas.width - ball.radius || ball.x + ball.speedX < ball.radius) {
    ball.speedX = -ball.speedX;
  }
  if (ball.y + ball.speedY > canvas.height - ball.radius || ball.y + ball.speedY < ball.radius) {
    ball.speedY = -ball.speedY;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPlatforms();
}

function updatePlatforms(platforms) {
  for (let i = 0; i < platforms.length; i++) {
    platforms[i].y += platformSpeed; // Mueve las plataformas hacia abajo
    if (platforms[i].y > canvas.height) {
      // Elimina las plataformas que salen de la pantalla
      platforms.splice(i, 1);
      // Agrega una nueva plataforma en la parte superior del canvas
      platforms.unshift(new Platform(/* parámetros de la nueva plataforma */));
    }
  }
}

function checkCollision(ball, platform) {
  if (ball.y + ball.radius >= platform.y && ball.y - ball.radius <= platform.y + platform.height &&
    ball.x >= platform.x && ball.x <= platform.x + platform.width) {
    ball.speedY = -ball.speedY; // Cambia la dirección vertical de la pelota
  }
}

function gameLoop() {
  // Borrar el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Actualizar y dibujar la pelota
  ball.update();
  ball.draw();

  // Actualizar y dibujar las plataformas
  updatePlatforms(platforms);
  drawPlatforms(platforms);

  // Verificar colisiones entre la pelota y las plataformas
  for (let i = 0; i < platforms.length; i++) {
    checkCollision(ball, platforms[i]);
  }

  // Llamar a la función para mover la pelota (si se controla con teclado)
  moveBallWithKeyboard();

  // Llamar a la función para mover el canvas hacia abajo cuando la pelota colisiona con una plataforma
  updatePlatforms(platforms);

  // Volver a ejecutar el bucle de juego
  requestAnimationFrame(gameLoop);
}


function removePlatformsBelow(platform) {
  platforms = platforms.filter(p => p.y < platform.y);
}

function generateNewPlatforms() {
  const lastPlatform = platforms[platforms.length - 1];
  const newPlatformY = lastPlatform.y - 100; // Distance between platforms
  const newPlatform = {
    x: Math.random() * (canvas.width - 100),
    y: newPlatformY,
    width: 100,
    height: 20,
  };
  platforms.push(newPlatform);
}
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    ball.speedX = -5; // Mueve la pelota hacia la izquierda
  } else if (event.key === 'ArrowRight') {
    ball.speedX = 5; // Mueve la pelota hacia la derecha
  } else if (event.key === 'ArrowUp') {
    ball.speedY = -5; // Mueve la pelota hacia arriba
  } else if (event.key === 'ArrowDown') {
    ball.speedY = 5; // Mueve la pelota hacia abajo
  }
});

document.addEventListener('keyup', function (event) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    ball.speedX = 0; // Detiene el movimiento horizontal cuando se suelta la tecla
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    ball.speedY = 0; // Detiene el movimiento vertical cuando se suelta la tecla
  }
});

gameLoop();
