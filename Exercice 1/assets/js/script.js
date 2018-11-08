
var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
  //
  ctx.beginPath();
  ctx.moveTo(200,50);
  ctx.lineTo(300,150);
  ctx.lineTo(100,150);
  ctx.closePath();
  ctx.fillStyle= "#d88437";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(300,150);
  ctx.lineTo(300,350);
  ctx.lineTo(100,350);
  ctx.lineTo(100,150);
  ctx.closePath();
  ctx.fillStyle= "#a0d7e6";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(125,175);
  ctx.lineTo(175,175);
  ctx.lineTo(175,225);
  ctx.lineTo(125,225);
  ctx.closePath();
  ctx.fillStyle= "#c9c9c9";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(225,175);
  ctx.lineTo(275,175);
  ctx.lineTo(275,225);
  ctx.lineTo(225,225);
  ctx.closePath();
  ctx.fillStyle= "#c9c9c9";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(175,275);
  ctx.lineTo(225,275);
  ctx.lineTo(225,350);
  ctx.lineTo(175,350);
  ctx.closePath();
  ctx.fillStyle= "#c9c9c9";
  ctx.fill();
