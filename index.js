fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ffd49fd7")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.actors)
    })