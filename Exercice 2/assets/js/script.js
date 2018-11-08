
var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");


  ctx.fillStyle = "#d88437"; // marron
  ctx.rotate(45*Math.PI/180); // valeurs pour la rotation
  ctx.fillRect(172,-103,142,142); // hauteur, largeur, hauteur en px, largeur rn px
  ctx.setTransform(1,0,0,1,0,0); // remet les valeurs à 0


  ctx.beginPath();
  ctx.moveTo(194,150);
  ctx.lineTo(194,350);
  ctx.strokeStyle = "#a0d7e6"; // Carré bleu
  ctx.lineWidth = 201; // Largeur du trait
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(140,175);
  ctx.lineTo(140,225);
  ctx.strokeStyle = "#c9c9c9"; // Définition de la couleur de contour
  ctx.lineWidth = 50;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(248,175);
  ctx.lineTo(248,225);
  ctx.strokeStyle = "#c9c9c9"; // Définition de la couleur de contour
  ctx.lineWidth = 50;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(190,275);
  ctx.lineTo(190,350);
  ctx.strokeStyle = "#c9c9c9"; // Définition de la couleur de contour
  ctx.lineWidth = 50;
  ctx.stroke();
