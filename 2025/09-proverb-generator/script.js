const $ = (id) => document.getElementById(id);
const list=['Practice makes perfect.','Better late than never.','Actions speak louder than words.','Slow and steady wins the race.','Two heads are better than one.','Every cloud has a silver lining.'];
function pick(){$('out').textContent=list[Math.floor(Math.random()*list.length)];}$('go').addEventListener('click',pick);pick();
