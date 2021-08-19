/**
 * Accordion component scripts.
 */

import Collapse from 'bootstrap/js/src/collapse';

(() => {
  const config = {
    toggle: false,
  };
  Array.from(document.querySelectorAll('.accordion__collapse')).forEach((node) => new Collapse(node, config));
})();
