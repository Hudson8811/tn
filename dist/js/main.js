/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
 // import Swiper from 'swiper/bundle';
// import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
// import gsap from "gsap";
// if ($('.scroll-page').length) {
//     addEventListener('beforeunload', (event) => { });
//     onbeforeunload = (event) => {
//         window.scrollTo(0, 0);
//     };
// }

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
  setCssRootVars();

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page').length > 0) {
    __webpack_require__(/*! ./years/_y1940 */ "./src/js/import/years/_y1940.js");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  }
});

function setCssRootVars() {
  var baseRatio = 2010 / 1080;
  var windowWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerWidth();
  var windowHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerHeight();
  var windowRatio = windowWidth / windowHeight;
  var newVW = 1;
  if (windowRatio > baseRatio) newVW = 1 / (windowRatio / baseRatio);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(':root').css('--vw', newVW + 'vw');
} // $(document).ready(function () {
//     if ($('.e-filter').length > 0) {
//         const eFilterSwiper = new Swiper('.e-filter .swiper', {
//             loop: false,
//             freeMode: true,
//             spaceBetween: 0,
//             slidesPerView: 'auto',
//             navigation: {
//                 nextEl: '.e-filter__button--next',
//                 prevEl: '.e-filter__button--prev',
//             },
//         });
//         eFilterSwiper.on('progress', function (swiper, progress) {
//             if (progress === 0) {
//                 $('.e-filter .swiper').addClass('start');
//             } else {
//                 $('.e-filter .swiper').removeClass('start');
//             } if (progress === 1) {
//                 $('.e-filter .swiper').addClass('end');
//             } else {
//                 $('.e-filter .swiper').removeClass('end');
//             }
//         });
//     }
//     $('.sidebar__menu-item > a').on('click', function () {
//         event.preventDefault();
//         let link = $(this).attr('href');
//         let bgColor = $(this).closest('.sidebar__menu-item').data('overlay');
//         nextPageAnimation(link, bgColor);
//     });
//     $('.sidebar__menu-dropdown a').on('click', function () {
//         event.preventDefault();
//         let link = $(this).attr('href');
//         if (!$(this).closest('.sidebar__menu-item').hasClass('active')) {
//             let bgColor = $(this).closest('.sidebar__menu-item').data('overlay');
//             nextPageAnimation(link, bgColor);
//         } else {
//             $('.sidebar__menu').removeClass('active');
//         }
//     });
//     if (typeof nextPage !== "undefined") {
//         if (nextPage != '') {
//             $(window).scroll(function () {
//                 if (Math.ceil($(window).scrollTop() + $(window).height()) >= Math.floor($(document).height())) {
//                     nextPageAnimation(nextPage, nextPageBg);
//                 }
//             });
//         }
//     }
// });
// $(document).ready(function () {
//     if (typeof $('.list-block__sort select').select2 == 'function') {
//         $('.list-block__sort select').select2();
//     }
//     /* Partners marquee */
//     if ($('.js-marquee').length > 0) {
//         if (window.matchMedia('(min-width: 700px)').matches) {
//             $('.js-marquee').marquee({
//                 duration: 15000,
//                 delayBeforeStart: 0,
//                 duplicated: true,
//                 gap: 0,
//                 startVisible: true,
//                 direction: 'left'
//             });
//         }
//     }
//     /* Photo uploader */
//     /*if (document.querySelector('#file-loader')) {
//         document.querySelector('#file-loader').addEventListener('change', function () {
//             var splittedFakePath = this.value.split('\\');
//             var elem = $('.form__files-item').first().clone(true);
//             elem.find('span').text(splittedFakePath[splittedFakePath.length - 1]);
//             elem.appendTo('.form__files').css('display', 'flex');
//         });
//     }*/
//     /* Show congratulation form */
//     $('.js-congrat').on('click', function (e) {
//         e.preventDefault();
//         $('.form').addClass('open');
//         $('.overlay').addClass('active');
//         $('body').addClass('body-scroll-lock');
//     });
//     $('.form__close-btn,.js-close-modal-form').on('click', function (e) {
//         e.preventDefault();
//         $(this).closest('.form').removeClass('open');
//         $('.overlay').removeClass('active');
//         $('body').removeClass('body-scroll-lock');
//         $('.form__success').removeClass('active');
//         $('.form').removeClass('success');
//     });
//     $('.overlay').on('click', function () {
//         $(this).removeClass('active');
//         $('.form').removeClass('open');
//         $('body').removeClass('body-scroll-lock');
//         $('.form__success').removeClass('active');
//         $('.form').removeClass('success');
//     });
//     /*отмена отправки формы и показ окна успешной отправки*/
//     $('.form').on('submit', function () {
//         if (!$(this).hasClass('node-congratulation-form')) {
//             event.preventDefault();
//         }
//         $('.form').scrollTop(0).addClass('success');
//         $('.form__success').addClass('active');
//     });
//     /* Anchor */
//     document.querySelectorAll('.anchor').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });
// $(document).ready(function () {
//     // if ($('.js-subslider-single').length > 0 && $('.js-slider-single').length > 0) {
//     //     const subSlider = new Swiper('.js-subslider-single', {
//     //         slidesPerView: 5.8,
//     //         spaceBetween: 18,
//     //         breakpoints: {
//     //             1024: {
//     //                 slidesPerView: 6.4,
//     //             },
//     //             1280: {
//     //                 slidesPerView: 5.8
//     //             }
//     //         }
//     //     });
//     // }
//     const mainSlider = new Swiper('.js-slider-single', {
//         slidesPerView: 1.2,
//         spaceBetween: 6,
//         centeredSlides: true,
//         navigation: {
//             nextEl: '.swiper-next',
//             prevEl: '.swiper-prev',
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'bullets',
//           },
//         breakpoints: {
//             768: {
//                 slidesPerView: 1,
//                 spaceBetween: 0,
//                 centeredSlides: false
//             },
//         }
//     });
//     Fancybox.bind("[data-fancybox]", {});
//     let jsShareElements = document.querySelectorAll('.js-share')
//     if (jsShareElements.length > 0 && typeof Ya !== 'undefined') {
//         for (var i = 0; i < jsShareElements.length; i++) {
//             var yaBlock = document.createElement('div');
//             yaBlock.classList.add('yaBlock');
//             jsShareElements[i].appendChild(yaBlock);
//         }
//         let shareButton = document.querySelector('.yaBlock');
//         Ya.share2(shareButton, {
//             theme: {
//                 services: 'vkontakte,odnoklassniki,telegram,whatsapp',
//                 lang: 'ru',
//                 limit: 0,
//                 size: 's',
//                 bare: false
//             }
//         });
//     }
//     setCssRootVars();
//     $(window).on('resize', function () {
//         setCssRootVars();
//     });
//     $('select').on('change', function () {
//         console.log('Выбранное значение: ' + $(this).val());
//     })
// });
// function disableScroll() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     window.onscroll = function () {
//         window.scrollTo(scrollLeft, scrollTop);
//     };
// }
// function nextPageAnimation(link, bgColor = '') {
//     disableScroll();
//     if (bgColor != '') {
//         $('.fullPageOverlay').css('background', bgColor);
//     }
//     $('.sidebar__menu-dropdown').hide();
//     $('.sidebar__menu').removeClass('active');
//     $('.fullPageOverlay').css('pointer-events', 'auto');
//     gsap.to(".fullPageOverlay", {
//         duration: 1,
//         autoAlpha: 1,
//         ease: "none",
//         onComplete: function () {
//             setTimeout(function () {
//                 window.location.href = link;
//             }, 200)
//         }
//     });
// }

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
 // import Isotope from 'isotope-layout';
