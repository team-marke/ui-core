/**
 * Video player component.
 */

import YTPlayer from 'yt-player';
import { dom as faDom, library as faLibrary, config as faConfig } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export class VideoPlayer {
  constructor(el) {
    this.el = el;
    // this.videoId = el.dataset.videoPlayerId;
    // this.initPlayIcon();
    // this.modalEl = document.body.querySelector(`#${this.videoId}`);
    // this.modal = new Modal(this.modalEl, this.el);

    // this.playerWrapper = this.el.querySelector('.video-modal__player');
    // this.addListeners();
  }

  initPlayIcon() {
    faConfig.showMissingIcons = false;
    faLibrary.add(faPlayCircle);
    faDom.i2svg({ node: this.el });
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
