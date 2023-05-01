/* efek collorosel */
let swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      },
});
  
/* icon search */
feather.replace()

/* alert */
let buttons = document.querySelectorAll('.BookBtn');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        Swal.fire(
            'Sorry..!',
            'this feature is not yet available',
            'info'
        );
    });
}
