'use strict';

const username = document.querySelector('.loginUser');
const password = document.querySelector('.loginPass');
const btn = document.querySelector('.btn-lg');
const tname = document.querySelector('.uname');
const tpass = document.querySelector('.pass');

btn.addEventListener('click', function (e){
  e.preventDefault();

  console.log(username);
  console.log(password);
  console.log(btn);

   tname.textContent = $(username);
   tpass.textContent = $(password);
});