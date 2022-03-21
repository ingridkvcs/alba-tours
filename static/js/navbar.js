const searchInput = $("#search-input")[0];
const searchButton = $("#search-button")[0];

searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        search();
    }
});
searchButton.addEventListener('click', search);

function search() {
    const url = "https://www.google.com/search?q=" + searchInput.value;
    window.open(url, '_blank').focus();
}
