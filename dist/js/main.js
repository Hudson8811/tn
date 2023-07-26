/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
  setCssRootVars();

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page').length > 0) {
    __webpack_require__(/*! ./years/_y1940 */ "./src/js/import/years/_y1940.js");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#mobileMenu').on('change', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':checked')) {
      //$('html, body').scrollTop(0);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('disabled');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('disabled');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-items a').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#mobileMenu').prop('checked', false).trigger('change');
  });
  var setAnimate = true;
  var lastScrollTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
    var scroll = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();

    if (scroll >= 75) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navbar').addClass('fixed');

      if (setAnimate) {
        setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navbar').addClass('animate');
        }, 50);
        setAnimate = false;
      }
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navbar').removeClass('fixed');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navbar').removeClass('animate');
      setAnimate = true;
    }

    if (scroll >= 300) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.to-top').addClass('active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.to-top').removeClass('active');
    }

    if (scroll > lastScrollTop) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navbar').removeClass('active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navbar').addClass('active');
    }

    lastScrollTop = scroll;
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.to-top').on('click', function () {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
      scrollTop: 0
    }, '300');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
    setCssRootVars();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.swiper-button-next.material-foto--button').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
  });
});

function setCssRootVars() {
  var baseRatio = 2010 / 1080;
  var windowWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerWidth();
  var windowHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerHeight();
  var windowRatio = windowWidth / windowHeight;
  var newVW = 1;
  if (windowRatio > baseRatio) newVW = 1 / (windowRatio / baseRatio);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(':root').css('--vw', newVW + 'vw');
}

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/years/_y1940.js":
/*!***************************************!*\
  !*** ./src/js/import/years/_y1940.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");






swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper.use([swiper__WEBPACK_IMPORTED_MODULE_1__.Parallax, swiper__WEBPACK_IMPORTED_MODULE_1__.Mousewheel, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Controller, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_1__.FreeMode]);
gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_4__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_5__["default"]); //Lazy video

var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy")); // console.log(lazyVideos)

if ("IntersectionObserver" in window) {
  var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (video) {
      if (video.isIntersecting) {
        for (var source in video.target.children) {
          var videoSource = video.target.children[source];

          if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 768) {
              videoSource.src = videoSource.dataset.src;
            } else {
              videoSource.src = videoSource.dataset.srcmobile;
            }
          }
        }

        video.target.load();
        video.target.classList.remove("lazy");
        lazyVideoObserver.unobserve(video.target);
      }
    });
  });
  lazyVideos.forEach(function (lazyVideo) {
    lazyVideoObserver.observe(lazyVideo);
  });
} //Lazy video


var material = new swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper(".js--material", {
  direction: "vertical",
  //slidesPerView: 3,
  slidesPerView: 3.7,
  spaceBetween: 16,
  centeredSlides: true,
  loop: false,
  pagination: true,
  autoHeight: true,
  slideToClickedSlide: true,
  speed: 300
});
var materialFoto = new swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper(".js--material-foto", {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  speed: 800,
  // mousewheel: true,
  pagination: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is >= 480px
    700: {
      direction: "vertical"
    }
  }
});
materialFoto.controller.control = material;
material.controller.control = materialFoto;

if (document.querySelector('.js--color-slider')) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js--color-slider').each(function () {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var wrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.section4');
    var swiperNews = new swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper($this[0], {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        prevEl: wrap.find('.color-slider .swiper-button-prev')[0],
        nextEl: wrap.find('.color-slider .swiper-button-next')[0]
      }
    });
    wrap.find('.color-list__item').on('click', function () {
      var filter = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-filter');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".color-list__item").removeClass("active"); // var selectedColor = {
      //     6005: "#195147",
      //     3005: "#733C3F",
      // }
      // $.each(selectedColor, function(key, value){
      //     if(key == filter) {
      //         var bg = value;
      //         // $("#product_img").attr("src", image_path);
      //         wrap.find('.color-list__selected--color').css("background-color", bg);
      //    }
      // });

      if (filter === 'all') {
        wrap.find('.swiper-slide').css('display', '');
        wrap.find('.color-list__selected__element').css('display', '');
      } else {
        wrap.find('.swiper-slide').css('display', 'none');
        wrap.find('.swiper-slide[data-filter="' + filter + '"').css('display', '').addClass("active");
        wrap.find('.color-list__selected__element').css('display', 'none');
        wrap.find('.color-list__selected__element[data-filter="' + filter + '"').css('display', '').addClass("active");
      } // $.not(this).removeClass('news__categories-item--active');


      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
      swiperNews.updateSize();
      swiperNews.updateSlides();
      swiperNews.updateProgress();
      swiperNews.updateSlidesClasses();
      swiperNews.slideTo(0);
      swiperNews.scrollbar.updateSize(); // refreshMobBtnsState();

      return false;
    });
    wrap.find('.color-list__item').first().trigger("click");
    /*wrap.on('click','.news__top-mobile .swiper-btn--prev', function(){
        wrap.find('.news__slider .swiper-btn--prev').trigger('click');
    });
    wrap.on('click','.news__top-mobile .swiper-btn--next', function(){
        wrap.find('.news__slider .swiper-btn--next').trigger('click');
    });
      swiperNews.on('slideChange', function () {
        if(wrap.find('.news__slider .swiper-btn--prev').hasClass('swiper-button-disabled')){
            wrap.find('.news__top-mobile .swiper-btn--prev').addClass('swiper-button-disabled');
        }
        else{
            wrap.find('.news__top-mobile .swiper-btn--prev').removeClass('swiper-button-disabled');
        }
          if(wrap.find('.news__slider .swiper-btn--next').hasClass('swiper-button-disabled')){
            wrap.find('.news__top-mobile .swiper-btn--next').addClass('swiper-button-disabled');
        }
        else{
            wrap.find('.news__top-mobile .swiper-btn--next').removeClass('swiper-button-disabled');
        }
    });*/
  });
} // accordions section6


