document.getElementById('messageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const recipient = document.getElementById('recipient').value;
  const message = document.getElementById('message').value;

  // Utilisation de l'API Formspree pour envoyer un e-mail
  axios.post('https://formspree.io/your-email@domain.com', {
    recipient,
    message,
  }).then(response => {
    alert('Message envoyé avec succès!');
    document.getElementById('recipient').value = '';
    document.getElementById('message').value = '';
  }).catch(error => {
    console.error('Erreur lors de l\'envoi du message', error);
  });
});
