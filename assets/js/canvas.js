
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

var english = "10011100010101abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&";
english = english.split("");

var font_size = 15;
if(c.width <= 400)
  font_size = 12;
var columns = c.width/font_size; //number of columns for the matrix rain
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
drops[x] = 1;

function draw()
{
//translucent BG to show trail
ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
ctx.fillRect(0, 0, c.width, c.height);

ctx.fillStyle = "#0F0"; //green text
ctx.font = font_size + "px arial";
//looping over drops
for(var i = 0; i < drops.length; i++)
{
var text = english[Math.floor(Math.random()*english.length)];
//x = i*font_size, y = value of drops[i]*font_size
ctx.fillText(text, i*font_size, drops[i]*font_size);

//sending the drop back to the top randomly after it has crossed the screen
//adding a randomness to the reset to make the drops scattered on the Y axis
if(drops[i]*font_size > c.height && Math.random() > 0.975)
  drops[i] = 0;

//incrementing Y coordinate
drops[i]++;
}
}

setInterval(draw, 33);
