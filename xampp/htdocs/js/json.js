var myRequest;
function start(){
myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function(){
if (this.readyState==4 && this.status==200){
var ourData = JSON.parse(this.responseText);
htmlData(ourData);
}
};
myRequest.open("GET", "http://localhost:8080/movies/convertJsonFromDatabase.php", true);
myRequest.send();
}
function htmlData (data){
var movieContainer = document.querySelector("#movies_table > tbody");
for (var i=0; i<data.length; i++){
var row = movieContainer.insertRow();
var cell1 = row.insertCell();
var cell2 = row.insertCell();
var cell3 = row.insertCell();
var cell4 = row.insertCell();
var cell5 = row.insertCell();
cell1.innerHTML += data[i].title;
cell2.innerHTML += data[i].year;
cell3.innerHTML += data[i].genre;
cell4.innerHTML += data[i].leadActor;
cell5.innerHTML += data[i].director;
}
}
window.addEventListener("load", start, true);
