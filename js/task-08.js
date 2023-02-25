const emailFormRef = document.querySelector('[type="email"]');
const passwordFormRef = document.querySelector('[type="password"]');
const loginFormRef = document.querySelector("[type=submit]");
console.log(loginFormRef);

loginFormRef.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  console.log(e.type);
});

/*Обробка відправлення форми form.login-form повинна відбуватися 
відповідно до події submit.

Під час відправлення форми сторінка не повинна перезавантажуватися.

Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
що всі поля повинні бути заповнені.

Якщо користувач заповнив усі поля і відправив форму, збери значення 
полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля 
- значенням властивості. Для доступу до елементів форми використовуй 
властивість elements.

Виведи об'єкт із введеними даними в консоль і очисти значення полів 
форми методом reset. */
