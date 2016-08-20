//js document wasn't working the way I wanted it to, but I was able to get something working in the
//html file using <script> tags. 
//now working on making the code work in the quiz.js file, plus making the interactive text boxes work.

//var rows = document.getElementById("rowinput")*1;
//var character = document.getElementById("characterinput");

var rowsUnhappy = document.getElementById('rowinput');
var characterUnhappy = document.getElementById('characterinput');
var treeOutput = document.getElementById('treeOutput');

var tree = {rows: "", character: ""};

var submit = document.getElementById('submit');
submit.addEventListener("click", treeBuilder);

//function treeBuilder() { 
//	rows = rows.value;
//	character = character.value;
//	console.log(rows, character);
//		for (var i = 0; i < rows; i++) {
//		    for (var c = 0; c < (2*rows - 1); c++) {
//		         if (Math.abs((rows-1)-c)<=i) {
//		            document.getElementById('treeOutput').innerHTML += character;
//		         }
//		         else {
//		         	document.getElementById('treeOutput').innerHTML += "";
//		    }
//		document.getElementById('treeOutput').innerHTML += "<br/>";    
//		}
//	treeOutput.innerHTML;	
//	}
//}


function treeBuilder(myTree) {
	myTree.rows = rowsUnhappy.value;
	myTree.character = characterUnhappy.value; 
		for (var i = 0; i < myTree.rows; i++) {
		    for (var c = 0; c < (2*myTree.rows - 1); c++) {
		         if (Math.abs((myTree.rows-1)-c)<=i) {
		             console.log(myTree.character);
		         }
		         else {
		             console.log("");
		         }
		    }
		}
	}
//treeBuilder(tree);
