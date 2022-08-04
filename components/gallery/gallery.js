/**
 * Gallery component
 */

import lightGallery from 'lightgallery';

class Gallery {
  /**
   * Inits a new gallery.
   * @param {HTMLElement} el
   */
  constructor(el) {
    if (el && el instanceof Element) {
      this.el = el;
      this.imgs = JSON.parse(this.el.dataset.gallery);
      this._defaultOptions = {
        dynamic: true,
        dynamicEl: this.imgs,
        download: false,
        mobileSettings: {
          controls: true,
          showCloseIcon: true,
          download: false,
        },
      };
      this.dynamicGallery = new lightGallery(this.el, this._defaultOptions);
      this.addListeners();
    }
  }

  addListeners() {
    this.el.addEventListener('click', () => {
      this.dynamicGallery.openGallery();
    });
  }
}

export default Gallery;
