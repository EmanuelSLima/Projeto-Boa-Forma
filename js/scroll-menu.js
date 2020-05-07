$(window).on("scroll", function(){
    if($(window).scrollTop() > 200){
        $('.navbar').addClass('nav-color');
    }else{
        $('.navbar').removeClass('nav-color');
    }
});