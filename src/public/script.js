document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/welcome')
        .then(response => response.json())
        .then(data => {
            const apiDataElement = document.getElementById('api-data');
            apiDataElement.innerHTML = `
                <h3>${data.message}</h3>
                <p><strong>Description:</strong> ${data.description}</p>
                <p><strong>Container ID:</strong> ${data.container}</p>
                <p><strong>Environment:</strong> ${data.environment}</p>
                <p><strong>Timestamp:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
            `;
        })
        .catch(error => {
            document.getElementById('api-data').innerHTML = 
                '<p>❌ Error loading API data</p>';
        });
});