// $(document).ready(function (){
//     $('.sidebar__burger').on('click',function (){
//         event.preventDefault();
//         $(this).toggleClass('active');
//         $('.sidebar__global').toggleClass('active');
//         $('body').toggleClass('active');
//     });
//     $('.sidebar__menu-item').on('click',function (){
//         if (!$(this).hasClass('selected')){
//             $(this).addClass('selected').siblings().removeClass('selected');
//             getDropdownPositon()
//         }
//     });
//     $('.sidebar__mobile-year').on('click',function (){
//         event.preventDefault();
//         $('.sidebar__menu').toggleClass('active');
//         getDropdownPositon();
//     })
// });
// function getDropdownPositon(){
//     if ($(window).width() <= 699) {
//         let parent = $('.sidebar__menu-item.selected');
//         let element = parent.find('.sidebar__menu-dropdown');
//         let menuPadding = parseInt($('.sidebar__menu').css('padding-top'));
//         let fromTop = parent.offset().top;
//         let fromTopMenu = $('.sidebar__menu').offset().top;
//         element.css('top', -1 * (fromTop - fromTopMenu - menuPadding - 1))
//     }
// }
// if (typeof Drupal === 'undefined') {
//     var grid = document.querySelector('.grid');
//     var iso = new Isotope( grid, {
//         itemSelector: '.card-person',
//         percentPosition: true,
//         masonry: {
//             columnWidth: ".card-person",
//             gutter: 20,
//         }
//     });
// }
// else {
//     (function ($, Drupal) {
//         Drupal.behaviors.tiqumModule = {
//             attach: function attach() {
//                 var grid = document.querySelector('.grid');
//                 if (grid) {
//                     var iso = new Isotope( grid, {
//                         itemSelector: '.card-person',
//                         percentPosition: true,
//                         masonry: {
//                             columnWidth: ".card-person",
//                             gutter: 20,
//                         }
//                     });
//                 }
//             }
//         };
//     })(jQuery, Drupal);
// }

