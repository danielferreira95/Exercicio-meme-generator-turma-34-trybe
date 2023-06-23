const entradaTexto = document.querySelector('#text-input');
const lugarTexto = document.querySelector('#meme-text');
const botaoUpload = document.querySelector('#meme-insert');
const lugarImagem = document.querySelector('#meme-image');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const container = document.querySelector('#meme-image-container');

entradaTexto.addEventListener('keyup', () => {
    lugarTexto.innerHTML = entradaTexto.value;
});

botaoUpload.addEventListener('change', (event) => {
    var r = new FileReader();
    r.onload = () => {lugarImagem.src = r.result;}
    r.readAsDataURL(event.target.files[0]); 
});

fire.addEventListener('click', () => {
   lugarImagem.style.border = '3px dotted rgb(255, 0, 0)';
});

water.addEventListener('click', () => {
    lugarImagem.style.border = '5px double rgb(0, 0, 255)';
 });

 earth.addEventListener('click', () => {
    lugarImagem.style.border = '6px groove rgb(0, 128, 0)';
 });

//  const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// const img = new Image();
// img.src = "canvas_createpattern.png";
// // Only use the image after it's loaded
// img.onload = () => {
//   const pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 300, 300);
// };