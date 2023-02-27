const emailFormRef = document.querySelector('[type="email"]');
const passwordFormRef = document.querySelector('[type="password"]');
const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value !== "" && password.value !== "") {
    const userData = {
      email: email.value,
      password: password.value,
    };
    e.currentTarget.reset();
    return console.log(userData);
  }

  return alert("Всі поля повинні бути заповнені");
});
