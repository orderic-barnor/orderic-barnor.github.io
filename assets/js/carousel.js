// Function to open the carousel modal
// function openCarousel(card) {
//     var modal = document.getElementById('carouselModal');
//     var carouselContent = document.querySelector('.carousel-content');

//     modal.style.display = 'block';

//     // Extract the image source from the clicked card
//     var src = card.querySelector('img').src;
//     carouselContent.innerHTML = '<img src="' + src + '" alt="Carousel Image" class="carousel-image">';
// }

// Function to close the carousel modal
export function closeCarousel() {
    var modal = document.getElementById('carouselModal');
    modal.style.display = 'none';
}

// const imageLinks = [
//             'https://raw.githubusercontent.com/votre-utilisateur/votre-repo/branche/images/image1.jpg',
//             'https://raw.githubusercontent.com/votre-utilisateur/votre-repo/branche/images/image2.jpg'
//             // Ajoutez d'autres liens ici
//         ];

//         const imageLinksContainer = document.getElementById('image-links');

//         // Afficher les liens des images
//         imageLinks.forEach(link => {
//             const linkElement = document.createElement('p');
//             linkElement.innerText = `Image URL: ${link}`;
//             imageLinksContainer.appendChild(linkElement);
//         });

//   // Modal onclick event
//   var modals = document.querySelectorAll('.project-link');
//   modals.forEach(modal => modal.addEventListener('click', function(event) {
//     event.preventDefault();
//     showModal(modal.getAttribute('href'));
//   }));

//   // Close button

//   const imageUrls = [
//         'https://raw.githubusercontent.com/votre-utilisateur/votre-repo/branche/images/image1.jpg',
//         'https://raw.githubusercontent.com/votre-utilisateur/votre-repo/branche/images/image2.jpg',
//         // Ajoutez d'autres images ici
//     ];

//     const imageContainer = document.getElementById('image-container');

//     // Créer des images et les ajouter au conteneur
//     imageUrls.forEach(url => {
//         const imgElement = document.createElement('img');
//         imgElement.src = url;
//         imgElement.alt = 'Image';
//         imgElement.onclick = () => openCarousel(url);
//         imageContainer.appendChild(imgElement);
//     });

//     function openCarousel(imageUrl) {
//         const modal = document.getElementById('carouselModal');
//         const carouselImage = document.querySelector('#carouselModal .carousel-image');

//         modal.style.display = 'block';
//         carouselImage.src = imageUrl;
//     }

//     function closeCarousel() {
//         const modal = document.getElementById('carouselModal');
//         modal.style.display = 'none';
//     }

//     // Close the modal if the user clicks anywhere outside of the modal content
//     window.onclick = (event) => {
//         const modal = document.getElementById('carouselModal');
//         if (event.target === modal) {
//             closeCarousel();
//         }
//     };

// // construire le lien de chaque image selon le projet selectionné
// const basePicUrl = "";

// let projectName = ;

// const imageUrls = []

// importer les images
const projects = [
  {
    id: "project1",
    name: "Projet 1",
    baseUrl: "../assets/img/",
    images: [
        "image1.png",
        "image2.png",
        "image3.png",
        "image4.png",
        "image5.png",
        "image6.png",
        "image7.png",
        "image8.png",
        "image9.png",
        "image10.png",
        "image11.png",
        "image12.png",
    ],
  },
];

// // Function to create the carousel modal
// function openCarousels(projectId) {
//   const project = projects.find((p) => p.id === projectId);

//   // Populate your carousel modal here with project.images
// }

// export function openCarousel(card) {
//     var modal = document.getElementById('carouselModal');
//     var carouselContent = document.querySelector('.carousel-content');
    
//     modal.style.display = 'block';
    
//     // Extract the image source from the clicked card
//     // var src = card.querySelector('img').src;
//     // carouselContent.innerHTML = '<img src="' + src + '" alt="Carousel Image" class="carousel-image">';
// }

// // Générer les structures DOM pour chaque projet et ajouter des gestionnaires d'événements

// export function initialiseCarousel() {

//   projects.forEach((project) => {
//     // const projectElement = document.createElement("div");
//     const projectElement = document.getElementById("carouselModal")

//     // Create image elements for each projects's images
//     project.images.forEach((imageSrc, index) => {
//       const imageElement = document.createElement("img");
//       imageElement.src = project.baseUrl + project.id + "/" + imageSrc;
//       imageElement.alt = `${project.name} - Image ${index + 1}`;
//       imageElement.classList.add(project.id);
//     imageElement.classList.add("carousel-image");

//       // Add event listener for each image
//         //   imageElement.addEventListener("click", () => openCarousel(project.id));

//       // Append each image to the project element
//     //   projectElement.appendChild(imageElement);
//       projectElement.querySelector(".carousel-content").appendChild(imageElement);
//     });

//     // Append this project element to your container
//     // document
//     //   .getElementById("carouselModal")
//     //   .appendChild(projectElement);
//   });
// }

let currentIndex = 0;

function openCarousels(projectId) {
  const project = projects.find((p) => p.id === projectId);

  // Populate your carousel modal here with project.images
  const carouselContent = document.querySelector('.carousel-content');
  carouselContent.innerHTML = ''; // Clear previous images
  project.images.forEach((imageSrc) => {
    const imageElement = document.createElement("img");
    imageElement.src = project.baseUrl + projectId + "/" + imageSrc;
    imageElement.alt = `${project.name} - Image`;
    imageElement.classList.add(project.id);
    imageElement.classList.add("carousel-image");

    carouselContent.appendChild(imageElement);
  });

  const images = carouselContent.querySelectorAll('.carousel-image');
  if (images.length > 0) {
    // Start with the first image
    currentIndex = 0;
    images.forEach((image) => {
      image.style.display = 'none';
    });
    images[currentIndex].style.display = 'block';
  }
}

export function openCarousel(card) {
  var modal = document.getElementById('carouselModal');
  modal.style.display = 'block';

  // Extract the project id from the clicked card
  const projectId = card.classList[1];
  openCarousels(projectId);
}

// Function to go to the previous image
export function prevImage() {
  const images = document.querySelectorAll('.carousel-image');
  if (images.length > 0) {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].style.display = 'block';
  }
}

// Function to go to the next image
export function nextImage() {
  const images = document.querySelectorAll('.carousel-image');
  if (images.length > 0) {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  }
}

// Générer les structures DOM pour chaque projet et ajouter des gestionnaires d'événements

export function initialiseCarousel() {
  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    const linkElement = document.createElement("div");
    linkElement.className = "project-link";
    linkElement.innerHTML = `Afficher les images`;
    linkElement.classList.add(project.id);
    linkElement.addEventListener("click", (event) => openCarousel(event.target));

    // Append the link to the project element
    projectElement.appendChild(linkElement);

    // Append this project element to your container
    document.getElementById("carouselModal").appendChild(projectElement);
  });
}
