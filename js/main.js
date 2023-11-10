$(document).ready(function(){

// add class links for nav-bar
    $('.landing-page header .nav-ul li a').click(function(){
        $(this).addClass('links').parent().siblings().find('a').removeClass('links');
    });
// 
$("button.bar").hover(function(){
    $("button.bar span").animate({
        "width":"100%"
    },150)
},function(){
    $("button.bar span").animate({
        "width":"0"
    },150)
});

   
$('.hiden-nav').click(function(e){
    e.stopPropagation();
    $('.sacand-nav').addClass('visible');
    $(this).addClass('menu-active')
});
$('.sacand-nav').click(function(e){
e.stopPropagation();

});
document.addEventListener("click", (e) => {
if (e.target !== $('.hiden-nav') && e.target !== $('.sacand-nav')){
    if ($('.sacand-nav').hasClass('visible')){
        $('.sacand-nav').removeClass('visible');
        $('.hiden-nav').removeClass('menu-active')
    }
}
});

$('header div ul li a').click(function(){
$(this).addClass('link').parent().siblings().find('a').removeClass('link');
});
$('.sacand-nav ul li a').click(function(){
$(this).addClass('link2').parent().siblings().find('a').removeClass('link2');
});
   console.log($(".markting .container2 .right").offset());
   $(window).scroll(function(){
    if($(window).scrollTop() >= 600){
        $('.scrolltop').fadeIn()
    }
    else{
        $('.scrolltop').fadeOut()
    }
   });
   $('.scrolltop').click(function(){
    $('html, body').animate({
        scrollTop : 0
    })
   });

});

