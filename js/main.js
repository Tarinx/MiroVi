/* ................Fixed Menu Script Starts................ */

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
})

/* ................Fixed Menu Script Ends................ */

/* ................Slick Slider Script for Reviews Starts................ */

$(function() {

    $('.reviews__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/review-arrow-prev.svg" alt="previous arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/review-arrow-next.svg" alt="next arrow"></button>'
    })

});

/* ................Slick Slider Script Ends................ */

/* ................Slick Slider Script for the Gallery Starts................ */

$(function() {

    $('.gallery__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        draggable: true,
        // easing: 'ease',
        // waitForAnimate: false,
        prevArrow: '<button type="button" class="slick-prev gallery-arrow-prev"><img src="images/gallery-arrow-prev.svg" alt="previous arrow"></button>',
        nextArrow: '<button type="button" class="slick-next gallery-arrow-next"><img src="images/gallery-arrow-next.svg" alt="next arrow"></button>'
    })

});

/* ................Slick Slider Script for the Gallery Ends................ */

/* ................Email Form Script Starts................ */

jQuery(document).ready(function () {
     
    $(".phone").mask("+380 (99) 999-99-99"); 
   
  
   jQuery('.form__email-btn').click( function() {
       var form = jQuery(this).closest('form');
       
       if ( form.valid() ) {
           form.css('opacity','.5');
           var actUrl = form.attr('action');

           jQuery.ajax({
               url: actUrl,
               type: 'post',
               dataType: 'html',
               data: form.serialize(),
               success: function(data) {
                   form.html(data);
                   form.css('opacity','1');
                   //form.find('.status').html('форма надіслана успішно');
               },
               error:	 function() {
                    form.find('.status').html('Cерверна помилка');
               }
           });
       }
   });

});

/* ................Email Form Script Ends................ */