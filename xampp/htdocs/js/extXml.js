Ext.onReady(function() {
Ext.Ajax.request({
     url: "http://localhost:8080/movies/convertXMLFromDatabase.php",
    success: function(response, opts) {
var obj = response.responseXML;
var movie = Ext.DomQuery.select('movie', obj);
Ext.each(movie, function(movie,index) {
var title = Ext.DomQuery.select('title', obj)[index].textContent;
var year = Ext.DomQuery.select('year', obj)[index].textContent;
var genre = Ext.DomQuery.select('genre', obj)[index].textContent;
var leadActor = Ext.DomQuery.select('leadActor', obj)[index].textContent;
var director = Ext.DomQuery.select('director', obj)[index].textContent;
Ext.DomHelper.append( 'tbody', '<td>' + title + '</td>' + '<td>' + year + '</td>' + '<td>' + genre + '</td>' + '<td>' + leadActor + '</td>' + '<td>' + director + '</td>');
});
}
});
});


	


  
    
  








