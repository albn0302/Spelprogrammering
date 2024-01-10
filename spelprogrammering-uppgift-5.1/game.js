const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

let gravity = 0.5;

let velocity = {
    x: 0,
    y: 1,
};

let floorY = canvas.height - 50;

let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
};

requestAnimationFrame(gameLoop);

function gameLoop() {
    requestAnimationFrame(gameLoop);
    context.clearRect(0, 0, canvas.width, canvas.height);
    update();
    render();
};

function update() {
    ball.x = ball.x + velocity.x;
    ball.y = ball.y + velocity.y;

    velocity.y = velocity.y + gravity;

    if (ball.y > floorY) {
        velocity.y = velocity.y * -0.76;
        ball.y = floorY;
    }
};

function render() {
    context.fillStyle = "aqua";
    context.strokeStyle = "blue";
    context.lineWidth = 15;
    context.beginPath();
    context.arc(ball.x, ball.y, 50, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
};