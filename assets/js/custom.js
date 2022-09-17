jQuery(document).ready(function($){

  /* show/hide sub menu*/
  $('header nav ul li.menu-item-has-children > a').click(function(e){
    e.preventDefault();
    $('.sub-menu').slideUp();

    if ($(this).next('.sub-menu').is(':visible')) {
      $('.sub-menu').slideUp();
    } else {
      $(this).next('.sub-menu').slideToggle();
    }
  });

  /* show/hide responsive menu */
  $('.hamburger-menu').click(function(e){
    e.preventDefault();
    $('header nav').slideToggle();
  });

  /* toggle search form */
  $('.search-toggle').click(function(e){
    e.preventDefault();
    $('.header-search-form').toggle('slide');

    if ($(this).children().hasClass('fa-search')) {
      $(this).children().removeClass('fas fa-search').addClass('fa fa-times');
    } else {
      $(this).children().addClass('fas fa-search').removeClass('fa fa-times');
    }
  });

  /* hero slider */
  $('#hero-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  /* products slider */
  $('#product-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 27,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  /* beneficial CBD slider */
  $('#beneficial-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  /* show/hide scroll top button */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  });

  /* scroll top */
  $('#scroll-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
      return false;
  });

});