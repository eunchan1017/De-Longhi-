const languageBtn = $("#language");
const languageSelect = $(".language-list");
languageBtn.on("click", () => {
    languageSelect.toggleClass("on");
});
