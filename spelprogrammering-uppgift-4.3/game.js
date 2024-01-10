const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
let vx = 1;
let vy = 1;

requestAnimationFrame(gameLoop);

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

function onKeyDown(e) {
    if (e.keyCode === 87 || e.keyCode === 38) {
        vy = -2;
    } else if (e.keyCode === 83 || e.keyCode === 40) {
        vy = 2;
    }

    if (e.keyCode === 65 || e.keyCode === 37) {
        vx = -2;
    } else if (e.keyCode === 68 || e.keyCode === 39) {
        vx = 2;
    }
}

function onKeyUp(e) {
    if (e.keyCode === 87 || e.keyCode === 38) {
        vy = 0;
    } else if (e.keyCode === 83 || e.keyCode === 40) {
        vy = 0;
    }

    if (e.keyCode === 65 || e.keyCode === 37) {
        vx = 0;
    } else if (e.keyCode === 68 || e.keyCode === 39) {
        vx = 0;
    }
}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(gameLoop);
    update();
    render();
}

function update() {
    x += vx;
    y += vy;
}

function render() {
    context.fillStyle = 'yellow';
    context.strokeStyle = 'red';
    context.lineWidth = '15';
    context.beginPath();
    context.arc(x, y, 15, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}