$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav-top').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.partners-carousel').owlCarousel({
    loop: true,
    dots: true,
    margin: 0,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      }
    }
  });
  $('.mob-btn').click(function() {
        $('.menu').slideToggle();
  });
  if ($(window).width() < 1200) {
      $('.menu li').click(function() {
          $('.menu').hide();
      });

  }
  
  $('.accordion-title').click(function(){
//    $('.accordion-title').removeClass('active');
    $(this).toggleClass('active');
//    $('.accordion-content').hide();
    $("#"+ $(this).data('accordion')).slideToggle();
  });
  
  $('.modal-btn').click(function (e) {
    e.preventDefault;
    $('#' + $(this).data('modal')).show('1000');
    $('#' + $(this).data('modal')).animate({
      opacity: 1,
    });
    $('body').addClass('overl-h');
    $('.overlay').show('1000');
  });
  $('.overlay, .popup__close').click(function () {
    $('body').removeClass('overl-h');
    $('.modal').hide('1000');
    $('.overlay').hide('1000');
    $('.modal').animate({
      opacity: 0,
    });
  });
  
  
  $('.scroll img').click(function () {
    var destination = $(".services").offset().top - 100;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });
  $('.free-order').click(function () {
    var destination = $(".order").offset().top - 100;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });
});