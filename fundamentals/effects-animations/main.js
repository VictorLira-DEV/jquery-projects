$(document).ready(() => {
  // $("#btnFadeOut").click(() => {
  //   $("#box").fadeOut();
  // });

  // $("#btnFadeIn").click(() => {
  //   $("#box").fadeIn();
  // });

  //------------------ FADE OUT -----------------
  $("#btnFadeOut").click(() => {
    $("#box").fadeOut(3000, function () {
      $("#btnFadeOut").text("Its gone");
    });
  });

  //------------------ FADE IN ------------------
  $("#btnFadeIn").click(() => {
    $("#box").fadeIn(3000);
  });

  //------------------ FADE TOGGLE ------------------
  $("#btnFadeTog").click(() => {
    $("#box").fadeToggle(1000);
  });

  //------------------ SLIDE DOWN ------------------
  $("#btnSlideDown").click(() => {
    $("#box").slideDown(300);
  });

  //------------------ SLIDE UP ------------------
  $("#btnSlideUp").click(() => {
    $("#box").slideUp(3000);
  });

  //------------------ SLIDE TOGGLE ------------------
  $("#btnSlideTog").click(() => {
    $("#box").slideToggle(3000);
  });

  //------------------ SLIDE TOGGLE ------------------
  $("#btnStop").click(() => {
    $("#box").stop();
  });

  //------------------ MOVE RIGHT ------------------
  $("#moveRight").click(() => {
    $("#box2").animate({
      left: 500,
      height: "150px",
      width: "150px",
      opacity: "0.5",
    });
  });

  //------------------ MOVE LEFT ------------------
  $("#moveLeft").click(() => {
    $("#box2").animate({
      left: 0,
      height: "100px",
      width: "100px",
      opacity: "1",
    });
  });

  //------------------ MOVE AROUND ------------------
  $("#moveAround").click(() => {
    const box = $("#box2");
    box.animate({
      left: "100px",
    });

    box.animate({
      top: "100px",
    });

    box.animate({
      left: 0,
      top: "100px",
    });

    box.animate({
      left: "0px",
      top: 0,
    });
  });
});
