$(document).ready(function(){
    $(window).scroll(function(){
        // alert(1)
        if(this.scrollY > 15) {
            $('.navbar').addClass("sticky");
           
        } else {
            $('.navbar').removeClass("sticky");
           
        }

        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

      



    })

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
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