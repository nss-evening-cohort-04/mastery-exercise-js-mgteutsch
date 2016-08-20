var submit = document.getElementById('submit');
submit.addEventListener("click", retrieveInputs);


var treeInput = {rows: "", character: ""}


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