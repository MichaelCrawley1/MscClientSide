$(document ).ready(function() {
$.ajax({
	url:"http://localhost:8080/movies/convertXMLFromDatabase.php",
	datatype: "xml",
	success: function(data){
$(data).find("movies movie").each(function(i, field){
var title = $(field).find("title").text();
var year = $(field).find("year").text();
var genre = $(field).find("genre").text();
var leadActor = $(field).find("leadActor").text();
var director = $(field).find("director").text();
$("tbody").append($("<tr>")).append(title).append($("<td>").append(year)).append($("<td>").append(genre)).append($("<td>").append(leadActor)).append($("<td>").append(director));
});
}
});
});







