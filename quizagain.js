var treeInput = {rows: "", character: ""}


// Submit Button 
var submit = document.getElementById('submit');
submit.addEventListener("click", maybeBuildTree);


// Submit via pushing Enter
var rowsEnter = document.getElementById('rowinput');
rowsEnter.addEventListener("keypress", pushEnter);

var characterEnter = document.getElementById('characterinput');
characterEnter.addEventListener("keypress", pushEnter);

function pushEnter(e) {
	if (e.keyCode == 13) {
		maybeBuildTree();
	}
}


// Clear Button
var clear = document.getElementById('clear');
clear.addEventListener("click", clearAll);

function clearAll() {
	document.getElementById('rowinput').value = "";
	document.getElementById('characterinput').value = "";
}


// This tests whether the fields are entered; if yes, execute retrieveInputs
function maybeBuildTree() {
	if (!rowinput.value) {
		alert("You need to put stuff in the fields.");
	}
	else if (!characterinput.value) {
		alert("Seriously, put stuff in the fields.");
	}
	else {
		retrieveInputs();
	}
}


// This grabs the rows & character, then executes treeBuilder
function retrieveInputs() {
	treeInput.rows = document.getElementById('rowinput').value;
	treeInput.character = document.getElementById('characterinput').value;
	treeBuilder(treeInput);
}


function treeBuilder(myTree) {
	for (var i = 0; i < myTree.rows; i++) {
		var characterOutput = myTree.character.repeat(i*2+1);
		var spacesCalculation = ((myTree.rows*2-1) - (i*2+1))/2;
		var spacesOutput = " ".repeat(spacesCalculation);
		console.log(spacesOutput + characterOutput);
	}
}
