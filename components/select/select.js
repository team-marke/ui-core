//
// Select component scripts.
// Uses choices.js library features.
//

import Input from '../../tools/core-components/input/input';
import Choices from 'choices.js';

class Select extends Input {
  /**
   * @constructor
   */
  constructor(el) {
    super(el);
    let choicesOptions = {
      searchEnabled: false,
      placeholder: true,
      placeholderValue: 'Selecione',
      searchPlaceholderValue: 'Pesquisar',
      loadingText: 'Carregando...',
      noResultsText: 'Nenhuma opção encontrada',
      noChoicesText: 'Não há opcões para selecionar',
      itemSelectText: '',
      shouldSort: false,
      classNames: {
        containerOuter: 'selectchoices',
        containerInner: 'selectchoices__inner',
        input: 'selectchoices__input',
        inputCloned: 'selectchoices__input--cloned',
        list: 'selectchoices__list',
        listItems: 'selectchoices__list--multiple',
        listSingle: 'selectchoices__list--single',
        listDropdown: 'selectchoices__list--dropdown',
        item: 'selectchoices__item',
        itemSelectable: 'selectchoices__item--selectable',
        itemDisabled: 'selectchoices__item--disabled',
        itemChoice: 'selectchoices__item--choice',
        placeholder: 'selectchoices__placeholder',
        group: 'selectchoices__group',
        groupHeading: 'selectchoices__heading',
        button: 'selectchoicess__button',
      }
    };
    if (this.el.classList.contains('select--lg')) {
      choicesOptions.classNames.containerOuter += ' selectchoices--lg';
    }
    if (this.el.classList.contains('select--sm')) {
      choicesOptions.classNames.containerOuter += ' selectchoices--sm';
    }
    this.choices = new Choices(el, choicesOptions);
    if (this.el.classList.contains('is-invalid')) {
      const customErrorMessage = this.getWrapper().querySelector('.helper-text--invalid');
      this.el.setCustomValidity(customErrorMessage);
      this.checkValidity();
    }
  }

  /**
   * Add custom field listeners.
   */
  addListeners() {
    this.el.addEventListener(
      'choice',
      () => {
        this.el.setCustomValidity('');
        for (let validityIdentifier of this.getValidationIdentifiers(this.el)) {
          validityIdentifier.classList.remove('is-invalid');
        }
      },
      false
    );
  }

  /**
   * Retrieves single choice from choice field.
   * @returns {string[]} Array of choice values.
   */
  getValue() {
    return this.choices.getValue(true);
  }

  /**
   * Sets a single or multiple choices in the select field.
   * @param {string | string[]} value
   */
  setValue(value) {
    this.choices.setChoiceByValue(value);
  }

  /**
   * Get field validation identifier elements.
   * @returns {HTMLElement[]} List of elements to toggle validation state.
   */
  getValidationIdentifiers() {
    let validityIdentifiers = [this.el];
    validityIdentifiers.push(this.el.closest('.selectchoices'));
    validityIdentifiers.push(this.el.closest('.selectchoices__inner'));
    return validityIdentifiers;
  }

  /**
   * Get the field wrapper node containing the helper texts and label elements.
   * @returns {HTMLElement}
   */
  getWrapper() {
    return this.el.closest('.selectchoices').parentElement;
  }
}

export { Select };
