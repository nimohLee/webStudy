/**
 * canvas api
 */

const canvas = document.querySelector("canvas");

/**
 * for Drawing
 */
const ctx = canvas.getContext("2d");
/* 이미지 퀄리티를 높이기위해 javascript에서만 canvas 크기 수정 */
canvas.width = 800;
canvas.height = 800;

ctx.rect(50, 50, 100, 100);
ctx.rect(150,150,100,100);
ctx.rect(250,250,100,100);
ctx.fill();




