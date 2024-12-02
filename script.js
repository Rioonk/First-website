// Function to create and display stars for ratings
function createRatingStars(rating) {
  const starsContainer = document.createElement('div');
  starsContainer.classList.add('stars-container');

  let ratingValue = Math.round(rating);

  // Loop through and create star elements
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    if (i <= ratingValue) {
      star.classList.add('star-filled'); // Filled stars for rating
    } else {
      star.classList.add('star-empty'); // Empty stars for rating
    }
    star.innerHTML = '★'; // Star symbol
    starsContainer.appendChild(star);
  }

  return starsContainer;
}

// Function to handle when movie details are displayed (click)
function showMovieDetails(title, genre, rating, year, image) {
  alert(`Movie: ${title}\nGenre: ${genre}\nRating: ${rating}\nYear: ${year}\nImage: ${image}`);
}

// Loop through each movie card and add the rating stars dynamically
document.querySelectorAll('.movie-card').forEach(function (movieCard) {
  const ratingText = movieCard.querySelector('.rating').textContent;
  const rating = parseFloat(ratingText.replace('Rating: ', '').trim());
  const stars = createRatingStars(rating);
  movieCard.querySelector('.movie-details').appendChild(stars);
});



              