/**
 * Toast area component scripts.
 */

 import { Toast } from 'bootstrap';
 import { v4 as uuidv4 } from 'uuid';
 
 class ToastStack {
   /**
    * Inits the Toast Stack.
    * @constructor
    * @param {Object} args
    * @param {Element} args.el
    */
   constructor(...args) {
     if (!ToastStack._instance) {
       ToastStack._instance = this;
     }
     if (typeof el !== 'undefined' && el) {
       this.el = el;
     } else {
       this.el = document.querySelector('.toast-stack');
       if (this.el == null) {
         this.el = document.createElement('div');
         this.el.classList.add(
           'toast-stack',
           'toast-container'
         );
         document.body.appendChild(this.el);
       }
     }
     return ToastStack._instance;
   }
 
   /**
    * Creates and shows a notification toast on the window.
    * @param {Object} args
    * @param {String} args.message
    * @param {String} args.type
    * @param {String} args.vertical
    * @param {String} args.horizontal
    * @param {Boolean} args.autohide
    * @param {Number} args.delay
    * @param {String} args.id
    */
   static enqueueToast({ message, type, vertical = 'bottom', horizontal = 'center', autohide = true, delay = 10000, id }) {
     if (!ToastStack._instance) {
       new ToastStack();
     }
     if (!ToastStack._instance.el) {
       return;
     }
 
     let classes = [];
     if (typeof type === 'string' && type.length > 0) {
       classes.push(`bg-${type}`);
     } else {
       classes.push(`bg-primary`);
     }
     if(vertical == 'top'){
       classes.push('top-0');
     } else if(vertical == 'center'){
      classes.push('translate-middle-y');
     } else if(vertical == 'bottom'){
      classes.push('bottom-0');
     }
     if(horizontal == 'left'){
       classes.push('start-0');
     } else if(horizontal == 'center'){
      classes.push('translate-middle-x');
      classes.push('start-50');
     } else if(horizontal == 'right'){
      classes.push('end-0');
     }
     classes.push('position-fixed');
     classes.push('zindex-popover');
     classes.push('m-3');

     if (typeof id !== 'string' || id.length == 0) {
       const uuid = uuidv4();
       id = `toast-${uuid}`;
     }
     ToastStack._instance.el.insertAdjacentHTML('beforeEnd', ToastStack._instance._renderToast({ message: message, id: id, classes: classes }));
 
     const toastEl = document.getElementById(id);
     let toastOptions = {
       animation: true,
       autohide: autohide,
       delay: delay,
     };
     let toast = new Toast(toastEl, toastOptions);
     toast.show();
     ToastStack._instance._handleToastEvents(toast);
   }
 
   /**
    * Gets this singleton instance
    * @returns {ToastStack}
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
 
 export { ToastStack };
