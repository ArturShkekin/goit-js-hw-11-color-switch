import { colors } from "./task.js";

const onClickStart = document.querySelector(`[data-action="start"]`);
const onClickStop = document.querySelector(`[data-action="stop"]`);

const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min)};




/*const aaa = () => {
    return new Promise(resolve => {
     setTimeout(() => {
       resolve(
     document.body.style.backgroundColor = colors[randomIntegerFromInterval(1, 6)])
     }, 1000);
    });
}*/


/*const aaa = () => {
     setTimeout(() => {
       document.body.style.backgroundColor = colors[randomIntegerFromInterval(1, 6)]
       aaa()
     }, 1000);
}*/

const onStart = () => {
     setInterval(() => {
       document.body.style.backgroundColor = colors[randomIntegerFromInterval(1, 6)]
     }, 1000);
}


onClickStart.addEventListener("click", onStart);
onClickStop.addEventListener("click", () => {
  clearInterval(onStart)
});






/*onClickStart.addEventListener("click", () => {
 new Promise(resolve => {
    setTimeout(() => {
      resolve(aaa)
    }, 1000);
  });
});*/

/*onClickStart.addEventListener("click", () => {
  aaa().then(data => (data));
});*/



//onClickStop.addEventListener("click",);