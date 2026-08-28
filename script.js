function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function searchArticles() {
    const searchBox = document.getElementById("search");
    const articles = document.querySelectorAll(".article");

    const text = searchBox.value.trim().toLowerCase();

    articles.forEach(function(article) {
        const articleText = article.innerText.toLowerCase();

        if (text === "" || articleText.includes(text)) {
            article.style.display = "block";
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
        selectedArticle.style.display = "block";

        selectedArticle.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}
