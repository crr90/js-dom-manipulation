// add an event listener
document.addEventListener('DOMContentLoaded', function(){



// create a var with a string stored inside
	var name = "Joe";

// create a var with a number stored inside
	var number = 5;

//create a var with a boolean stored inside
	var winterIsFun = false;

//create a var with an array stored inside
	var seasons = ['winter', 'summer', 'fall', 'spring']

/* 
	create a for loop that loops over your array logging each item to the console
*/


for (var i = 0; i < seasons.length; i++) {
	console.log(seasons[i]);
}

//store our JS selector in a variable
var heading = document.getElementById('title')

console.log(heading.innerText);

heading.innerText = 'Welcome to my form';

//Update the innerHTML of a DOM element with the id of 'main-section'
document.getElementById('main-section').innerHTML = '<h2>something else</h2><p>foo bar</p>';

// select multiple elements by their tag name
var allParas = document.getElementsByTagName('p')
console.log(allParas[0]);

// update the innerText of an item in our allParas array
allParas[2].innerText ='Updated this para via JS';

// select only the item with an index of 2, from our array
// of elements that have a class name of 'heading'
var specificHeading = document.getElementsByClassName('heading')[2];
console.log(specificHeading);


for(var i = 0; i < allParas.length; i++) {   
	console.log("this is paragraph number " + i); 
}


// add an event listener

/*document.getElementById('cool-button'),addEventListener('click', function(){
	alert('I have been clicked')
})*/


var div = document.getElementById('foo-bar')

div.innerText = 'december'

document.getElementById('foo-bar'), addEventListener('click', function(){
	alert(div.innerText)
})





}) // closes DOMContentLoaded










