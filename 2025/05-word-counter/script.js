const $ = (id) => document.getElementById(id);
$('text').addEventListener('input',()=>{const t=$('text').value,w=t.trim()?t.trim().split(/\s+/).length:0;$('out').textContent=w+' words, '+t.length+' characters';});
