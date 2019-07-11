let table = document.querySelector('table');
let button = document.querySelector('.button');
let inputName = document.querySelector('.form__input');
let inputPass = document.querySelector('.input__pass');

button.addEventListener('click', addTr);

function addTr() {

  if(inputName.value && inputPass.value !== "" ) {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  td1.innerHTML = inputName.value;
  let td2 = document.createElement('td');
  td2.innerHTML = inputPass.value;
  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);
  inputName.value = "";
  inputPass.value = "";
  table.style.display = 'table';
}
else {
	alert(`Введите значение`);
}
}
