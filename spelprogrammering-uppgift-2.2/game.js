const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let x = 0;
let y = canvas.height / 2;
let vy = 4;
let y2 = canvas.height / 2;
let vy2 = 5;
let y3 = canvas.height / 2;
let vy3 = 6;


requestAnimationFrame(gameLoop);

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    y += vy;
    y2 += vy2;
    y3 += vy3;
    requestAnimationFrame(gameLoop);
    update();
    render();
}

function update() {
    if (y > canvas.height) {
        y = canvas.height;
        vy *= -1;
    }
    if (y < 0) {
        vy -= y;
        vy *= 1;
    }

    if (y2 > canvas.height) {
        y2 = canvas.height;
        vy2 *= -1;
    }
    if (y2 < 0) {
        vy2 -= y2;
        vy2 *= 1;
    }

    if (y3 > canvas.height) {
        y3 = canvas.height;
        vy3 *= -1;
    }
    if (y3 < 0) {
        vy3 -= y3;
        vy3 *= 1;
    }
}

function render() {
    context.fillStyle = 'red';
    context.beginPath();
    context.arc(200, y, 50, 0, 2 * Math.PI);
    context.fill();

    context.fillStyle = 'green';
    context.beginPath();
    context.arc(400, y2, 50, 0, 2 * Math.PI);
    context.fill();

    context.fillStyle = 'blue';
    context.beginPath();
    context.arc(600, y3, 50, 0, 2 * Math.PI);
    context.fill();
}