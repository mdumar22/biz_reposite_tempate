jQuery(document).ready(function($){

$('.menu-btn').click(function(){
    $('.nav-wrapper').addClass('open-menu');
})

$('.cancel_button').click(function(){
    $('.nav-wrapper').removeClass('open-menu');
})
AOS.init();

})


