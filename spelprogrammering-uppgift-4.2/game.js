const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let visible1 = false;
let visible2 = false;
let visible3 = false;
let visible4 = false;
let visible5 = false;

requestAnimationFrame(gameLoop);

function gameLoop() {
    requestAnimationFrame(gameLoop);
    context.clearRect(0, 0, canvas.width, canvas.height);
    render();
}

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

function onKeyDown(e) {
    if (e.keyCode === 49) {
        visible1 = true;
    }

    if (e.keyCode === 50) {
        visible2 = true;
    }

    if (e.keyCode === 51) {
        visible3 = true;
    }

    if (e.keyCode === 52) {
        visible4 = true;
    }

    if (e.keyCode === 53) {
        visible5 = true;
    }
}

function onKeyUp(e) {
    if (e.keyCode === 49) {
        visible1 = false;
    }

    if (e.keyCode === 50) {
        visible2 = false;
    }

    if (e.keyCode === 51) {
        visible3 = false;
    }

    if (e.keyCode === 52) {
        visible4 = false;
    }

    if (e.keyCode === 53) {
        visible5 = false;
    }
}

function render() {
    if (visible1 == true) {
        context.fillStyle = 'yellow';
        context.strokeStyle = 'red';
        context.lineWidth = 20;
        context.beginPath();
        context.arc(100, 300, 30, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
    }

    if (visible2 == true) {
        context.fillStyle = 'yellow';
        context.strokeStyle = 'red';
        context.lineWidth = 20;
        context.beginPath();
        context.arc(250, 300, 30, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
    }

    if (visible3 == true) {
        context.fillStyle = 'yellow';
        context.strokeStyle = 'red';
        context.lineWidth = 20;
        context.beginPath();
        context.arc(400, 300, 30, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
    }

    if (visible4 == true) {
        context.fillStyle = 'yellow';
        context.strokeStyle = 'red';
        context.lineWidth = 20;
        context.beginPath();
        context.arc(550, 300, 30, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
    }

    if (visible5 == true) {
        context.fillStyle = 'yellow';
        context.strokeStyle = 'red';
        context.lineWidth = 20;
        context.beginPath();
        context.arc(700, 300, 30, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
    }

}