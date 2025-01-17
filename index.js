const searchBtn = document.getElementById("search-btn")
const searchBar = document.getElementById("search-bar")

searchBtn.addEventListener("click", fetchResults)

async function fetchResults() {
    try {
        const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ffd49fd7")
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.error("error", error)
    }
}
