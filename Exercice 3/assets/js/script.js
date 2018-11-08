
var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");


  ctx.fillStyle = "#00aa4b"; // rectangle haut vert
  ctx.fillRect(110,50,180,50); // hauteur,longueur en px, hauteur rn px

  ctx.fillStyle = "#00aa4b"; // rectangle bas vert
  ctx.fillRect(60,100,275,50); // hauteur,longueur en px, hauteur rn px

  ctx.beginPath();
  ctx.arc(90,180,30,0,Math.PI*2,true); //cercle gauche
  ctx.strokeStyle = "#919191";
  ctx.fillStyle = "#cdcdcd";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300,180,30,0,Math.PI*2,true); //cercle droit
  ctx.strokeStyle = "#919191"; //remplissage
  ctx.fillStyle = "#cdcdcd"; // contour
  ctx.fill();
  ctx.stroke();