/***/ }),

/***/ "./src/js/import/years/_y1940.js":
/*!***************************************!*\
  !*** ./src/js/import/years/_y1940.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_5__["default"]);
var material = new swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper(".js--material", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 16,
  centeredSlides: true,
  loop: false,
  pagination: true,
  autoHeight: true,
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
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".color-list__item").removeClass("active");
      var selectedColor = {
        6005: "#195147",
        3005: "#733C3F"
      };
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(selectedColor, function (key, value) {
        if (key == filter) {
          var bg = value; // $("#product_img").attr("src", image_path);

          wrap.find('.color-list__selected--color').css("background-color", bg);
        }
      });

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
  var content = accordion.querySelector(".accordion__content");
  accordion.classList.add("accordion__active");
  content.style.maxHeight = content.scrollHeight + "px";
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
      accordions.forEach(function (accordion) {
        return closeAccordion(accordion);
      });
      openAccordion(accordion);
    }
  };
}); // $('.accordion').click(function(){
//     console.log ()
//     $('html, body').stop().animate({ scrollTop:$('.accordions').offset().top}, 1000);
//   });
// accordions

var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
  onComplete: function onComplete() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loader').addClass('hide');
  }
});
var initMode;
var addTime = 1500;
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
  b1Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--1').innerWidth();
  b2Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--2').innerWidth();
  b3Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--3').innerWidth();
  b4Width = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--4').innerWidth();
  scHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-page').innerHeight();
  s6Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section6').innerHeight();
  b1Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--1').innerHeight();
  b2Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--2').innerHeight();
  b3Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--3').innerHeight();
  b4Height = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.section3__block--4').innerHeight();

  if (window.innerWidth > 1100) {
    initScrollAnimationDesktop();
    initMode = 'desk';
  } else if (window.innerWidth > 699) {
    initScrollAnimationTablet();
    initMode = 'tablet';
  } else {
    initScrollAnimationMobile();
    initMode = 'mobile';
  }
}

initAnimation();
checkYearValue();
var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    if (typeof st1 !== "undefined") st1.kill();
    if (typeof st2 !== "undefined") st2.kill();
    if (typeof st3 !== "undefined") st3.kill();
    tl.clear();
    tl1.clear();
    tl2.clear();
    tl3.clear();
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(".loader__center, .loader__back, .section1__house, .section1 .header, .sidebar, .section1__title," + ".scroll-page,.sidebar__menu-dropdown, .fullPageOverlay", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.loader').removeClass('hide');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__global, .sidebar__burger, .sidebar__menu').removeClass('active');
    initAnimation();
  }
});

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
  tl.fromTo(".section1__house", {
    filter: 'grayscale(100%)'
  }, {
    filter: 'grayscale(0%)',
    duration: 2,
    ease: "slow(0.7, 0.7, false)"
  }, ">");
  tl1.addLabel('1941', "+=1.1");
  tl1.fromTo(".section2", {
    y: '100%'
  }, {
    y: '0%',
    duration: 1,
    ease: "none"
  }, ">=-0.1");
  tl1.fromTo(".section2__title", {
    y: '100vh'
  }, {
    y: '-102%',
    duration: 3.6,
    ease: "none"
  }, ">+=0.2");
  tl1.fromTo(".section2__title span:nth-child(1)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 1,
    ease: "none"
  }, "<+=0.6");
  tl1.fromTo(".section2__title span:nth-child(3)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.15,
    ease: "none"
  }, ">-=0.6");
  tl1.fromTo(".section2__title span:nth-child(3)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 0.25,
    ease: "none"
  }, ">+=0.5");
  tl1.fromTo(".section2__title span:nth-child(4)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.15,
    ease: "none"
  }, ">");
  tl1.fromTo(".section2__title span:nth-child(4)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 0.25,
    ease: "none"
  }, ">+=0.5");
  tl1.fromTo(".section2__title span:nth-child(6)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.15,
    ease: "none"
  }, ">");
  tl1.addLabel('1942', "+=1.4");
  tl1.fromTo(".section3", {
    y: '100%'
  }, {
    y: '0%',
    duration: 1,
    ease: "none"
  }, ">+=1");
  tl1.fromTo(".section3__title", {
    y: '100vh'
  }, {
    y: '-102%',
    duration: 2,
    ease: "none"
  }, ">+=0.2");
  tl1.addLabel('1943', "-=0.8");
  tl1.fromTo(".section4", {
    y: '100%'
  }, {
    y: '0%',
    duration: 1,
    ease: "none"
  }, ">-=2");
  tl1.fromTo(".section5", {
    y: '100%'
  }, {
    y: '0%',
    duration: 1,
    ease: "none"
  }, ">+=0.5");
  tl1.fromTo(".section5__title", {
    y: '100vh'
  }, {
    y: '-115%',
    duration: 3,
    ease: "none"
  }, ">+=0.2");
  tl1.fromTo(".section5__title span:nth-child(1)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 1,
    ease: "none"
  }, "<+=0.6");
  tl1.fromTo(".section5__title span:nth-child(3)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.15,
    ease: "none"
  }, ">-=0.6");
  tl1.fromTo(".section5__title span:nth-child(3)", {
    opacity: 1
  }, {
    opacity: 0.25,
    duration: 0.25,
    ease: "none"
  }, ">+=0.5");
  tl1.fromTo(".section5__title span:nth-child(5)", {
    opacity: 0.25
  }, {
    opacity: 1,
    duration: 0.15,
    ease: "none"
  }, ">");
  tl1.addLabel('1944', "+=0.8"); // tl1.fromTo(".section6", {
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
      var posTop = section7.getBoundingClientRect().top; // Блок достиг верхней границы экрана (или выше)
      //   elem.classList.toggle('visible', posTop <= 0);

      if (posTop <= 0) {
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

      if (posTop <= 0) {
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

      if (posTop <= 0) {
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

    console.log(_yValue);

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
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