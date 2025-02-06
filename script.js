const categoryContainer = document.querySelector(".containercategory");

fetch(`https://kea-alt-del.dk/t7/api/seasons/`)
  .then((response) => response.json())
  .then((data) => showSeasons(data));

function showSeasons(seasons) {
  let outputHtml = "";
  seasons.map((season) => {
    outputHtml += `
    <a class="card-link" href="produktliste.html?season=${season.season}">
        <div class="card">
            <img class="card-image"
                src="https://dummyimage.com/600x300/377bbf/fff&text=${season.season}"
                alt="${season.season}">
            <h2>${season.season}</h2>
        </div>
    </a>`;
  });

  categoryContainer.innerHTML += outputHtml;
}
