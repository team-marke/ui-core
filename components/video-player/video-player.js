/**
 * Video Player component
 */

import Modal from 'bootstrap/js/src/modal';
import YTPlayer from 'yt-player';
import { dom as faDom, library as faLibrary, config as faConfig } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

class VideoPlayer {
  constructor(el) {
    this.el = el;
    this.videoId = el.dataset.videoPlayerId;
    this.initPlayIcon();

    this.playerElement = this.createPlayer();
    this.player = new YTPlayer(this.playerElement);

    this.modalElement = this.createModal(this.playerElement);
    this.modal = new Modal(this.modalElement);
    document.body.appendChild(this.modalElement);

    this.addListeners();
  }

  initPlayIcon() {
    faConfig.showMissingIcons = false;
    faLibrary.add(faPlayCircle);
    faDom.i2svg({ node: this.el });
  }

  addListeners() {
    this.el.addEventListener('click', () => {
      this.modal.show();
      if (this.player.getState() == 'unstarted') {
        this.player.load(this.videoId, true);
      } else {
        this.player.play();
      }
    });
    this.modalElement.addEventListener('hide.bs.modal', () => {
      this.player.pause();
    });
  }

  createModal(playerElement) {
    const node = document.createElement('div');
    node.classList.add('video-player__modal', 'modal', 'fade');
    node.id = `video-player-${this.videoId}`;
    node.tabIndex = -1;
    node.ariaHidden = true;
    node.innerHTML = `
      <div class="video-player__modal-dialog modal-dialog modal-xl modal-dialog-centered">
        <div class="video-player__modal-content modal-content">
          <div class="video-player__modal-header modal-header">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="video-player__modal-body modal-body"></div>
        </div>
      </div>
    `;
    node.querySelector('.video-player__modal-body').appendChild(playerElement);
    return node;
  }

  createPlayer() {
    const node = document.createElement('div');
    node.classList.add('video-player__modal-player');
    return node;
  }
}

export default VideoPlayer;
