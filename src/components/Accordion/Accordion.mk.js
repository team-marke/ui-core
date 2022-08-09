function Accordion(content, id, items) {
  function getItems() {
    let str = '';
    for (const item of items) {
      str += getItem(item);
    }
    return str;
  }

  function getItem(item, index) {
    return `
      <div class="accordion-item">
        <${item.tag} class="accordion-header" id="${id}-heading-${index}">
          <button
            class="accordion-button"
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
            ${item.content}
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="accordion" id="${id}">
      ${getItems()}
    </div>
  `;
}

module.exports = Accordion;
