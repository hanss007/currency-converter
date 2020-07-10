const currencyOne = document.querySelector(".js-currencyOne");
const amountOne = document.querySelector(".js-amountOne");
const currencyTwo = document.querySelector(".js-currencyTwo");
const amountTwo = document.querySelector(".js-amountTwo");
const swapBtn = document.querySelector(".swap");

const CURRENCY_RATES = {
  EURO: {
    PLN: 4.46,
    USD: 1.12,
    GBP: 0.91,
  },
  USD: {
    PLN: 3.98,
    EURO: 0.89,
    GBP: 0.81,
  },
  GBP: {
    PLN: 4.88,
    EUR: 1.09,
    USD: 1.23,
  },
  PLN: {
    EURO: 1 / 4.46,
    USD: 1 / 3.98,
    GBP: 1 / 4.88,
  },
};

const calculate = (e) => {
  e.preventDefault();
  if (currencyOne.value === currencyTwo.value) {
    amountTwo.value = amountOne.value;
  } else {
    amountTwo.value =
      amountOne.value *
      CURRENCY_RATES[currencyOne.value][currencyTwo.value].toFixed(2);
  }
};

swapBtn.addEventListener("click", calculate);
