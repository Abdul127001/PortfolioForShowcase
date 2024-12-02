$(document).ready(function(){
    $(window).scroll(function(){
        // alert(1)
        if(this.scrollY > 5) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })

    $('.navbar .menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    })


    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autopplayHoverPause:true,
        responsive:{
            0 : {
                item:1,
                nav:false,
            },
            600 : {
                item:2,
                nav:false,
            },
            1000 : {
                item:3,
                nav:false,
            }
        }
    })

})