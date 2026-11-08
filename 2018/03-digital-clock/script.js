const $ = (id) => document.getElementById(id);
function tick(){const n=new Date();$('time').textContent=n.toLocaleTimeString();$('date').textContent=n.toDateString();}
tick();setInterval(tick,1000);
