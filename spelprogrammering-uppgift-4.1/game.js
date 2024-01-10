const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let visible = true;

requestAnimationFrame(gameLoop);

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(gameLoop);
    render();
}

canvas.addEventListener('click', onClick);

function onClick() {
    switch (visible) {
        case true:
            visible = false;
            break;

        default:
            visible = true;
            break;
    }
}

function render() {
    if (visible == true) {
        context.fillStyle = 'yellow';
        context.strokeStyle = 'red';
        context.lineWidth = 30;
        context.beginPath();
        context.arc(400, 300, 200, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
    } else {
        return;
    }
}
