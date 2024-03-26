window.addEventListener("load", function () {
  // sns카테고리 관련 기능
  var snsCate = $(".sns-cate li a");
  var snsCont = $(".sns-cont");
  snsCont.eq(0).show();
  $.each(snsCate, function (index, item) {
    $(this).click(function (e) {
      e.preventDefault();
      //   5번째 버튼은 임시로 처리한다.
      if (index == 4) {
        return;
      }
      snsCate.removeAttr("class");
      snsCate.eq(3).addClass("i-naver");
      snsCont.hide();
      if (index == 0) {
        $(this).addClass("icon-focus-fb ");
        snsCont.eq(0).show();
      } else if (index == 1) {
        $(this).addClass("icon-focus-is ");
        snsCont.eq(1).show();
      } else if (index == 2) {
        $(this).addClass("icon-focus-yt ");
        snsCont.eq(2).show();
      } else if (index == 3) {
        $(this).addClass("icon-focus-nv ");
        snsCont.eq(3).show();
      }
    });
  });

  //   news관련 코드
  var newsCate = $(".news-cate li a");
  // 현재 포커스 유지할 번호를 저장해 둔다
  var newsFocusNum = 0;
  var newsCont = $(".news-cont");
  newsCont.eq(newsFocusNum).show();
  $.each(newsCate, function (index, item) {
    $(this).click(function (e) {
      e.preventDefault();
      // 일단!!!! 모두 제거한다.
      newsCate.removeClass("news-focus");
      newsCate.eq(index).addClass("news-focus");
      newsFocusNum = index;
      newsCont.hide();
      newsCont.eq(newsFocusNum).show();
    });
    //    호버했을때 포커스
    $(this).mouseenter(function () {
      $(this).addClass("news-focus");
    });
    $(this).mouseleave(function () {
      $(this).removeClass("news-focus");
    });
  });
});
