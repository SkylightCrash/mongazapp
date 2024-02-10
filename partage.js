// partage.js
function shareOnInstagram() {
  const photoInput = document.getElementById('photoInput');
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');

  const photoFile = photoInput.files[0];
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  if (photoFile && firstName && lastName) {
    const instagramURL = `https://www.instagram.com/create/details/?media=${encodeURIComponent(window.location.href)}&caption=${encodeURIComponent(`Photo de ${firstName} ${lastName}`)}`;
    window.open(instagramURL, '_blank');
  } else {
    console.error('Veuillez remplir tous les champs.');
  }
}
