  // Capturer l'envoi du formulaire
  document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Empêche le rechargement de la page

    // Récupérer l'email saisi
    var email = document.getElementById('email').value;

    // Envoyer les données via fetch pour traiter avec PHP
    fetch('subscribe.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'email=' + encodeURIComponent(email)
    })
    .then(response => response.text())  // Lire la réponse PHP
    .then(data => {
      // Afficher le message de succès/erreur
      document.getElementById('newsletterMessage').textContent = data;

      // Vider le champ de saisie de l'email
      document.getElementById('email').value = '';
    })
    .catch(error => console.error('Erreur:', error));
  });