import Swiper, { Pagination } from 'swiper';

class GalleryModal {
  constructor(gallery, galleryModal) {
    this.gallery = gallery;
    this.galleryModal = galleryModal;
    this.images = Array.from(gallery.querySelectorAll('img.gallery__img'));
    this.closeBtn = galleryModal.querySelector('.gallery-modal__close');
    this.prevBtn = galleryModal.querySelector('.gallery-modal__prev');
    this.nextBtn = galleryModal.querySelector('.gallery-modal__next');
    this.slideIndex = 1;
    this.addEventListeners();
  }

  openModal() {
    this.galleryModal.style.display = 'flex';
  }

  closeModal() {
    this.galleryModal.style.display = 'none';
  }

  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('gallery-modal__slides');
    var dots = document.getElementsByClassName('gallery-modal__demo');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' gallery-modal__active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' gallery-modal__active';
  }

  addEventListeners() {
    this.images.forEach((image, index) => {
      image.addEventListener('click', () => {
        this.openModal();
        this.currentSlide(index + 1);
      });
    });
    this.closeBtn.addEventListener('click', () => {
      this.closeModal();
    });
    this.prevBtn.addEventListener('click', () => {
      this.plusSlides(-1);
    });
    this.nextBtn.addEventListener('click', () => {
      this.plusSlides(1);
    });
  }
}

(() => {
  Swiper.use([Pagination]);
  Array.from(document.querySelectorAll('.gallery')).forEach((gallery) => {
    const isMobile = window.matchMedia('(max-width: 991px)').matches;
    if (isMobile) {
      const minSlidesPerView = gallery.dataset.minSlidesPerView ? gallery.dataset.minSlidesPerView : 1;
      const spaceBetween = gallery.dataset.spaceBetween ? parseInt(gallery.dataset.spaceBetween) : 16;
      const id = gallery.id;
      new Swiper(gallery, {
        spaceBetween: spaceBetween,
        slidesPerView: minSlidesPerView,
        pagination: {
          el: `.gallery__pagination-${id}`,
          clickable: true,
        },
      });
    }
    const galleryModal = new GalleryModal(gallery, gallery.nextElementSibling);
  });
})();
