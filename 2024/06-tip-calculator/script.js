const $ = (id) => document.getElementById(id);
$('go').addEventListener('click',()=>{const b=Number($('bill').value)||0,p=Number($('pct').value)||0;$('out').textContent=(b*(1+p/100)).toFixed(2);});
