const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let circleRadius = 30;
let grow = false;

requestAnimationFrame(gameLoop);

function gameLoop(elapsed) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(gameLoop);
    update(elapsed);
    render();
}

function update(elapsed) {
    if (circleRadius > 200) {
        grow = false;
    } else if (circleRadius < 30) {
        grow = true;
    }

    if (grow) {
        circleRadius += 1;
    } else {
        circleRadius -= 1;
    }
}

function render() {
    context.fillStyle = 'yellow';
    context.strokeStyle = 'red';
    context.lineWidth = 30;
    context.beginPath();
    context.arc(400, 300, circleRadius, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}
