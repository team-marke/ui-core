/**
 * Modal component.
 */

import { default as BSModal } from 'bootstrap/js/src/modal';

export class Modal {
  constructor(el) {
    this.el = el;
    this.id = el.id;
    this.modal = new BSModal(this.el);
    this.searchForToggler();
  }

  searchForToggler() {
    const toggler = document.body.querySelector(`[data-mkui-target='#${this.id}']`);
    if (toggler) {
      toggler.addEventListener('click', () => {
        this.modal.toggle();
      });
    } else {
      console.error(`Nenhum toggler encontrado para o id:${this.id}`);
    }
  }
}
