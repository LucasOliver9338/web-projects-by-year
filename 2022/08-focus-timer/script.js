const $ = (id) => document.getElementById(id);
let left=1500,t=null;const show=()=>{$('out').textContent=String(Math.floor(left/60)).padStart(2,'0')+':'+String(left%60).padStart(2,'0');};
const stop=()=>{clearInterval(t);t=null;$('go').textContent='Start';};
$('go').addEventListener('click',()=>{if(t){stop();return;}$('go').textContent='Pause';t=setInterval(()=>{if(left>0){left--;show();}else stop();},1000);});
$('reset').addEventListener('click',()=>{stop();left=1500;show();});
