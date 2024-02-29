const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let fruit;
let obstacle;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    obstacle = new Obstacle();
    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }

        snake.checkCollision();
        snake.checkCollisionWithObstacle(obstacle);
    }, 250);
}());

window.addEventListener('keydown', evt => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
});

// Event listeners for touch controls
document.getElementById('upBtn').addEventListener('click', () => snake.changeDirection('Up'));
document.getElementById('downBtn').addEventListener('click', () => snake.changeDirection('Down'));
document.getElementById('leftBtn').addEventListener('click', () => snake.changeDirection('Left'));
document.getElementById('rightBtn').addEventListener('click', () => snake.changeDirection('Right'));
