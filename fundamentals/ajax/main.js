$(document).ready(() => {
  /*
    $("#result").load("test.html", (responseText, statusTxt, xhr) => {
      if (statusTxt == "success") {
        alert("It went Fine");
      } else if (statusTxt == "error") {
        alert("Error: " + xhr.statusText);
      }
    });
   */

  //GET
  // $.get('test.html', function(data){
  //   $('#result').html(data)
  // })

  // GET JSON
  /*
  $.getJSON("data.json", (data) => {
    $.each(data, (index, user) => {
      $("ul#users").append("<li> " + user.first_name + "</li>");
    });
  });
  */

  // $.ajax({
  //   method: "GET",
  //   url: "http://jsonplaceholder.typicode.com/users",
  //   dataType: "json",
  // }).done((data) => {
  //   $.map(data, (user, index) => {
  //     $("#result").append(
  //       `<h3> Email: ${user.email} </h3> <p>Name: ${user.name} </p>  `
  //     );
  //   });
  // });

  $("#postForm").submit((e) => {
    e.preventDefault();

    const title = $("#title").val();
    const body = $("#body").val();
    const url = $("#postForm").attr("action");

    $.post(url, {
      title: title,
      body: body,
    }).done((data) => {
      console.log("Post saved");
      console.log(data);
    });
  });
});
