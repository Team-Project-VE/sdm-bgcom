var closeMesEko=document.getElementById('closeMesEko');
var closeMesSello=document.getElementById('closeMesSello');
var sendEko=document.getElementById('sendEko');
var sendSello=document.getElementById('sendSello');
var e_2=document.getElementById('e_2');
var e_3=document.getElementById('e_3');
e_2.addEventListener('click',()=>{sendEko.style.display='flex';});
e_3.addEventListener('click',()=>{sendSello.style.display='flex';});
closeMesEko.addEventListener('click',()=>{ sendEko.style.display='none'; });
closeMesSello.addEventListener('click',()=>{ sendSello.style.display='none';});