$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

/*Auto play*/
function autoplay(){
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

autoplay();