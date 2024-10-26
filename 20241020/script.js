/* Navigation */
const naviItems = document.querySelectorAll(".navi > li");
naviItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const submenu = item.querySelector(".submenu");
    submenu.style.transition = "opacity 0.3s";
    setTimeout(() => {
      submenu.style.display = "block";
      submenu.style.opacity = 1;
    }, 300);
  });
  item.addEventListener("mouseout", () => {
    const submenu = item.querySelector(".submenu");
    submenu.style.transition = "opacity 0.3s";
    setTimeout(() => {
      submenu.style.display = "none";
      submenu.style.opacity = 0;
    }, 300);
  });
});

/* Slide */
const slidelist = document.querySelector(".slidelist");
const slides = slidelist.querySelectorAll("ul li");
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  slidelist.style.marginTop = -(currentIndex * 400) + "px";
}, 2000)

/* tab */
const tabMenus = document.querySelectorAll(".tabmenu > ul > li > a");
tabMenus.forEach((item) => {
  item.addEventListener("click", () => {
    const parentLi = item.parentElement;
    const liItems = parentLi.parentElement.children;
    [...liItems].forEach((liItem) => {
      liItem.classList.remove("active");
    });
    parentLi.classList.add("active");
  });
});

/* modal */
const firstList = document.querySelector(".notice li:first-child");
const layer = document.querySelector("#layer");
const btn = document.querySelector(".btn");

firstList.addEventListener("click", () => {
  layer.classList.add("active");
});

btn.addEventListener("click", () => {
  layer.classList.remove("active");
})