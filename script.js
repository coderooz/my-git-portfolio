// script.js

const projectsContainer = document.getElementById('projects');

fetch('https://api.github.com/users/yourusername/repos')
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => console.error('Error fetching GitHub projects:', error));

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardContent = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.html_url}" target="_blank">View on GitHub</a>
    `;

    card.innerHTML = cardContent;
    return card;
}
