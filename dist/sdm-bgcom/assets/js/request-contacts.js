const heading = document.querySelector('.heading-hide');
heading.style.display = 'none'
const subject = document.querySelector('.subject-hide');
subject.style.display = 'none'

const planBackground=document.querySelector('#plan-background');
const myForm=document.querySelector('#my-form');
if (planBackground && myForm) {
    const background = getComputedStyle(planBackground).background;
    myForm.style.background = background;
}



const inputs=document.querySelectorAll('input');
const textarea=document.querySelector('.message');
const labelTerms=document.querySelector('.label-terms');
const requiredMsg=document.querySelector('.required-msg');

textarea.style.background='white';
textarea.style.color='black';
labelTerms.style.color='black';
requiredMsg.style.color='black';

inputs.forEach((event) => {
    event.style.background='white';
    event.style.color='black';
})