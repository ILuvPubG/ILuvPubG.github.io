for (var i = 0; i < 10; i++) {
   var n = document.createElement("div");
   n.classList.add("box");
   var size = Math.floor(Math.random()*80)+20;
   n.style.left = (Math.random() * 100)+"%";
   n.style.animationDelay = (Math.random() * 5000)+"ms";
   n.style.animationDuration = (Math.random() * 2000)+4000+"ms";
   n.style.width = size+"px";
   n.style.height = size+"px";
   document.body.appendChild(n);
}
