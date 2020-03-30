/*responsive toggler*/
$(document).ready(function(){
    $("i.fa-times").hide();
});
/*wow js*/
$(function(){
  new WOW().init(); 
});
$(document).ready(function () {
    $('.top-product').owlCarousel({
        margin: 12,
        items: 5,
        loop: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            900: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                loop: false
            }
        }
    });

})
$(document).ready(function () {
    $('.our-latest-post').owlCarousel({
        margin: 12,
        items: 4,
        loop: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            900: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                loop: false
            }
        }
    });

})

$(document).ready(function () {
    $('.footer-gellary').owlCarousel({
        margin: 12,
        items: 5,
        loop: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            900: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                loop: false
            }
        }
    });

})
$(document).ready(function () {
    $('.sub-product-item').owlCarousel({
        margin: 12,
        items: 5,
        margin:2,
        loop: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            900: {
                items: 4,
                nav: false
            },
            1000: {
                items: 5,
                loop: false
            }
        }
    });

})


$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });
});