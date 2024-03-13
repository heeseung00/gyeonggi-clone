// window.onload = function(){

// }

// 제이쿼리로 작성됨
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

  // 메뉴 관련
  var mainMenuLi = $(".mainmenu > li");
  var subMenu = $(".submenu");
  //   mainMenuLi 주메뉴로 마우스 이동하는 경우 실행
  $.each(mainMenuLi, function (index, item) {
    $(this).mouseenter(function () {
      allDepth3.hide();
      // 모든 포커스를 해제한다.
      // 서브 메뉴가 보여준다
      $(this).find(".submenu").addClass("submenu_focus");
      $(this).css("z-index", 999);
    });
    $(this).mouseleave(function () {
      // 서브메뉴 숨김
      $(this).find(".submenu").removeClass("submenu_focus");
    });
  });

  // subMenuLi
  $.each(subMenu, function () {});
  // subMenuLi
  var subMenuLi = $(".submenu > li");
  var allDepth3 = $(".submenu-3rd");
  // 절대로 나올 수 없는 값으로 설정해서 초기화
  var realIndex = -100000;
  // submenu
  // each = foreach 즉, 반복/순회
  $.each(subMenuLi, function (index, item) {
    var aTag = $(this).find(" > a");
    var depth3 = $(this).find(".submenu-3rd");
    aTag.click(function (e) {
      if ($(this).hasClass("link")) {
        return;
      }

      // herf 막는다.
      e.preventDefault();
      // 초기화 과정
      if (realIndex == index) {
        // 동일한 버튼을 눌렀을 때
      } else {
        // 다른 버튼을 눌렀을 때
        // 일단 모든 서브메뉴들을 담는다.
        allDepth3.hide();
        realIndex == index;
      }
      // .submenu-3rd 보이게 한다.
      var nowDepth3 = depth3.css("display");
      if (nowDepth3 == "none") {
        // nowDepth3가 보이게 된다면
        depth3.show();
        // 현재 많은 메뉴 중에 몇번째 클릭했느지를 저장한다.
        realIndex = index;
        // 메뉴 포커스 유지
        subMenuLi.removeClass("submenu_focus_link");
        subMenuLi.eq(index).addClass("submenu_focus_link");
      } else {
        depth3.hide();
      }
    });
  });
});
