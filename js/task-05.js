const formRef = document.querySelector("#name-input");
const nameSpanEl = document.querySelector("#name-output");

formRef.addEventListener("input", (e) => {
  nameSpanEl.textContent =
    e.currentTarget.value === "" ? "Anonymous" : e.currentTarget.value;
});
