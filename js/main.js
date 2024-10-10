const languageBtn = $("#language");
const languageSelect = $(".language-list");
languageBtn.on("click", () => {
    languageSelect.toggleClass("on");
});

$("#search-toggle").on("click", function () {
    $("#search-wrap").toggleClass("active"); // 검색창을 토글(보이기/숨기기)
});
