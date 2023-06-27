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
function setCssRootVars() {
    let baseRatio = 2010 / 1080;
    let windowWidth = $(window).innerWidth();
    let windowHeight = $(window).innerHeight();
    let windowRatio = windowWidth / windowHeight;
    let newVW = 1;
    if (windowRatio > baseRatio) newVW = 1 / (windowRatio / baseRatio);
    $(':root').css('--vw', newVW + 'vw');

}


