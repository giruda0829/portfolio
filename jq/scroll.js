$(function(){
const topmenu = $("#gnb nav ul.header_manu li");
const sections = $("main .section");
const speed = 500;
topmenu.click(function (e) {
  e.preventDefault();
  let target = $(this);
  let index = target.index();
  let section = sections.eq(index);
  let offset = section.offset().top;
  $("html, body").animate({ scrollTop: offset }, 1500, "easeOutCirc");
});

$(window).on("scroll", function () {
  let scrollTop = $(window).scrollTop();
  sections.each(function (i, o) {
    if (scrollTop >= sections.eq(i).offset().top - speed) {
      topmenu.eq(i).addClass("active").siblings().removeClass("active");
      sections.eq(i).find(".left").addClass("in");
      sections.eq(i).find(".right span").addClass("show");
    }
  });
  const gnb=$('#gnb')
  if(scrollTop>=200){
    gnb.addClass("active")
  }else{
    gnb.removeClass("active")
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
})