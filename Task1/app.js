let login = document.getElementById('userLogin');
let check = document.getElementById('userRemember');
let pass = document.getElementById('userPassword');

function Click() {
  if (check.checked) {
    alert(`Hello ${login.value}! I remember you`);
    login.value = '';
    pass.value = '';
  } else {
    alert(`Hello ${login.value}! I don't remember you`);
    login.value = '';
    pass.value = '';
  }
}
