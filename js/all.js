$(document).ready(function () {
    $('.product-manu').click(function (event) {
        event.preventDefault();
        $('.product').slideToggle();
    });
    $('.product li').click(function (e) { 
        e.preventDefault();
        $(this).addClass('bg-active').siblings().removeClass('bg-active');
    });
    //nivo
    $('#slider').nivoSlider();

    //top
    $('.BackToTop').click(function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },1000);
    })
});