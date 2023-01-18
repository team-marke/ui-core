const Markdown = require('../../core-components/Markdown');
const IdGenerator = require('../../helpers/idGenerator');

function Accordion(content, { items, flush }) {
  const id = IdGenerator();

  function getItems() {
    let str = '';
    for (const [index, item] of items.entries()) {
      str += getItem(index, item);
    }
    return str;
  }

  function getItem(index, item) {
    return `
      <div class="accordion-item">
        <${item.tag} class="accordion-header" id="${id}-heading-${index}">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#${id}-collapse-${index}"
            aria-expanded="false"
            aria-controls="${id}-collapse-${index}"
          >
            ${item.title}
          </button>
        </${item.tag}>
        <div id="${id}-collapse-${index}" class="accordion-collapse collapse" aria-labelledby="${id}-heading-${index}" data-bs-parent="#${id}">
          <div class="accordion-body">
            ${Markdown(item.content)}
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="accordion ${flush ? 'accordion-flush' : ''}" id="${id}">
      ${getItems()}
    </div>
  `;
}

module.exports = Accordion;
