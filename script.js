const arr = [
    { username: 'ramin', age: 12 },
    { username: 'eldar', age: 20 },
    { username: 'vefadar', age: 58 },
    { username: 'samir', age: 48 },
];

const ul = document.getElementById('userList'); 

arr.forEach(({ username, age }) => {
    const li = document.createElement('li'); 
    li.textContent = `${username}-${age}`;
    ul.appendChild(li); 
});
