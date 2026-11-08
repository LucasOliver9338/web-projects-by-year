const $ = (id) => document.getElementById(id);
$('go').addEventListener('click',()=>{const a=Number($('a').value),b=Number($('b').value),o=$('op').value;
const r=o==='+'?a+b:o==='-'?a-b:o==='*'?a*b:b===0?'Cannot divide by 0':a/b;$('out').textContent=r;});
