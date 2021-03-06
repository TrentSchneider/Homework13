// links buttons to CRUD
$(function () {
  $("#reset").on("click", function (event) {
    $.ajax("/api/burger/reset", {
      type: "DELETE",
    }).then(function () {
      location.reload();
    });
  });
  $("#createburger").on("submit", function (event) {
    event.preventDefault();

    var newBurg = {
      name: $("#bu").val().trim(),
    };
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurg,
    }).then(function () {
      location.reload();
    });
  });

  $(".devour").on("click", function (event) {
    let id = $(this).data("id");
    let name = $(this).data("name");
    const dev = {
      id: id,
    };
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: dev,
    }).then(function () {
      location.reload();
    });
  });
});
