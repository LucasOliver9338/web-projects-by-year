const $ = (id) => document.getElementById(id);
let s=1+Math.floor(Math.random()*100);$('go').addEventListener('click',()=>{const g=Number($('n').value);if(g===s){$('out').textContent='Correct! New number chosen.';s=1+Math.floor(Math.random()*100);}else{$('out').textContent=g<s?'Too low.':'Too high.';}});
