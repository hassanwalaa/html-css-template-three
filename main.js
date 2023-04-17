let range = document.querySelector(".skills ");
let rangeSpans = document.querySelectorAll(".skills .container .info span");
let started = false;
console.log(rangeSpans);
console.log(range);

window.onscroll = function () {
  if (window.scrollY >= range.offsetTop) {
    if (!started) {
      started = true;
      rangeSpans.forEach((ele) => {
        startCout(ele);
      });
    }
  }
};

function startCout(ele) {
  let gool = Number(parseInt(ele.getAttribute("data-progress")));

  if (parseInt(ele.style.width) !== gool) {
    console.log(gool);
    let counter = 0;
    let count = setInterval(() => {
      ele.style.width = `${counter}%`;
      counter++;
      if (counter === gool) {
        clearInterval(count);
      }
    }, 2000 / gool);
  }
}
