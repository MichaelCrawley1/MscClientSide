var myRequest;

var buttonCounter = 0;



function start(){
/*
var name = "Michael";

console.log(name);

name += " and Peter";

console.log(name);

Just a test

*/ 

// trying to understand promises here.

setTimeoutPromise(2000).then(() => console.log("this callback is done in 2 seconds!")).catch((err) => console.error(err));


function setTimeoutPromise(time) {
return new Promise((resolve, reject) =>{

		if (isNaN(time)){

			reject(new Error("The catch, caught an error here"));
		}

		setTimeout(resolve, time);

 
});
	

	

	

}




var rankingsBody = document.querySelector("#movies_table > tbody");

console.log(rankingsBody);
	var btn = document.getElementById("btn");
	btn.addEventListener("click", onTheFly, false);
}


function onTheFly(){
buttonCounter++;
	myRequest = new XMLHttpRequest();

//the call back below seems like we are making a constructor method even though we are not

myRequest.onreadystatechange = function(){

 if (this.readyState==4 && this.status==200){


var ourData = JSON.parse(this.responseText);
//we want to pass in the json data into the function
//so it can work with the data

console.log (ourData);
htmlData(ourData);
	


}
};

myRequest.open("GET", "https://yacdn.org/serve/http://webdev.student.uws.ac.uk/movie-trivia.php?maxAge=0", true);




myRequest.send();

}

function htmlData (data){
var movieContainer = document.querySelector("#movies_table > tbody");
var btn = document.getElementById("btn");
	



for (var i=0; i<data.length; i++){

console.log(data[i]);

	if(buttonCounter >=2){

		
		btn.disable = true;
	}

	else{
var row = movieContainer.insertRow();
console.log(row);
var cell1 = row.insertCell();
var cell2 = row.insertCell();
var cell3 = row.insertCell();
var cell4 = row.insertCell();
var cell5 = row.insertCell();

cell1.innerHTML += data[i];
cell2.innerHTML += data;
cell3.innerHTML += data;
cell4.innerHTML += data;
cell5.innerHTML += data;

}
}






/*

for (var i=0; i<data.length; i++){
	var tr = document.createElement("tr");
var td = document.createElement("td");
var trInside = document.createElement("tr");
var tdInside = document.createElement("td");
movieContainer.appendChild(tr);
tr.appendChild(td);
td.appendChild(trInside);
var title =  "<br/> " + data[i].title;
td.insertAdjacentHTML('beforeend', title);
var year =  "<br/> " + data[i].year;
trInside.insertAdjacentHTML('beforeend', year);

}



*/
}
/*
data.forEach(function (entry, index){

console.log(entry);
var comment = "Greeting message from user! " +index + " " + entry['title'];

movieContainer.innerHTML += comment;
//movieContainer.insertAdjacentHTML('afterend', comment);


	});
*/
//ok i am just going to try and do the same thing with the for each method.



//now to work with the json data in here we simply 
// say data./= whatever



// yeah i think i have seen where i need to append the data, in the string i don't think javascript is calibrated to take table rows etc as a string.  

window.addEventListener("load", start, true);