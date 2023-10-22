//STEP 1
var favoriteMovies = ["Titanic", "Avatar", "Spiderman", "KGF", "Rajkumara"]
window.console.log(favoriteMovies[1]);

//STEP 2
var movies = new Array(5);
movies[0]= "Titanic";
movies[1]= "Avatar";
movies[2]= "Spiderman";
movies[3]= "KGF";
movies[4]= "Rajkumara";
window.console.log(movies[0]);

//STEP 3
var movies = new Array(5);
movies[0]= "Titanic";
movies[1]= "Avatar";
movies[2]= "Spiderman";
movies[3]= "KGF";
movies[4]= "Rajkumara";
movies.splice(2,0,"Superman");
window.console.log(movies.length);

//STEP 4
var movies = [];
movies[0]= "Titanic";
movies[1]= "Avatar";
movies[2]= "Spiderman";
movies[3]= "KGF";
movies[4]= "Rajkumara";
delete movies[0];
window.console.log(movies);

//STEP 5
var movies = [];
movies[0]= "Titanic";
movies[1]= "Avatar";
movies[2]= "Spiderman";
movies[3]= "KGF";
movies[4]= "Rajkumara";
movies[5]= "XXX";
movies[6]= "Silence";
window.console.log("for loop");
for(var i=0;i<movies.length;i++){
    window.console.log(movies[i] + "\n");
}

//STEP 6
var movies = [];
movies[0]= "Titanic";
movies[1]= "Avatar";
movies[2]= "Spiderman";
movies[3]= "KGF";
movies[4]= "Rajkumara";
movies[5]= "XXX";
movies[6]= "Silence";
var i;
window.console.log("for in loop");
for(i in movies){
    window.console.log(movies[i]+ "\n");
}

//STEP 7
var movies = [];
movies[0]= "Titanic";
movies[1]= "Avatar";
movies[2]= "Spiderman";
movies[3]= "KGF";
movies[4]= "Rajkumara";
movies[5]= "XXX";
movies[6]= "Silence";
var i;
movies.sort();
window.console.log("sorted order");
for(i in movies){
    window.console.log(movies[i]+ "\n");
}

//STEP 8
var movies = [];
movies[0]= "Titanic";
movies[1]= "Avatar";
movies[2]= "Spiderman";
movies[3]= "KGF";
movies[4]= "Rajkumara";
movies[5]= "XXX";
movies[6]= "Silence";
var leastFavMovies =[];
leastFavMovies[0]= "Robot";
leastFavMovies[1]= "Fast and furious";
leastFavMovies[2]= "Passengers";
window.console.log("Movies I like:\n\n");
var i;
for(i in movies){
    window.console.log(movies[i]+ "\n");
}
window.console.log("\n\nMovies I regret watching:\n\n");
for(i in leastFavMovies) {
    window.console.log(leastFavMovies[i]+ "\n");
}

//STEP 9
var movies = [];
movies[0]= "Titanic";
movies[1]= "Avatar";
movies[2]= "Spiderman";
movies[3]= "KGF";
movies[4]= "Rajkumara";
movies[5]= "XXX";
movies[6]= "Silence";
var leastFavMovies =[];
leastFavMovies[0]= "Robot";
leastFavMovies[1]= "Fast and furious";
leastFavMovies[2]= "Passengers";
movies = movies.concat(leastFavMovies);
movies.sort();
window.console.log(movies.reverse());

//STEP 10
var movies = [];
movies[0]= "Titanic";
movies[1]= "Avatar";
movies[2]= "Spiderman";
movies[3]= "KGF";
movies[4]= "Rajkumara";
movies[5]= "XXX";
movies[6]= "Silence";
var leastFavMovies =[];
leastFavMovies[0]= "Robot";
leastFavMovies[1]= "Fast and furious";
leastFavMovies[2]= "Passengers";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.slice(-1));

