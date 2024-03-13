// $(function () {
//   $(".banner-section__slider").slick({
//     dots: true,
//     prevArrow:
//       '<button class="banner-section__slider-btn banner-section__slider-btn_prev"><img src="images/slider/left.svg" alt="arrow left" /></button>',
//     nextArrow:
//       '<button class="banner-section__slider-btn banner-section__slider-btn_next"><img src="images/slider/right.svg" alt="arrow right" /></button>',
//   });

$(function () {
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
    $($(this).parent().siblings().find("div")).removeClass(
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
    });
  });

  //jquery-form-styler
  $(".filter-style").styler();

  $(".filter__item-drop").on("click", function () {
    $(this).toggleClass("filter__item-drop_active");
    $(this).next().slideToggle(200);
  });

  //range-slider
  $(".js-range-slider").ionRangeSlider();
});
