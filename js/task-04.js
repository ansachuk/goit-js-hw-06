const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  counter: document.querySelector("#value"),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", () => {
  //   if (counterValue >= 1) {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
  //   }
});
refs.incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.counter.textContent = counterValue;
});
