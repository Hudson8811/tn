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
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox/fancybox.esm.js */ "./node_modules/@fancyapps/ui/dist/fancybox/fancybox.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");





if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scroll-page').length) {
  addEventListener('beforeunload', function (event) {});

  onbeforeunload = function onbeforeunload(event) {
    window.scrollTo(0, 0);
  };
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
  setCssRootVars();

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page').length > 0) {
    __webpack_require__(/*! ./years/_y1940 */ "./src/js/import/years/_y1940.js");
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.e-filter').length > 0) {
    var eFilterSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.e-filter .swiper', {
      loop: false,
      freeMode: true,
      spaceBetween: 0,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.e-filter__button--next',
        prevEl: '.e-filter__button--prev'
      }
    });
    eFilterSwiper.on('progress', function (swiper, progress) {
      if (progress === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.e-filter .swiper').addClass('start');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.e-filter .swiper').removeClass('start');
      }

      if (progress === 1) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.e-filter .swiper').addClass('end');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.e-filter .swiper').removeClass('end');
      }
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-item > a').on('click', function () {
    event.preventDefault();
    var link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');
    var bgColor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.sidebar__menu-item').data('overlay');
    nextPageAnimation(link, bgColor);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-dropdown a').on('click', function () {
    event.preventDefault();
    var link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href');

    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.sidebar__menu-item').hasClass('active')) {
      var bgColor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.sidebar__menu-item').data('overlay');
      nextPageAnimation(link, bgColor);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu').removeClass('active');
    }
  });

  if (typeof nextPage !== "undefined") {
    if (nextPage != '') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
        if (Math.ceil(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) >= Math.floor(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height())) {
          nextPageAnimation(nextPage, nextPageBg);
        }
      });
    }
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()('.list-block__sort select').select2 == 'function') {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.list-block__sort select').select2();
  }
  /* Partners marquee */


  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-marquee').length > 0) {
    if (window.matchMedia('(min-width: 700px)').matches) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-marquee').marquee({
        duration: 15000,
        delayBeforeStart: 0,
        duplicated: true,
        gap: 0,
        startVisible: true,
        direction: 'left'
      });
    }
  }
  /* Photo uploader */

  /*if (document.querySelector('#file-loader')) {
      document.querySelector('#file-loader').addEventListener('change', function () {
          var splittedFakePath = this.value.split('\\');
            var elem = $('.form__files-item').first().clone(true);
          elem.find('span').text(splittedFakePath[splittedFakePath.length - 1]);
          elem.appendTo('.form__files').css('display', 'flex');
      });
  }*/

  /* Show congratulation form */


  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-congrat').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').addClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.overlay').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('body-scroll-lock');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form__close-btn,.js-close-modal-form').on('click', function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.form').removeClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.overlay').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('body-scroll-lock');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form__success').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').removeClass('success');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.overlay').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').removeClass('open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('body-scroll-lock');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form__success').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').removeClass('success');
  });
  /*отмена отправки формы и показ окна успешной отправки*/

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').on('submit', function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('node-congratulation-form')) {
      event.preventDefault();
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form').scrollTop(0).addClass('success');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form__success').addClass('active');
  });
  /* Anchor */

  document.querySelectorAll('.anchor').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  // if ($('.js-subslider-single').length > 0 && $('.js-slider-single').length > 0) {
  //     const subSlider = new Swiper('.js-subslider-single', {
  //         slidesPerView: 5.8,
  //         spaceBetween: 18,
  //         breakpoints: {
  //             1024: {
  //                 slidesPerView: 6.4,
  //             },
  //             1280: {
  //                 slidesPerView: 5.8
  //             }
  //         }
  //     });
  // }
  var mainSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.js-slider-single', {
    slidesPerView: 1.2,
    spaceBetween: 6,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false
      }
    }
  });
  _fancyapps_ui_dist_fancybox_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_2__.Fancybox.bind("[data-fancybox]", {});
  var jsShareElements = document.querySelectorAll('.js-share');

  if (jsShareElements.length > 0 && typeof Ya !== 'undefined') {
    for (var i = 0; i < jsShareElements.length; i++) {
      var yaBlock = document.createElement('div');
      yaBlock.classList.add('yaBlock');
      jsShareElements[i].appendChild(yaBlock);
    }

    var shareButton = document.querySelector('.yaBlock');
    Ya.share2(shareButton, {
      theme: {
        services: 'vkontakte,odnoklassniki,telegram,whatsapp',
        lang: 'ru',
        limit: 0,
        size: 's',
        bare: false
      }
    });
  }

  setCssRootVars();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
    setCssRootVars();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('select').on('change', function () {
    console.log('Выбранное значение: ' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
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

function disableScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function nextPageAnimation(link) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  disableScroll();

  if (bgColor != '') {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').css('background', bgColor);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-dropdown').hide();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fullPageOverlay').css('pointer-events', 'auto');
  gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(".fullPageOverlay", {
    duration: 1,
    autoAlpha: 1,
    ease: "none",
    onComplete: function onComplete() {
      setTimeout(function () {
        window.location.href = link;
      }, 200);
    }
  });
}

/***/ }),

