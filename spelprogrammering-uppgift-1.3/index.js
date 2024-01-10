const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.fillStyle = 'yellow';
context.strokeStyle = 'red';
context.lineWidth = 15;

context.beginPath();
context.moveTo(300 * 1, 200 * 2);
context.lineTo(500 * 1, 200 * 2);
context.lineTo(400 * 1, 250);
context.fill();
context.closePath();
context.stroke();