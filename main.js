let table = document.querySelector('table');
let button = document.querySelector('.button');
let inputName = document.querySelector('.form__input');
let inputPass = document.querySelector('.input__pass');

button.addEventListener('click', addTr);
function addTr() {
   let tr = document.createElement('tr');
  tr.innerHTML = inputName.value;
  table.appendChild(tr);
  inputName.value = "";
  inputPass.value = "";
}