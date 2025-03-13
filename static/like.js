document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('like-button').addEventListener('click', function(event) {
        event.preventDefault();
        const likeCountElement = document.getElementById('like-count');
        const initialLikes = parseInt(likeCountElement.textContent, 10) || 0;

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
                likeCountElement.textContent = data.likes;
                if (data.likes > 0) {
                    likeCountElement.parentElement.style.display = 'inline';
                }
                if (initialLikes === 0 && data.likes > 0) {
                    location.reload();  // Reload the page to reflect the updated like count
                }
            } else {
                console.error('Error:', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});