const $ = (id) => document.getElementById(id);
$('go').addEventListener('click',()=>{$('out').textContent=1+Math.floor(Math.random()*6);});
