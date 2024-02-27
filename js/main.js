$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btn_prev"><img src="images/slider/left.svg" alt="arrow left" /></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btn_next"><img src="images/slider/right.svg" alt="arrow right" /></button>',
  });

  $(".search__tabs-item").on("click", function (e) {
    e.preventDefault();

    $(".search__tabs-item").removeClass("search__tabs-item_active");
    $(".search__content-item").removeClass("search__content-item_active");

    $(this).addClass("search__tabs-item_active");
    $($(this).attr("href")).addClass("search__content-item_active");
  });
});
