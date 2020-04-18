Ext.onReady(function() {
Ext.Ajax.request({
url: "http://localhost:8080/movies/convertJsonFromDatabase.php",
success: function(response, opts) {
var obj = Ext.decode(response.responseText);
Ext.each(obj, function(obj) {
  Ext.DomHelper.append( 'tbody', '<td>' + obj.title + '</td>' + '<td>' + obj.year + '</td>' + '<td>' + obj.genre + '</td>' + '<td>' + obj.leadActor + '</td>' + '<td>' + obj.director + '</td>');
});
}
});
});



	


  
    
  







