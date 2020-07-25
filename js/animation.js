$(document).ready(function() {
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
})