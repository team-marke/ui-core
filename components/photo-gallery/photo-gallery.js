/**
 * Photo Gallery component
 */

import lightGallery from 'lightgallery';

class PhotoGallery {
  /**
   * Inits a new photo gallery.
   * @param {HTMLElement} el
   */
  constructor(el) {
    if (el && el instanceof Element) {
      this.el = el;
      this._defaultOptions = {};
      this._isDynamic = this.el.hasAttribute('dynamic');

      if (this._isDynamic) {
        let imgs = JSON.parse(this.el.dataset.gallery);
        this._defaultOptions = {
          dynamic: true,
          dynamicEl: imgs,
          download: false,
          mobileSettings: {
            controls: true,
            showCloseIcon: true,
            download: false,
          },
        };
      } else {
        this._defaultOptions = {
          dynamic: false,
          thumbnail: true,
          download: false,
          mobileSettings: {
            controls: true,
            showCloseIcon: true,
            download: false,
          },
        };
      }

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

export default PhotoGallery;
