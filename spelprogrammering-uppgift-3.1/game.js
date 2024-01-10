const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let visible = false;
let visible2 = false;
let visible3 = false;

requestAnimationFrame(gameLoop);

function gameLoop(elapsed) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(gameLoop);
    update(elapsed);
    render();
}

function update(elapsed) {
    setTimeout(() => {
        visible = true;
    }, 1000);

    setTimeout(() => {
        visible2 = true;
    }, 2000);

    setTimeout(() => {
        visible3 = true;
    }, 3000);
}

function render() {
    if (visible == true) {
        context.fillStyle = 'red';
        context.beginPath();
        context.arc(200, 300, 50, 0, 2 * Math.PI);
        context.fill();
    } else {
        return;
    }
    if (visible2 == true) {
        context.fillStyle = 'green';
        context.beginPath();
        context.arc(400, 300, 50, 0, 2 * Math.PI);
        context.fill();
    } else {
        return;
    }

    if (visible3 == true) {
        context.fillStyle = 'blue';
        context.beginPath();
        context.arc(600, 300, 50, 0, 2 * Math.PI);
        context.fill();
    }

}