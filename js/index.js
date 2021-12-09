// $(document).onload(()=> {
//     $("#gotop").fadeIn(0);
// })

$("#gotop").on("click", function (e) {
  $("html, body").animate(
    {
      scrollTop: $("#header").offset().top,
    },
    "200"
  );
});

$(window).scroll(function () {
  let y = $(this).scrollTop();
  if (y > 800) {
    $("#gotop").fadeIn();
  } else {
    $("#gotop").fadeOut();
  }
});

$("#show-phone").on("click", ()=> {
    $("#show-phone").html("<a href='tel:+380671233443' class='header__phone--number' >+380671233443</a>")
})