var accordions = document.querySelectorAll(".accordion");

var openAccordion = function openAccordion(accordion) {
  var headerHeight = 0;

  if (window.innerWidth > 1100) {
    headerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-header').outerHeight();
  }

  var content = accordion.querySelector(".accordion__content");
  accordion.classList.add("accordion__active");
  var accordionActiveHeaight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".accordion__active .accordion__content").height();

  if (typeof accordionActiveHeaight === "undefined") {
    accordionActiveHeaight = 0;
  }

  content.style.maxHeight = content.scrollHeight + "px";
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop().animate({
    scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(accordion).offset().top - accordionActiveHeaight - headerHeight
  }, 300);
  console.log(accordionActiveHeaight);
};

var closeAccordion = function closeAccordion(accordion) {
  var content = accordion.querySelector(".accordion__content");
  accordion.classList.remove("accordion__active");
  content.style.maxHeight = null;
};

accordions.forEach(function (accordion) {
  var intro = accordion.querySelector(".accordion__intro");
  var content = accordion.querySelector(".accordion__content");

  intro.onclick = function () {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      openAccordion(accordion);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(accordions).not(jquery__WEBPACK_IMPORTED_MODULE_0___default()(accordion)).each(function () {
        closeAccordion(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0]);
      });
    }
  };
}); // accordions

var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
  onComplete: function onComplete() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loader').addClass('hide');
  }
});
var initMode = null;
var addTime = 1050;
var st1, st2, st3;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({});
var tl2 = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({});
var tl3 = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({});
var s3Width, b1Width, b2Width, b3Width, b4Width;
var scHeight, s6Height, b1Height, b2Height, b3Height, b4Height;
var urlParams = new URLSearchParams(window.location.search);
var yValue = urlParams.get('y');

function initAnimation() {
  s3Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3').innerWidth();
  scHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-page').innerHeight();
  s6Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section6').innerHeight();

  if (window.innerWidth > 1100) {
    if (initMode != 'desk') {
      window.scrollTo({
        top: 0,
        behavior: "instant"
      });
      initMode = 'desk';
      reInit();
      initScrollAnimationDesktop();
    }
  } else if (window.innerWidth > 699) {
    if (initMode != 'tablet') {
      if (initMode != null) {
        window.scrollTo({
          top: 0,
          behavior: "instant"
        });
      }

      initMode = 'tablet';
      reInit();
      initScrollAnimationTablet();
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  } else {
    if (initMode != 'mobile') {
      if (initMode != null) {
        window.scrollTo({
          top: 0,
          behavior: "instant"
        });
      }

      initMode = 'mobile';
      reInit();
      initScrollAnimationMobile();
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  }
}

initAnimation();
checkYearValue();
var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    initAnimation();
  }
});

