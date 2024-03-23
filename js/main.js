$(document).ready(function () {
  // slick-index
  const mainSlider = $(".banner-section__slider");

  mainSlider.on("init", function (slick) {
    mainSlider.css({
      opacity: 1,
      visibility: "visible",
    });
  });

  mainSlider.slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btn_prev"><img src="images/slider/left.svg" alt="arrow left" /></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btn_next"><img src="images/slider/right.svg" alt="arrow right" /></button>',
  });

  //tabs
  $(".tab").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tab_active");
    $($(this).closest(".tabs-wrapper").siblings().find("div")).removeClass(
      "tabs-content_active"
    );

    $(this).addClass("tab_active");
    $($(this).attr("href")).addClass("tabs-content_active");
  });

  $(".product-item__favorite").on("click", function () {
    $(this).toggleClass("product-item__favorite_active");
  });

  //slick-product
  $(function () {
    const productSlider = $(".product-slider");

    productSlider.on("init", function (slick) {
      productSlider.css({
        opacity: 1,
        visibility: "visible",
      });
    });

    productSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:
        '<button class="product-slider__slider-btn product-slider__slider-btn_prev"><img src="images/icons/arrow-prev.svg" alt="arrow prev" /></button>',
      nextArrow:
        '<button class="product-slider__slider-btn product-slider__slider-btn_next"><img src="images/icons/arrow-next.svg" alt="arrow next" /></button>',
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
      ],
    });
    // При смене таба  slick("setPosition")
    $(".tabs").on("click", ".tab", function () {
      productSlider.slick("setPosition");
    });
  });

  //jquery-form-styler
  $(".filter-style").styler();

  $(".filter__item-drop, .filter__extra").on("click", function () {
    $(this).toggleClass("filter__item-drop_active");
    $(this).next().slideToggle(200);
  });

  //range-slider
  $(".js-range-slider").ionRangeSlider();

  //btn
  $(".catalog__filter-btn_grid").on("click", function () {
    $(this).addClass("catalog__filter-button_active");
    $(".catalog__filter-btn_line").removeClass("catalog__filter-button_active");
    $(".product-item__wrapper").removeClass("product-item__wrapper_list");
  });

  $(".catalog__filter-btn_line").on("click", function () {
    $(this).addClass("catalog__filter-button_active");
    $(".catalog__filter-btn_grid").removeClass("catalog__filter-button_active");
    $(".product-item__wrapper").addClass("product-item__wrapper_list");
  });

  //rate
  $(".rate-yo").rateYo({
    ratedFill: "#1C62CD",
    normalFill: "#c4c4c4",
    spacing: "7px",
  });

  //mobile-menu
  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list_active");
  });

  //aside-btn filter
  $(".aside__btn").on("click", function () {
    $(this).next().slideToggle();
  });

  //mobile-footer
  $(".footer__topdrop").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("footer__topdrop_active");
  });
});
