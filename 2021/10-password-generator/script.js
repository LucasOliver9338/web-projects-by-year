const $ = (id) => document.getElementById(id);
const chars='abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%';
$('go').addEventListener('click',()=>{const n=Math.min(64,Math.max(8,Number($('len').value)||16));const v=crypto.getRandomValues(new Uint32Array(n));let s='';for(const x of v)s+=chars[x%chars.length];$('out').textContent=s;});