function reInit() {
  if (typeof st1 !== "undefined") st1.kill();
  if (typeof st2 !== "undefined") st2.kill();
  if (typeof st3 !== "undefined") st3.kill();
  tl.clear();
  tl1.clear();
  tl2.clear();
  tl3.clear();
  gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(".loader__center, .loader__back, .section1__house, .section1 .header, .sidebar, .section1__title," + ".section2, .section2__title, .section2__subtitle, .section2__video" + ".section3, .section3__subtitle, .material, .material-foto" + ".section4, .section4__title, .section4__subtitle, .color-slider, .color-list__selected" + ".section5, .section5__title, .section5__subtitle, .section5__video , .color-list__selected" + ".section6, .section6__title, .section6__subtitle," + ".scroll-page, .fullPageOverlay", {
    clearProps: "all"
  });
  /*window.scrollTo({
      top: 0,
      behavior: "instant"
  });*/

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loader').removeClass('hide');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__global, .sidebar__burger, .sidebar__menu').removeClass('active');
}

function initScrollAnimationDesktop() {
  // tl.to(".loader__center", {
  //     y: "-100%",
  //     duration: 1.5,
  //     delay: 1,
  //     ease: "power3.in",
  // });
  // tl.to(".loader__back", {
  //     y: "-100%",
  //     duration:  1.5,
  //     ease: "power3.in",
  // } , ">-1.3");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page-preloader').fadeOut(100);
  tl.from(".section1__house", {
    y: '0%',
    duration: 1.7,
    ease: "power1.inOut"
  }, "0");
  tl.fromTo(".section1__title", {
    y: '100vh',
    autoAlpha: 0
  }, {
    y: '60vh',
    autoAlpha: 1,
    duration: 1.5,
    ease: "power2.out"
  }, "<+0.9");
  tl.fromTo(".section1 .header", {
    y: '-100%',
    autoAlpha: 0
  }, {
    y: '0',
    autoAlpha: 1,
    duration: 1.5,
    ease: "power2.out"
  }, ">-0.6");
  tl.fromTo(".section1 .scroll-down", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 1.5,
    ease: "power2.out"
  }, "<");
  tl.fromTo(".section1__house", {
    filter: 'grayscale(100%)'
  }, {
    filter: 'grayscale(0%)',
    duration: 2,
    ease: "slow(0.7, 0.7, false)"
  }, ">");
  tl1.addLabel('product', "1.1");
  tl1.fromTo(".section2", {
    y: '100%'
  }, {
    y: '0%',
    duration: 1,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-header').addClass('active');
    }
  }, ">=-0.1");
  tl1.fromTo(".section2__title", {
    y: '100vh'
  }, {
    y: '-102%',
    duration: 1.8,
    ease: "none"
  }, ">-=0.6"); //1.2

  tl1.fromTo(".section2__title span:nth-child(1)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.05,
    ease: "none"
  }, "<+=0.45");
  tl1.fromTo(".section2__title span:nth-child(1)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 0.05,
    ease: "none"
  }, ">+=0.15");
  tl1.fromTo(".section2__title span:nth-child(2)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.05,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-header').removeClass('active');
    }
  }, ">-=0.10");
  tl1.fromTo(".section2__title span:nth-child(2)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 0.05,
    ease: "none"
  }, ">+=0.15");
  tl1.fromTo(".section2__title span:nth-child(3)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.05,
    ease: "none"
  }, ">-=0.10");
  tl1.fromTo(".section2__title span:nth-child(3)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 0.05,
    ease: "none"
  }, ">+=0.15");
  tl1.fromTo(".section2__title span:nth-child(4)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.05,
    ease: "none"
  }, ">-=0.15");
  tl1.fromTo(".section2__title span:nth-child(4)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 0.05,
    ease: "none"
  }, ">+=0.15");
  tl1.fromTo(".section2__title span:nth-child(5)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.05,
    ease: "none"
  }, ">-=0.10");
  tl1.fromTo(".section2__title span:nth-child(5)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 0.05,
    ease: "none"
  }, ">+=0.15");
  tl1.fromTo(".section3", {
    y: '100%'
  }, {
    y: '0%',
    duration: 1,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.swiper-button-next.material-foto--button').addClass('tip');
    }
  }, ">+=0.3");
  tl1.addLabel('material', "+=0.1");
  tl1.fromTo(".section4", {
    y: '100%'
  }, {
    y: '0%',
    duration: 1,
    ease: "none"
  }, ">+=0.4");
  tl1.addLabel('color', "+=0.1");
  tl1.fromTo(".section5", {
    y: '100%'
  }, {
    y: '0%',
    duration: 1,
    ease: "none"
  }, ">+=0.4");
  tl1.fromTo(".section5__title", {
    y: '100vh'
  }, {
    y: '-38%',
    duration: 1.03,
    ease: "none"
  }, ">-=0.7");
  tl1.fromTo(".section5__title span:nth-child(1)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0,
    ease: "none"
  }, "<");
  tl1.fromTo(".section5__title span:nth-child(1)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 0.04,
    ease: "none"
  }, ">+=0.77");
  tl1.fromTo(".section5__title span:nth-child(2)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.04,
    ease: "none"
  }, ">-=0.09");
  tl1.fromTo(".section5__title span:nth-child(2)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 0.04,
    ease: "none"
  }, ">+=0.20");
  tl1.fromTo(".section5__title span:nth-child(3)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.04,
    ease: "none"
  }, ">-=0.1");
  /*tl1.fromTo(".section5__title span:nth-child(3)", {
      opacity: 1,
  }, {
      opacity: 0.25,
      duration:  0.04,
      ease: "none",
  } , ">+=0.15");*/

  tl1.addLabel('surfaces', "+=0.55"); // tl1.fromTo(".section6", {
  //     y: '100%',
  // }, {
  //     y: '0%',
  //     duration: 1,
  //     ease: "none",
  // } , ">+=0.5");
  // tl1.fromTo(".section6", {
  //     y: "0",
  //     top: "100%"
  // }, {
  //     top: "0",
  //     y: -s6Height,
  //     duration: Math.abs((scHeight - s6Height) / 460) + 1,
  //     ease: "none",
  // }, ">+=0.2");
  // tl1.addLabel('1941','+=0');
  // tl1.fromTo(".section3__block--1", {
  //     x: "0",
  // }, {
  //     x: -1*(b1Width-s3Width),
  //     duration:  1.5,
  //     ease: "none",
  // } , ">");

  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["default"].clearScrollMemory('manual');
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["default"].create({
    trigger: ".scroll-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 0,
    //2.5
    animation: tl1
  });
  var section7 = document.getElementById('section7');

  if (section7 !== null) {
    document.addEventListener('scroll', function () {
      var posTop = section7.getBoundingClientRect().top;

      if (posTop <= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerHeight() / 3) {
        var balon = document.querySelector(".section7__picture");
        balon.classList.add("active");
      }

      var headerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-header').outerHeight();

      if (posTop <= headerHeight) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-header').css('margin-top', posTop - headerHeight);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fixed-header').css('margin-top', 0);
      }
    });
  }
}

