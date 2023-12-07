const newFormHandler = async (event) => {
  event.preventDefault();

  const review = document.querySelector('#review-review').value.trim();
  const review_id = document.querySelector('#review-id').value.trim();

  // if (review && review_id) {
    if (review && review_id ) {
    // console.log(review, review_id);
    const response = await fetch(`/api/review`, {
      method: 'POST',
      // body: JSON.stringify({ review, review_id }),
      body: JSON.stringify({ review, review_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create review');
    }
  }
};

document
  .querySelector('.new-review-form')
  .addEventListener('submit', newFormHandler);

