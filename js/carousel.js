/** Code By Webdevtrick ( https://webdevtrick.com ) **/
var $carousel = $('.carousel'),
    currentSlide, nextSlide;
const carouselSize = document.getElementsByClassName('hnav-item').length;

$(`.s1`).click(()=>{
    $carousel.attr('data-slide',"1");
})
$(`.s2`).click(()=>{
    $carousel.attr('data-slide',"2");
})
$(`.s3`).click(()=>{
    $carousel.attr('data-slide',"3");
})
$(`.s4`).click(()=>{
    $carousel.attr('data-slide',"4");
})


window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  