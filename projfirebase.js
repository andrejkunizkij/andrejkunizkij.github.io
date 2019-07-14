let table = document.querySelector('table');
let button = document.querySelector('.button');
let inputName = document.querySelector('.form__input');
let inputPass = document.querySelector('.input__pass');

button.addEventListener('click', handleFormSubmit);

function handleFormSubmit() {
  if (inputName.value && inputPass.value !== "" ) {
    writeUserData(inputName.value, inputPass.value);
    accounts = getAllAccountsFromFirebase()
    renderTable(accounts)
    inputName.value = "";
    inputPass.value = "";
  }
  else {
  	alert(`Enter name or password`);
  }
}

function makeid(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function writeUserData(name, password) {
  firebase.database().ref('Users/'  + makeid(10)).set({
    name: name,
    password: password
  });
}

function getAllAccountsFromFirebase() {
  let accounts = [];
  let ref = firebase.database().ref().child('Users');
  ref.on("child_added", function(data) {
    let item = data.val();
    key = item['name'];
    accounts[key] = item['password'];
  });
  console.log(accounts);
  return accounts;
}

function renderTable(accounts) {
  let trs = [...document.getElementsByClassName('data')];
   trs.forEach(function(tr) {
    tr.remove();
    });
  for (key in accounts) {
    let tr = document.createElement('tr');
    tr.classList.add('data')
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
