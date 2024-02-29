$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btn_prev"><img src="images/slider/left.svg" alt="arrow left" /></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btn_next"><img src="images/slider/right.svg" alt="arrow right" /></button>',
  });

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

  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btn_prev"><img src="images/icons/arrow-prev.svg" alt="arrow prev" /></button>',
    nextArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btn_next"><img src="images/icons/arrow-next.svg" alt="arrow next" /></button>',
  });
});
