let ht = document.querySelector(".section_menu_list h2").clientHeight;
document.querySelectorAll(".bk_menu_list div").forEach(function (v, k) {
    v.onclick = function () {
      window.scrollTo({
        top: document.querySelector(`#section${k + 1}`).offsetTop ,
        behavior: "smooth",
      });
    };
  });