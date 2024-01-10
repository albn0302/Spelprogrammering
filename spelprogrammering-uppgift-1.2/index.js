const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.fillStyle = 'yellow';
context.strokeStyle = 'black';
context.lineWidth = 8;
context.beginPath();
context.arc(400, 300, 200, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.fillStyle = 'white';
context.strokeStyle = 'black';
context.lineWidth = 10;
context.beginPath();
context.arc(310, 310, 45, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.fillStyle = 'black';
context.beginPath();
context.arc(310, 313, 15, 0, 2 * Math.PI);
context.fill();

context.fillStyle = 'white';
context.strokeStyle = 'black';
context.lineWidth = 10;
context.beginPath();
context.arc(490, 310, 45, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.fillStyle = 'black';
context.beginPath();
context.arc(490, 313, 15, 0, 2 * Math.PI);
context.fill();

context.fillStyle = 'red';
context.strokeStyle = 'black';
context.lineWidth = 10;
context.beginPath();
context.arc(400, 400, 45, 0, Math.PI);
context.fill();
context.closePath();
context.stroke();