function initScrollAnimationTablet() {
  var section2 = document.getElementById('product');

  if (section2 !== null) {
    document.addEventListener('scroll', function () {
      var posTop = section2.getBoundingClientRect().top; // Блок достиг верхней границы экрана (или выше)
      //   elem.classList.toggle('visible', posTop <= 0);
      // Блок только появляется снизу (или выше)

      if (posTop < window.innerHeight) {
        var balon = document.querySelector(".section2__title--mob");
        balon.classList.add("active");
      } //   elem.classList.toggle('visible', posTop < window.innerHeight);
      // Блок целиком находится в видимой зоне
      //   elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);

    });
  }

  var section5 = document.getElementById('section5');

  if (section5 !== null) {
    document.addEventListener('scroll', function () {
      var posTop = section5.getBoundingClientRect().top; // Блок достиг верхней границы экрана (или выше)
      //   elem.classList.toggle('visible', posTop <= 0);
      // Блок только появляется снизу (или выше)

      if (posTop < window.innerHeight) {
        var balon = document.querySelector(".section5__title--mob");
        balon.classList.add("active");
      } //   elem.classList.toggle('visible', posTop < window.innerHeight);
      // Блок целиком находится в видимой зоне
      //   elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);

    });
  }

  var section7 = document.getElementById('section7');

  if (section7 !== null) {
    document.addEventListener('scroll', function () {
      var posTop = section7.getBoundingClientRect().top; // Блок достиг верхней границы экрана (или выше)
      //   elem.classList.toggle('visible', posTop <= 0);

      if (posTop <= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerHeight()) {
        var balon = document.querySelector(".section7__picture");
        balon.classList.add("active");
      } // Блок только появляется снизу (или выше)
      //   if(posTop < window.innerHeight) {
      //       let balon = document.querySelector(".section7__picture")
      //       balon.classList.add("active")
      //   }
      //   elem.classList.toggle('visible', posTop < window.innerHeight);
      // Блок целиком находится в видимой зоне
      //   elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);

    });
  }
}

