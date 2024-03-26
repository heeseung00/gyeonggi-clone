$(document).ready(function () {
  //    gnb관련코드 //
  var gnb = $(".mainmenu");
  var dim = $(".header-dim");
  gnb.mouseenter(function () {
    dim.stop().fadeIn(200);
  });
  gnb.mouseleave(function () {
    dim.stop().fadeOut(200);
  });
  // 메뉴관련
  var mainMenuLi = $(".mainmenu > li");
  var subMenu = $(".submenu");
  //   mainMenuLi 주메뉴로 마우스 이동하는 경우 실행
  $.each(mainMenuLi, function (index, item) {
    $(this).mouseenter(function () {
      allDepth3.hide();
      // 모든 포커스 해제
      subMenuLi.removeClass("submenu_focus_link");
      // 서브 메뉴가 보여준다
      $(this).find(".submenu").addClass("submenu_focus");
      $(this).css("z-index", 999);
    });
    $(this).mouseleave(function () {
      // 서브메뉴 숨김
      $(this).find(".submenu").removeClass("submenu_focus");
    });
  });

  //   subMenuLi
  var subMenuLi = $(".submenu > li");
  var allDepth3 = $(".submenu-3rd");
  // 절대로 나올수 없는 값으로 설정해서 초기화에 사용
  //   이전에 선택된 버튼의 인덱스를 저장할 변수 선언및
  var reIndex = -10000;
  $.each(subMenuLi, function (index, item) {
    var aTag = $(this).find(" > a");
    var depth3 = $(this).find(".submenu-3rd");
    aTag.click(function (e) {
      if ($(this).hasClass("link")) {
        return;
      }
      // herf 막는다.
      e.preventDefault();
      if (reIndex == index) {
        // 동일한 버튼을 눌렀을때
        // 이미 특정한 버튼 을 선택한 상태에서 다시 해당 버튼을 선택했을떄,
        // 이미 선택된 상태이므로 추가적인 동작을 하지 않도록 방지하기 위해
        // 현재 클릭한 버튼과 이전에 클릭한 버튼이 같은 경우에는 아무런 동작하지 않는것이 바람직
        // reIndex == index  이조건이 필요
      } else {
        // 다른을 눌렸을때
        // 일단 모든 서브메뉴들을 담는다.
        allDepth3.hide();
        reIndex = index;
      }
      // .submenu-3rd 보이게 한다
      var nowDepth3 = depth3.css("display");
      if (nowDepth3 == "none") {
        // nowDepth3가 보이지 않는다면
        depth3.show();
        // 현재 많은 메뉴 중에 몇번째 클릭했는지를 저장한다.
        reIndex = index;
        // 메뉴 포커스 유지
        subMenuLi.removeClass("submenu_focus_link");
        subMenuLi.eq(index).addClass("submenu_focus_link");
      } else {
        depth3.hide();
        subMenuLi.removeClass("submenu_focus_link");
      }
    });
  });
  //상단 메뉴 처리관련
  var hTop = $(".header-top");
  var hTop_H = hTop.height();
  // console.log(hTop_H);
  var hMiddle = $(".header-middle");
  var hMiddle_H = hMiddle.height();
  // console.log(hMiddle_H);
  var hHeight = hTop_H + hMiddle_H;
  // console.log(hHeight);
  $(window).scroll(function () {
    // 스크롤 위치를 파악한다.
    var scY = $(window).scrollTop();
    // console.log(scY);
    if (scY >= hHeight) {
      $(".header").addClass("h-fix");
      $(".content").addClass("h-fix-mt");
      $(".logo-gnb").addClass("h-show");
      $(".gnb").addClass("h-fix-gnb");
      // gotop기능 추가 예정
    } else {
      $(".header").removeClass("h-fix");
      $(".content").removeClass("h-fix-mt");
      $(".logo-gnb").removeClass("h-show");
      $(".gnb").removeClass("h-fix-gnb");
      // gotop기능 추가 예정
    }
  });
  // gnb 관련
  var gnb = $(".mainmenu");
  var dim = $(".header-dim");
  gnb.mouseenter(function () {
    dim.stop().fadeIn(500);
  });
  gnb.mouseleave(function () {
    dim.stop().fadeOut(500);
  });
  // swiper 슬라이드
  // content
  var sw_content = new Swiper(".sw-content", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loopedSlides: 3,
  });
  // sw_notice
  var sw_notice = new Swiper(".sw-notice", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".sw-notice-next",
      prevEl: ".sw-notice-prev",
    },
    pagination: {
      el: ".sw-notice-pg",
      type: "fraction",
    },
  });
  // 일시 멈춤
  $(".sw-notice-pause").click(function () {
    for (var i = 0; i < sw_notice.length; i++) {
      sw_notice[i].autoplay.stop();
    }
  });
  // 자동재생 실행
  $(".sw-notice-play").click(function () {
    for (var i = 0; i < sw_notice.length; i++) {
      sw_notice[i].autoplay.start();
    }
  });
  // 공지사항 목록 관련(사업공고 ,입찰공고,결과발표 )
  var noticeA = $(".notice-menu > li");
  $.each(noticeA, function (index, item) {
    $(this)
      .find("a")
      .click(function (e) {
        // href막기
        e.preventDefault();
        // 포커스를 적용한다
        // 탭내용을 보여준다.
        showNotice(index);
      });
  });
  // 내용 모음 (메뉴 클릭했을때 나오는 내용)
  var noticeLi = $(".notice-cont > li");
  // 내용을 보여주고, 포커스를 이동하는
  // 사용자 지정 함수 :showNotice()
  function showNotice(_index) {
    noticeA.removeClass("notice-menu-focus");
    noticeA.eq(_index).addClass("notice-menu-focus");
    noticeLi.hide();
    if (_index == 1) {
      return;
    }
    noticeLi.eq(_index).show();
  }
  var se_edu = new Swiper(".sw-edu", {
    autoplay: {
      delay: 2000,
      // 사용자가 터치드래그 하고 난 후 자동 실행
      disableOnInteraction: false,
    },
    loop: true,
    // 중첩된(swiper 내부에 다른 swiper가 있는)
    // swiper 인스턴스에 대해 스와이프 동작이 가능
    nested: true,
    navigation: {
      nextEl: ".sw-edu-next",
      prevEl: ".sw-edu-prev",
    },
    pagination: {
      el: ".sw-edu-pg",
      type: "fraction",
    },
  });
  // 알람탭메뉴 기능
  var alramA = $(".alram-tab-menu a");
  var alramCont = $(".alram-tab-cont");
  $.each(alramA, function (index, item) {
    $(this).click(function (e) {
      e.preventDefault();
      alramCont.removeClass("alram-tab-cont-focus");
      alramCont.eq(index).addClass("alram-tab-cont-focus");
      alramA.removeClass("alram-tab-menu-focus");
      alramA.eq(index).addClass("alram-tab-menu-focus");
    });
  });

  // 알람탭메뉴 스와퍼
  var sw_navi = new Swiper(".sw-navi", {
    loop: true,
    slidesPerView: 3,
    navigation: {
      nextEl: ".sw-navi-next",
      prevEl: ".sw-navi-prev",
    },
    centeredSlides: true,
    loopedSlides: 3,
    slideToClickedSlide: true,
  });
  // 알람탭 했을때 content 연결
  sw_content.controller.control = sw_navi;
  sw_navi.controller.control = sw_content;

  // hub 영역
  // 허브 메뉴 저장
  var hubMenu = $(".hub-menu a");
  // 허브 내용들을 저장
  var hubInfos = $(".hub-info > li");
// 모두 기능이 똑 같다
$.each(hubMenu ,function(index,item){
// 마우스 오버를 처리
$(this).mouseenter(function(){
  hubInfos.removeClass("hub-info-focus")
  hubInfos.eq(index).addClass("hub-info-focus")

})
})
  // ======================
});

// window.onload = function () {

// };
