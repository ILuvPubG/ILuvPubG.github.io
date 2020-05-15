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

var num = 30;
var images = ["img/1.JPG","img/2.JPG","img/3.JPG","img/4.JPG","img/5.JPG","img/6.JPG","img/7.JPG","img/8.JPG","img/9.JPG","img/10.JPG","img/11.JPG","img/12.JPG","img/13.JPG","img/14.JPG","img/cake.JPG"];
var im = [];

for (var i = 0; i < num; i++) {
   im.push(images[Math.floor(i*(images.length/num))]);
}

im = shuffle(im);

for (var i = 0; i < num; i++) {
   var n = document.createElement("img");
   n.src = im[i];
   n.classList.add("box");
   var size = Math.floor(Math.random()*100)+100;
   n.style.left = ((i*(100/num))+(100/(2*num)))+"%";
   n.style.animationDelay = (Math.random() * 5000)+"ms";
   n.style.animationDuration = (Math.random() * 2000)+4000+"ms";
   n.style.width = size+"px";
   n.style.height = "auto";
   //n.style.background = 'url("img/'+im[i]+'")';
   n.style.backgroundSize = "contain";
   document.body.appendChild(n);
}
