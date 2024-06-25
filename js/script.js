$(document).ready(function (){
    $('#slider1').owlCarousel({
        items:1,
        center: true,
        margin: 10,
        autoplayTimeout:5000,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        nav:true,
        loop: true,
        autoplay:true,
        animateOut: 'fadeOut',
        navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],

    });
    $('#slider').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
    $('#slider2').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
});