Skip to Play Sketch
Cookies
The p5.js Editor uses cookies. Some are essential to the website functionality and allow you to manage an account and preferences. Others are not essential—they are used for analytics and allow us to learn more about our community. We never sell this data or use it for advertising. You can decide which cookies you would like to allow, and learn more in our Privacy Policy.


Allow All

Allow Essential
Arquivo
Editar
Esboço
Ajuda
Português
Olá, Ana.rissa!



Auto-atualizar

Scratched gum
por Ana.rissa

p5.js 1.11.7


sketch.js
Salvo: cerca de 24 horas atrás
1
let carX = 0;
2
​
3
function setup() {
4
  createCanvas(800, 400);
5
}
6
​
7
function draw() {
8
  background(135, 206, 235); // céu azul
9
​
10
  drawField();
11
  drawCity();
12
  drawCar(carX, height - 60);
13
​
14
  carX += 2;
15
  if (carX > width) {
16
    carX = -100; // reinicia o carro ao sair da tela
17
  }
18
}
19
​
20
function drawField() {
21
  // grama
22
  fill(34, 139, 34);
23
  rect(0, height / 2, width / 2, height / 2);
24
​
25
  // sol
26
  fill(255, 204, 0);
27
  ellipse(100, 100, 80, 80);
Não há mensagens de Lint
Linha atuallinha 1

Terminal
Limpar

​
Prévia
