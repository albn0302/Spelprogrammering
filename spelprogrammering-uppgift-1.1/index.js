const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.strokeStyle = 'red';
context.lineWidth = 2;
context.strokeRect(95, 35, 100, 30);

context.fillStyle = 'blue';
context.beginPath();
context.arc(110, 85, 15, 0, 2 * Math.PI);
context.fill();

context.fillStyle = 'red';
context.fillRect(130, 70, 30, 30);

context.strokeStyle = 'blue';
context.lineWidth = 2;
context.beginPath();
context.arc(180, 85, 15, 0, 2 * Math.PI);
context.stroke();
