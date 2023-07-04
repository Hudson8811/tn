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
            $('html, body').scrollTop(0);
            $('body').addClass('disabled');
        } else {
            $('body').removeClass('disabled');
        }
    });
    $('.menu-items a').on('click',function(){
        $('#mobileMenu').prop('checked',false).trigger('change');
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


