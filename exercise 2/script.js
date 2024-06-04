"use strict";


document.getElementById('fetchTodo').addEventListener('click', function() {
    var todoId = document.getElementById('todoId').value;
    var todoInfoContainer = document.getElementById('todoInfo');
    
    // Fetch ToDo information from JSONPlaceholder API
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then(response => response.json())
    .then(todo => {
        // Display ToDo information
        todoInfoContainer.innerHTML = `
            <h2>ToDo Information</h2>
            <p>ID: ${todo.id}</p>
            <p>Title: ${todo.title}</p>
            <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
        `;
    })
    .catch(error => {
        // Display error message if ToDo is not found
        todoInfoContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});

