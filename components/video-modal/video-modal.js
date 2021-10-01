/**
 * Video modal component.
 */

import YTPlayer from 'yt-player';
import Modal from 'bootstrap/js/src/modal';

export class VideoModal {
  /**
   * Inits a new video modal.
   * @param {String} videoid
   */
  constructor(videoid) {
    this.videoId = videoid;
    document.body.insertAdjacentHTML('beforeEnd', this.render());
    this.el = document.body.querySelector(`#video-modal-${this.videoId}`);
    this.modal = new Modal(this.el);
    this.playerWrapper = this.el.querySelector('.video-modal__player');
    this.addListeners();
  }

  addListeners() {
    this.el.addEventListener('focusout', () => {
      this.pauseVideo();
    });
  }

  render() {
    return `
    <div
      class="video-modal modal fade"
      id="video-modal-${this.videoId}"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
    >
      <div class="video-modal__dialog modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="video-modal__content modal-content">
          <div class="video-modal__header modal-header">
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
            </button>
          </div>
          <div class="video-modal__wrapper modal-body">
            <div class="video-modal__player" data-videoid="${this.videoId}"></div>
          </div>
        </div>
      </div>
    </div>
    `;
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
