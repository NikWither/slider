// СЕКЦИЯ С БАННЕРОМ

const bannerTextFirst = document.querySelector(".message__first");
const bannerTextSecond = document.querySelector(".message__second");
const bannerBtn = document.querySelector(".planYourTripBtn");

const timeLineBanner = gsap.timeline({ default: { duration: 1 } });
timeLineBanner
  .from(bannerTextFirst, { opacity: 0, y: 30 })
  .from(bannerTextSecond, { opacity: 0, y: 30 })
  .from(bannerBtn, { opacity: 0, y: 30 });

// СЕКЦИЯ С ПОСТОЯННОЙ АНИМАЦИЕЙ КНОПКИ

const btnTimeLineBanner = gsap
  .timeline({ repeat: -1, repeatDelay: 3 })
  .to(bannerBtn, { rotate: 4 })
  .to(bannerBtn, { rotate: -4 })
  .to(bannerBtn, { rotate: 0 });

// СЕКЦИЯ С АНИМАЦИЕЙ ШАГОВ

const steps = document.querySelectorAll(".step");

steps.forEach((step) => {
  step.addEventListener("mouseenter", () => {
    gsap.to(step, {
      y: -40,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  step.addEventListener("mouseleave", () => {
    gsap.to(step, {
      y: 0,
      duration: 0.7,
      ease: "bounce.out",
    });
  });
});
