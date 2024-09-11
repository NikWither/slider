const sliderImagesFirst = document.querySelectorAll(".card_item"); // список с картинками первой секции
const sliderLineFirst = document.querySelector(".slider__liner_first"); // первая лента со слайдерами

const sliderImagesSecond = document.querySelectorAll(".card_item_second"); // список с картинками второй секции
const sliderLineSecond = document.querySelector(".slider__liner_second"); // вторая лента со слайдерами

const sliderDotc = document.querySelectorAll(".slider__dot");

let sliderCountFirst = 0; // счетчик по слайдерам первой секции
let sliderCountSecond = (sliderImagesSecond.length - 1)
let sliderHeight; // ширина картинки для адаптива

/* Функции */

// все эти вещи сделаны на адаптивность

window.addEventListener("resize", showSlide); // прослушка событий на каждое изменение размера

function showSlide() {
  sliderHeight = document.querySelector(".slider").offsetHeight; // берем числовое значение размера картинки (без пикселей)
  sliderLineFirst.style.height = sliderHeight * sliderImagesFirst.length + "px";
  sliderLineSecond.style.height = sliderHeight * sliderImagesSecond.length + "px";
  console.log(sliderLineSecond);
  console.log(sliderLineFirst);

  sliderImagesFirst.forEach((item) => (item.style.height = sliderHeight + "px"));
  sliderImagesSecond.forEach((item) => (item.style.height = sliderHeight + "px"));

  rollSlider();
}

showSlide();

// функции пролистывания вперед и назад

// вперёд
function nextSlide() {
  sliderCountFirst++;
  sliderCountSecond--;
  if (sliderCountFirst >= sliderImagesFirst.length) {
    sliderCountFirst = 0;
    sliderCountSecond = (sliderImagesSecond.length - 1);
  }
  rollSlider();
  thisSlide(sliderCountFirst);
}

// назад
function prevSlide() {
  sliderCountFirst--;
  sliderCountSecond++;
  if (sliderCountFirst < 0) {
    sliderCountFirst = sliderImagesFirst.length - 1; // на последний слайд
    sliderCountSecond = 0;
  }

  rollSlider();
  thisSlide(sliderCount);
}

// переключение, уже сам roll слайдера

function rollSlider() {
  sliderLineFirst.style.transform = `translateY(${-sliderCountFirst * sliderHeight}px)`;
  sliderLineSecond.style.transform = `translateY(${-sliderCountSecond * sliderHeight}px)`;
}

// Указывает, какой слайд по счёту активен

function thisSlide(index) {
  sliderDotc.forEach((item) => item.classList.remove("active-dot"));
  sliderDotc[index].classList.add("active-dot");
}

sliderDotc.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCountFirst = index;
    sliderCountSecond = (sliderImagesSecond.length - 1) - index;
    rollSlider();
    thisSlide(sliderCountFirst);
  });
});
