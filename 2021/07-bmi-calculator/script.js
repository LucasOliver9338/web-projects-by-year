const $ = (id) => document.getElementById(id);
$('go').addEventListener('click',()=>{const h=Number($('h').value)/100,w=Number($('w').value);$('out').textContent=h>0&&w>0?(w/(h*h)).toFixed(1):'-';});
