const modalBtn = document.querySelector(".planYourTripBtn");
const modalWindow = document.querySelector(".modal__window");
const modalWindowBox = document.querySelector(".modal__box");

modalBtn.addEventListener("click", () => {
  modalWindow.classList.toggle("open");
});

const btnClose = document.querySelector("#close__btn");

// клип по кнопке button
btnClose.addEventListener("click", () => {
  modalWindow.classList.remove("open");
});

// клик по кнопке ESCAPE
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalWindow.classList.remove("open");
  }
});

// клик вне области окна
window.addEventListener("click", (event) => {
  if (event.target === modalWindow) {
    modalWindow.classList.remove("open");
  }
});
