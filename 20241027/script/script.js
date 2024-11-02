/* menu event */
const naviLis = document.querySelectorAll(".navi > li");
naviLis.forEach((naviLi) => {

  naviLi.addEventListener("mouseover", () => {
    const subMenus = document.querySelectorAll(".submenu");
    const menuBg = document.querySelector("#menu_bg");

    subMenus.forEach((subMenu) => {
      subMenu.style.opacity = "1";
      subMenu.style.maxWidth = "900px";
      subMenu.style.transition = "opacity 0.3s ease";

      menuBg.style.opacity = "1";
      menuBg.style.maxWidth = "calc(100% - 200px)";
      menuBg.style.transition = "opacity 0.3s ease";
    });
  });

  naviLi.addEventListener("mouseout", () => {
    const subMenus = document.querySelectorAll(".submenu");
    const menuBg = document.querySelector("#menu_bg");

    subMenus.forEach((subMenu) => {
      subMenu.style.opacity = "0";
      subMenu.style.maxWidth = "0";
      subMenu.style.transition = "opacity 0.3s ease";

      menuBg.style.opacity = "0";
      menuBg.style.maxWidth = "0";
      menuBg.style.transition = "opacity 0.3s ease";
    });
  });
});

/* slide event */
const slideList = document.querySelector(".slidelist");
const slides = slideList.querySelectorAll("ul li").length;
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides;
  slideList.style.marginTop = -(currentIndex * 400) + "px";
}, 2000);

/* modal event */
const firstLi = document.querySelector(".notice li:first-child");
const layer = document.querySelector("#layer");
const btn = document.querySelector(".btn");

firstLi.addEventListener("click", () => {
  layer.classList.add("active");
});

btn.addEventListener("click", () => {
  layer.classList.remove("active");
});