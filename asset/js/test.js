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
    console.log("ft", ftHeight);
  });

  // 스크롤 있을때 이벤트
  $(window).scroll(function () {
    var cntScroll = $(window).scrollTop();
    var val =
      $(document).height() - $(window).innerHeight() - ftHeight - tmpPadding;
    if (cntScroll > val) {
      $(".quick").addClass("fixed");
    } else {
      $(".quick").removeClass("fixed");
    }
    console.log(kvHeight, cntScroll);
    if (cntScroll < kvHeight / 2) {
      $(".quick").removeClass("active");
    } else {
      $(".quick").addClass("active");
    }
  });

  $(".ico-top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // 클릭됐을때
  $(".popUp").click(function () {
    $(".modal").fadeIn();
  });
  $(".modal .modal-close").click(function () {
    $(".modal").fadeOut();
  });

  AOS.init();
});
