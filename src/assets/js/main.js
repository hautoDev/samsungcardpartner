let onready = () =>{

  const slideIntroClassName =".intro-slide-cont "
  // const swiper = new Swiper(".mySwiper", {});

  const swiperIntro = new Swiper(slideIntroClassName+'.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // slidesPerView: 1,
    // slidesPerGroup: 1,
    // autoplay: false,
    allowTouchMove: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    // If we need pagination
    pagination: {
      el: slideIntroClassName+'.slide-pagination-area',
      clickable: true,
      
    },
    navigation: {
      nextEl: slideIntroClassName+' .slide-btn-next',
      prevEl: slideIntroClassName+' .slide-btn-prev',
    },

    // grabCursor: true,
    // effect: "creative",
    // creativeEffect: {
    //   prev: {
    //     shadow: true,
    //     translate: [0, 0, -800],
    //     rotate: [180, 0, 0],
    //   },
    //   next: {
    //     shadow: true,
    //     translate: [0, 0, -800],
    //     rotate: [-180, 0, 0],
    //   },
    // },
  

    // breakpoints: {
    //   901:{
    //     slidesPerView: 1,
    //     slidesPerGroup: 1,
    //   }
    // }
  
  
  });

  swiperCommonSet(`.slide-cont-release`);
  swiperCommonSet(`.slide-cont-special`);

  // window.addEventListener('resize', rearrangementSpecial)
}


const swiperCommonSet = (slideClassName) =>{
  const swiperCommon = new Swiper(`${slideClassName} .swiper`, {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 12,
  
    // // If we need pagination
    pagination: {
      el: slideClassName+' .slide-pagination',
      //el: ".swiper-pagination",
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: slideClassName+' .slide-btn-next',
      prevEl: slideClassName+' .slide-btn-prev',
    },
  
    breakpoints: {
      901:{
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 26,
  
      }
    }
  });

}


const slideReleaseClassName =".slide-cont-release";
const swiperRelease = new Swiper(`${slideReleaseClassName} .swiper`, {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 12,

  // // If we need pagination
  pagination: {
    el: slideReleaseClassName+'.slide-pagination',
    //el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: slideReleaseClassName+'.slide-btn-next',
    prevEl: slideReleaseClassName+'.slide-btn-prev',
  },

  breakpoints: {
    901:{
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 26,

    }
  }


});

window.addEventListener('DOMContentLoaded', onready);



