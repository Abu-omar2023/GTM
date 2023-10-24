$(document).ready(function(){
    //start button progress
    $("button.bar").hover(function (){
        $(this).find('span').eq(0).animate({
            width: '100%'
        },200)
    },function(){
        $(this).find('span').eq(0).animate({
            width: '0'
        },200)
    });

    $('.landing-page header .nav-ul li a').click(function(){
        $(this).addClass('links').parent().siblings().find('a').removeClass('links');

    });
    //change background imgs for landing pag
setInterval(function () {
    let imgesarray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg"];
//change background imge url
$(".landing-page").css({backgroundImage :'url("imgs/03.jpg")'});
    let randomNum = Math.floor(Math.random() * imgesarray.length);
    //change background imge url
$(".landing-page").css({
    backgroundImage : 'url("imgs/' + imgesarray[randomNum] + '")'
},2000);
},9000);

    });
