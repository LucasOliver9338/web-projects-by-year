const $ = (id) => document.getElementById(id);
function up(){const c='linear-gradient(90deg, '+$('a').value+', '+$('b').value+')';$('box').style.background=c;$('out').textContent=c;}
$('a').addEventListener('input',up);$('b').addEventListener('input',up);up();
