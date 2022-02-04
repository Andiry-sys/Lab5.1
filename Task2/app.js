let email = document.getElementById('userEmail');
let pass = document.getElementById('userPassword');
let repeat = document.getElementById('userRepeatPassword');
let login = document.getElementById('userLogin');

function Click() {
  alert(`A confirmation ${email.value}sent to the email address`);
  pass.value = '';
  repeat.value = '';
  login.value = '';
}