/***/ "./src/js/import/libs/jquery.marquee.min.js":
/*!**************************************************!*\
  !*** ./src/js/import/libs/jquery.marquee.min.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  "use strict";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.fn.marquee = function (options) {
    return this.each(function () {
      var o = $.extend({}, $.fn.marquee.defaults, options),
          $this = $(this),
          $marqueeWrapper,
          containerWidth,
          animationCss,
          verticalDir,
          elWidth,
          loopCount = 3,
          playState = "animation-play-state",
          css3AnimationIsSupported = false,
          _prefixedEvent = function _prefixedEvent(element, type, callback) {
        var pfx = ["webkit", "moz", "MS", "o", ""];

        for (var p = 0; p < pfx.length; p++) {
          if (!pfx[p]) type = type.toLowerCase();
          element.addEventListener(pfx[p] + type, callback, false);
        }
      },
          _objToString = function _objToString(obj) {
        var tabjson = [];

        for (var p in obj) {
          if (obj.hasOwnProperty(p)) {
            tabjson.push(p + ":" + obj[p]);
          }
        }

        tabjson.push();
        return "{" + tabjson.join(",") + "}";
      },
          _startAnimationWithDelay = function _startAnimationWithDelay() {
        $this.timer = setTimeout(animate, o.delayBeforeStart);
      },
          methods = {
        pause: function pause() {
          if (css3AnimationIsSupported && o.allowCss3Support) {
            $marqueeWrapper.css(playState, "paused");
          } else {
            if ($.fn.pause) {
              $marqueeWrapper.pause();
            }
          }

          $this.data("runningStatus", "paused");
          $this.trigger("paused");
        },
        resume: function resume() {
          if (css3AnimationIsSupported && o.allowCss3Support) {
            $marqueeWrapper.css(playState, "running");
          } else {
            if ($.fn.resume) {
              $marqueeWrapper.resume();
            }
          }

          $this.data("runningStatus", "resumed");
          $this.trigger("resumed");
        },
        toggle: function toggle() {
          methods[$this.data("runningStatus") === "resumed" ? "pause" : "resume"]();
        },
        destroy: function destroy() {
          clearTimeout($this.timer);
          $this.find("*").addBack().off();
          $this.html($this.find(".js-marquee:first").html());
        }
      };

      if (typeof options === "string") {
        if ($.isFunction(methods[options])) {
          if (!$marqueeWrapper) {
            $marqueeWrapper = $this.find(".js-marquee-wrapper");
          }

          if ($this.data("css3AnimationIsSupported") === true) {
            css3AnimationIsSupported = true;
          }

          methods[options]();
        }

        return;
      }

      var dataAttributes = {},
          attr;
      $.each(o, function (key) {
        attr = $this.attr("data-" + key);

        if (typeof attr !== "undefined") {
          switch (attr) {
            case "true":
              attr = true;
              break;

            case "false":
              attr = false;
              break;
          }

          o[key] = attr;
        }
      });

      if (o.speed) {
        o.duration = parseInt($this.width(), 10) / o.speed * 1e3;
      }

      verticalDir = o.direction === "up" || o.direction === "down";
      o.gap = o.duplicated ? parseInt(o.gap) : 0;
      $this.wrapInner('<div class="js-marquee"></div>');
      var $el = $this.find(".js-marquee").css({
        "margin-right": o.gap,
        float: "left"
      });

      if (o.duplicated) {
        $el.clone(true).appendTo($this);
      }

      $this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
      $marqueeWrapper = $this.find(".js-marquee-wrapper");

      if (verticalDir) {
        var containerHeight = $this.height();
        $marqueeWrapper.removeAttr("style");
        $this.height(containerHeight);
        $this.find(".js-marquee").css({
          float: "none",
          "margin-bottom": o.gap,
          "margin-right": 0
        });

        if (o.duplicated) {
          $this.find(".js-marquee:last").css({
            "margin-bottom": 0
          });
        }

        var elHeight = $this.find(".js-marquee:first").height() + o.gap;

        if (o.startVisible && !o.duplicated) {
          o._completeDuration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration;
          o.duration = parseInt(elHeight, 10) / parseInt(containerHeight, 10) * o.duration;
        } else {
          o.duration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration;
        }
      } else {
        elWidth = $this.find(".js-marquee:first").width() + o.gap;
        containerWidth = $this.width();

        if (o.startVisible && !o.duplicated) {
          o._completeDuration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration;
          o.duration = parseInt(elWidth, 10) / parseInt(containerWidth, 10) * o.duration;
        } else {
          o.duration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration;
        }
      }

      if (o.duplicated) {
        o.duration = o.duration / 2;
      }

      if (o.allowCss3Support) {
        var elm = document.body || document.createElement("div"),
            animationName = "marqueeAnimation-" + Math.floor(Math.random() * 1e7),
            domPrefixes = "Webkit Moz O ms Khtml".split(" "),
            animationString = "animation",
            animationCss3Str = "",
            keyframeString = "";

        if (elm.style.animation !== undefined) {
          keyframeString = "@keyframes " + animationName + " ";
          css3AnimationIsSupported = true;
        }

        if (css3AnimationIsSupported === false) {
          for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
              var prefix = "-" + domPrefixes[i].toLowerCase() + "-";
              animationString = prefix + animationString;
              playState = prefix + playState;
              keyframeString = "@" + prefix + "keyframes " + animationName + " ";
              css3AnimationIsSupported = true;
              break;
            }
          }
        }

        if (css3AnimationIsSupported) {
          animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s infinite " + o.css3easing;
          $this.data("css3AnimationIsSupported", true);
        }
      }

      var _rePositionVertically = function _rePositionVertically() {
        $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + elHeight + "px") + ")");
      },
          _rePositionHorizontally = function _rePositionHorizontally() {
        $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + elWidth + "px") + ")");
      };

      if (o.duplicated) {
        if (verticalDir) {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateY(0)");
          } else {
            $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + (elHeight * 2 - o.gap) + "px") + ")");
          }
        } else {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateX(0)");
          } else {
            $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + (elWidth * 2 - o.gap) + "px") + ")");
          }
        }

        if (!o.startVisible) {
          loopCount = 1;
        }
      } else if (o.startVisible) {
        loopCount = 2;
      } else {
        if (verticalDir) {
          _rePositionVertically();
        } else {
          _rePositionHorizontally();
        }
      }

      var animate = function animate() {
        if (o.duplicated) {
          if (loopCount === 1) {
            o._originalDuration = o.duration;

            if (verticalDir) {
              o.duration = o.direction === "up" ? o.duration + containerHeight / (elHeight / o.duration) : o.duration * 2;
            } else {
              o.duration = o.direction === "left" ? o.duration + containerWidth / (elWidth / o.duration) : o.duration * 2;
            }

            if (animationCss3Str) {
              animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
            }

            loopCount++;
          } else if (loopCount === 2) {
            o.duration = o._originalDuration;

            if (animationCss3Str) {
              animationName = animationName + "0";
              keyframeString = $.trim(keyframeString) + "0 ";
              animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
            }

            loopCount++;
          }
        }

        if (verticalDir) {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? 0 : "-" + elHeight + "px") + ")");
            }

            animationCss = {
              transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : 0) + ")"
            };
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
              }

              animationCss = {
                transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : containerHeight + "px") + ")"
              };
              loopCount++;
            } else if (loopCount === 3) {
              o.duration = o._completeDuration;

              if (animationCss3Str) {
                animationName = animationName + "0";
                keyframeString = $.trim(keyframeString) + "0 ";
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
              }

              _rePositionVertically();
            }
          } else {
            _rePositionVertically();

            animationCss = {
              transform: "translateY(" + (o.direction === "up" ? "-" + $marqueeWrapper.height() + "px" : containerHeight + "px") + ")"
            };
          }
        } else {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? 0 : "-" + elWidth + "px") + ")");
            }

            animationCss = {
              transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : 0) + ")"
            };
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
              }

              animationCss = {
                transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
              };
              loopCount++;
            } else if (loopCount === 3) {
              o.duration = o._completeDuration;

              if (animationCss3Str) {
                animationName = animationName + "0";
                keyframeString = $.trim(keyframeString) + "0 ";
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
              }

              _rePositionHorizontally();
            }
          } else {
            _rePositionHorizontally();

            animationCss = {
              transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
            };
          }
        }

        $this.trigger("beforeStarting");

        if (css3AnimationIsSupported) {
          $marqueeWrapper.css(animationString, animationCss3Str);
          var keyframeCss = keyframeString + " { 100%  " + _objToString(animationCss) + "}",
              $styles = $marqueeWrapper.find("style");

          if ($styles.length !== 0) {
            $styles.filter(":last").html(keyframeCss);
          } else {
            $("head").append("<style>" + keyframeCss + "</style>");
          }

          _prefixedEvent($marqueeWrapper[0], "AnimationIteration", function () {
            $this.trigger("finished");
          });

          _prefixedEvent($marqueeWrapper[0], "AnimationEnd", function () {
            animate();
            $this.trigger("finished");
          });
        } else {
          $marqueeWrapper.animate(animationCss, o.duration, o.easing, function () {
            $this.trigger("finished");

            if (o.pauseOnCycle) {
              _startAnimationWithDelay();
            } else {
              animate();
            }
          });
        }

        $this.data("runningStatus", "resumed");
      };

      $this.on("pause", methods.pause);
      $this.on("resume", methods.resume);

      if (o.pauseOnHover) {
        $this.on("mouseenter", methods.pause);
        $this.on("mouseleave", methods.resume);
      }

      if (css3AnimationIsSupported && o.allowCss3Support) {
        animate();
      } else {
        _startAnimationWithDelay();
      }
    });
  };

  $.fn.marquee.defaults = {
    allowCss3Support: true,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1e3,
    direction: "left",
    duplicated: false,
    duration: 5e3,
    speed: 0,
    gap: 20,
    pauseOnCycle: false,
    pauseOnHover: false,
    startVisible: false
  };
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isotope-layout */ "./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__burger').on('click', function () {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__global').toggleClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').toggleClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-item').on('click', function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('selected')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('selected').siblings().removeClass('selected');
      getDropdownPositon();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__mobile-year').on('click', function () {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu').toggleClass('active');
    getDropdownPositon();
  });
});

