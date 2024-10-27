/* navigation */
const liTags = document.querySelectorAll(".navi > li");
liTags.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const submenu = li.querySelector(".submenu");
    submenu.style.opacity = 1;
    submenu.style.maxHeight = submenu.scrollHeight + "px";
    submenu.style.transition = "opacity 0.5s";
  });

  li.addEventListener("mouseout", () => {
    const submenu = li.querySelector(".submenu");
    submenu.style.opacity = 0;
    submenu.style.maxHeight = 0;
    submenu.style.transition = "opacity 0.5s";
  });
});

/* modal */
const firstLi = document.querySelector(".notice li:first-child");
const modal = document.querySelector("#modal");
const btn = document.querySelector(".btn");

firstLi.addEventListener("click", () => {
  modal.classList.add("active");
});

btn.addEventListener("click", () => {
  modal.classList.remove("active");
});

/* slide */
const slideShow = () => {
  const slideList = document.querySelector(".slidelist");
  slideList.style.marginLeft = "0%";

  const animateSlide = () => {
    setTimeout(() => {
      slideList.style.marginLeft = "-100%";
      slideList.style.transition = "margin-left 1s";
      setTimeout(() => {
        slideList.style.marginLeft = "-200%";
        slideList.style.transition = "margin-left 1s";
        setTimeout(() => {
          slideList.style.marginLeft = "0%";
          slideList.style.transition = "margin-left 1s";
          setTimeout(animateSlide, 2000); 
        }, 2000);
      }, 2000);
    }, 2000);
  };

  setTimeout(animateSlide, 2000);
};

slideShow();