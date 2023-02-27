function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsInputRef = document.querySelector('[type="number"]');
const createElementsColectionBtnRef = document.querySelector("[data-create]");
const destroyElementsColectionBtnRef = document.querySelector("[data-destroy]");
const boxesDivRef = document.querySelector("#boxes");

let currentNumberOfElements;

controlsInputRef.addEventListener("change", (e) => {
  currentNumberOfElements = e.currentTarget.value;
});

destroyElementsColectionBtnRef.addEventListener("click", destroyBoxes);
createElementsColectionBtnRef.addEventListener("click", createBoxesMarkup);

function createBoxesMarkup() {
  controlsInputRef.value = "";

  return createBoxes(currentNumberOfElements);
}

function createBoxes(amount) {
  const boxesMarkup = [];
  let size = 20;
  const fullMarkup = [];

  boxesMarkup.length = amount;

  for (let el of boxesMarkup) {
    size += 10;
    el = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    fullMarkup.push(el);
  }

  destroyBoxes();
  currentNumberOfElements = 0;
  return boxesDivRef.insertAdjacentHTML("afterbegin", `${fullMarkup.join("")}`);

  // const a = boxesMarkup
  //   .reduce((prev, el) => {
  //     prev += 10;
  //     return `<div style="width: ${prev}px; height: ${prev}px; background-color: ${getRandomHexColor()}"></div>`;
  //   }, 20)
  //   .join("");
  // return a;
}

function destroyBoxes() {
  controlsInputRef.value = "";
  currentNumberOfElements = 0;
  boxesDivRef.innerHTML = "";
}
