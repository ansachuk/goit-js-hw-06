const formRef = document.querySelector("#validation-input");
const FORM_INPUT_VALID_LENGTH = Number(formRef.dataset.length);

formRef.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length === FORM_INPUT_VALID_LENGTH) {
    formRef.classList.remove("invalid");
    formRef.classList.add("valid");
  } else {
    formRef.classList.remove("valid");
    formRef.classList.add("invalid");
  }
});
