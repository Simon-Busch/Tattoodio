
/*
@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(-10rem) rotate(180deg) scale(1.3);
    }

    50%{
        opacity: .5;
        transform: translateY(5rem);
    }

    100%{
        opacity: 1;
        transform: 0;
    }
}

@keyframes moveInTop {
    0% {
        opacity: 0;
        transform: translateY(10rem) rotate(180deg) scale(1.3);
    }

    50%{
        opacity: .5;
        transform: translateY(-5rem);
    }

    100%{
        opacity: 1;
        transform: 0;
    }
}


@keyframes moveInleft {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    50%{
        opacity: .5;
        transform: translateX(5rem);
    }

    100%{
        opacity: 1;
        transform: 0;
    }
}


@keyframes BounceBtn {
    0% {
        transform: scale(1);
    }

    50%{
        transform: scale(1.5);
    }

    100%{
        transform: scale(1);
    }
}
*/



$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('moveInBottom');
}, {
    offset:'50%'
});


$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('moveInTop');
}, {
    offset:'50%'
});


$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeInUp');
}, {
    offset:'50%'
});


$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
}, {
    offset:'50%'
});