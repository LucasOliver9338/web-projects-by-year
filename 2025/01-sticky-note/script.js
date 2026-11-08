const $ = (id) => document.getElementById(id);
const key='sticky-note';try{$('note').value=localStorage.getItem(key)||'';}catch(e){$('out').textContent='Saving is unavailable here.';}
$('note').addEventListener('input',()=>{try{localStorage.setItem(key,$('note').value);$('out').textContent='Saved';}catch(e){$('out').textContent='Saving is unavailable here.';}});
