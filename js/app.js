// Задание №1

const li = document.querySelectorAll('li');
li[2].remove();
li[4].remove();

// Задание №2
for(let i = 0; i < li.length; i++) {
    li[i].classList.add('listItem')
}

const ul = document.querySelector('ul');
 
for(let k = 0; k < ul.length; k++) {
    ul[k].classList.add('list')
}

// Задание №3,4

const firstLi = document.createElement('li');
const lastLi = document.createElement('li');

firstLi.textContent = 'Bugatti';
ul.prepend(firstLi);
firstLi.classList.add('listItem');

lastLi.textContent = 'Ford';
ul.append(lastLi);
lastLi.classList.add('listItem');

// Задание №5

const form = document.querySelector('form');
const firstName = document.createElement('input');
const lastName = document.createElement('input');
const password = document.createElement ('input');
const confirmPass = document.createElement('input');

firstName.setAttribute('type', 'text');
lastName.setAttribute('type', 'text');
password.setAttribute('type', 'password');
confirmPass.setAttribute('type', 'Password');

const br = document.createElement('br');
const br2 = document.createElement('br');
const br3 = document.createElement('br');
const br4 = document.createElement('br');

form.append(br4);
form.append('Name:', firstName);
form.append(br);
form.append('Last Name:', lastName);
form.append(br2);
form.append('Password:', password);
form.append(br3);
form.append('Confirm password:', confirmPass);


firstName.placeholder = 'Name';
lastName.placeholder = 'Last Name';
password.placeholder = 'Password';
confirmPass.placeholder = 'Confirm Password';

// Задание №6

const image = document.createElement('img');
image.src = 'https://cdn-icons-png.flaticon.com/512/1698/1698542.png';
document.querySelector('form').prepend(image);

// Задание №7

const bold = document.querySelector('.bold');
bold.classList.remove('red', 'italic');

// Задание №8

const div = document.createElement('div');
document.body.prepend(div);
div.innerHTML = '<h1>This is h1 tag!</h1>';

// Задание №9

div.style.color = 'blue';
div.style.fontSize = '40px'










