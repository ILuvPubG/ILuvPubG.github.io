var num = 20;

for (var i = 0; i < num; i++) {
   var n = document.createElement("div");
   n.classList.add("box");
   var size = Math.floor(Math.random()*100)+100;
   n.style.left = ((i*(100/num))+(100/(2*num)))+"%";
   n.style.animationDelay = (Math.random() * 5000)+"ms";
   n.style.animationDuration = (Math.random() * 2000)+4000+"ms";
   n.style.width = size+"px";
   n.style.height = size+"px";
   n.style.background = 'url("img/test.png")';
   n.style.backgroundSize = "contain";
   document.body.appendChild(n);
}
