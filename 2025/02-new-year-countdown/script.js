const $ = (id) => document.getElementById(id);
function tick(){const n=new Date(),t=new Date(n.getFullYear()+1,0,1),s=Math.floor((t-n)/1000);
$('out').textContent=Math.floor(s/86400)+'d '+Math.floor(s%86400/3600)+'h '+Math.floor(s%3600/60)+'m '+s%60+'s';}
tick();setInterval(tick,1000);
