$(document).ready(function(){

// add class links for nav-bar
    $('.landing-page header .nav-ul li a').click(function(){
        $(this).addClass('links').parent().siblings().find('a').removeClass('links');
//change background imgs for landing pag
setInterval(function () {
    let imgesarray = ["01.jpg","02.jpg","03.jpg","04.jpg"];
//change background imge url
$(".landing-page").css({backgroundImage :'url("imgs/03.jpg")'});
    let randomNum = Math.floor(Math.random() * imgesarray.length);
    //change background imge url
$(".landing-page").css({
    backgroundImage : 'url("imgs/' + imgesarray[randomNum] + '")'
});
    console.log(randomNum)
},1000);

    });

   

});

