let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".nav__menu");

burger.addEventListener("click", function (e) {
  document.body.classList.toggle("_lock");
  burger.classList.toggle("active");
  menu.classList.toggle("nav__active");
});

const menuLinks = document.querySelectorAll(".nav__link[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {

      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight - 100;

      if (burger.classList.contains("active")) {
        document.body.classList.remove("_lock");
        burger.classList.remove("active");
        menu.classList.remove("nav__active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.classList.add("header__active");
  } else {
    header.classList.remove("header__active");
  }
});
