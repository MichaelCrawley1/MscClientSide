$(document ).ready(function(){
$.getJSON("http://localhost:8080/movies/convertJsonFromDatabase.php", function(data) {
$(data).each(function(i, field){
$("tbody").append($("<tr>")).append(field.title).append($("<td>").append(field.year)).append($("<td>").append(field.genre)).append($("<td>").append(field.leadActor)).append($("<td>").append(field.director));
});
});
});




















