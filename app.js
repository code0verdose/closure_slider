const sliderImage = document.querySelector("#sliderOne");
const sliderImage2 = document.querySelector("#sliderTwo");

const slides = ["./images/1.png", "./images/2.png", "./images/3.png"];

function changeSlide() {
  let index = 0;
  return function () {
    index += 1;

    if (index >= slides.length) {
      index = 0;
    }
    this.setAttribute("src", slides[index]);
  };
}

sliderImage.addEventListener("click", changeSlide());
sliderImage2.addEventListener("click", changeSlide());
