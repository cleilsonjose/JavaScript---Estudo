var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
 
 var todos = JSON.parse(localStorage.getItem('list_todos')) || []; 

 function renderTodos() {
 	listElement.innerHTML = '';
 	
 	for(todo of todos){
 		var todoElement = document.createElement('li');
 		var todoText = document.createTextNode(todo);

		 var linkElement = document.createElement('a');
		 linkElement.setAttribute('href', '#');
 		var linkText = document.createTextNode('Excluir');

		 var pos = todos.indexOf(todo);

		 linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
 		

 		linkElement.appendChild(linkText);

 		todoElement.appendChild(todoText);
 		todoElement.appendChild(linkElement);

 		listElement.appendChild(todoElement);
 	}
 } 

 renderTodos();

 function addTodo() {
 	var todoText = inputElement.value; 	
 	//add um valor ao array
 	todos.push(todoText);
 	//apaga o valor do input
 	inputElement.value = '';
	 renderTodos();
	 saveToStorege();
 }	

 buttonElement.onclick = addTodo;

 function deleteTodo(pos) {
 		todos
 		.splice(pos, 1);
		 renderTodos();
		 saveToStorege();
 }

 function saveToStorege(){
	 
	 localStorage.setItem('list_todos', JSON.stringify(todos));

 }