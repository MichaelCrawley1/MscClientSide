window.addEvent('domready', function() {
var textRequest = new Request({url: "http://localhost:8080/movies/convertCSVFromDatabase.php",
    data: "text",
    method: "get",
onSuccess: function(text){
var lines = text.split(",");
lines.each(function(text,index){
if (index===0) {
$('tbody').appendHTML("<td>"+ lines[0] +"</td>" +"<td>" + lines[1] + "</td>"+ "<td>"+ lines[2] +"</td>" +"<td>" + lines[3] + "</td>"+"<td>"+ lines[4] +"</td>");
}
if (index===1) {
$('tbody').appendHTML("<td>"+ lines[5] +"</td>" +"<td>" + lines[6] + "</td>"+ "<td>"+ lines[7] +"</td>" +"<td>" + lines[8] + "</td>"+"<td>"+ lines[9] +"</td>");
}
if (index===2) {
$('tbody').appendHTML("<td>"+ lines[10] +"</td>" +"<td>" + lines[11] + "</td>"+ "<td>"+ lines[12] +"</td>" +"<td>" + lines[13] + "</td>"+"<td>"+ lines[14] +"</td>");
}
if (index===3) {
$('tbody').appendHTML("<td>"+ lines[15] +"</td>" +"<td>" + lines[16] + "</td>"+ "<td>"+ lines[17] +"</td>" +"<td>" + lines[18] + "</td>"+"<td>"+ lines[19] +"</td>");
}
if (index===4) {
$('tbody').appendHTML("<td>"+ lines[20] +"</td>" +"<td>" + lines[21] + "</td>"+ "<td>"+ lines[22] +"</td>" +"<td>" + lines[23] + "</td>"+"<td>"+ lines[24] +"</td>");
}

if (index===5) {
$('tbody').appendHTML("<td>"+ lines[25] +"</td>" +"<td>" + lines[26] + "</td>"+ "<td>"+ lines[27] +"</td>" +"<td>" + lines[28] + "</td>"+"<td>"+ lines[29] +"</td>");
}
if (index===6) {
$('tbody').appendHTML("<td>"+ lines[30] +"</td>" +"<td>" + lines[31] + "</td>"+ "<td>"+ lines[32] +"</td>" +"<td>" + lines[33] + "</td>"+"<td>"+ lines[34] +"</td>");
}
if (index===7) {
$('tbody').appendHTML("<td>"+ lines[35] +"</td>" +"<td>" + lines[36] + "</td>"+ "<td>"+ lines[37] +"</td>" +"<td>" + lines[38] + "</td>"+"<td>"+ lines[39] +"</td>");
}
if (index===8) {
$('tbody').appendHTML("<td>"+ lines[40] +"</td>" +"<td>" + lines[41] + "</td>"+ "<td>"+ lines[42] +"</td>" +"<td>" + lines[43] + "</td>"+"<td>"+ lines[44] +"</td>");
}
if (index===9) {
$('tbody').appendHTML("<td>"+ lines[45] +"</td>" +"<td>" + lines[46] + "</td>"+ "<td>"+ lines[47] +"</td>" +"<td>" + lines[48] + "</td>"+"<td>"+ lines[49] +"</td>");
}
if (index===10) {
$('tbody').appendHTML("<td>"+ lines[50] +"</td>" +"<td>" + lines[51] + "</td>"+ "<td>"+ lines[52] +"</td>" +"<td>" + lines[53] + "</td>"+"<td>"+ lines[54] +"</td>");
}

});
}
}).send();
});













