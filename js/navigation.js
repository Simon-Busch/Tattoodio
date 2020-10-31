$(document).ready(function() {

    $('.js--scroll-to-artist').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-artist').offset().top}, 1000) /*1000 ms for the effect*/
    });

    $('.js--scroll-to-contact').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-contact').offset().top}, 1500)
    });

    $('.js--scroll-to-gallery').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-gallery').offset().top}, 1500)
    });

});
