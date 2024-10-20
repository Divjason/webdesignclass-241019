// 메뉴가 어떤 것인지 브라우저에게 알려준다
// 현재 메뉴가 4개이기 때문에 사용자의 이벤트 행위를 1개 정의하고, 정의가 된 기능을 반복해서 실행될 수 있도록 설정
// 메뉴에 마우스를 올린다
// 마우스가 올라갔을 때, 서브메뉴가 나타난다
// 마우스가 떨어졌을 때, 서브메뉴가 사라진다

/* Navigation */
const liTags = document.querySelectorAll(".navi > li");
liTags.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const submenu = li.querySelector(".submenu");
    submenu.style.display = "block";
    submenu.style.transition = "opacity 0.3s";
    setTimeout(() => {
      submenu.style.opacity = 1;
    }, 300);
  });
  li.addEventListener("mouseout", () => {
    const submenu = li.querySelector(".submenu");
    submenu.style.display = "none";
    submenu.style.transition = "opacity 0.3s";
    setTimeout(() => {
      submenu.style.opacity = 0;
    }, 300);
  });
});

// 웹 브라우저에게 슬라이드 아이템이 무엇인지 알려줘야 됨
// 슬라이드의 개수는 총 3개
// 먼저 보여지고 있는 슬라이드 아이템이 자연스럽게 사라지면
// 뒤에서 대기하고 있던 슬라이드 아이템이 자연스럽게 나타난다
// 마지막 슬라이드 아이템이 자연스럽게 사라지게 되면, 첫번째 슬라이드 아이템이 다시 나타날 수 있도록 해준다

/* Slide */
const slides = document.querySelectorAll(".imgslide a");
slides.forEach((slide, index) => {
  if (index > 0) slide.style.display = "none";

  let currentIndex = 0;
  setInterval(() => {
    slides[currentIndex].style.opacity = 0;
    slides[currentIndex].style.transition = "opacity 0.3s";

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].style.display = "block";
    slides[currentIndex].style.opacity = 0;
    slides[currentIndex].style.transition = "opacity 0.3s";
    setTimeout(() => {
      slides[currentIndex].style.opacity = 1;
    }, 10);
  }, 3000);
});

/* Modal */
// 0.html 모달창을 만들어서 준비 (*평상시에는 노출x)
// 1.웹 브라우저에게 1번 아이템을 알려줘야한다
// 2.공지사항 1번 아이템을 클릭한다
// 3.사용자가 클릭했을 때, 모달창이 나타나도록해준다 => 클릭 시, 이벤트 실행
// 4.이벤트가 정상적으로 실행 => 모달창
// 6.모달창 안에 닫기 기능 버튼을 준비
// 7.닫기 기능 버튼을 클릭하면 모달이 사라지도록

const noticeList = document.querySelector(".notice li:first-child");
const modal = document.querySelector("#modal");
const btn = document.querySelector(".btn");

noticeList.addEventListener("click", () => {
  modal.classList.add("active");
});

btn.addEventListener("click", () => {
  modal.classList.remove("active");
});
