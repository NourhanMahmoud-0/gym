$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      nav:false,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      autoplay:true,
      autoplayTimeout:10000,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    });
  });