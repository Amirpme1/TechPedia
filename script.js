function toggleDarkMode() {
    document.body.classList.toggle("dark");
}


function searchArticles() {

    const searchInput = document.getElementById("search");
    const articles = document.querySelectorAll(".article");

    if (!searchInput) return;

    const searchText = searchInput.value.trim().toLowerCase();

    articles.forEach(function(article) {

        const title = article.getAttribute("data-title") || "";
        const content = article.textContent || "";

        const fullText = (title + " " + content).toLowerCase();

        if (searchText === "" || fullText.includes(searchText)) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }

    });
}


function showArticle(type) {

    const articles = document.querySelectorAll(".article");

    articles.forEach(function(article) {
        article.style.display = "none";
    });

    let selectedArticle = null;

    if (type === "html") {
        selectedArticle = document.querySelector('[data-title*="html"]');
    }

    if (type === "css") {
        selectedArticle = document.querySelector('[data-title*="css"]');
    }

    if (type === "js") {
        selectedArticle = document.querySelector('[data-title*="javascript"]');
    }

    if (type === "ai") {
        selectedArticle = document.querySelector('[data-title*="هوش مصنوعی"]');
    }

    if (type === "network") {
        selectedArticle = document.querySelector('[data-title*="شبکه"]');
    }

    if (type === "security") {
        selectedArticle = document.querySelector('[data-title*="امنیت"]');
    }

    if (selectedArticle) {

        selectedArticle.style.display = "";

        selectedArticle.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
}


/* اجرای خودکار جستجو هنگام تایپ */

document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById("search");

    if (searchInput) {

        searchInput.addEventListener("input", searchArticles);

    }

});
