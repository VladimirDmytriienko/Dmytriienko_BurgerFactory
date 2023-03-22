const cards = document.querySelectorAll('.burgers__wrp-card');

cards.forEach(card => {
  const detailsButton = card.querySelector('a.burger__details-link');
  const closeButton = card.querySelector('.burger__details-close');
  const ingredients = card.querySelector('.ingredients');

  const toggleIngredients = () => {
    card.classList.toggle('active');
  };

  detailsButton.addEventListener('click', (event) => {
    toggleIngredients();
    event.stopPropagation();
  });

  closeButton.addEventListener('click', (event) => {
    toggleIngredients();
    event.stopPropagation();
  });

  card.addEventListener('click', toggleIngredients);
});
