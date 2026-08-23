// ==============================
// TechPedia JavaScript
// ==============================


// تغییر حالت روشن و تاریک
function toggleDarkMode() {

    document.body.classList.toggle("dark");

}


// ==============================
// جستجوی مقالات
// ==============================

function searchArticles() {

    const searchInput =
        document.getElementById("search");

    const articles =
        document.querySelectorAll(".article");

    const text =
        searchInput.value.toLowerCase().trim();


    articles.forEach(function(article) {

        const title =
            article.getAttribute("data-title").toLowerCase();

        const content =
            article.textContent.toLowerCase();


        if (
            title.includes(text) ||
            content.includes(text)
        ) {

            article.style.display = "";

        } else {

            article.style.display = "none";

        }

    });

}


// ==============================
// نمایش مقاله با کلیک موضوع
// ==============================

function showArticle(type) {

    const articles =
        document.querySelectorAll(".article");

    articles.forEach(function(article) {

        article.style.display = "none";

    });


    let selectedArticle = null;


    if (type === "html") {
        selectedArticle =
            document.querySelector('[data-title*="html"]');
    }

    if (type === "css") {
        selectedArticle =
            document.querySelector('[data-title*="css"]');
    }

    if (type === "js") {
        selectedArticle =
            document.querySelector('[data-title*="javascript"]');
    }

    if (type === "ai") {
        selectedArticle =
            document.querySelector('[data-title*="هوش مصنوعی"]');
    }

    if (type === "network") {
        selectedArticle =
            document.querySelector('[data-title*="شبکه"]');
    }

    if (type === "security") {
        selectedArticle =
            document.querySelector('[data-title*="امنیت"]');
    }


    if (selectedArticle) {

        selectedArticle.style.display = "";

        selectedArticle.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}
