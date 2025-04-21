

//top 슬라이드
var swiper01 = new Swiper(".header_slide .mySwiper", {
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // con 슬라이드
  var swiper02 = new Swiper(".home_my_con_03 .mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //app 애니메이션
  let innerUl = document.querySelector(".inner ul");
  let innerUli = document.querySelectorAll(".inner ul li");

  let i = 0;

  function resetLiClass() {
    innerUli.forEach(function (v, k) {
      v.classList.remove("on");
    });
  }

  function next() {
    setTimeout(function () {
      resetLiClass();
      innerUli[i].classList.add("on");
      innerUl.style.marginLeft = `-${i * 100}%`;

      i++;
      if (i >= innerUli.length) {
        i = 0;
      }
      inner.classList.remove("on");
    }, 1000);
  }

  setInterval(next, 3000);

  //팝업창
let popup = document.querySelector("#popup");
let con = document.querySelector(".ad_con_01");
con.onclick = function () {
  popup.style.visibility = "visible";
};

popup.querySelector(".close").onclick = function (e) {
  e.preventDefault();
  popup.style.visibility = "hidden";
};