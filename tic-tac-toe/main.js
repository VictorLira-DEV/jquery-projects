let move = 1;
let play = true;

//never user arrow function if you wanna work with THIS keyword
$(document).ready(function () {
  $("table tr td").click(function () {
    if ($(this).text() == "" && play) {
      if (move % 2 == 1) {
        $(this).append("X");
        $(this).css("color", "#61892f");
      } else {
        $(this).append("O");
        $(this).css("color", "#e85a4f");
      }
      move++;

      if (findWinner() !== -1 && findWinner() !== "") {
        $(".overlay").toggleClass("hidden");

        if (findWinner() === "X") {
          $(".overlay").append(`
            <div class="modal">
                <div class="winner winner__x">  <span> Winner </span> X </div>
                <button onClick="location.reload()">Play again</button>
            </div>`);
        } else {
          $(".overlay").append(`
            <div class="modal">
                <div class="winner winner__o">  <span> Winner </span> O </div>
                <button onClick="location.reload()">Play again</button>
            </div>`);
        }

        play = false;
      }
    }
  });
});

function findWinner() {
  const sp1 = $("table tr:nth-child(1) td:nth-child(1)").text();
  const sp2 = $("table tr:nth-child(1) td:nth-child(2)").text();
  const sp3 = $("table tr:nth-child(1) td:nth-child(3)").text();
  const sp4 = $("table tr:nth-child(2) td:nth-child(1)").text();
  const sp5 = $("table tr:nth-child(2) td:nth-child(2)").text();
  const sp6 = $("table tr:nth-child(2) td:nth-child(3)").text();
  const sp7 = $("table tr:nth-child(3) td:nth-child(1)").text();
  const sp8 = $("table tr:nth-child(3) td:nth-child(2)").text();
  const sp9 = $("table tr:nth-child(3) td:nth-child(3)").text();

  //check rows
  if (sp1 == sp2 && sp2 == sp3) {
    return sp3;
  } else if (sp4 == sp5 && sp5 == sp6) {
    return sp6;
  } else if (sp7 == sp8 && sp8 == sp9) {
    return sp9;
  }

  //check column
  else if (sp1 == sp4 && sp4 == sp7) {
    return sp7;
  } else if (sp2 == sp5 && sp5 == sp8) {
    return sp8;
  } else if (sp3 == sp6 && sp6 == sp9) {
    return sp9;
  }

  //check diagonals
  else if (sp1 == sp5 && sp5 == sp9) {
    return sp9;
  } else if (sp3 == sp5 && sp5 == sp7) {
    return sp7;
  }

  //no winner
  return -1;
}
