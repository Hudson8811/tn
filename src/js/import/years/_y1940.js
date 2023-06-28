import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode } from 'swiper'
Swiper.use([ Parallax, Mousewheel,  Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode] )
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollToPlugin);


//Lazy video

var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
console.log(lazyVideos)
if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(video) {
        if (video.isIntersecting) {
        for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
            videoSource.src = videoSource.dataset.src;
            }
        }

        video.target.load();
        video.target.classList.remove("lazy");
        lazyVideoObserver.unobserve(video.target);
        }
    });
    });

    lazyVideos.forEach(function(lazyVideo) {
    lazyVideoObserver.observe(lazyVideo);
    });
}

//Lazy video

var material = new Swiper(".js--material", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 16,
    centeredSlides: true,
    loop: false,
    pagination: true,
    autoHeight: true,
    speed: 300,
});
var materialFoto = new Swiper(".js--material-foto", {
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
            direction: "vertical", 
        },
    }
});
materialFoto.controller.control = material;
material.controller.control = materialFoto;

if (document.querySelector('.js--color-slider')) {
    $('.js--color-slider').each(function () {
        var $this = $(this);
        var wrap = $(this).closest('.section4');

        const swiperNews = new Swiper($this[0
        ], {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                prevEl: wrap.find('.color-slider .swiper-button-prev')[0],
                nextEl: wrap.find('.color-slider .swiper-button-next')[0]
            },
        });


        wrap.find('.color-list__item').on( 'click', function() {
            var filter = $(this).attr('data-filter');
            $(".color-list__item").removeClass("active");
            // var selectedColor = {
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
            if(filter==='all'){
                wrap.find('.swiper-slide').css('display', '');
                wrap.find('.color-list__selected__element').css('display', '');
            }
            else{
                wrap.find('.swiper-slide').css('display', 'none');
                wrap.find('.swiper-slide[data-filter="' + filter+'"').css('display', '').addClass("active");
                wrap.find('.color-list__selected__element').css('display', 'none');
                wrap.find('.color-list__selected__element[data-filter="' + filter+'"').css('display', '').addClass("active");
                
                
            }
            // $.not(this).removeClass('news__categories-item--active');
            $( this ).addClass('active' );

            swiperNews.updateSize();
            swiperNews.updateSlides();
            swiperNews.updateProgress();
            swiperNews.updateSlidesClasses();
            swiperNews.slideTo(0);
            swiperNews.scrollbar.updateSize();
            // refreshMobBtnsState();

            return false;
        });
        wrap.find('.color-list__item').first().trigger("click")



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







// accordions section6
	const accordions = document.querySelectorAll(".accordion");

	const openAccordion = (accordion) => {
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.add("accordion__active");
		content.style.maxHeight = content.scrollHeight + "px";
	};

	const closeAccordion = (accordion) => {
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.remove("accordion__active");
		content.style.maxHeight = null;
	};

	accordions.forEach((accordion) => {
		const intro = accordion.querySelector(".accordion__intro");
		const content = accordion.querySelector(".accordion__content");

		intro.onclick = () => {
			if (content.style.maxHeight) {
				closeAccordion(accordion);
			} else {
				accordions.forEach((accordion) => closeAccordion(accordion));
				openAccordion(accordion);
			}
		};
	});

 
    $('.accordion').click(function(){
        $('html, body').stop().animate({ scrollTop:$('.accordions').offset().top}, 1000);
    });
// accordions


let tl = gsap.timeline({
    onComplete: function (){
        $('body').addClass('active');
        $('.loader').addClass('hide');
    }
});


var initMode;
let addTime = 1500;

let st1, st2, st3;
let tl1 = gsap.timeline({});
let tl2 = gsap.timeline({});
let tl3 = gsap.timeline({});

let s3Width, b1Width, b2Width, b3Width, b4Width;
let scHeight, s6Height, b1Height, b2Height, b3Height, b4Height;


let urlParams = new URLSearchParams(window.location.search);
let yValue = urlParams.get('y');


function initAnimation(){
    s3Width =  $('.section3').innerWidth();
    b1Width =  $('.section3__block--1').innerWidth();
    b2Width =  $('.section3__block--2').innerWidth();
    b3Width =  $('.section3__block--3').innerWidth();
    b4Width =  $('.section3__block--4').innerWidth();

    scHeight = $('.scroll-page').innerHeight();

    s6Height =  $('.section6').innerHeight();
    b1Height =  $('.section3__block--1').innerHeight();
    b2Height =  $('.section3__block--2').innerHeight();
    b3Height =  $('.section3__block--3').innerHeight();
    b4Height =  $('.section3__block--4').innerHeight();


    if (window.innerWidth > 1100){
        initScrollAnimationDesktop();
        initMode = 'desk';
    } else if(window.innerWidth > 699){
        initScrollAnimationTablet();
        initMode = 'tablet';
    } else {
        initScrollAnimationMobile();
        initMode = 'mobile';
    }
}

initAnimation();
checkYearValue();

var dwidth = $(window).width();
$(window).on('resize',function (){
    var wwidth = $(window).width();
    if(dwidth!==wwidth){
        if (typeof st1 !== "undefined") st1.kill();
        if (typeof st2 !== "undefined") st2.kill();
        if (typeof st3 !== "undefined") st3.kill();
        tl.clear();
        tl1.clear();
        tl2.clear();
        tl3.clear();
        gsap.set(".loader__center, .loader__back, .section1__house, .section1 .header, .sidebar, .section1__title," +
        ".section2, .section2__title, .section2__subtitle, .section2__video" +    
        ".section3, .section3__subtitle, .material, .material-foto" +    
        ".section4, .section4__title, .section4__subtitle, .color-slider, .color-list__selected" +   
        ".section5, .section5__title, .section5__subtitle, .section5__video , .color-list__selected" + 
        ".section6, .section6__title, .section6__subtitle," + 
        ".scroll-page, .fullPageOverlay", {clearProps:"all"});
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
        $('body').removeClass('active');
        $('.loader').removeClass('hide');
        $('.sidebar__global, .sidebar__burger, .sidebar__menu').removeClass('active');
        initAnimation();
    }
});

function initScrollAnimationDesktop(){

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
        duration:  1.7,
        ease: "power1.inOut",
    } , "0");

    tl.fromTo(".section1__title", {
        y: '100vh',
        autoAlpha: 0,
    }, {
        y: '60vh',
        autoAlpha: 1,
        duration:  1.5,
        ease: "power2.out",
    } , "<+0.9");
    tl.fromTo(".section1 .header", {
        y: '-100%',
        autoAlpha: 0,
    }, {
        y: '0',
        autoAlpha: 1,
        duration:  1.5,
        ease: "power2.out",
    } , ">-0.6");
    tl.fromTo(".section1__house", {
        filter: 'grayscale(100%)'
    }, {
        filter: 'grayscale(0%)',
        duration:  2,
        ease: "slow(0.7, 0.7, false)",
    } , ">");

    tl1.addLabel('1941', "+=1.1");
    tl1.fromTo(".section2", {
        y: '100%',
    }, {
        y: '0%',
        duration: 1,
        ease: "none",
    } , ">=-0.1");

    tl1.fromTo(".section2__title", {
        y: '100vh',
    }, {
        y: '-102%',
        duration:  3.6,
        ease: "none",
    } , ">+=0.2");
    tl1.fromTo(".section2__title span:nth-child(1)", {
        opacity: 1
    }, {
        opacity: 0.25,
        duration:  1,
        ease: "none",
    } , "<+=0.6");
    tl1.fromTo(".section2__title span:nth-child(3)", {
        opacity: 0.25,
    }, {
        opacity: 1,
        duration:  0.15,
        ease: "none",
    } , ">-=0.6");
    tl1.fromTo(".section2__title span:nth-child(3)", {
        opacity: 1,
    }, {
        opacity: 0.25,
        duration:  0.25,
        ease: "none",
    } , ">+=0.5");
    tl1.fromTo(".section2__title span:nth-child(4)", {
        opacity: 0.25,
    }, {
        opacity: 1,
        duration:  0.15,
        ease: "none",
    } , ">");
    tl1.fromTo(".section2__title span:nth-child(4)", {
        opacity: 1,
    }, {
        opacity: 0.25,
        duration:  0.25,
        ease: "none",
    } , ">+=0.5");
    tl1.fromTo(".section2__title span:nth-child(6)", {
        opacity: 0.25,
    }, {
        opacity: 1,
        duration:  0.15,
        ease: "none",
    } , ">");
    tl1.addLabel('1942', "+=1.4");
    tl1.fromTo(".section3", {
        y: '100%',
    }, {
        y: '0%',
        duration: 1,
        ease: "none",
    } , ">+=1");
    tl1.fromTo(".section3__title", {
        y: '100vh',
    }, {
        y: '-102%',
        duration:  2,
        ease: "none",
    } , ">+=0.2");
    tl1.addLabel('1943', "-=0.8");
    tl1.fromTo(".section4", {
        y: '100%',
    }, {
        y: '0%',
        duration: 1,
        ease: "none",
    } , ">-=2");
    tl1.fromTo(".section5", {
        y: '100%',
    }, {
        y: '0%',
        duration: 1,
        ease: "none",
    } , ">+=0.5");
    tl1.fromTo(".section5__title", {
        y: '100vh',
    }, {
        y: '-115%',
        duration: 3,
        ease: "none",
    } , ">+=0.2");
    tl1.fromTo(".section5__title span:nth-child(1)", {
        opacity: 1
    }, {
        opacity: 0.25,
        duration:  1,
        ease: "none",
    } , "<+=0.6");
    tl1.fromTo(".section5__title span:nth-child(3)", {
        opacity: 0.25,
    }, {
        opacity: 1,
        duration:  0.15,
        ease: "none",
    } , ">-=0.6");
    tl1.fromTo(".section5__title span:nth-child(3)", {
        opacity: 1,
    }, {
        opacity: 0.25,
        duration:  0.25,
        ease: "none",
    } , ">+=0.5");
    tl1.fromTo(".section5__title span:nth-child(5)", {
        opacity: 0.25,
    }, {
        opacity: 1,
        duration:  0.15,
        ease: "none",
    } , ">");
    tl1.addLabel('1944', "+=0.8");
    // tl1.fromTo(".section6", {
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

    st1 = ScrollTrigger.create({
        trigger: ".scroll-page",
        pin: true,
        start: "top top",
        end: () =>   "+="+addTime+"%",
        scrub: 0, //2.5
        animation: tl1,
    });
    const section7 = document.getElementById('section7');

    if( section7 !== null ) {
    document.addEventListener('scroll', function() {
        const posTop = section7.getBoundingClientRect().top;
        
        // Блок достиг верхней границы экрана (или выше)
      //   elem.classList.toggle('visible', posTop <= 0);
        if(posTop <= 0) {
            let balon = document.querySelector(".section7__picture")
            balon.classList.add("active")
            
        }
        
        // Блок только появляется снизу (или выше)
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

function initScrollAnimationTablet(){
    const section2 = document.getElementById('product');
    if( section2 !== null ) {
        document.addEventListener('scroll', function() {
            const posTop = section2.getBoundingClientRect().top;
            
            // Блок достиг верхней границы экрана (или выше)
          //   elem.classList.toggle('visible', posTop <= 0);
            
            // Блок только появляется снизу (или выше)
              if(posTop < window.innerHeight) {
                  let balon = document.querySelector(".section2__title--mob")
                  balon.classList.add("active")
                  
              }
          //   elem.classList.toggle('visible', posTop < window.innerHeight);
              
            // Блок целиком находится в видимой зоне
          //   elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);
          });
    }

    const section5 = document.getElementById('section5');
    if( section5 !== null ) {
        document.addEventListener('scroll', function() {
            const posTop = section5.getBoundingClientRect().top;
            
            // Блок достиг верхней границы экрана (или выше)
          //   elem.classList.toggle('visible', posTop <= 0);
            
            // Блок только появляется снизу (или выше)
              if(posTop < window.innerHeight) {
                  let balon = document.querySelector(".section5__title--mob")
                  balon.classList.add("active")
                  
              }
          //   elem.classList.toggle('visible', posTop < window.innerHeight);
              
            // Блок целиком находится в видимой зоне
          //   elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);
          });
    }
    const section7 = document.getElementById('section7');

    if( section7 !== null ) {
    document.addEventListener('scroll', function() {
        const posTop = section7.getBoundingClientRect().top;
        
        // Блок достиг верхней границы экрана (или выше)
      //   elem.classList.toggle('visible', posTop <= 0);
        if(posTop <= 0) {
            let balon = document.querySelector(".section7__picture")
            balon.classList.add("active")
            
        }
        
        // Блок только появляется снизу (или выше)
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
function initScrollAnimationMobile(){
    const section2 = document.getElementById('product');
    if( section2 !== null ) {
        document.addEventListener('scroll', function() {
            const posTop = section2.getBoundingClientRect().top;
            
            // Блок достиг верхней границы экрана (или выше)
          //   elem.classList.toggle('visible', posTop <= 0);
            
            // Блок только появляется снизу (или выше)
              if(posTop < window.innerHeight) {
                  let balon = document.querySelector(".section2__title--mob")
                  balon.classList.add("active")
                  
              }
          //   elem.classList.toggle('visible', posTop < window.innerHeight);
              
            // Блок целиком находится в видимой зоне
          //   elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);
          });
    }

    const section5 = document.getElementById('section5');
    if( section5 !== null ) {
        document.addEventListener('scroll', function() {
            const posTop = section5.getBoundingClientRect().top;
            
            // Блок достиг верхней границы экрана (или выше)
          //   elem.classList.toggle('visible', posTop <= 0);
            
            // Блок только появляется снизу (или выше)
              if(posTop < window.innerHeight) {
                  let balon = document.querySelector(".section5__title--mob")
                  balon.classList.add("active")
                  
              }
          //   elem.classList.toggle('visible', posTop < window.innerHeight);
              
            // Блок целиком находится в видимой зоне
          //   elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);
          });
    }
    const section7 = document.getElementById('section7');

    if( section7 !== null ) {
    document.addEventListener('scroll', function() {
        const posTop = section7.getBoundingClientRect().top;
        
        // Блок достиг верхней границы экрана (или выше)
      //   elem.classList.toggle('visible', posTop <= 0);
        if(posTop <= 0) {
            let balon = document.querySelector(".section7__picture")
            balon.classList.add("active")
            
        }
        
        // Блок только появляется снизу (или выше)
          if(posTop < window.innerHeight) {
              let balon = document.querySelector(".section7__picture")
              balon.classList.add("active")
              
          }
      //   elem.classList.toggle('visible', posTop < window.innerHeight);
          
        // Блок целиком находится в видимой зоне
      //   elem.classList.toggle('visible', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);
        
    });
    }
}






function checkYearValue(){
    if (yValue !== null){
        $('.fullPageOverlay').addClass('active');
        gsap.to(".fullPageOverlay", {
            duration: 1,
            autoAlpha: 0,
            ease: "none",
            onComplete: function (){
                $('.fullPageOverlay').removeClass('active');
            }
        });


        if (initMode === 'desk' || initMode === 'tablet'){
            tl.progress(1);
            gsap.to(window, {
                scrollTo: tl1.scrollTrigger.labelToScroll(yValue),
                duration: 0
            });
        } else if (initMode === 'mobile'){
            tl.progress(1);
            gsap.to(window, {
                scrollTo: '#year'+yValue,
                duration: 0.01
            });
        }
    }
}

function scrollToYear(year){
    if (year !== null){
        if (initMode === 'desk' || initMode === 'tablet'){
            gsap.to(window, {
                scrollTo: tl1.scrollTrigger.labelToScroll(year),
            });
        } else if (initMode === 'mobile'){
            gsap.to(window, {
                scrollTo: '#year'+year,
            });
        }
    }
}

$('.header__menu .header__menu-item a').on('click',function (){
    event.preventDefault();
    let link = $(this).attr('href');
    if (link !== null){
        let yValue = getParameterFromString(link, "y");
        console.log(yValue)
        if (yValue !== null) {
            scrollToYear(yValue);
        }
    }
});

function getParameterFromString(urlString, parameterName) {
    var urlParams = new URLSearchParams(urlString.split('?')[1]);
    return urlParams.get(parameterName);
}
