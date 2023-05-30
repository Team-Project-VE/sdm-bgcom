const colapseBar=document.getElementById("colapse-bar");
const colapseMenu=document.getElementById("collapse-menu");

colapseBar.addEventListener('click',()=>{
    if(colapseMenu.style.display==='none')
    {
        colapseMenu.style.display='flex';
        colapseMenu.style.transition='all .5s ease-in-out';
        colapseBar.classList.remove('fa-bars');
        colapseBar.classList.add('fa-xmark');
    }else{
        colapseMenu.style.transition='all .5s ease-in-out';
        colapseMenu.style.display='none';
        colapseBar.classList.remove('fa-xmark');
        colapseBar.classList.add('fa-bars');
    }
});

window.addEventListener('resize', function() {
  var mxWidth=window.innerWidth
  console.log(mxWidth)
  if(mxWidth>=900)
  {
      if(colapseMenu.style.display==='none')   
      {
          colapseMenu.style.display='flex';
      }  
  }
  if(mxWidth<900)
  {
    colapseMenu.style.display='none'; 
    colapseBar.classList.remove('fa-xmark');
    colapseBar.classList.add('fa-bars');
  }
});

const openDrop = document.querySelectorAll('.open-drop');
const dropMenu = document.querySelectorAll('.drop-menu');

console.log(dropMenu);
console.log(openDrop);

let currentOpenIndex = null;
openDrop.forEach((elem, i) => {
  elem.addEventListener('click', () => {
    if (currentOpenIndex !== null && currentOpenIndex !== i) {
      dropMenu[currentOpenIndex].classList.remove('show');
    }
    dropMenu[i].classList.toggle('show');
    currentOpenIndex = currentOpenIndex === i ? null : i;
  });
});

