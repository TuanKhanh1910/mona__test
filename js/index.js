// function setWindowHeight($class, number) {
//   var windowWidth = window.innerWidth;

//   document.querySelector($class).style.height = windowWidth * number + "px";
//   console.log(document.querySelector($class).style.height);
// }
window.addEventListener("resize", setWindowHeight, false);
// window.onload = setWindowHeight(`.banner__prew`, 0.5);
// window.onload = window.onresize = setWindowHeight(
//   `.banner__prew .banner__content .content__bottom`,
//   0.5
// );
// window.onload = window.onresize = setWindowHeight(
//   `.course__prew .background1`,
//   0.35
// );
// window.onload = window.onresize = setWindowHeight(
//   `.course__prew .background1 .background2`,
//   1
// );

function resizeBackgroundImage(div, image) {
  const width = div.offsetWidth;
  const height = div.offsetHeight;

  image.style.width = width;
  image.style.height = height;
}

const div = document.querySelector(".div");
const image = document.querySelector(".div > img");

window.addEventListener("resize", () => {
  resizeBackgroundImage(div, image);
});
