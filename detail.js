var detail = document.querySelector(".dtl")
let id = window.location.search.slice(1);
function detailmovie(id) {
    fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(res => res.json())
        .then(data => {

            detail.innerHTML += `
  
       

            <div class="dtl1">
            <div class="salamm1">
                <h1>${data.name}</h1>
                <Span class="span2">${data.genres}</Span> <br><span class="span2">IMDB: ${data.genres}</span>
                <p>
                  ${data.summary}
                </p>
                <div>
                <div class="div1" style="display: flex;">
                <span class="span1"> Premiered: </span>
                <span class="spann"> ${data.premiered}</span>
                </div>
                <div class="div1" style="display: flex;">
                <span>Ended :</span>
                <span class="spann"> : ${data.ended}</span>
                </div>
                </div>
                
            </div>


        </div>
        <div class="dtl2">
        <div class="img3">  <img class="detailimg"
                src="${data.image.medium}"
                alt="">
        </div>
          
        </div>
            `
        })
        .catch(error => console.error("Error fetching data:", error));
}


detailmovie(id);