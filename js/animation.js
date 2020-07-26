$(document).ready(function() {

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset:'50%'
    });

    //Animation on scroll
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $(".js--anim-1").addClass("shake");
        }
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $(".js--anim-2").addClass("appearBottom");
        }
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $(".js--anim-3").addClass("shake");
        }
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $(".js--anim-4").addClass("BounceBtn");
        }
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 3000) {
            $(".js--anim-5").addClass("moveInBottom");
        }
    });
})