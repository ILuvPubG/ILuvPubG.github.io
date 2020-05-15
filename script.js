function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function flip() {
   document.getElementsByClassName("main")[0].classList.add("opened");
}

var num = 50;
var images = ["test.png","tomato.png","bday.png","ha.png","poop.png","balloon.png"];
var im = [];

for (var i = 0; i < num; i++) {
   im.push(images[Math.floor(i*(images.length/num))]);
}

im = shuffle(im);

for (var i = 0; i < num; i++) {
   var n = document.createElement("div");
   n.classList.add("box");
   var size = Math.floor(Math.random()*100)+100;
   n.style.left = ((i*(100/num))+(100/(2*num)))+"%";
   n.style.animationDelay = (Math.random() * 5000)+"ms";
   n.style.animationDuration = (Math.random() * 2000)+4000+"ms";
   n.style.width = size+"px";
   n.style.height = size+"px";
   n.style.background = 'url("img/'+im[i]+'")';
   n.style.backgroundSize = "contain";
   document.body.appendChild(n);
}
