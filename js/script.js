//   const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     nav: false,
//     controls: false, 
//     mouseDrag: true,
//     responsive: {
//         992:{
//             nav: false,
//         },
//         300: {
//             nav: true,
//         }
//       }
//     }
//     );

//   document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   });

//   document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   (function($) {
//     wow = new WOW(
//       {
//       boxClass:     'wow',      // default
//       animateClass: 'animate__animated', // default
//       offset:       0,          // default
//       mobile:       true,       // default
//       live:         true        // default
//     }
//     )
//     wow.init();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     $(function() {
      
//       $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
//         $(this)
//           .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//           .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
//       });
      
//     });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     function toggleSlise(item){
//       $(item).each(function(i){
//         $(this).on('click', function(e){
//           e.preventDefault();
//           $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//           $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
//         })
//       });
//     };

//     toggleSlise('.catalog-item__link');
//     toggleSlise('.catalog-item__back');

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     //modal

//     $('[data-modal=consult]').on('click', function(){
//       $('.overlay, #consult').fadeIn('slow');
//     });

//     $('.modal__close').on('click', function(){
//       $('.overlay, #consult, #thanks, #order').fadeOut('slow');
//     });

    

//     $('.button_mini').each(function(i){
//       $(this).on('click',function(){
//         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
//         $('.overlay, #order').fadeIn('slow');
//       })
//     });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//     function validateForms(form){
//       $(form).validate({
//         rules:{
//           fname:{
//             required: true,
//             minlength: 2
//           },
//           phone:"required",
//           email:{
//             required: true,
//             email: true
//           }
//         },
        
//         messages: {
//           fname:{
//             required: "Пожалуйста, введите свое имя",
//             minlength: jQuery.validator.format("Введите {0} символова!")
//           },
//           phone: "Пожалуйста, введите свой номер телефона",
//           email: {
//             required: "Пожалуйста, введите свою почту",
//             email: "Неправельно введен адресс почты"
//           }
//         }
  
//       });
//     };

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//     validateForms('#consult-form');
//     validateForms('#consult form');
//     validateForms('#order form');

//     $('input[name=phone]').mask("+7 (999) 999-99-99");

//     $('form').submit(function(e) {
//       e.preventDefault();
//       $.ajax({
//           type: "POST",
//           url: "mailer/smart.php",
//           data: $(this).serialize()
//       }).done(function() {
//           $(this).find("input").val("");
//           $('#consult, #order').fadeOut();
//           $('.overlay, #thanks').fadeIn('slow');

//           $('form').trigger('reset');
//       });
//       return false;
//     });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     // Smooth scroll and pageup

//     $(window).scroll(function() {
//       if ($(this).scrollTop() > 1600) {
//           $('.pageup').fadeIn();
//       } else {
//           $('.pageup').fadeOut();
//       }
//     });

//     $("a[href^='#up']").click(function(){
//       const _href = $(this).attr("href");
//       $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//       return false;
//     });

//   })(jQuery);