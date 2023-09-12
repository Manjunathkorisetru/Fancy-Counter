const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

resetButtonEl.addEventListener("click", () => {
  counterValueEl.textContent = 0;
  counterEl.classList.remove("counter--limit");
  counterTitleEl.textContent = "Fancy Counter";
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  resetButtonEl.blur();
});

const decrementCounter = () => {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  counterValueEl.textContent = newValue;
  decreaseButtonEl.blur();
};

const incrementCounter = () => {
  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber + 1;
  if (newValue > 100) {
    newValue = 100;
    counterEl.classList.add("counter--limit");
    counterTitleEl.innerHTML = "Limit Reached!";
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  counterValueEl.textContent = newValue;
  increaseButtonEl.blur();
};

increaseButtonEl.addEventListener("click", incrementCounter);
decreaseButtonEl.addEventListener("click", decrementCounter);
