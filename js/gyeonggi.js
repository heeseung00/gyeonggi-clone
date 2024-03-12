// window.onload = function(){

// }

$(document).ready(function () {
  // gnb
  var gnb = $(".mainmenu");
  var dim = $(".header-dim");
  gnb.mouseenter(function () {
    dim.stop().fadeIn(200);
  });

  gnb.mouseleave(function () {
    dim.stop().fadeOut(200);
  });
});
