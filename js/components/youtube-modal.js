/**
 * Youtube modal component.
 */

 import YTPlayer from 'yt-player';
 import { dom as faDom, library as faLibrary } from '@fortawesome/fontawesome-svg-core';
 import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
 
 class YoutubeModal {
   /**
    * Inits a new youtube modal. Only inits the video player on demand.
    * @param {Object} args
    * @param {HTMLElement} args.modal
    * @param {HTMLElement} args.toggler
    */
   constructor({ modal, toggler }) {
     if (modal && modal instanceof Element && toggler && toggler instanceof Element) {
       this.modal = modal;
       this.toggler = toggler;
       this.videoId = modal.querySelector('.youtube-modal__video-wrapper').dataset.videoid;
       this.playerWrapper = modal.querySelector('.youtube-modal__video-wrapper');
       this.thumb = toggler.querySelector('.youtube-modal-toggler__thumb');
       this.addListeners();
       faLibrary.add( faPlayCircle );
       faDom.i2svg();
       faDom.watch();
     }
   }
 
   addListeners() {
     this.toggler.addEventListener('click', () => {
       this.initPlayer();
     });
     this.modal.addEventListener('focusout', () => {
       this.pauseVideo();
     });
     this.thumb.querySelector('img').addEventListener(
       'load',
       () => {
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
       }
     );
   }
 
   initPlayer() {
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
 export { YoutubeModal };
 