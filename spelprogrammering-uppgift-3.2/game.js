const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let visible = false;

requestAnimationFrame(gameLoop);

function gameLoop(elapsed) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(gameLoop);
    update(elapsed);
    render();
}

function update(elapsed) {
    if (Math.floor(elapsed / 1000) % 2 === 0) {
        visible = true;
    } else {
        visible = false;
    }
}

function render() {
    if (visible == true) {
        context.fillStyle = 'red';
        context.beginPath();
        context.arc(400, 300, 75, 0, 2 * Math.PI);
        context.fill();
    } else {
        return;
    }
}