let palavra
function setup() {
  createCanvas(400, 400);
  let palavras = ["T.I", "Informática", "Tecnologia"];
  palavra = random(palavras);
}

function draw() {
background(255);
fill("red");
  textSize(50);
  textAlign(CENTER, CENTER);
  
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  textFont('courier new', 45);
  let palavra2 = "Compre meu curso!"
  let parcial2 = palavra2.substring(0, quantidade);
  palavra2 = textSize(20)
  text(parcial2, 200, 100)
  
  let palavra3 = ":D"
  let parcial3 = palavra3.substring(0, quantidade);
  palavra3 = textSize(20)
  text(parcial3, 200, 300)
}