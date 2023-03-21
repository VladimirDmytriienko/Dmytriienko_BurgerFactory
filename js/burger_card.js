const cards = document.querySelectorAll('.burgers__wrp-card');

cards.forEach(card => {
  const detailsButton = card.querySelector('a.burger__details-link');
  const reduceButton = card.querySelector('.burger__details-close');
  const ingredients = card.querySelector('.ingredients');

  detailsButton.addEventListener('click', () => {
    card.classList.add('active');
  });

  reduceButton.addEventListener('click', () => {
    card.classList.remove('active');
  });
});