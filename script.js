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

})