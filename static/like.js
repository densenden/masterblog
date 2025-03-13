document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('like-button').addEventListener('click', function(event) {
        event.preventDefault();
        fetch(likeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                document.getElementById('like-count').textContent = data.likes;
                location.reload();  // Reload the page to reflect the updated like count
            } else {
                console.error('Error:', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});