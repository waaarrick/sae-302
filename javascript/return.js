
// Sélection du bouton
const returnButton = document.getElementById('returnButton');

// Ajout d'un gestionnaire d'événements pour le clic
returnButton.addEventListener('click', function() {
  // URL de la page vers laquelle rediriger
  const cibleURL = "file:///C:/BUT%20MMI/sae_prof/html/page_accueil.html"; // Remplacez par votre URL
  window.location.href = cibleURL; // Redirection
});




