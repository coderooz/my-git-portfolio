const projectsContainer = document.getElementById('projects');

fetch('https://api.github.com/users/coderooz/repos')
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.html_url}" target="_blank">View on GitHub</a>
            `;
            projectsContainer.appendChild(projectElement);
        });
    })
    .catch(error => console.error('Error fetching GitHub projects:', error));
