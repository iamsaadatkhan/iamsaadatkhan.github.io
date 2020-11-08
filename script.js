// circle cursor
jQuery(document).ready(function () {
  var mouseX = 0,
    mouseY = 0;
  var xp = 0,
    yp = 0;

  $(document).mousemove(function (e) {
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30;
  });

  setInterval(function () {
    xp += (mouseX - xp) / 6;
    yp += (mouseY - yp) / 6;
    $("#circle").css({ left: xp + "px", top: yp + "px" });
  }, 20);
});


  // center-right

//   var originalBG = $(".center-right").css("background");

//   $('.center-right')
//     .mousemove(function(e) {
  
//       x = e.pageX - this.offsetLeft;
//       y = e.pageY - this.offsetTop;
//       xy = x+y ;
//       bgWebKit = "linear-gradient(" + xy + "deg, #4ac1ff, #795bb0)";
  
//       $(this).css({
//         'background': bgWebKit
//       })
//     }).mouseleave(function() {
//       $(this).css({
//         background: originalBG
//       });
//     });




// Move the cursor
