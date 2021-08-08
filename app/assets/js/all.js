$(document).ready(function () {
  $(".list-group-item-toggle").click(function (e) {
    event.preventDefault();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    let id = $(this).attr("id");

    $(".productList .content section").fadeOut();
    $("." + id).fadeIn();
  });
});
