$(function(){
  $('.slider').slick({
      arrows: false,
      fade: true,
      autoplay: true,
      dots: true,
      autoplaySpeed: 7000
  });
  
    $('.header-btn').on('click', function(){
      $('.menu').addClass('active'); 
    });
    $('.close-btn').on('click', function(){
      $('.menu').removeClass('active');    
    });
});