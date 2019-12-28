// const submit = document.querySelector("#submit_btn");
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  validate()
});

function validate() {
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
}

function validateFirstName() {
  validateName("first");
}

function validateLastName() {
  validateName("last")
}

function validateName(aname) {
  const name = document.getElementById(aname);
  const warning = document.getElementById(`warn__${aname}`);
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add('error');
    warning.style.visibility = 'visible';
  } else {
    name.classList.remove('error');
    warning.style.visibility = 'hidden';
  }
}

function validatePassword() {
  const name = document.getElementById('pwrd');
  const warning = document.getElementById('warn__pwrd');
  const re = /^[a-zA-Z0-9]{8,16}$/;

  if(!re.test(name.value)){
    name.classList.add('error');
    warning.style.visibility = 'visible';
  } else {
    name.classList.remove('error');
    warning.style.visibility = 'hidden';
  }
}

function validateEmail() {
  const email = document.getElementById('mail');
  const warning = document.getElementById('warn__email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('error');
    warning.style.visibility = 'visible';
  } else {
    email.classList.remove('error');
    warning.style.visibility = 'hidden';
  }
}