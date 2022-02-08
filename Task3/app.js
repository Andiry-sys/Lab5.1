function Click() {
  let f = document.getElementById('f1');
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  td1.innerHTML = 'Firstname' + ' ' + document.getElementById('name').value;
  tr.appendChild(td1);
  tbody.appendChild(tr);
  let td2 = document.createElement('td');
  td2.innerHTML = 'Lastname' + ' ' + document.getElementById('lastName').value;
  tr.appendChild(td2);
  let td3 = document.createElement('td');
  td3.innerHTML =
    'Birthday' + ' ' + document.getElementById('birthdayDate').value;
  tr.appendChild(td3);
  let td4 = document.createElement('td');

  if (document.getElementById('male').checked == true) {
    td4.innerHTML = 'Gender' + ' ' + document.getElementById('male').value;
  } else if (document.getElementById('female').checked == true) {
    td4.innerHTML = 'Gender' + ' ' + document.getElementById('female').value;
  }
  tr.appendChild(td4);
  let td5 = document.createElement('td');
  td5.innerHTML = 'Country' + ' ' + document.getElementById('Con').value;
  tr.appendChild(td5);
  let td6 = document.createElement('td');
  td6.innerHTML = 'City' + ' ' + document.getElementById('city').value;
  tr.appendChild(td6);
  let td7 = document.createElement('td');

  if (document.getElementById('html').checked == true) {
    td7.innerHTML = 'Skills' + ' ' + document.getElementById('html').value;
  }
  if (document.getElementById('css').checked == true) {
    td7.innerHTML = 'Skills' + ' ' + document.getElementById('css').value;
  }
  if (document.getElementById('js').checked == true) {
    td7.innerHTML = 'Skills' + ' ' + document.getElementById('js').value;
  }
  if (document.getElementById('php').checked == true) {
    td7.innerHTML = 'Skills' + ' ' + document.getElementById('php').value;
  }
  if (document.getElementById('c++').checked == true) {
    td7.innerHTML = 'Skills' + ' ' + document.getElementById('c++').value;
  }
  if (document.getElementById('java').checked == true) {
    td7.innerHTML = 'Skills' + ' ' + document.getElementById('java').value;
  }
  if (document.getElementById('c#').checked == true) {
    td7.innerHTML = 'Skills' + ' ' + document.getElementById('c#').value;
  }
  tr.appendChild(td7);
  tbody.appendChild(tr);
  table.appendChild(tbody);
  f.appendChild(table);
}
