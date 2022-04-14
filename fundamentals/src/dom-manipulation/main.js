$(document).ready(() => {
  $("p.para1").css({
    color: "white",
    background: "black",
  });

  //-------- ADD, REMOVE CLASS-----------
  // $("p.para2").addClass("myClass");
  // $("p.para2").removeClass("myClass");

  //-------TOGGLE----------------------

  // $("#btn1").click(() => {
  //   $("p.para2").toggleClass("myClass");
  // });

  //--------TEXT------------------------
  // $('#myDiv').text('Hello World')
  // $("#myDiv").html("<h1> Hello World </h1> ");
  // console.log($("#myDiv").text());

  //---------APPEND

  /*
  $("ul").append("<li> Append list item </li>");
  $("ul").prepend("<li> Prepend list item </li>");

  $(".para1").appendTo(".para2");
  $(".para1").prependTo(".para2");
  $("ul").before("<h4> Hello before v</h4>");
  $("ul").after("<h2>Hello after");
  $("ul").empty();
  $("ul").detach(); //remove from the DOM
  $("a").attr("target", "_blank");
  console.log($("a").attr("href"));

  $("a").removeAttr("target");
 */
});

// $('p').wrap('<h1>');
// $('p').wrapAll('<h1>');

$("#newItem").keyup((e) => {
  const code = e.which; //keyboard code
  console.log(code);
  if (code === 13) {
    // keyboard "ENTER" is 13
    e.preventDefault();
    $("ul").append("<li>" + e.target.value + "</li>");
  }
});

// const myArr = ["Brad", "Brad", "Brad", "Brad", "Brad"];
// $.each(myArr, (i, val) => {
//   $("#users").append(`<li> ${val} </li> `);
// });

const newArr = $("ul#list li").toArray();
$.each(newArr, (index, value) => {
  console.log(value)
});
