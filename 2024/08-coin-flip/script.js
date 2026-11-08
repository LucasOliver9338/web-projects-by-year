const $ = (id) => document.getElementById(id);
$('go').addEventListener('click',()=>{$('out').textContent=Math.random()<.5?'Heads':'Tails';});
