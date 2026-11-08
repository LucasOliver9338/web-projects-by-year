const $ = (id) => document.getElementById(id);
const W=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];let g,p,over;const cells=[];
for(let i=0;i<9;i++){const b=document.createElement('button');b.setAttribute('aria-label','Cell '+(i+1));b.addEventListener('click',()=>play(i));$('board').appendChild(b);cells.push(b);}
function reset(){g=Array(9).fill('');p='X';over=false;cells.forEach(c=>{c.textContent='';});$('out').textContent='X to move';}
function play(i){if(over||g[i])return;g[i]=p;cells[i].textContent=p;if(W.some(l=>l.every(x=>g[x]===p))){over=true;$('out').textContent=p+' wins';return;}if(g.every(Boolean)){over=true;$('out').textContent='Draw';return;}p=p==='X'?'O':'X';$('out').textContent=p+' to move';}
$('reset').addEventListener('click',reset);reset();
