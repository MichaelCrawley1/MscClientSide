$( document ).ready(function() {
$.ajax({
	url:"http://localhost:8080/movies/convertCSVFromDatabase.php",
	datatype: "text",
	success: function(data){
	var lines = data.split(",");
	$(lines).each(function(i, field){
if(i ===0){
$("tbody").append($("<tr>")).append(lines[0]).append($("<td>").append(lines[1])).append($("<td>").append(lines[2])).append($("<td>").append(lines[3])).append($("<td>").append(lines[4]));
}
if(i ===1){
  $("tbody").append($("<tr>")).append(lines[5]).append($("<td>").append(lines[6])).append($("<td>").append(lines[7])).append($("<td>").append(lines[8])).append($("<td>").append(lines[9]));
}
if(i ===2){
  $("tbody").append($("<tr>")).append(lines[10]).append($("<td>").append(lines[11])).append($("<td>").append(lines[12])).append($("<td>").append(lines[13])).append($("<td>").append(lines[14]));
}
if(i ===3){
  $("tbody").append($("<tr>")).append(lines[15]).append($("<td>").append(lines[16])).append($("<td>").append(lines[17])).append($("<td>").append(lines[18])).append($("<td>").append(lines[19]));
     }
if(i ===4){
  $("tbody").append($("<tr>")).append(lines[20]).append($("<td>").append(lines[21])).append($("<td>").append(lines[22])).append($("<td>").append(lines[23])).append($("<td>").append(lines[24]));
     }
if(i ===5){
  $("tbody").append($("<tr>")).append(lines[25]).append($("<td>").append(lines[26])).append($("<td>").append(lines[27])).append($("<td>").append(lines[28])).append($("<td>").append(lines[29]));
     }
if(i ===6){
  $("tbody").append($("<tr>")).append(lines[30]).append($("<td>").append(lines[31])).append($("<td>").append(lines[32])).append($("<td>").append(lines[33])).append($("<td>").append(lines[34]));
     }

if(i ===7){
   $("tbody").append($("<tr>")).append(lines[35]).append($("<td>").append(lines[36])).append($("<td>").append(lines[37])).append($("<td>").append(lines[38])).append($("<td>").append(lines[39]));
     }

if(i ===8){
   $("tbody").append($("<tr>")).append(lines[40]).append($("<td>").append(lines[41])).append($("<td>").append(lines[42])).append($("<td>").append(lines[43])).append($("<td>").append(lines[44]));
     }

if(i ===9){
  $("tbody").append($("<tr>")).append(lines[45]).append($("<td>").append(lines[46])).append($("<td>").append(lines[47])).append($("<td>").append(lines[48])).append($("<td>").append(lines[49]));
      }

if(i ===10){
   $("tbody").append($("<tr>")).append(lines[50]).append($("<td>").append(lines[51])).append($("<td>").append(lines[52])).append($("<td>").append(lines[53])).append($("<td>").append(lines[54]));
      }
    });

	}
	});
	});
	
	
  







