import { colors } from "./task.js";

const onClickStart = document.querySelector(`[data-action="start"]`);
const onClickStop = document.querySelector(`[data-action="stop"]`);

let isColor = null;

const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min)};

const numeral = () => {
document.body.style.backgroundColor = colors[randomIntegerFromInterval(1, 6)]
}

onClickStart.addEventListener("click", () => {
  isColor = setInterval(() => {
    numeral();
  }, 1000);
});

onClickStop.addEventListener("click", () => {
  clearInterval(isColor);
});

