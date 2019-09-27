/** Code By Webdevtrick ( https://webdevtrick.com ) **/
var $carousel = $('.carousel'),
    currentSlide, nextSlide;
const carouselSize = document.getElementsByClassName('hnav-item').length;

$(`.s1`).click(()=>{
    $carousel.attr('data-slide',"1");
    console.log($carousel.width())
    console.log(`1 was clicked`)
})
$(`.s2`).click(()=>{
    $carousel.attr('data-slide',"2");
    console.log(`2 was clicked`)
})
$(`.s3`).click(()=>{
    $carousel.attr('data-slide',"3");
    console.log(`3 was clicked`)
})
$(`.s4`).click(()=>{
    $carousel.attr('data-slide',"4");
    console.log(`4 was clicked`)
})