function initScrollAnimationMobile() {
  var section2 = document.getElementById('product');

  if (section2 !== null) {
    document.addEventListener('scroll', function () {
      var posTop = section2.getBoundingClientRect().top; // Блок достиг верхней границы экрана (или выше)
      //   elem.classList.toggle('visible', posTop <= 0);
      // Блок только появляется снизу (или выше)

      if (posTop < window.innerHeight) {
        var balon = document.querySelector(".section2__title--mob");
        balon.classList.add("active");
      } //   elem.classList.toggle('visible', posTop < window.innerHeight);
      // Блок целиком находится в видимой зоне
      //   elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);

    });
  }

  var section5 = document.getElementById('section5');

  if (section5 !== null) {
    document.addEventListener('scroll', function () {
      var posTop = section5.getBoundingClientRect().top; // Блок достиг верхней границы экрана (или выше)
      //   elem.classList.toggle('visible', posTop <= 0);
      // Блок только появляется снизу (или выше)

      if (posTop < window.innerHeight) {
        var balon = document.querySelector(".section5__title--mob");
        balon.classList.add("active");
      } //   elem.classList.toggle('visible', posTop < window.innerHeight);
      // Блок целиком находится в видимой зоне
      //   elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);

    });
  }

  var section7 = document.getElementById('section7');

  if (section7 !== null) {
    document.addEventListener('scroll', function () {
      var posTop = section7.getBoundingClientRect().top; // Блок достиг верхней границы экрана (или выше)
      //   elem.classList.toggle('visible', posTop <= 0);

      if (posTop <= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerHeight()) {
        var balon = document.querySelector(".section7__picture");
        balon.classList.add("active");
      } // Блок только появляется снизу (или выше)


      if (posTop < window.innerHeight) {
        var _balon = document.querySelector(".section7__picture");

        _balon.classList.add("active");
      } //   elem.classList.toggle('visible', posTop < window.innerHeight);
      // Блок целиком находится в видимой зоне
      //   elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);

    });
  }
}

function checkYearValue() {
  if (yValue !== null) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').addClass('active');
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(".fullPageOverlay", {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      onComplete: function onComplete() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').removeClass('active');
      }
    });

    if (initMode === 'desk' || initMode === 'tablet') {
      tl.progress(1);
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(window, {
        scrollTo: tl1.scrollTrigger.labelToScroll(yValue),
        duration: 0
      });
    } else if (initMode === 'mobile') {
      tl.progress(1);
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(window, {
        scrollTo: '#year' + yValue,
        duration: 0.01
      });
    }
  }
}

function scrollToYear(year) {
  if (year !== null) {
    if (initMode === 'desk' || initMode === 'tablet') {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(window, {
        scrollTo: tl1.scrollTrigger.labelToScroll(year)
      });
    } else if (initMode === 'mobile') {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(window, {
        scrollTo: '#year' + year
      });
    }
  }
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header__menu .header__menu-item a').on('click', function () {
  event.preventDefault();
  var link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');

  if (link !== null) {
    var _yValue = getParameterFromString(link, "y");

    if (_yValue !== null) {
      scrollToYear(_yValue);
    }
  }
});

function getParameterFromString(urlString, parameterName) {
  var urlParams = new URLSearchParams(urlString.split('?')[1]);
  return urlParams.get(parameterName);
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
// import "./import/libs/jquery.marquee.min";
// import "./import/libs/select2.min";



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug"] = self["webpackChunkgulp_pug"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map