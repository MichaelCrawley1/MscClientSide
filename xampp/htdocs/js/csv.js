var myRequest;
function start(){
myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function(){
if (this.readyState==4 && this.status==200){
var ourData = this.responseText;
var lines = ourData.split(",");
htmlData(lines);
}
};
myRequest.open("GET", "http://localhost:8080/movies/convertCSVFromDatabase.php", true);
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
if(i ===0){
cell1.innerHTML += data[0];
cell2.innerHTML += data[1];
cell3.innerHTML += data[2];
cell4.innerHTML += data[3];
cell5.innerHTML += data[4];
}
if (i===1){
cell1.innerHTML = data[5];
cell2.innerHTML = data[6];
cell3.innerHTML = data[7];
cell4.innerHTML = data[8];
cell5.innerHTML = data[9];
}

if (i===2){
cell1.innerHTML = data[10];
cell2.innerHTML = data[11];
cell3.innerHTML = data[12];
cell4.innerHTML = data[13];
cell5.innerHTML = data[14];
}
if (i===3){
cell1.innerHTML = data[15];
cell2.innerHTML = data[16];
cell3.innerHTML = data[17];
cell4.innerHTML = data[18];
cell5.innerHTML = data[19];
}

if (i===4){
cell1.innerHTML = data[20];
cell2.innerHTML = data[21];
cell3.innerHTML = data[22];
cell4.innerHTML = data[23];
cell5.innerHTML = data[24];
}
if (i===5){
cell1.innerHTML = data[25];
cell2.innerHTML = data[26];
cell3.innerHTML = data[27];
cell4.innerHTML = data[28];
cell5.innerHTML = data[29];
}
if (i===6){
cell1.innerHTML = data[30];
cell2.innerHTML = data[31];
cell3.innerHTML = data[32];
cell4.innerHTML = data[33];
cell5.innerHTML = data[34];
}
if (i===7){
cell1.innerHTML = data[35];
cell2.innerHTML = data[36];
cell3.innerHTML = data[37];
cell4.innerHTML = data[38];
cell5.innerHTML = data[39];
}

if (i===8){
cell1.innerHTML = data[40];
cell2.innerHTML = data[41];
cell3.innerHTML = data[42];
cell4.innerHTML = data[43];
cell5.innerHTML = data[44];
}
if (i===9){
cell1.innerHTML = data[45];
cell2.innerHTML = data[46];
cell3.innerHTML = data[47];
cell4.innerHTML = data[48];
cell5.innerHTML = data[49];
}
if (i===10){
cell1.innerHTML = data[50];
cell2.innerHTML = data[51];
cell3.innerHTML = data[52];
cell4.innerHTML = data[53];
cell5.innerHTML = data[54];
break;
}
}
}
window.addEventListener("load", start, true);