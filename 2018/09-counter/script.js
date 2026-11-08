const $ = (id) => document.getElementById(id);
let n=0;const set=v=>{n=v;$('out').textContent=n;};
$('minus').addEventListener('click',()=>set(n-1));$('plus').addEventListener('click',()=>set(n+1));$('reset').addEventListener('click',()=>set(0));
