async function getArticles() {
    const article = await fetch("http://localhost:3000/articles").then(result => result.json())
    article.forEach(renderArticle)
}

function renderArticle({ title, content, author, id }) {
    const article = document.createElement("article")
    article.id = id
    article.classList.add("article-container")

    const titleArticle = document.createElement("h2")
    titleArticle.innerText = title
    titleArticle.classList.add("title-article")

    const contentArticle = document.createElement("p")
    contentArticle.innerHTML = content
    contentArticle.classList.add("content-article")

    const authorArticle = document.createElement("p")
    authorArticle.innerText = `@${author}`
    authorArticle.classList.add("author-article")
   
    article.append(titleArticle, contentArticle, authorArticle)
    document.querySelector(".articles").appendChild(article)
}

document.addEventListener("DOMContentLoaded", getArticles)

document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault()
    
    const article = {
        title: document.querySelector("#title").value,
        content: document.querySelector("#content").value,
        author: document.querySelector("#author").value
    }

    const data = await fetch("http://localhost:3000/articles", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    })

    const dataJson = await data.json()
    renderArticle(dataJson)
    console.log(data)
})