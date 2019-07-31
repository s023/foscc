const searchForm = document.querySelector("#search-form");
const movie = document.querySelector('#movies');
console.log(searchForm);

/* apiSearch function should show film recomendation according to the input from searchForm 
and after API response*/

function apiSearch(event) {
  event.preventDefault();
  const searchText = document.querySelector(".form-control").value;
  const server =
    "https://api.themoviedb.org/3/search/multi?api_key=62c018da1ad6a97a95be8cb3cc7c5c76&language=en-US&query=" +
    searchText +
    "&page=1&include_adult=false";
    requestApi("GET", server);
}

searchForm.addEventListener("submit", apiSearch);

/* requestApi talks to server and returns url*/

function requestApi(method, url) {
  // creating request object
  const request = new XMLHttpRequest();
  // request settings

  request.open(method, url);
  request.send();

  request.addEventListener("readystatechange", function() {
    if (request.readyState !== 4) {
      return;
    }

    if (request.status !== 200) {
      console.log("error: " + request.status);
      return;
    }

    const output = JSON.parse(request.responseText);

    output.results.forEach(item => {
      let nameItem = item.name || item.title;
      console.log(nameItem);
    });

    movie.innerHTML = "<div class='col-3'>hello</div>";

    console.log(output);
  });
}
