$(window).scroll(function(){
  if ($(this).scrollTop() > 0) {
    $('#header').addClass('small')
  } else {
    $('#header').removeClass('small')
  }
})

$(window).trigger('scroll')



$(window).on('scroll', function() {
  const currScroll = $(this).scrollTop(); 
  const windowHeight = $(this).height();

  // 각 fade-up-trigger 요소를 확인
  $('.fade-up-trigger').each(function() {
    const elementOffset = $(this).offset().top; 
    const elementHeight = $(this).outerHeight(); 

    if (currScroll + windowHeight >= elementOffset && currScroll <= elementOffset + elementHeight) {
      $(this).addClass('fade-up');
    }
  });
});




document.querySelector('.btn-top').addEventListener('click', function() {
  window.scrollTo({
      top: 0,              
  });
});

let lastScrollTop = 0;
$(window).scroll(function(){
  curr = $(this).scrollTop();

  if (curr > 0) {
    $('.btn-top').addClass('on');
  } else {
    $('.btn-top').removeClass('on');
  }
})


$('#header .gnb-item').hover(function(){
    $('#header').addClass('hov');
    $(this).find('.sub-list').addClass('show');
  },function(){
    $('#header .gnb-item').removeClass('hov')
    $(this).find('.sub-list').removeClass('show');
  })
  
  $('#header .group-bottom .sub-name').addClass('on');
  $('#header .group-bottom .sub-name').removeClass('on');
  


$('#header .group-bottom .sub-item').hover(function() {
  $(this).find('.sub-name').addClass('on');
  $(this).find('.sub2-list').addClass('show');
}, function() {
  $(this).find('.sub-name').removeClass('on');
  $(this).find('.sub2-list').removeClass('show');
});

$('#header .group-bottom .sub2-item').hover(function() {
  $(this).find('.sub2-name').addClass('on');
}, function() {
  $(this).find('.sub2-name').removeClass('on');
});






$(document).on("click", function (e) {
  if (!$(e.target).closest('.search-popup, .input-search').length) {
    $('#header .group-top .search-popup').removeClass('show');
  }
});
$('#header .search-form .input-search').on("click", function(e) {
  e.stopPropagation();
  $('#header .group-top .search-popup').addClass('show');
});








$('.sc-blackfriday .menu-list .menu-item').click(function(){
  $('.sc-blackfriday .menu-list .menu-item .btn-menu').removeClass('active');
  $(this).find('.btn-menu').addClass('active');
});

$('.sc-best .menu-item').click(function(){
  $('.sc-best .menu-item .btn-menu').removeClass('active');
  $(this).find('.btn-menu').addClass('active');
});



visualSwiper1 = new Swiper(".main .visual-slide .front", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

visualSwiper2 = new Swiper(".main .visual-slide .bg", {
  effect:"fade",
  loop: true, 
});

visualSwiper1.controller.control = visualSwiper2;
visualSwiper2.controller.control = visualSwiper1;

$(".swiper-stop .play").addClass("on");
$(".swiper-stop .pause").removeClass("on");

$(".swiper-stop").click(function () {
    if ($(".swiper-stop .play").hasClass("on")) {
        $(".swiper-stop .play").removeClass("on");
        $(".swiper-stop .pause").addClass("on");
        visualSwiper1.autoplay.stop(); // 🔥 자동재생 정지
    } else {
        $(".swiper-stop .pause").removeClass("on");
        $(".swiper-stop .play").addClass("on");
        visualSwiper1.autoplay.start(); // 🔥 자동재생 시작
    }
});



newSwiper = new Swiper(".sc-new .swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
newsSwiper = new Swiper(".sc-news .swiper", {
  loop: true,
  slidesPerView: 4,
  centeredSlides: true, 
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
blackfridaySwiper = new Swiper(".sc-blackfriday .swiper", {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
bestSwiper = new Swiper(".sc-best .swiper", {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
hotdealSwiper = new Swiper(".sc-hotdeal .swiper", {
  slidesPerView: 2,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
saleSwiper = new Swiper(".sc-sale .swiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
brandSwiper = new Swiper(".sc-brand .swiper", {
  slidesPerView: 2,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
recommendedSwiper = new Swiper(".sc-recommended .swiper", {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
bannerSwiper = new Swiper(".slide-banner .swiper", {
  speed: 2000,
  loop: true,
  autoplay:{delay: 5000},
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination"
  },
});




$('.product-item').hover(function(){
  $(this).find('.hover-area').toggleClass('hov');
});





$("#header .group-top .input-search").click(function(e){
  e.preventDefault();
  $(this).attr("placeholder", "검색어를 입력하세요");
});



$(document).ready(function () {
  $(".btn-menu").first().addClass("active");

  var firstTabContent = $(".btn-menu").first().data("tab");
  $("[data-tab-content]").hide();
  $("[data-tab-content='" + firstTabContent + "']").show();

  $(".btn-menu").click(function () {
      var selectedTab = $(this).data("tab");

      $(".btn-menu").removeClass("active");
      $(this).addClass("active");

      $("[data-tab-content]").hide();
      $("[data-tab-content='" + selectedTab + "']").show();
  });
});

