const $ = (id) => document.getElementById(id);
$('d').addEventListener('input',()=>{const b=new Date($('d').value),n=new Date();if(isNaN(b)){$('out').textContent='-';return;}let a=n.getFullYear()-b.getFullYear();if(n.getMonth()<b.getMonth()||(n.getMonth()===b.getMonth()&&n.getDate()<b.getDate()))a--;$('out').textContent=a;});
