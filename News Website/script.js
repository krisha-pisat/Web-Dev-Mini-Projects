const apikey = '1a09307631154c1fad28f45b787c75ea';

const blogContainers = document.querySelectorAll(".blogContainer");
const blogWrapper = document.querySelector(".BlogWrapper");

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error in fetching Random News", error);
        return [];
    }
}

function displayBlogs(articles) {
    blogWrapper.innerHTML = "";
    
    articles.forEach((article) => {
       
        const blogContainer = document.createElement("div");
        blogContainer.classList.add("blogContainer");
        
        const blogCard = document.createElement("div");
        blogCard.classList.add("blogCard");
        
        const img = document.createElement("img");
        
        img.src = article.urlToImage || "OIP.jpeg";
        img.alt = article.title;
        
        const title = document.createElement("h1");
        title.textContent = article.title || "No Title Available";
        
        const description = document.createElement("p");
        description.textContent = article.description || "No description available";

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogContainer.appendChild(blogCard);
        blogWrapper.appendChild(blogContainer);
    });
}


document.querySelector('.searchBar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchNews(this.value);
    }
});

document.querySelector('.SearchImg').addEventListener('click', function() {
    const searchTerm = document.querySelector('.searchBar').value;
    searchNews(searchTerm);
});

async function searchNews(query) {
    try {
        if (!query) {
            const articles = await fetchRandomNews();
            displayBlogs(articles);
            return;
        }
        
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayBlogs(data.articles);
    } catch (error) {
        console.error("Error in searching news:", error);
    }
}

(async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    } catch (error) {
        console.error("Error in fetching Random News", error);
    }
})();