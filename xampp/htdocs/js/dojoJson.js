require([ "dojo/dom", "dojo/request", "dojo/json",  "dojo/dom-construct" ,"dojo/domReady!"], function(dom, request,JSON, domConstruct ){
request.get("http://localhost:8080/movies/convertJsonFromDatabase.php", {
           handleAs: "json"
        }).then(function(data){
var movieContainer = document.querySelector("#movies_table > tbody");
data.forEach( function(item,i){
var row = domConstruct.toDom(  "<tr>" + "<td>" + item.title + "</td>" +  "<td>" + item.year + "</td>" + "<td>" + item.genre + "</td>" + "<td>" + item.leadActor + "</td>" + "<td>" + item.director + "</td>" + "</tr>");
domConstruct.place(row, movieContainer);
});
});
});










