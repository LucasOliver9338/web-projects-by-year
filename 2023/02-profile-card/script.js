const $ = (id) => document.getElementById(id);
let f=false;$('go').addEventListener('click',()=>{f=!f;$('go').textContent=f?'Following':'Follow';});
