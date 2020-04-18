require(["dojo/dom", "dojo/request", "dojo/query" ,"dojo/dom-construct" ,"dojo/domReady!"], function(dom, request, query, domConstruct ){
request.get("http://localhost:8080/movies/convertXMLFromDatabase.php", {
   handleAs: "xml"
}).then(function(data){
var root = data.documentElement;
var movie = query("movie", root);
var movieContainer = document.querySelector("#movies_table > tbody");
movie.forEach( function(item,i){
var title = query("title", root)[i].textContent;
var year = query("year", root)[i].textContent;
var genre = query("genre", root)[i].textContent;
var leadActor = query("leadActor", root)[i].textContent;
var director = query("director", root)[i].textContent;
var row = domConstruct.toDom(  "<tr>" + "<td>" + title + "</td>" +  "<td>" + year + "</td>" + "<td>" + genre + "</td>" + "<td>" + leadActor + "</td>" + "<td>" + director + "</td>" + "</tr>");
domConstruct.place(row, movieContainer);
});
});
});










