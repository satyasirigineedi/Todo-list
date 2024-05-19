document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Event listener for form submission
    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = ''; // Clear the input field after adding the task
    });

    // Function to add a new to-do item
    function addTodo(task) {
        const todoItem = document.createElement('li');

        // Create the text node
        const todoText = document.createElement('span');
        todoText.textContent = task;
        
        // Create the delete button
        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'x';
        deleteButton.className = 'delete';
        deleteButton.onclick = () => {
            todoList.removeChild(todoItem);
        };

        // Add the text and delete button to the list item
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        // Add click event to toggle the completed class
        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        // Append the new to-do item to the list
        todoList.appendChild(todoItem);
    }
});
