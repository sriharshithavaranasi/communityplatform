document.getElementById('community-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    fetch('/api/communities', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
    })
    .then(response => response.json())
    .then(community => {
        const li = document.createElement('li');
        li.textContent = `${community.name}: ${community.description}`;
        document.getElementById('community-list').appendChild(li);
    })
    .catch(err => console.log(err));
});

fetch('/api/communities')
    .then(response => response.json())
    .then(communities => {
        const list = document.getElementById('community-list');
        communities.forEach(community => {
            const li = document.createElement('li');
            li.textContent = `${community.name}: ${community.description}`;
            list.appendChild(li);
        });
    })
    .catch(err => console.log(err));
