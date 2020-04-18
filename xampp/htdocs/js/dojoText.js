require(["dojo/dom", "dojo/request", "dojo/query" ,"dojo/dom-construct" ,"dojo/domReady!"], function(dom, request, query, domConstruct ){
request.get("http://localhost:8080/movies/convertCSVFromDatabase.php", {
            handleAs: "text"
        }).then(function(data){
var lines = data.split(",");
var movieContainer = document.querySelector("#movies_table > tbody");
lines.forEach( function(item,i){
if (i===0) {
var row0 = domConstruct.toDom(  "<tr>" + "<td>" + lines[0] + "</td>" +  "<td>" + lines[1] + "</td>" + "<td>" + lines[2] + "</td>" + "<td>" + lines[3] + "</td>" + "<td>" + lines[4] + "</td>" + "</tr>");
domConstruct.place(row0, movieContainer);
}
if (i===1) {
var row1 = domConstruct.toDom(  "<tr>" + "<td>" + lines[5] + "</td>" +  "<td>" + lines[6] + "</td>" + "<td>" + lines[7] + "</td>" + "<td>" + lines[8] + "</td>" + "<td>" + lines[9] + "</td>" + "</tr>");
domConstruct.place(row1, movieContainer);
}     
if (i===2) {
var row2 = domConstruct.toDom(  "<tr>" + "<td>" + lines[10] + "</td>" +  "<td>" + lines[11] + "</td>" + "<td>" + lines[12] + "</td>" + "<td>" + lines[13] + "</td>" + "<td>" + lines[14] + "</td>" + "</tr>");
domConstruct.place(row2, movieContainer);
}    
if (i===3) {
var row3 = domConstruct.toDom(  "<tr>" + "<td>" + lines[15] + "</td>" +  "<td>" + lines[16] + "</td>" + "<td>" + lines[17] + "</td>" + "<td>" + lines[18] + "</td>" + "<td>" + lines[19] + "</td>" + "</tr>");
domConstruct.place(row3, movieContainer);
}
if (i===4) {
var row4 = domConstruct.toDom(  "<tr>" + "<td>" + lines[20] + "</td>" +  "<td>" + lines[21] + "</td>" + "<td>" + lines[22] + "</td>" + "<td>" + lines[23] + "</td>" + "<td>" + lines[24] + "</td>" + "</tr>");
domConstruct.place(row4, movieContainer);
}   
if (i===5) {
var row5 = domConstruct.toDom(  "<tr>" + "<td>" + lines[25] + "</td>" +  "<td>" + lines[26] + "</td>" + "<td>" + lines[27] + "</td>" + "<td>" + lines[28] + "</td>" + "<td>" + lines[29] + "</td>" + "</tr>");
domConstruct.place(row5, movieContainer);
}  
if (i===6) {
var row6 = domConstruct.toDom(  "<tr>" + "<td>" + lines[30] + "</td>" +  "<td>" + lines[31] + "</td>" + "<td>" + lines[32] + "</td>" + "<td>" + lines[33] + "</td>" + "<td>" + lines[34] + "</td>" + "</tr>");
domConstruct.place(row6, movieContainer);
} 
if (i===7) {
var row7 = domConstruct.toDom(  "<tr>" + "<td>" + lines[35] + "</td>" +  "<td>" + lines[36] + "</td>" + "<td>" + lines[37] + "</td>" + "<td>" + lines[38] + "</td>" + "<td>" + lines[39] + "</td>" + "</tr>");
domConstruct.place(row7, movieContainer);
}  
if (i===8) {
var row8 = domConstruct.toDom(  "<tr>" + "<td>" + lines[40] + "</td>" +  "<td>" + lines[41] + "</td>" + "<td>" + lines[42] + "</td>" + "<td>" + lines[43] + "</td>" + "<td>" + lines[44] + "</td>" + "</tr>");
domConstruct.place(row8, movieContainer);
} 
if (i===9) {
var row9 = domConstruct.toDom(  "<tr>" + "<td>" + lines[45] + "</td>" +  "<td>" + lines[46] + "</td>" + "<td>" + lines[47] + "</td>" + "<td>" + lines[48] + "</td>" + "<td>" + lines[49] + "</td>" + "</tr>");
domConstruct.place(row9, movieContainer);
} 
if (i===10) {
var row10 = domConstruct.toDom(  "<tr>" + "<td>" + lines[50] + "</td>" +  "<td>" + lines[51] + "</td>" + "<td>" + lines[52] + "</td>" + "<td>" + lines[53] + "</td>" + "<td>" + lines[54] + "</td>" + "</tr>");
domConstruct.place(row10, movieContainer);
}
});
});
});









