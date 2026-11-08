const $ = (id) => document.getElementById(id);
$('go').addEventListener('click',()=>{$('out').textContent='Thanks for clicking. This is a demo page.';});
