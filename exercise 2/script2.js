"use strict";


document.addEventListener('DOMContentLoaded', function() {
    fetchUsers();
});

function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        displayUsers(users);
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });
}

function displayUsers(users) {
    var usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
    users.forEach(user => {
        var row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
                <td>${user.company.name}</td>
            </tr>
        `;
        usersTable.insertAdjacentHTML('beforeend', row);
    });
}