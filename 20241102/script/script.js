/* navi event */
const naviLis = document.querySelectorAll(".navi > li");
naviLis.forEach((naviLi) => {
  naviLi.addEventListener("mouseover", () => {
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach((submenu) => {
      submenu.style.opacity = "1";
      submenu.style.maxHeight = "160px";
      submenu.style.transition = "opacity 0.3s ease";
    });
  });

  naviLi.addEventListener("mouseout", () => {
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach((submenu) => {
      submenu.style.opacity = "0";
      submenu.style.maxHeight = "0px";
      submenu.style.transition = "opacity 0.3s ease";
    });
  });
});

/* slide event */
const slideList = document.querySelector(".slidelist");
const slides = slideList.querySelectorAll("ul > li").length;

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides;
  slideList.style.marginLeft = -(currentIndex * 1200) + "px";
}, 2000);

/* tab event */
const tabBtns = document.querySelectorAll(".tabmenu > li > h4");
tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    const parentElement = tabBtn.parentElement;

    const greatParentChildrens = parentElement.parentElement.children;
    [...greatParentChildrens].forEach((children) => {
      children.classList.remove("active");
    });

    parentElement.classList.add("active");
  });
});

/* modal event */
const firstLi = document.querySelector(".notice li:first-child");
const modal = document.querySelector("#layer");
const btn = document.querySelector(".btn");

firstLi.addEventListener("click", () => {
  modal.classList.add("active");
});

btn.addEventListener("click", () => {
  modal.classList.remove("active");
});