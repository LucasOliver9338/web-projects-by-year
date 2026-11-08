const $ = (id) => document.getElementById(id);
$('text').addEventListener('input',()=>{const c=$('text').value.toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');$('out').textContent=!c?'-':c===[...c].reverse().join('')?'Palindrome':'Not a palindrome';});
