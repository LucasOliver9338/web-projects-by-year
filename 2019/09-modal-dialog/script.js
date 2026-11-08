const $ = (id) => document.getElementById(id);
$('open').addEventListener('click',()=>$('box').showModal());$('close').addEventListener('click',()=>$('box').close());
