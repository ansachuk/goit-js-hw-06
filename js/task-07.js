const rengeRef = document.querySelector("#font-size-control");
const textByTheControl = document.querySelector("#text");

rengeRef.addEventListener("change", (e) => {
  textByTheControl.style.fontSize = `${e.currentTarget.value}px`;
});
