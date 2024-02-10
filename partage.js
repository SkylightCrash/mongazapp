const form = document.getElementById('uploadForm');
const photoInput = document.getElementById('photoInput');
const photosSection = document.getElementById('photos');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const file = photoInput.files[0];

  if (file) {
    uploadPhoto(file);
  }
});

function uploadPhoto(file) {
  const formData = new FormData();
  formData.append('photo', file);

  // Utilisation de l'API GitHub pour stocker les images dans un dépôt
  axios.post('https://api.github.com/repos/votre-utilisateur/votre-repo/photos', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'token VOTRE_TOKEN_GITHUB',
    },
  }).then(response => {
    alert('Photo envoyée avec succès!');
    // Actualiser la liste des photos après l'envoi
    fetchPhotos();
  }).catch(error => {
    console.error('Erreur lors de l\'envoi de la photo', error);
  });
}

function fetchPhotos() {
  // Utilisation de l'API GitHub pour récupérer la liste des fichiers dans le dossier photos
  axios.get('https://api.github.com/repos/votre-utilisateur/votre-repo/contents/photos')
    .then(response => {
      const photos = response.data;
      displayPhotos(photos);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des photos', error);
    });
}

function displayPhotos(photos) {
  photosSection.innerHTML = '';

  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.download_url;
    img.alt = photo.name;
    photosSection.appendChild(img);
  });
}

// Charger les photos au chargement de la page
fetchPhotos();
