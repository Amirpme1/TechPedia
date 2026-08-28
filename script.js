function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function searchArticles() {

    const searchBox = document.getElementById("search");
    const articles = document.querySelectorAll(".article");

    if (!searchBox) return;

    const searchText = searchBox.value.trim().toLowerCase();

    articles.forEach(function(article) {

        const content = (
            article.innerText + " " +
            (article.getAttribute("data-title") || "")
        ).toLowerCase();

        if (searchText === "" || content.includes(searchText)) {

            article.style.setProperty("display", "block", "important");

        } else {

            article.style.setProperty("display", "none", "important");

        }

    });
}

function showArticle(type) {

    const articles = document.querySelectorAll(".article");

    articles.forEach(function(article) {
        article.style.setProperty("display", "none", "important");
    });

    let selectedArticle = null;

    if (type === "html") {
        selectedArticle = document.querySelector('[data-title*="html"]');
    }

    else if (type === "css") {
        selectedArticle = document.querySelector('[data-title*="css"]');
    }

    else if (type === "js") {
        selectedArticle = document.querySelector('[data-title*="javascript"]');
    }

    else if (type === "ai") {
        selectedArticle = document.querySelector('[data-title*="هوش مصنوعی"]');
    }

    else if (type === "network") {
        selectedArticle = document.querySelector('[data-title*="شبکه"]');
    }

    else if (type === "security") {
        selectedArticle = document.querySelector('[data-title*="امنیت"]');
    }

    if (selectedArticle) {

        selectedArticle.style.setProperty(
            "display",
            "block",
            "important"
        );

        selectedArticle.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}
