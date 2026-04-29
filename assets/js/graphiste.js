import { initialiseCarousel, openCarousel, closeCarousel, prevImage, nextImage } from './carousel.js';

// Appel de la fonction d'initialisation depuis graphiste.js
initialiseCarousel();

window.openCarousel = openCarousel;
window.closeCarousel = closeCarousel;
window.prevImage = prevImage;
window.nextImage = nextImage;