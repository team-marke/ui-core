import Toast from 'bootstrap/js/dist/toast';

export default class ToastResponse {
  constructor() {
    this.container = this.createContainer();
  }

  createContainer() {
    const node = document.createElement('div');
    node.classList.add('toast-container', 'position-fixed', 'bottom-0', 'start-0');
    document.body.appendChild(node);
    return node;
  }

  showToast({ text, theme }) {
    const node = document.createElement('div');
    node.classList.add('toast', 'text-white', 'm-3', `bg-${theme}`);
    node.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          ${text}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;
    this.container.appendChild(node);
    const toast = new Toast(node);
    toast.show();
  }
}
