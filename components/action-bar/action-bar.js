/**
 * Action bar component.
 */

import { dom as faDom, library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faFacebookSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

export class ActionBar{
  /**
   * Inits a new action bar.
   * @param {HTMLElement} el
   */
  constructor(el){
    if (el && el instanceof Element) {
      this.el = el;
      if (this.el.hasAttribute('data-icons')) {
        this.icons = this.el.dataset.icons.split(',');
        this.addIcons();
      }
    }
  }

  addIcons(){
    this.icons.forEach(icon => {
      if (icon == 'linkedin'){
        faLibrary.add(faLinkedin);
      }
      if (icon == 'facebook'){
        faLibrary.add(faFacebookSquare);
      }
      if (icon == 'youtube'){
        faLibrary.add(faYoutubeSquare);
      }
      if (icon == 'instagram'){
        faLibrary.add(faInstagramSquare);
      }
    });
    faDom.i2svg();
  }
}