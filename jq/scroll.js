$(function () {
  /* top_menu */
  const topmenu = $("#gnb nav>ul.header_manu li");
  topmenu.click(function (e) {
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let section = $(".section").eq(index);
    let offset = section.offset().top;
    $("html, body").animate({ scrollTop: offset }, 800);
  });

  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop >= $("#its_me").offset().top) {
      $("#gnb nav>ul.header_manu li")
        .eq(0)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
    if (scrollTop >= $("#project").offset().top - 200) {
      $("#gnb nav>ul.header_manu li")
        .eq(1)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
    if (scrollTop >= $("#design").offset().top - 200) {
      $("#gnb nav>ul.header_manu li")
        .eq(2)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
    if (scrollTop >= $("#contact").offset().top - 200) {
      $("#gnb nav>ul.header_manu li")
        .eq(3)
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  });

  /* project_scroll */

  $(".scroll").hover(
    function () {
      let pah = $(this).innerHeight();
      let img = $(this).find("img");
      let imgh = img.innerHeight();
      img.stop().animate({ top: pah - imgh }, 3000);
    },
    function () {
      let img = $(this).find("img");
      img.stop().animate({ top: 0 }, 3000);
    }
  );
});
