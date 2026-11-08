const $ = (id) => document.getElementById(id);
const m=['Rock','Paper','Scissors'];document.querySelectorAll('.pick').forEach(b=>b.addEventListener('click',()=>{const u=b.textContent,c=m[Math.floor(Math.random()*3)],d=(m.indexOf(u)-m.indexOf(c)+3)%3;$('out').textContent='Computer chose '+c+'. '+(d===0?'Draw.':d===1?'You win.':'You lose.');}));
