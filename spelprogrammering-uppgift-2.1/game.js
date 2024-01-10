const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let x = 0;
let y = canvas.height / 2;
let vx = 4;

requestAnimationFrame(gameLoop);

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    x += vx;
    requestAnimationFrame(gameLoop);
    update();
    render();
}

function update() {
    if (x > canvas.width) {
        x = canvas.width;
        vx *= -1;
    }
    if (x < 0) {
        vx -= x;
        vx *= 1;
    }
}

function render() {
    context.fillStyle = 'aqua';
    context.strokeStyle = 'blue';
    context.lineWidth = 10;
    context.beginPath();
    context.arc(x, y, 30, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
}