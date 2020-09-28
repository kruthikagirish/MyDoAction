// Create a new list item when clicking on the "+" button

document.querySelector('.add').addEventListener('click', addTask);

function addTask() {
	var ul = document.querySelector('.incomplete-tasks');
	var inpVal = document.querySelector('.add-items').value;
	var li = document.createElement("li");
	
	document.querySelector('.incomplete-tasks').style.display = 'block';	
	var t = document.createTextNode(inpVal);
	li.appendChild(t);
	ul.appendChild(li);
	
	document.querySelector('.add-items').value= ' ';
}

// Clear the list by clicking on the "clear" button

document.querySelector('.clear-all').addEventListener('click', clearAllFunc);

function clearAllFunc(){
	document.querySelector('.incomplete-tasks').innerHTML = ' ';
	document.querySelector('.add-items').value= ' ';	
}

// Completed tasks are crossed by clicking on the tasks

var select = document.querySelector('ul');

select.addEventListener('click', function(selected){
	if(selected.target.tagName === 'LI'){
		selected.target.classList.toggle('done');
	}
});

// "Thank you" message by clicking on the "Done" button

document.querySelector('.over').addEventListener('click', thank);

function thank() {
	window.alert('Thank you for using the app!! Kruthika');
}