/**
 * Video modal component.
 */

import { dom as faDom, library as faLibrary, config as faConfig } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { VideoModal } from '../video-modal/video-modal';

export class VideoTeaser {
  /**
   * Inits a new video teaser.
   * @param {HTMLElement} el
   */
  constructor(el) {
    if (el && el instanceof Element) {
      this.el = el;
      this.thumb = el.querySelector('.video-teaser__thumb');
      this.videoid = this.el.dataset.videoTeaserId;
      faConfig.showMissingIcons = false;
      faLibrary.add(faPlayCircle);
      faDom.i2svg({ node: this.el });
      if (this.el.dataset.toggle === 'modal') {
        this.modal = new VideoModal(this.videoid);
      }
      this.addListeners();
    }
  }

  addListeners() {
    if (this.modal) {
      this.el.addEventListener('click', () => {
        this.modal.initPlayer();
      });
    }
    this.thumb.querySelector('img').addEventListener('load', () => {
      /**
       * @type {HTMLImageElement}
       */
      let img = this.thumb.querySelector('img');
      // if loaded a broken youtube thumbnail, remove all sources
      if (img instanceof HTMLImageElement && img.naturalHeight === 90) {
        let sources = this.thumb.querySelectorAll('source');
        for (let source of sources) {
          source.remove();
        }
      }
    });
  }
}
