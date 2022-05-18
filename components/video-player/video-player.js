/**
 * Video player component.
 */

import YTPlayer from 'yt-player';
import {Modal} from '../modal/modal';

export class VideoPlayer{
  /**
   * Inits a new video player.
   * @param {String} videoid
   */
  constructor(el) {
    this.videoId = el.dataset.videoPlayerId;
    this.toggler = el;
    this.modalEl = document.body.querySelector(`#${this.videoId}`);
    this.modal = new Modal(this.modalEl);
    // this.playerWrapper = this.el.querySelector('.video-modal__player');
    // this.addListeners();
  }

  addListeners() {
    this.el.addEventListener('focusout', () => {
      this.pauseVideo();
    });
  }

  initPlayer() {
    this.modal.show();
    this.player = new YTPlayer(this.playerWrapper);
    this.player.load(this.videoId, true);
  }

  playVideo() {
    this.player.play();
  }

  pauseVideo() {
    this.player.pause();
  }

  stopVideo() {
    this.player.stop();
  }
}
