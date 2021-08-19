/**
 * Tabs component scripts.
 */

import Tab from 'bootstrap/js/src/tab';

(() => {
  Array.from(document.querySelectorAll('.tabs__link')).forEach((node) => {
    let tab = new Tab(node);
    node.addEventListener('click', function (event) {
      event.preventDefault();
      tab.show();
    });
  });
})();
