const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadeElements = document.querySelectorAll(".has-fade");

const closeHamburgerMenu = () => {
  body.classList.remove("no-scroll");
  header.classList.remove("open");
  fadeElements.forEach(function (element) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
  });
};

const openHamburgerMenu = () => {
  body.classList.add("no-scroll");
  header.classList.add("open");
  fadeElements.forEach(function (element) {
    element.classList.remove("fade-out");
    element.classList.add("fade-in");
  });
};

const handleResizeWindow = () => {
  if (window.innerWidth > 1023) {
    closeHamburgerMenu();
  }
};

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    closeHamburgerMenu();
  } else {
    openHamburgerMenu();
  }
});

window.onresize = handleResizeWindow;
