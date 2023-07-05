import $ from "jquery";

$(window).on('load', function () {
    setCssRootVars();
    if ($('.home-page').length > 0) {
        require("./years/_y1940");
    }
    else {
        $('body').addClass('active');
    }
});
$(document).ready(function () {
    $('#mobileMenu').on('change',function(){
        if ($(this).is(':checked')) {
            //$('html, body').scrollTop(0);
            $('body').addClass('disabled');
        } else {
            $('body').removeClass('disabled');
        }
    });
    $('.menu-items a').on('click',function(){
        $('#mobileMenu').prop('checked',false).trigger('change');
    });

    var setAnimate = true;
    var lastScrollTop = $(window).scrollTop();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 75) {
            $('.navbar').addClass('fixed');
            if (setAnimate){
                setTimeout(function (){
                    $('.navbar').addClass('animate');
                }, 50);
                setAnimate = false;
            }
        } else {
            $('.navbar').removeClass('fixed');
            $('.navbar').removeClass('animate');
            setAnimate = true;
        }

        if (scroll >= 300) {
            $('.to-top').addClass('active');
        } else {
            $('.to-top').removeClass('active');
        }


        if (scroll > lastScrollTop){
            $('.navbar').removeClass('active');
        } else {
            $('.navbar').addClass('active');
        }
        lastScrollTop = scroll;
    });
    $('.to-top').on('click',function (){
       event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
    $(window).on('resize',function (){
        setCssRootVars();
    });
});
function setCssRootVars() {
    let baseRatio = 2010 / 1080;
    let windowWidth = $(window).innerWidth();
    let windowHeight = $(window).innerHeight();
    let windowRatio = windowWidth / windowHeight;
    let newVW = 1;
    if (windowRatio > baseRatio) newVW = 1 / (windowRatio / baseRatio);
    $(':root').css('--vw', newVW + 'vw');

}


