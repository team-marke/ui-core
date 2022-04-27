/**
 * Toast stack component scripts.
 */

import Toast from 'bootstrap/js/src/toast';

class ToastStack {
  /**
   * Inits the Toast Stack.
   * @constructor
   * @param {Object} options
   * @param {Number} [options.max]
   * @param {Object} [options.anchor]
   * @param {String} [options.anchor.vertical]
   * @param {String} [options.anchor.horizontal]
   */
  constructor(options) {
    options = {
      max: 5,
      anchor: {
        vertical: 'bottom',
        horizontal: 'left',
      },
      ...options,
    };
    this.el = document.createElement('div');
    this.el.classList.add('toast-stack');
    document.body.appendChild(this.el);
    this.max = options.max;
    this.anchor = options.anchor;
    this.el.classList.add(`toast-stack--v-${this.anchor.vertical}`, `toast-stack--h-${this.anchor.horizontal}`);
    this.shownToasts = [];
  }

  /**
   * Creates and shows a notification toast on the window.
   * @param {Object} args
   * @param {String} args.message
   * @param {String} [args.variant]
   * @param {Number} [args.autoHideDuration]
   * @param {String} [args.id]
   * @param {String} [args.closeButton]
   */
  enqueueToast({ message, variant, autoHideDuration = 0, id, closeButton = false }) {
    console.log(closeButton);
    const toastIdExists = this.shownToasts.some((toast) => toast._element.id == id);
    if (toastIdExists) {
      return;
    }
    let classes = [];
    if (typeof variant === 'string' && variant.length > 0) {
      classes.push(`toast-stack__item--${variant}`);
    } else {
      classes.push(`toast-stack__item--primary`);
    }
    this.el.insertAdjacentHTML(
      'beforeEnd',
      this._renderToast({ message: message, id: id, classes: classes, closeButton: closeButton })
    );
    const toastEl = this.el.lastElementChild;
    if (typeof autoHideDuration === 'string') {
      autoHideDuration = parseInt(autoHideDuration);
    }
    let toastOptions = {
      animation: true,
      autohide: autoHideDuration > 0 ? true : false,
      delay: autoHideDuration,
    };
    let toast = new Toast(toastEl, toastOptions);
    toast.show();
    this._handleToastEvents(toast);
    this.shownToasts.push(toast);
  }

  _renderCloseButton() {
    return '<button type="button" class="btn-close btn-close-white" aria-label="Close" data-bs-dismiss="toast"></button>';
  }

  /**
   * Renders the toast makrup.
   * @param {Object} args
   * @param {String} args.message
   * @param {String} [args.id]
   * @param {Array} [args.classes]
   * @param {String} [args.closeButton]
   * @returns {String} rendered toast markup.
   */
  _renderToast({ message = '', id = '', classes = [], closeButton }) {
    return `
       <div id="${id}" class="toast-stack__item ${classes.join(
      ' '
    )} toast" role="alert" aria-live="assertive" aria-atomic="true">
         <div class="toast-body d-flex justify-content-between">
           <span>${message}</span>
           ${closeButton ? this._renderCloseButton() : ''}
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
      this.shownToasts = this.shownToasts.filter((toastItem) => toastItem !== toast);
    });
  }
}

export { ToastStack };
