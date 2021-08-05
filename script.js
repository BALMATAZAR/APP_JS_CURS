'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let firstLastFilm = prompt("Один из последних просмотренных фильмов?", "");
        let firstRateFilm = prompt("На сколько оцените его?", "");
    
        if (firstLastFilm != null && firstRateFilm != null && firstLastFilm != "" && 
            firstRateFilm != "" && firstLastFilm.length < 50) {
                personalMovieDB.movies[firstLastFilm] = firstRateFilm;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
    
}

detectPersonalLevel();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        return;
    }
}

showMyDB();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        let FavGenres = prompt(`Ваш любимый жанр под номером ${i}`, "");

        // if (FavGenres != "" && FavGenres != null && FavGenres.legth < 15) {
        //     let FavGenres = prompt(`Ваш любимый жанр под номером ${i}`, "");
        // } else {
        //     i--;
        // }

        personalMovieDB.genres.push(FavGenres);
    }
}

writeYourGenres();

