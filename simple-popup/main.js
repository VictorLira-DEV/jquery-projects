$(document).ready(() => {
  $(".display__modal").click(() => {
    $(".overlay").removeClass("hidden");
  });

  $(".hide__modal").click(() => {
    $(".overlay").addClass("hidden");
  });
});
