const $ = (id) => document.getElementById(id);
let ms=0,timer=null;const show=()=>{$('out').textContent=(ms/1000).toFixed(1)+'s';};
$('toggle').addEventListener('click',()=>{if(timer){clearInterval(timer);timer=null;$('toggle').textContent='Start';}else{timer=setInterval(()=>{ms+=100;show();},100);$('toggle').textContent='Stop';}});
$('reset').addEventListener('click',()=>{ms=0;show();});
