$(function() {
  var mixer = mixitup ('.Blog-mixitup');
})


$('.testimonials__slider').slick({
  slidesToShow:2,
  arrows:false,
  dots:true,
  appendDots: $('.testimonials__dots')
})

$('.testimonials__prev').on('click',function(e) {
  e.preventDefault()
  $('.testimonials__slider').slick('slickPrev')
})

$('.testimonials__next').on('click',function(e) {
  e.preventDefault()
  $('.testimonials__slider').slick('slickNext')
})

// $('.accordeon__btn').on('click',function(e) {
//   e.preventDefault()
//   $(this).toggleClass('accordeon__btn--active')
//   $(this).children('.acc__item-head').slideToggle()
// })


// $('.accordeon-btn').on('click',function(e) { 
//   e.preventDefault()
//   $(this).toggleClass('accordeon-btn--active')
//   $(this).children('.acc-txt').slideToggle()
// })

$('.accordeon-btn').on('click',function(e) { 
  e.preventDefault()
  
  if ($(this).hasClass('accordeon-btn--active')) {
    $(this).removeClass('accordeon-btn--active')
    $(this).children('.acc-txt').slideUp()
  } else {
    $('.accordeon-btn').removeClass('accordeon-btn--active')
    $('.acc-txt').slideUp()
    $(this).addClass('accordeon-btn--active')
    $(this).children('.acc-txt').slideDown()


  }

})