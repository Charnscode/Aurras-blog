// Sélectionner l'élément à afficher ou masquer
const element = document.querySelector('.element');

// Ajouter un événement click pour afficher ou masquer l'élément
document.querySelector('.button').addEventListener('click', () => {
  element.classList.toggle('hidden');
});
// Sélectionner les liens de navigation
const navLinks = document.querySelectorAll('.nav a');

// Ajouter un événement click pour chaque lien
aanavLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
    });
  });
});





// Créer un système de recherche
const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  // Rechercher les résultats
  const results = [];
  // Afficher les résultats
  searchResults.innerHTML = '';
  results.forEach((result) => {
    const item = document.createElement('div');
    item.textContent = result;
    searchResults.appendChild(item);
  });
});
// Créer une galerie d'images
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    // Afficher l'image en plein écran
    const fullscreen = document.querySelector('.fullscreen');
    fullscreen.classList.add('visible');
    fullscreen.querySelector('img').src = image.src;
  });
});
// Ajouter un effet de chargement à la page
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
});
