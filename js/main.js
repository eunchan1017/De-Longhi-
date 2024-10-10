const languageBtn = $("#language");
const languageSelect = $(".language-list");
languageBtn.on("click", () => {
    languageSelect.toggleClass("on");
});

$("#search-toggle").on("click", function () {
    $("#search-wrap").toggleClass("active"); // 검색창을 토글(보이기/숨기기)
});
const back = $(".back");
const $submenu = $(".submenu");
const $menu = $(".gnb > li ");
const duration = 300; // 0.3초
$menu.on("mouseenter", function () {
    $(this).find($submenu).stop().addClass("on");
    // $submenu.addClass("on");
    back.addClass("on");
});
$menu.on("mouseleave", function () {
    $submenu.removeClass("on");
    back.removeClass("on");
});
const reviewList = new Swiper(".review-list", {
    // Optional parameters
    direction: "horizontal", //vertical
    loop: true,
    autoplay: true,
    speed: 1000, //기본값 300
    effect: "slide", // slide, fade, cube, flip, coverflow

    // 캐러셀 만들기
    slidesPerView: 3, // 보여질 슬라이드 갯수
    spaceBetween: 20, //간격 20px
    centeredSlides: false, //첫번째 슬라이드를 가운데로

    //RWD setting : min-width, 모바일부터 PC까지 설정한다.
    // breakpoints: {
    //     768: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     1200: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    // },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
