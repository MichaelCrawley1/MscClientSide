window.addEvent('domready', function() {
var xmlRequest = new Request({url: "http://localhost:8080/movies/convertXMLFromDatabase.php",
    data: "xml",
    method: "get",
onSuccess: function(data, xmlData){
var movie = xmlData.documentElement
var movies = movie.getElementsByTagName("movie");
for (var i=0; i<movies.length; i++){
var title = movies[i].getElementsByTagName("title");
var year = movies[i].getElementsByTagName("year");
var genre = movies[i].getElementsByTagName("genre");
var leadActor = movies[i].getElementsByTagName("leadActor");
var director = movies[i].getElementsByTagName("director");
$('tbody').appendHTML("<td>"+ title[0].textContent +"</td>" +"<td>" + year[0].textContent + "</td>"+ "<td>"+ genre[0].textContent +"</td>" +"<td>" + leadActor[0].textContent + "</td>"+"<td>"+ director[0].textContent +"</td>");
}
}
}).send();
});














