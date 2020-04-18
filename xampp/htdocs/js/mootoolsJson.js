window.addEvent('domready', function() {
var jsonRequest = new Request.JSON({url: "http://localhost:8080/movies/convertJsonFromDatabase.php",
    method: "get",
onSuccess: function(data){
data.each(function(data){
$('tbody').appendHTML("<td>"+ data.title +"</td>" +"<td>" + data.year + "</td>"+ "<td>"+ data.genre +"</td>" +"<td>" + data.leadActor + "</td>"+"<td>"+ data.director +"</td>");
});
}
}).send();
});
	














