$(window).on({
    mousemove: function (e) {
      gsap.to("#cursor", {
        duration: 0.2,
        left: e.pageX - 20,
        top: e.pageY - 20,
      });
    },
  });