document.getElementById('comment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var commentInput = document.getElementById('comment-input');
    var commentText = commentInput.value.trim();

    if (commentText !== '') {
        addComment(commentText);
        commentInput.value = '';
    }
});

function addComment(text) {
    var commentsContainer = document.getElementById('comments-container');
    var commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.textContent = text;

    if (commentsContainer.childNodes.length > 0) {
        commentsContainer.insertBefore(commentElement, commentsContainer.childNodes[0]);
    } else {
        commentsContainer.appendChild(commentElement);
    }
}
