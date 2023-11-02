const userList = document.getElementById('userList');
const refreshButton = document.getElementById('refreshButton');

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        userList.innerHTML = '';

        users.forEach(user => {
            const userItem = document.createElement('li');
            userItem.textContent = `Nombre: ${user.name}, Email: ${user.email}`;
            userList.appendChild(userItem);

            userItem.addEventListener('click', () => {
                userList.removeChild(userItem);
            });
        });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}

refreshButton.addEventListener('click', () => {
    fetchUsers(); 
});

fetchUsers();
