const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");
const phoneNumber = document.querySelector('.phoneNumber');
const phoneNumberRegExp = /^\d{10,}$/;
const submitButton = document.querySelector('.btn-grid');

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});

submitButton.addEventListener('click', () => {
  if (phoneNumber.value.match(phoneNumberRegExp)) {
    console.log('Done');
  } else {
    console.log('No');
  }
});