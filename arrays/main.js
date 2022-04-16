$(document).ready(() => {
  const btns = $("button");
  $.each(btns, (index, item) => {
    $(item).text("button " + index);

    $(item).click(() => {
      alert($(item).text());
    });

    $(item).css({
      background: "pink",
      padding: "10px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    });
  });
});
