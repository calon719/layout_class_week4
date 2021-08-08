"use strict";

$(document).ready(function () {
  $(".list-group-item-toggle").click(function (e) {
    event.preventDefault();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    var id = $(this).attr("id");
    $(".productList .content section").fadeOut();
    $("." + id).fadeIn();
  });
});
//# sourceMappingURL=all.js.map
