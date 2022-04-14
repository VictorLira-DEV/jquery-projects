//DOCUMENT READY
// $(document).ready(() => {
//   $("#btn1").click(() => {
//     alert("button clicked");
//   });
// });

//CLICK EVENT
// $("#btn1").click(() => {
//   alert("button clicked");
// });

//---------

// $("#btn1").on("click", function () {
//   alert(" casa ");
// });

//---------

// $("#btn1").on("click", function () {
//   //   $(".para1").hide();
//   $(".para1").toggle();
// });

// $("#btn2").on("click", function () {
//   $(".para1").show();
// });

//DOUBLE CLICK
// $("#btn1").dblclick(() => {
//     $(".para1").toggle();
// });

//HOVER
// $("#btn1").hover(() => {
//     $(".para1").toggle();
// });

//MOUSE ENTER
// $("#btn1").on("mouseenter", function () {
//   $(".para1").toggle();
// });

// //MOUSE LEAVE
// $("#btn1").on("mouseleave", function () {
//   $(".para1").toggle();
// });

//MOUSE MOVE
// $("#btn1").on("mousemove", function () {
//   $(".para1").toggle();
// });

// //MOUSE DOWN
// $("#btn1").on("mousedown", function () {
//   $(".para1").toggle();
// });

// //MOUSE UP
// $("#btn1").on("mouseup", function () {
//   $(".para1").toggle();
// });

//EVENT OBJECT
$("#btn1").click((e) => {
  //   console.log(e.currentTarget.id);
  //   console.log(e.currentTarget.innerHTML);
  //   console.log(e.currentTarget.outerHTML);
  // console.log(e.currentTarget.className)
});

//------------FORM EVENTS-----------------------//
//BLUR EVENT
// $("input").blur(function () {
//   console.log("focus");
//   $(this).css("background", "#f4f4f4");
// });

// //FOCUS EVENT
// $("input").focus(function () {
//   console.log("focus");
//   $(this).css("background", "pink");
// });

// //kEY UP
// $("input").keyup(function (e) {
//   console.log(e.target.value);
// });

//CHANGE
$("select#gender").change(() => {
  console.log("changed");
});

//SUBMITED
$("#form").submit((e) => {
  e.preventDefault();
  const name = $('input#name').val();
  console.log(name);
});
