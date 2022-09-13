const searchElement = document.querySelector('#search-results');
const searchDiv = document.querySelector('.search-results');
const searchInput = document.querySelector('#search-input');
async function API() {
    let response = await fetch('/data.json');
    const data = await response.json();
    searchInput.addEventListener('keyup', (event) => {
        let searchValue = event.target.value;
        searchElement.innerHTML = '';
        searchDiv.setAttribute('style', 'display:none');
        if (searchValue.length > 1) {
            searchDiv.setAttribute('style', 'display:block');
            SearchResults(data, searchValue);
        }

    })
}
API();
function SearchResults(data, searchValue) {
    data.forEach(element => {
        let text = searchValue.toUpperCase();
        if (element.title.toUpperCase().includes(text)) {
            searchElement.innerHTML += `  <li class="item">
            <a href="${element.dest_url}" class="item-link" target="_blank">
                <div class="item-image">
                    <img src="${element.img}" alt="${element.title}">
                </div>
                <div class="item-info">
                    <h3 class="item-title">${element.title}</h3>
                    <span class="price">${element.price}</span>
                    <span class="price">${element.cur}</span>
                </div>
            </a>
         </li>`;
        }
    });
}
searchInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    window.open(`https://www.vatanbilgisayar.com/arama/${event.target.value}`, '_blank');
  }
});