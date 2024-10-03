async function loadUsers() {
  try {
    const response = await fetch('/users');

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error('Error loading users:', error);
  }
}

function displayUsers(users) {
  const tableBody = document.querySelector('#userTable tbody');

  users.forEach((user) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.vorname}</td>
      <td>${user.nachname}</td>
      <td>${user.email}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Load users when the page is loaded
window.addEventListener('DOMContentLoaded', loadUsers);
