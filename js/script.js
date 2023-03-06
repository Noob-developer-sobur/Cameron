$(function (){
    $('.card-slider-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
      });
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        }
      ]
      
      $(window).scroll(function(){
        var top = $(this).scrollTop()
        if(top > 300){
          $(".navbar").addClass("sticky-menu")
        }
        else{
          $(".navbar").removeClass("sticky-menu")
        }
        if(top > 400){
          $(".back-to-top").fadeIn(300)
        }
        else{
          $(".back-to-top").fadeOut(300)
        }
      })
      //================== back to top js code start=============//
      $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop: 0}, 1200)
      })
      //================== back to top js code end=============// 
   //scroll-spy & Smooth-scrolling=============//
 var scrollLink = $('.scroll-link');
 $(scrollLink).on('click', function (event) {
   event.preventDefault();
   $('html,body').animate({
     scrollTop: $(this.hash).offset().top - 40
   }, 1000);
 });
 $(window).on('scroll', function () {
   var scrollTop = $(this).scrollTop();
   scrollLink.each(function () {
     var sectionhead = $(this.hash).offset().top - 40;
     if (scrollTop >= sectionhead) {
       $(this).parent().addClass('active');
       $(this).parent().siblings().removeClass('active');
     }
   });
 });
//================== scroll spay js code end=============//
})