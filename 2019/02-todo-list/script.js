const $ = (id) => document.getElementById(id);
$('add').addEventListener('click',()=>{const v=$('text').value.trim();if(!v)return;const li=document.createElement('li');li.textContent=v;li.addEventListener('click',()=>li.remove());$('items').appendChild(li);$('text').value='';});
