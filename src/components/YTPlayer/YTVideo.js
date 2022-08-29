import Modal from 'bootstrap/js/dist/modal';
import YTPlayer from 'yt-player';

class YTVideo {
  constructor(el) {
    this.el = el;
    this.videoId = el.dataset.videoId;
    this.playerElement = this.createPlayer();
    this.player = new YTPlayer(this.playerElement);
    this.modalElement = this.createModal(this.playerElement);
    this.modal = new Modal(this.modalElement);
    document.body.appendChild(this.modalElement);
    this.addListeners();
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
    node.classList.add('yt-video__modal', 'modal', 'fade');
    node.id = `yt-video-${this.videoId}`;
    node.tabIndex = -1;
    node.ariaHidden = true;
    node.innerHTML = `
       <div class="yt-video__modal-dialog modal-dialog modal-xl modal-dialog-centered">
         <div class="yt-video__modal-content modal-content">
           <div class="yt-video__modal-header modal-header">
             <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="yt-video__modal-body modal-body"></div>
         </div>
       </div>
     `;
    node.querySelector('.yt-video__modal-body').appendChild(playerElement);
    return node;
  }

  createPlayer() {
    const node = document.createElement('div');
    node.classList.add('yt-video__modal-player');
    return node;
  }
}

(() => {
  Array.from(document.querySelectorAll('.yt-video')).forEach((video) => {
    new YTVideo(video);
  });
})();
