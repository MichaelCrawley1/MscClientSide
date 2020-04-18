var myRequest;
function start(){
myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function(){
if (this.readyState==4 && this.status==200){
var ourData = this.responseXML;
htmlData(ourData);
}
};
myRequest.open("GET", "http://localhost:8080/movies/convertXMLFromDatabase.php", true);
myRequest.send();
}
function htmlData (data){
var movieContainer = document.querySelector("#movies_table > tbody");
var root = data.documentElement;
var movie = root.getElementsByTagName("movie");
for (var i=0; i<movie.length; i++){
var title = movie[i].getElementsByTagName("title");
var year = movie[i].getElementsByTagName("year");
var genre = movie[i].getElementsByTagName("genre");
var leadActor = movie[i].getElementsByTagName("leadActor");
var director = movie[i].getElementsByTagName("director");
var row = movieContainer.insertRow();
var cell1 = row.insertCell();
var cell2 = row.insertCell();
var cell3 = row.insertCell();
var cell4 = row.insertCell();
var cell5 = row.insertCell();
cell1.innerHTML += title[0].textContent;
cell2.innerHTML += year[0].textContent;
cell3.innerHTML += genre[0].textContent;
cell4.innerHTML += leadActor[0].textContent;
cell5.innerHTML += director[0].textContent;
}
}
window.addEventListener("load", start, true);