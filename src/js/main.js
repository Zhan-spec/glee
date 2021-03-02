$(function() {

  // липкий хедер
  // var HeaderTop = $('.header__inner').offset().top;
        
  // $(window).scroll(function(){
  //         if( $(window).scrollTop() > HeaderTop ) {                  
  //                 $('.header__inner').addClass('header__inner--fixed');
  //                 $('.header__inner').removeClass('header__inner--static');
  //         } else {
  //                 $('.header__inner').addClass('header__inner--static');
  //                 $('.header__inner').removeClass('header__inner--fixed');
  //         }
  // });

  $('.pagination__item').on('click', function() {
    $('.pagination__item').removeClass('pagination__item--active');
    $(this).addClass('pagination__item--active');
  });

  $('.button-grid').on('click', function () {
    $('.products__item').removeClass('products__item--list');
    $('.product-card').removeClass('product-card--list');    
  });

  $('.button-list').on('click', function () {
    $('.products__item').addClass('products__item--list');
    $('.product-card').addClass('product-card--list');    
  });

  $('.product-content__filter-btn').on('click',function () {
    $('.product-content__filter-btn').removeClass('product-content__filter-btn--active');
    $(this).addClass('product-content__filter-btn--active');
  });

  $('.product-content__select').styler();


  $('.product-content__filter-btn').on('click', function(e) {
    e.preventDefault();

    $('.product-content__filter-btn').removeClass('product-content__filter-btn--active');
    $(this).addClass('product-content__filter-btn--active');

  });



  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",        
    prefix: "$",
    step: 0.01,
    prettify_enabled: true,
    prettify_separator: ".",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

  $('.footer__title--nav').on('click', function() {
    $(this).siblings().slideToggle();
  });

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.menu__link').on('click', function(e) {
    e.preventDefault();

    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');

  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true
  });
  
  $('.partners-slider').slick({
    arrows: false,      
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  

  // для mixitup писать в кончце файла
  var containerEl1 = document.querySelector('[data-ref="products__mixitup"]');
  var containerEl2 = document.querySelector('[data-ref="design__mixitup"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
  
});