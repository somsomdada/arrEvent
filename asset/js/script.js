$(document).ready(function () {
  // kv
  $(".kv-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    dots: true,
  });

  //  Quick menu

  // var quickCssTop = parseInt($('.quick').css('top')); // css의 top 속성을 가져온다는 뜻
  // var quickOffTop = parseInt($('.quick').offset().top);

  // 첫실행할때
  var ftHeight = $(".ft").outerHeight();
  var kvHeight = $(".kv").outerHeight();
  var tmpPadding = parseInt(
    $(".content").css("padding-bottom").replace("px", "")
  );

  // 사이즈 변동 있을때 이벤트
  $(window).resize(function () {
    ftHeight = $(".ft").outerHeight();
    tmpPadding = parseInt(
      $(".content").css("padding-bottom").replace("px", "")
    );
    // console.log("ft", ftHeight);
  });

  // 원래는 바깥에서 선언해도 문서,윈도우 높이값은 정해져있기에 상관없지만 높이값이
  // 변해버리는 거 때문에 스크롤했을 때의 높이값을 넣어주기 위해서 스크롤 안 쪽에 함수선언을 해줌
  // var totalHeight = $(document).height() - $(window).height() - ftHeight;
  // var val = $(document).height() - $(window).height() - ftHeight;
  // console.log($(document).height() + '-' + $(window).height() + '-' + ftHeight + "=" + val);

  // 스크롤 이벤트
  $(window).scroll(function () {
    var cntScroll = $(window).scrollTop();
    var val = $(document).height() - $(window).height() - ftHeight - tmpPadding;

    // 푸터전까지 따라오게
    if (cntScroll >= val) {
      $(".quick").addClass("stop");
    } else {
      $(".quick").removeClass("stop");
    }

    if (cntScroll < kvHeight / 2) {
      $(".quick").removeClass("active");
    } else {
      $(".quick").addClass("active");
      // 퀵메뉴 따라오는 애니메이션
      // $('.quick').stop().animate({'top': cntScroll + quickCssTop + 'px'},2000);
    }
  });

  $(".ico-top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  //  modal
  $(".popUp").click(function () {
    $(".modal").fadeIn();
  });
  $(".modal .modal-close").click(function () {
    $(".modal").fadeOut();
  });

  AOS.init();
});
