var cards = document.querySelector(".card");
const searchbox = document.getElementById("searchbox");
var say = 200;
var allShows = [];

const film = () => {
    fetch("https://api.tvmaze.com/shows")
        .then(res => res.json())
        .then(datas => {
            allShows = datas;
            renderShows(datas.slice(0, say)); 
        })
        .catch(error => console.error("Error fetching data:", error));
}

film();

document.getElementById("sortSelect").addEventListener("change", function () {
    const selectedOption = this.value; 
    if (selectedOption === "artan") {
        sortArtan();
    } else if (selectedOption === "azalan") {
        sortAzalan();
    }
});

function sortArtan() {
    allShows.sort((a, b) => a.rating.average - b.rating.average);
    renderShows(allShows); 
}

function sortAzalan() {
    allShows.sort((a, b) => b.rating.average - a.rating.average);
    renderShows(allShows); }

searchbox.addEventListener("input", function () {
    const searchText = searchbox.value.toLowerCase();
    const search = allShows.filter(element => element.name.toLowerCase().includes(searchText));
    renderShows(search); 
});

function renderShows(shows) { 
    cards.innerHTML = ""; 
    shows.forEach(element => {
        cards.innerHTML += `
        <a href="detail.html?${element.id}" class="movieCard" >
            <div class="imgg" id="bir" style="width: 18rem;">
                <img src="${element.image.medium}" class="card-img-top" alt="...">
                <div class="overlay">
                    <span>Details...</span>
                </div>
                <div class="card-body avarage">
                    <h5 class="card-title">${element.name}</h5>
                    <p>${element.rating.average}/10</p>
                </div>
                <div class="cards2">
                    <p class="date"><strong>Day:</strong>${element.schedule.days} </p>
                    <p class="date"><strong>Time:</strong> ${element.schedule.time}</p>
                </div>
            </div>
        </a>
        `;
    });
}
