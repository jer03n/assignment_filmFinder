const allMovies = document.getElementById("all-movies-list");
const imdbUrl = "https://www.imdb.com/title/";
const searchBar = document.getElementById("myInput");
const searchBarFooter = document.getElementById("myInput-footer");

// function to create new li's in ul 

function createLiItems(movie) {
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    const moviePoster = document.createElement("img"); 
    moviePoster.setAttribute("src", movie.poster);
    newA.setAttribute("href", imdbUrl + movie.imdbID);
    newA.setAttribute("target", "_blank");
    
    newLi.appendChild(newA).appendChild(moviePoster);
    return newLi;
};


// function to add new li to ul in DOM 

function addMoviesToDom(movies) {
    const addMovie = movies.map(createLiItems);
    addMovie.forEach((movie) => {
        allMovies.appendChild(movie);
    });
};
addMoviesToDom(movies);


// add eventlistener to radio buttons 

function addEventListener() {
    const btns = document.getElementsByName('movie_selection');
    btns.forEach(btn => {
        btn.addEventListener('change', handleOnChangeEvent);

    });
};
addEventListener();


// Empty allMovies  

function emptyMovies() {
    while (allMovies.firstChild) {
        allMovies.removeChild(allMovies.firstChild);
    }
};


// year filter 

function filterLatestMovies(year) {
    const filterYearMovies = movies.filter((movie) => {
        if (movie.year >= year) {
            return movie;
        }
    });
    emptyMovies();
    addMoviesToDom(filterYearMovies);
};


// movie filter

function filterMovies(wordInMovie) {
    const filterTitleMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(wordInMovie.toLowerCase());
    });
    emptyMovies();
    addMoviesToDom(filterTitleMovies);
};


// Handle on change event with switch  

function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case "AllMovies":
            filterLatestMovies(1900);
            break;
        case "NewMovies":
            filterLatestMovies(2014);
            break;
        case "Avenger":
            filterMovies("avenger");
            break;
        case "XMen":
            filterMovies("x-men");
            break;
        case "Princess":
            filterMovies("princess");
            break;
        case "Batman":
            filterMovies("batman");
            break;
    }
};


// Searchbar 

searchBar.addEventListener('input', (e) => {
        const searchString = e.target.value.toLowerCase();
        const searchFilter = movies.filter((movie) => {
            return movie.title.toLocaleLowerCase().includes(searchString);
        });
    emptyMovies();
    addMoviesToDom(searchFilter);
});

searchBarFooter.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    const searchFilter = movies.filter((movie) => {
        return movie.title.toLocaleLowerCase().includes(searchString);
    });
emptyMovies();
addMoviesToDom(searchFilter);
});
