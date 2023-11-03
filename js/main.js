$(document).ready(function(){

// add class links for nav-bar
    $('.landing-page header .nav-ul li a').click(function(){
        $(this).addClass('links').parent().siblings().find('a').removeClass('links');
    });
//change background imgs for landing pag
setInterval(function () {
    let imgesarray = ["07.jpg","02.jpg","03.jpg","04.jpg"];
//change background imge url
$(".landing-page").css({backgroundImage :'url("imgs/03.jpg")'});
    let randomNum = Math.floor(Math.random() * imgesarray.length);
    //change background imge url
$(".landing-page").css({
    backgroundImage : 'url("imgs/' + imgesarray[randomNum] + '")'
});
    console.log(randomNum)
},50000);

   
$('.hiden-nav').click(function(e){
    e.stopPropagation();
    $('.sacand-nav').addClass('visible');

});
$('.sacand-nav').click(function(e){
e.stopPropagation();

});
document.addEventListener("click", (e) => {
if (e.target !== $('.hiden-nav') && e.target !== $('.sacand-nav')){
    if ($('.sacand-nav').hasClass('visible')){
        $('.sacand-nav').removeClass('visible');
    }
}
});

$('header div ul li a').click(function(){
$(this).addClass('link').parent().siblings().find('a').removeClass('link');
});
$('.sacand-nav ul li a').click(function(){
$(this).addClass('link2').parent().siblings().find('a').removeClass('link2');
});
   

});

