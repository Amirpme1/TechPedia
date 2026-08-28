function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function searchArticles() {

    let search = document.getElementById("search").value.toLowerCase();

    let articles = document.querySelectorAll(".article");

    articles.forEach(function(article) {

        let text = article.textContent.toLowerCase();

        if (text.includes(search)) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }

    });
}

function showArticle(type) {

    let articles = document.querySelectorAll(".article");

    articles.forEach(function(article) {
        article.style.display = "none";
    });

    let selected = document.querySelector('[data-title*="' + type + '"]');

    if (selected) {
        selected.style.display = "";
        selected.scrollIntoView({
            behavior: "smooth"
        });
    }
}
