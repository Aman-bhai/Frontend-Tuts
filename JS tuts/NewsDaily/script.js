// uncomment this and put your api key const API_key = Put your Api Key;
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query) {
    const response = await fetch(`${url}${query}&apiKey=${API_key}`)
    const data = await response.json();
    console.log(data)
    bindData(data.articles);
}


function bindData(articles) {
    const container = document.getElementById("cards-container");

    const template_container = document.getElementById('template_container')
    container.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cloning = template_container.content.cloneNode(true);
        sendData(cloning, article);
        container.appendChild(cloning);
    });

    let active = null;
    const Button = document.getElementsByClassName("search-btn");
    const search = document.getElementsByClassName("search");

    Button.addEventListener("click", () => {
        const query = search.value;
        if (!query) return;
        fetchNews(query);
        active?.classList.remove("active");
        active = null;
    });

}
function sendData(card, article) {
    const img = card.querySelector(".card-img-top")
    const ctitle = card.querySelector(".card-title")
    const ctext = card.querySelector(".card-text")
    const link = card.querySelector(".link")
    const source = card.querySelector(".card-source")
    img.src = article.urlToImage;
    ctitle.innerHTML = article.title;
    link.href = article.url;
    ctext.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    source.innerHTML = `${article.source.name}.${date}`
}

function navlinks(id) {
    fetchNews(id);
}

function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    active?.classList.remove("active");
    active = navItem;
    active.classList.add("active");
}
