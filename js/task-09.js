function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const hexColorSpanRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");

changeColorBtnRef.addEventListener("click", () => {
  const currentHexColor = getRandomHexColor();

  document.body.style.backgroundColor = currentHexColor;
  hexColorSpanRef.textContent = currentHexColor;
});
