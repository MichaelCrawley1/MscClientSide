Ext.onReady(function() {
Ext.Ajax.request({
url: "http://localhost:8080/movies/convertCSVFromDatabase.php",
success: function(response, opts) {
         var obj = response.responseText;
         var lines = obj.split(",");
for (var i=0; i<lines.length; i++){
if (i===0){
Ext.DomHelper.append( 'tbody', '<td>' + lines[0] + '</td>' + '<td>' + lines[1] + '</td>' + '<td>' + lines[2] + '</td>' + '<td>' + lines[3] + '</td>' + '<td>' + lines[4] + '</td>');
}
if(i===1){
Ext.DomHelper.append( 'tbody', '<td>' + lines[5] + '</td>' + '<td>' + lines[6] + '</td>' + '<td>' + lines[7] + '</td>' + '<td>' + lines[8] + '</td>' + '<td>' + lines[9] + '</td>');
}
if (i===2){
Ext.DomHelper.append( 'tbody', '<td>' + lines[10] + '</td>' + '<td>' + lines[11] + '</td>' + '<td>' + lines[12] + '</td>' + '<td>' + lines[13] + '</td>' + '<td>' + lines[14] + '</td>');
}
if (i===3){
Ext.DomHelper.append( 'tbody', '<td>' + lines[15] + '</td>' + '<td>' + lines[16] + '</td>' + '<td>' + lines[17] + '</td>' + '<td>' + lines[18] + '</td>' + '<td>' + lines[19] + '</td>');
}
if (i===4){
Ext.DomHelper.append( 'tbody', '<td>' + lines[20] + '</td>' + '<td>' + lines[21] + '</td>' + '<td>' + lines[22] + '</td>' + '<td>' + lines[23] + '</td>' + '<td>' + lines[24] + '</td>');
}
if (i===5){
Ext.DomHelper.append( 'tbody', '<td>' + lines[25] + '</td>' + '<td>' + lines[26] + '</td>' + '<td>' + lines[27] + '</td>' + '<td>' + lines[28] + '</td>' + '<td>' + lines[29] + '</td>');
}

if (i===6){
Ext.DomHelper.append( 'tbody', '<td>' + lines[30] + '</td>' + '<td>' + lines[31] + '</td>' + '<td>' + lines[32] + '</td>' + '<td>' + lines[33] + '</td>' + '<td>' + lines[34] + '</td>');
}
if (i===7){
Ext.DomHelper.append( 'tbody', '<td>' + lines[35] + '</td>' + '<td>' + lines[36] + '</td>' + '<td>' + lines[37] + '</td>' + '<td>' + lines[38] + '</td>' + '<td>' + lines[39] + '</td>');
}
if (i===8){
Ext.DomHelper.append( 'tbody', '<td>' + lines[40] + '</td>' + '<td>' + lines[41] + '</td>' + '<td>' + lines[42] + '</td>' + '<td>' + lines[43] + '</td>' + '<td>' + lines[44] + '</td>');
}
if (i===9){
Ext.DomHelper.append( 'tbody', '<td>' + lines[45] + '</td>' + '<td>' + lines[46] + '</td>' + '<td>' + lines[47] + '</td>' + '<td>' + lines[48] + '</td>' + '<td>' + lines[49] + '</td>');
}
if (i===10){
Ext.DomHelper.append( 'tbody', '<td>' + lines[50] + '</td>' + '<td>' + lines[51] + '</td>' + '<td>' + lines[52] + '</td>' + '<td>' + lines[53] + '</td>' + '<td>' + lines[54] + '</td>');
}
}
}
});
});




	


  
    
  








