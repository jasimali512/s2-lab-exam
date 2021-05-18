$(document).ready(function () {
  function loadData() {
    $.get("https://jsonplaceholder.typicode.com/users", function (data) {
      $("#tbody").html(
        data.map((dat) => {
          return (
            "<tr>" +
            "<td>" +
            dat.id +
            "</td>" +
            "<td>" +
            dat.name +
            "</td>" +
            "<td>" +
            dat.username +
            "</td>" +
            "<td class='email'>" +
            dat.email +
            "</td>" +
            "<td><button class='btn btn-warning u-btn-" +
            dat.id +
            "' id='update-btn' data-id='" +
            dat.id +
            "'  data-toggle='modal' data-target='#myModal'>Update Email</button><button id='delete' data-id='" +
            dat.id +
            "' class='btn btn-danger mx-2'>Delete</button></td>" +
            "</tr>"
          );
        })
      );
    });
  }
  loadData();

  $(document).on("click", "#update-btn", function () {
    $("#userId").val($(this).data("id"));
  });

  $("#update").on("click", function () {
    if (validateEmail($("#email").val())) {
      $(".u-btn-" + $("#userId").val())
        .parents("td")
        .siblings("td.email")
        .html($("#email").val());
    } else {
      alert("Invalid Email Address");
    }
  });

  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
  }

  $(document).on("click", "#delete", function () {
    $(this).parents("tr").remove();
  });
});
