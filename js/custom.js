$(function () {
  /* Header Scroll Change */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header, .btn-top").addClass("active");
    } else {
      $("header, .btn-top").removeClass("active");
    }
  });

  /* Header Trigger */
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
  });
  $(".gnb a, section").click(function () {
    $(".trigger, .gnb").removeClass("active");
  });

  //Slick Slider - Welcome
  $(".slideshow").slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false,
  });
  //TypeIt - Welcome Typing
  $("#typing").typeIt({
    strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });

  //Wow Scroll Reveal Animation
  wow = new WOW({
    boxClass: "wow",
    offset: 150,
    mobile: true,
  });
  wow.init();

  //Slick Slider - Review & Guide
  $(".review-slider, .mockup-slider").slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
  //첫화면에서 누르기전에 보여지는 첫번째 컨텐츠
  $(".faq-desc").eq(0).show();
  $(".faq-title").click(function () {
    $(".faq-desc").stop().slideUp();
    $(this).next().stop().slideDown();
    //$(this).parent().siblings().children(".faq-desc").stop().slideUp();
    $(".faq-item").removeClass("active");
    $(this).parent().addClass("active");
    //$(this).parent().siblings().removeClass('active');
  });

  /* Video Modal */
  $(".open-modal").click(function () {
    $(".video-modal").stop().fadeIn();
    $("body").addClass("active");
  });
  $(".close-modal").click(function () {
    $(".video-modal").stop().fadeOut();
    $("body").removeClass("active");
  });

  /* Go to Top */
  $(".btn-top").click(function () {
    $("html,body").animate({ scrollTop: 0 });
  });
});
