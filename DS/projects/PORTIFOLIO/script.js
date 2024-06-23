var typed = new Typed(".text", {
    strings: ["a Software Engineer", "a Web Developer", "an ML Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Example GitHub API call to load recent projects
fetch('https://api.github.com/users/your-username/repos')
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.querySelector('.projects-content');
        data.slice(0, 5).forEach(repo => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
            projectsContainer.appendChild(projectElement);
        });
    });
