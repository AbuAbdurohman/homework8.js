fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                const container = document.querySelector('.container');
                const loader = document.querySelector('.loader');

                loader.style.display = 'none';
                container.style.display = 'block';

                users.forEach(user => {
                    const userElement = document.createElement('div');
                    userElement.classList.add('user');
                    userElement.innerHTML = `
                        <h2>${user.name}</h2>
                        <p>Email: ${user.email}</p>
                        <p>Phone: ${user.phone}</p>
                    `;
                    container.appendChild(userElement);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });