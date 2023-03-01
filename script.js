var animated = false;
$(".heart").click(function () {
  if (!animated) {
    $(this).addClass("happy").removeClass("broken");
    animated = true;
  } else {
    $(this).removeClass("happy").addClass("broken");
    animated = false;
  }
});
