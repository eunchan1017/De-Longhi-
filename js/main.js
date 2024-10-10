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
