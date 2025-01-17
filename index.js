const searchBtn = document.getElementById("search-btn")
const searchBar = document.getElementById("search-bar")
const movieList = document.getElementById("movie-list")

searchBtn.addEventListener("click", fetchResults)

async function fetchResults() {
    try {
        const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ffd49fd7")
        const data = await res.json()
        console.log(data)
        console.log(data.Title, data.ImdbRating, data.Runtime, data.Genre, data.Plot)
        if (searchBar.value.includes(data.Title)) {
            movieList.innerHTML = `
            <div class="movie-details">
                <div class="img-wrapper"></div>
                <div class="details-wrapper">
                    <h3 class="movie-title">${data.Title}</h3>
                    <h4 class="movie-runtime">${data.Runtime}</h4>
                    <h4 class="movie-genre">${data.Genre}</h4>
                    <p class="movie-plot">${data.Plot}</p>
                </div>
            </div>
        `
        }
    } catch (error) {
        console.error("error", error)
    }
}
