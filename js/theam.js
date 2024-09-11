const btnTheam = document.querySelector("#toggle");
const body = document.body;
/* теги а */
const teg_a = Array.from(document.getElementsByTagName("a")); // tag <a></a>
const logoImg = document.querySelectorAll("#logo_img"); // logo img
const bannerImg = document.querySelector("#bilboard_img"); // banner
const modalBox = document.querySelector(".modal__box"); // modal window
const stepsTheam = document.querySelectorAll(".step"); // jumping cards
const allBtn = Array.from(document.getElementsByTagName("button")); // buttons

const destinationMainText = document.querySelector(".destinations__main_text"); // destination's text
const destinationSupText = document.querySelector(".destinations__sup_text"); // destination's text
const spanEl = Array.from(document.getElementsByTagName("span"))[1]; // span between destionations

const citySupText = document.querySelectorAll(".city__sup_text");

const circleAboutUs = document.querySelector(".red_circle"); // circle about Us
const squareAboutUs = document.querySelector(".yellow_square"); // square about Us

const answerFAQ = document.querySelectorAll(".answer");

const otherDestTitle = document.querySelector(".other__destination-title");

const otherDestFirstImg = document.querySelector("#other_dest-firstImg"); // two figure-images
const otherDestSecondImg = document.querySelector("#other_dest-secondImg");

const otherDestAllBtn = document.querySelectorAll(".other__dest-info-btn"); // btn with + in describe

const sliderTitle = document.querySelector(".slider__title"); // slider title

const card_line = document.querySelector(".card_line");
const card_item = document.querySelectorAll(".card_item");

const footerImg1 = document.querySelector("#footer-img1");
const footerImg2 = document.querySelector("#footer-img2");
const footerImg3 = document.querySelector("#footer-img3");

const footerTitles = document.querySelectorAll(".footer__links-title");

const activeDotc = document.querySelectorAll(".active-dot");

const navMenu = document.querySelector(".nav");

// #008ea4 голубой
// #ff715b оранжевый

btnTheam.addEventListener("change", function () {
  if (this.checked) {
    body.style.backgroundColor = "#121212";
    body.style.color = "#ffffff";
    teg_a.forEach((item) => {
      item.style.color = "#ffffff";
    });

    logoImg.forEach((item) => {
      item.src = "img/darkmode/image.png";
    });

    bannerImg.src = "img/darkmode/banner_dark.png";

    modalBox.style.backgroundColor = "#121212";
    modalBox.style.color = "#ffffff";

    stepsTheam.forEach((item) => {
      item.style.backgroundColor = "#161616";
      item.style.color = "#f1f1f1";
    });

    allBtn.forEach((item) => {
      item.style.backgroundColor = "#008ea4";
    });

    destinationMainText.style.color = "#ffffff";
    destinationSupText.style.color = "#c6c6c6";
    spanEl.style.color = "#008ea4";

    if (window.innerWidth < 451) {
      citySupText.forEach((item) => {
        item.style.color = "#f1f1f1";
      });
    }

    circleAboutUs.style.border = "8px solid #008ea4";
    squareAboutUs.style.backgroundColor = "#a27300";

    answerFAQ.forEach((item) => {
      item.style.color = "#f1f1f1";
    });

    otherDestTitle.style.color = "#f1f1f1";

    otherDestFirstImg.src = "img/darkmode/image (1).png";
    otherDestSecondImg.src = "img/darkmode/image (2).png";

    otherDestAllBtn.forEach((item) => {
      item.style.backgroundColor = "#008ea4";
    });

    sliderTitle.style.color = "#f1f1f1";

    // card_line.style.backgroundColor = "#008ea4";
    card_item.forEach((item) => {
      item.style.backgroundColor = "#121212";
    });

    footerImg1.src = "img/darkmode/image (4).png";
    footerImg2.src = "img/darkmode/image (6).png";
    footerImg3.src = "img/darkmode/image (5).png";

    footerTitles.forEach((item) => {
      item.style.color = "#f1f1f1";
    });

    navMenu.style.backgroundColor = "#121212";

  } else {
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#121212";
    teg_a.forEach((item) => {
      item.style.color = "#121212";
    });
    logoImg.forEach((item) => {
      item.src = "img//logo.png";
    });
    bannerImg.src = "img/hero-banner.png";

    modalBox.style.backgroundColor = "#ffffff";
    modalBox.style.color = "#121212";

    stepsTheam.forEach((item) => {
      item.style.backgroundColor = "#f1f1f1";
      item.style.color = "#161616";
    });

    allBtn.forEach((item) => {
      item.style.backgroundColor = "#ff715b";
    });

    destinationMainText.style.color = "#121212";
    destinationSupText.style.color = "#989090";
    spanEl.style.color = "#ff715b";

    if (window.innerWidth < 451) {
      citySupText.forEach((item) => {
        item.style.color = "#121212";
      });
    }

    circleAboutUs.style.border = "8px solid #ff715b";
    squareAboutUs.style.backgroundColor = "#ffca45";

    answerFAQ.forEach((item) => {
      item.style.color = "#767170";
    });

    otherDestTitle.style.color = "#121212";

    otherDestFirstImg.src = "img/Vector (4).png";
    otherDestSecondImg.src = "img/Vector (5).png";

    otherDestAllBtn.forEach((item) => {
      item.style.backgroundColor = "#ff715b";
    });

    sliderTitle.style.color = "#121212";

    // card_line.style.backgroundColor = "#ff715b";

    card_item.forEach((item) => {
      item.style.backgroundColor = "#ffffff";
    });

    footerImg1.src = "img/Vector (7).png";
    footerImg2.src = "img/Vector (6).png";
    footerImg3.src = "img/Union.png";

    footerTitles.forEach((item) => {
      item.style.color = "#121212";
    });

    navMenu.style.backgroundColor = "#ffffff";
  }
});
