$(function () {
  /* #design1.view */
  $(".design_wrap .design1").click(function () {
    $("html").addClass("all_scrollFixed");
    $("#design1.view").addClass("on");
    $("#design .fa-xmark").click(function () {
      $("html").removeClass("all_scrollFixed");
      $("#design1.view").removeClass("on");
    });
  });

  /* #design2.view */
  $(".design_wrap .design2").click(function () {
    $("html").addClass("all_scrollFixed");
    $("#design2.view").addClass("on");
    $("#design .fa-xmark").click(function () {
      $("html").removeClass("all_scrollFixed");
      $("#design2.view").removeClass("on");
    });
  });

  /* #design3.view */
  $(".design_wrap .design3").click(function () {
    $("html").addClass("all_scrollFixed");
    $("#design3.view").addClass("on");
    $("#design .fa-xmark").click(function () {
      $("html").removeClass("all_scrollFixed");
      $("#design3.view").removeClass("on");
    });
  });

  /* #design4.view */
  $(".design_wrap .design4").click(function () {
    $("html").addClass("all_scrollFixed");
    $("#design4.view").addClass("on");
    $("#design .fa-xmark").click(function () {
      $("html").removeClass("all_scrollFixed");
      $("#design4.view").removeClass("on");
    });
  });
});