function getDropdownPositon() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() <= 699) {
    var parent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu-item.selected');
    var element = parent.find('.sidebar__menu-dropdown');
    var menuPadding = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu').css('padding-top'));
    var fromTop = parent.offset().top;
    var fromTopMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sidebar__menu').offset().top;
    element.css('top', -1 * (fromTop - fromTopMenu - menuPadding - 1));
  }
}

if (typeof Drupal === 'undefined') {
  var grid = document.querySelector('.grid');
  var iso = new (isotope_layout__WEBPACK_IMPORTED_MODULE_1___default())(grid, {
    itemSelector: '.card-person',
    percentPosition: true,
    masonry: {
      columnWidth: ".card-person",
      gutter: 20
    }
  });
} else {
  (function ($, Drupal) {
    Drupal.behaviors.tiqumModule = {
      attach: function attach() {
        var grid = document.querySelector('.grid');

        if (grid) {
          var iso = new (isotope_layout__WEBPACK_IMPORTED_MODULE_1___default())(grid, {
            itemSelector: '.card-person',
            percentPosition: true,
            masonry: {
              columnWidth: ".card-person",
              gutter: 20
            }
          });
        }
      }
    };
  })(jQuery, Drupal);
}

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
      } else {
        wrap.find('.swiper-slide').css('display', 'none');
        wrap.find('.swiper-slide[data-filter="' + filter + '"').css('display', '').addClass("active");
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
}); // accordions

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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/libs/jquery.marquee.min */ "./src/js/import/libs/jquery.marquee.min.js");
/* harmony import */ var _import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
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