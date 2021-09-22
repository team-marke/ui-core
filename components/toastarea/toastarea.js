/**
 * Toast area component scripts.
 */

 import { Toast } from 'bootstrap';
 import { v4 as uuidv4 } from 'uuid';
 
 class ToastArea {
   /**
    * Inits the Toast Area.
    * @constructor
    * @param {Object} args
    * @param {Element} args.el
    */
   constructor(...args) {
     if (!ToastArea._instance) {
       ToastArea._instance = this;
     }
     if (typeof el !== 'undefined' && el) {
       this.el = el;
     } else {
       this.el = document.querySelector('.toast-area');
       if (this.el == null) {
         this.el = document.createElement('div');
         this.el.classList.add(
           'toast-area',
           'toast-container',
           'position-fixed',
           'p-3',
           'p-lg-5',
           'bottom-0',
           'start-50',
           'translate-middle-x',
           'zindex-popover'
         );
         document.body.appendChild(this.el);
       }
     }
     return ToastArea._instance;
   }
 
   /**
    * Creates and shows a notification toast on the window.
    * @param {Object} args
    * @param {String} args.message
    * @param {String} args.type
    * @param {Boolean} args.autohide
    * @param {Number} args.delay
    * @param {String} args.id
    */
   static addToast({ message, type = '', autohide = true, delay = 10000, id }) {
     if (!ToastArea._instance) {
       new ToastArea();
     }
     if (!ToastArea._instance.el) {
       return;
     }
 
     let classes = [];
     if (typeof type === 'string' && type.length > 0) {
       classes.push(`bg-${type}`);
     } else {
       classes.push(`bg-primary`);
     }
     if (typeof id !== 'string' || id.length == 0) {
       const uuid = uuidv4();
       id = `toast-${uuid}`;
     }
     ToastArea._instance.el.insertAdjacentHTML('beforeEnd', ToastArea._instance._renderToast({ message: message, id: id, classes: classes }));
 
     const toastEl = document.getElementById(id);
     let toastOptions = {
       animation: true,
       autohide: autohide,
       delay: delay,
     };
     let toast = new Toast(toastEl, toastOptions);
     toast.show();
     ToastArea._instance._handleToastEvents(toast);
   }
 
   /**
    * Gets this singleton instance
    * @returns {ToastArea}
    */
   static getInstance() {
     return this._instance;
   }
 
   /**
    * Renders the toast makrup.
    * @param {Object} args
    * @param {String} args.message
    * @param {String} args.id
    * @param {Array} args.classes
    * @returns {String} rendered toast markup.
    */
   _renderToast({ message = '', id, classes = [] }) {
     return `
       <div id="${id}" class="toast text-light ${classes.join(' ')}" role="alert" aria-live="assertive" aria-atomic="true">
         <div class="toast-body d-flex justify-content-between">
           <span>${message}</span>
           <button type="button" class="btn-close btn-close-white ms-2" data-bs-dismiss="toast" aria-label="Close"></button>
         </div>
       </div>
     `;
   }
 
   /**
    * Handles toast events.
    * @param {Toast} toast
    */
   _handleToastEvents(toast) {
     toast._element.addEventListener('hidden.bs.toast', () => {
       let element = toast._element;
       toast.dispose();
       element.remove();
     });
   }
 }
 
 export { ToastArea };
