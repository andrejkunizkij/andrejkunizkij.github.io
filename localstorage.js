let table = document.querySelector('table');
let button = document.querySelector('.button');
let inputName = document.querySelector('.form__input');
let inputPass = document.querySelector('.input__pass');

button.addEventListener('click', handleFormSubmit);

function handleFormSubmit() {
  if (inputName.value && inputPass.value !== "" ) {
    saveToLS(inputName.value, inputPass.value);
    accounts = getAllAccounts();
    renderTable(accounts);
    inputName.value = "";
    inputPass.value = "";
  }
  else {
  	alert(`Enter name or password`);
  }
}

function saveToLS(name, pass) {
  let userName = localStorage.getItem(name);
  if (!userName) {
    localStorage.setItem(name, pass);
  }
  else if (userName === userName) {
    alert(`This user already exists`);
  }
}

function getAllAccounts() {
  let accounts = [];
  for (let i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    accounts[key] = localStorage.getItem(key);
  }
  return accounts;
}

function renderTable(accounts) {
  let trs = [...document.getElementsByClassName('data')];
  trs.forEach(function(tr) {
    tr.remove();
    });
  for (key in accounts) {
    let tr = document.createElement('tr');
    tr.classList.add('data');
    let td1 = document.createElement('td');
    td1.innerHTML = key;
    let td2 = document.createElement('td');
    td2.innerHTML = accounts[key];
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  }
  table.style.display = 'table';
}
