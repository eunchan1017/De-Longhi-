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
    autoplay: false,
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
        el: ".review-list-wrap .pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".review-list-wrap .btn-next",
        prevEl: ".review-list-wrap .btn-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
const enChange = function (lang) {
    // gnb 내용
    $(".gnb > li:nth-child(1) > a").text("home");
    $(".gnb > li:nth-child(2) > a").text("category");
    $(".gnb > li:nth-child(3) > a").text("event");
    $(".gnb > li:nth-child(4) > a").text("reviews");
    $(".gnb > li:nth-child(5) > a").text("About as");

    $(".visual-title h2").text("Experience the excellence of coffee");
    $(".visual-title p").text("Discover the art of making De'Longhi's oriental coffee");
    $(".visual-title a").text("buy now");

    $(".category-list > li:nth-child(1) h4").text("Fully automatic");
    $(".category-list > li:nth-child(2) h4").text("Semi automatic");
    $(".category-list > li:nth-child(3) h4").text("electric kettle");
    $(".category-list > li:nth-child(4) h4").text("cloud chino");
    $(".category-list > li:nth-child(5) h4").text("air fryer");
    $(".category-list > li:nth-child(6) h4").text("radiator");

    $("#best-product .sec-title").text("Best Product");
    $("#new-product .sec-title").text("New Product");
    $("#reviews .sec-title").text("Reviews Product");

    $(".member-wrap >li:nth-child(1) > a").html("<img src='./img/ico-language.png' alt='icon-language' />English");
    $(".member-wrap >li:nth-child(2) > a").text("sign in");
    $(".member-wrap >li:nth-child(3) > a").text("sign up");

    $(".gnb li:nth-child(1) .submenu li:nth-child(1) a").text("Home");

    $(".gnb li:nth-child(2) .submenu li:nth-child(1) a").text("Fully Coffee automatic");
    $(".gnb li:nth-child(2) .submenu li:nth-child(2) a").text("Semi Coffee automatic");
    $(".gnb li:nth-child(2) .submenu li:nth-child(3) a").text("Electronic kettle");
    $(".gnb li:nth-child(2) .submenu li:nth-child(4) a").text("Radiator");

    $(".gnb li:nth-child(3) .submenu li:nth-child(1) a").text("Event");

    $(".gnb li:nth-child(4) .submenu li:nth-child(1) a").text("Coffee machine review");
    $(".gnb li:nth-child(4) .submenu li:nth-child(2) a").text("Electric Kettle Reviews");
    $(".gnb li:nth-child(4) .submenu li:nth-child(3) a").text("Other product reviews");

    $(".gnb li:nth-child(5) .submenu li:nth-child(1) a").text("Directions");
    $("#search-input").html();
};

$(".English").on("click", () => {
    enChange("en");
});
$(".English").on("click", () => {
    enChange("ko");
});
// 서브 구매 페이지
var productMenuSlider = new Swiper(".product-menu-slider", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var productSlider = new Swiper(".product-slider", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".product-wrap .button-next",
        prevEl: ".product-wrap .button-prev",
    },
    thumbs: {
        swiper: productMenuSlider,
    },
});
const filterTab = $(".review-filter-select .sort-filter");
const sortFilter = $(".sort-filter");
filterTab.on("click", function () {
    filterTab.removeClass("on");
    $(this).addClass("on");
});
