const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#review-title').value.trim();
  const content = document.querySelector('#review-review').value.trim();
  const review_id = document.querySelector('#review-id').value.trim();

  // if (title && content && comment review_id) {
    if (title && content && review_id ) {
    // console.log(title, content);
    const response = await fetch(`/api/review/${review_id}`, {
      method: 'PUT',
      // body: JSON.stringify({ title, content }),
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create review');
    }
  }
};

document
  .querySelector('.edit-review-form')
  .addEventListener('submit', newFormHandler);

