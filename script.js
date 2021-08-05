// мой гнусный вариант в условиях:((((( )))))
    // if ((firstLastFilm && firstRateFilm) == null) {
    //     i--;
    // } else if ((firstLastFilm && firstRateFilm) == "" || firstLastFilm.length > 50) {
    //     i--;
    // } else {
    //     personalMovieDB.movies[firstLastFilm] = firstRateFilm;
    // }

'use strict';

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

// Второй вариант цикла!!!
// let i = 0;
// while(i < 2) {
//     let firstLastFilm = prompt("Один из последних просмотренных фильмов?", "");
//     let firstRateFilm = prompt("На сколько оцените его?", "");

//     if (firstLastFilm != null && firstRateFilm != null && firstLastFilm != "" && 
//         firstRateFilm != "" && firstLastFilm.length < 50) {
//             personalMovieDB.movies[firstLastFilm] = firstRateFilm;
//     } else {
//         i--;
//     }
//     i++;
// }

// Третий вариант цикла!!!
// let i = 0;
// do {
//     let firstLastFilm = prompt("Один из последних просмотренных фильмов?", "");
//     let firstRateFilm = prompt("На сколько оцените его?", "");

//     if (firstLastFilm != null && firstRateFilm != null && firstLastFilm != "" && 
//         firstRateFilm != "" && firstLastFilm.length < 50) {
//             personalMovieDB.movies[firstLastFilm] = firstRateFilm;
//     } else {
//         i--;
//     }
//     i++;
// } while (i < 2);


if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB.movies);


