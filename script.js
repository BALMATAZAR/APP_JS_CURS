'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }

        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    rememberMyFilms() {
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
    },
    writeYourGenres() {
        for(let i = 1; i <= 3; i++) {
            let FavGenres = prompt(`Ваш любимый жанр под номером ${i}`, "");
            
            if (FavGenres != "" && FavGenres != null) {
                personalMovieDB.genres.push(FavGenres);
            } else {
                alert("Введите корректный ответ");
                i--;
            }
        }
        personalMovieDB.genres.forEach(function(item, i, genres) {
            console.log(`Любимый жанр под номером ${i + 1} - это ${item}`);
        });
    },
    showMyDB () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("Доступ к базе данных - запрещен!");
        }
    },
    toggleVisibleMyDB () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();