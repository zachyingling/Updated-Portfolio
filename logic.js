$(document).ready(() => {
  if ($(window).width() < 578) {
    $("#linkedin-footer").removeClass("btn-lg");
    $("#github-footer").removeClass("btn-lg");
  }

  if ($(window).width() < 578) {
    $("#linkedin-footer").addClass("btn-sm");
    $("#github-footer").addClass("btn-sm");
  }

  // $(".project-image").hover(
  //   $(this)
  //     .stop(true)
  //     .animate(
  //       {
  //         left: "290px"
  //       },
  //       "fast"
  //     ),
  //   // $(this).fadeIn();
  //   $(this)
  //     .stop(true)
  //     .animate(
  //       {
  //         left: "290px"
  //       },
  //       "fast"
  //     )
  //   // $(this).fadeOut();
  // );
});
