const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(50, 100);
ctx.lineTo(100, 0);
ctx.lineTo(150, 100);
ctx.lineTo(200, 0);
ctx.lineWidth = "5";
ctx.strokeStyle = "blue";
ctx.lineCap = "round";
ctx.stroke();

const canvas2 = document.getElementById("canvas");
const ctx2 = canvas2.getContext("2d");

ctx2.beginPath();
ctx2.arc(100, 50, 40, 0, 2 * Math.PI);
ctx2.strokeStyle = "green";
ctx2.lineWidth = "3";
ctx2.fillStyle = "yellow";
ctx2.fill();
ctx2.stroke();

const pattern = document.getElementById("pattern");
const patternCtx = pattern.getContext("2d");

patternCtx.beginPath();
patternCtx.moveTo(50, 10);
patternCtx.lineTo(150, 10);
patternCtx.lineTo(190, 90);
patternCtx.lineTo(10, 90);
patternCtx.lineTo(50, 10);
patternCtx.fillStyle = "blueviolet";
patternCtx.fill();
patternCtx.stroke();

const arc = document.getElementById("arc");
const arcCtx = arc.getContext("2d");

arcCtx.beginPath();
arcCtx.arc(100, 50, 40, 0, Math.PI);
arcCtx.moveTo(60, 50);
arcCtx.lineTo(140, 50);
arcCtx.fillStyle = "aquamarine";
arcCtx.fill();
arcCtx.strokeStyle = "aquamarine";
arcCtx.stroke();

const rectangle = document.getElementById("rectangle");
const rectangleCtx = rectangle.getContext("2d");

rectangleCtx.fillRect(0, 0, 20, 20);
rectangleCtx.strokeRect(30, 0, 40, 40);
rectangleCtx.clearRect(0, 0, 10, 10);
