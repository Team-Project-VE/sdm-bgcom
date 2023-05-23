const mdl_C = document.querySelectorAll(".mod");
const mdlCon = document.querySelectorAll('.course-modul');
let selected = 0;
mdlCon[0].classList.add('active_1');
mdl_C[selected].classList.add("active_2");

for(let i = 0; i < mdl_C.length; i++) {
    mdl_C[i].addEventListener('click', () => { 
      if (!mdlCon[i].classList.contains('active_1')) {
        for(let j = 0; j < mdlCon.length; j++) {
          if(j !== i && mdlCon[j].classList.contains('active_1')) {
            mdlCon[j].classList.remove('active_1');
          }
        }
        mdlCon[i].classList.add('active_1');
      }
    });
}

for (let i = 0; i < mdl_C.length; i++) {
    mdl_C[i].addEventListener("click", () => {
      if (selected !== i) { 
        mdl_C[selected].classList.remove("active_2"); 
        selected = i; 
        mdl_C[selected].classList.add("active_2"); 
      }
    });
}

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
  question.addEventListener('click', function() {
    var questClose = this.querySelector('.closeQest');
    if (questClose.classList.contains('fa-plus')) {
      questClose.classList.remove('fa-plus');
      questClose.classList.add('fa-minus');
      var answer = this.querySelector('.answer');
      answer.style.display = 'block';
      question.style.backgroundColor = 'black'; 
      questClose.style.color="#FE6244";
    } else {
      questClose.classList.remove('fa-minus');
      questClose.classList.add('fa-plus');
      var answer = this.querySelector('.answer');
      answer.style.display = 'none';
      question.style.backgroundColor = '#FE6244'; 
      questClose.style.color="black";
    }
  });
});


const listModule=document.getElementById("listModule");
const modules=document.getElementById("modules");

listModule.addEventListener('click',()=>{
    if(modules.style.display==='none')
    {
        modules.style.display='flex';
        modules.style.transition='all .5s ease-in-out';
    }else{
        modules.style.transition='all .5s ease-in-out';
        modules.style.display='none';
    }
})

window.addEventListener('resize', function() {
    var mxWidth=window.innerWidth
    console.log(mxWidth)
    if(mxWidth>=450)
    {
        if(modules.style.display==='none')   
        {
            modules.style.display='flex';
        }  
    }
});