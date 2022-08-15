var swiper = new Swiper(".populares-conteudo", {
    slidesPerView:1,
    spaceBetween: 5,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView:1,
            spaceBetween: 5,
        },
        320:{
            slidesPerView:2,
            spaceBetween: 5,
        },
        510:{
            slidesPerView:2,
            spaceBetween: 5,
        },
        758:{
            slidesPerView:3,
            spaceBetween: 5,
        },
        900:{
            slidesPerView:4,
            spaceBetween: 5,
        },
    },
  });

       