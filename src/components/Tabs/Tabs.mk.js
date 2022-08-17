const slugify = require('slugify');
const Markdown = require('../../core-components/Markdown');

function Tabs(content, { id, items }) {

  function getNavItems() {
    let str = '';
    for (const [index, item] of items.entries()) {
      str += getNavItem(index, item);
    }
    return str;
  }

  function getPanelItems() {
    let str = '';
    for (const [index, item] of items.entries()) {
      str += getPanelItem(index, item);
    }
    return str;
  }

  function getNavItem(index, item) {
    return `
      <li class="nav-item" role="presentention">
        <button
          class="nav-link ${index == 0 ? 'active' : ''}"
          id="${slugify(item.title)}-tab"
          data-bs-toggle="tab"
          data-bs-target="#${slugify(item.title)}"
          type="button"
          aria-controls="${slugify(item.title)}"
          aria-selected="${index == 0 ? 'true' : 'false'}"
        >
          ${item.title}
        </button>
      </li>
    `;
  }
  function getPanelItem(index, item) {
    return `
      <div class="tab-pane fade ${index == 0 ? 'show active' : ''}"
        id="${slugify(item.title)}"
        role="tabpanel"
        aria-labelledby="${slugify(item.title)}-tab"
        tabindex="0"
        >
          ${Markdown(item.content)}
      </div>
    `;
  }
  return `
  <ul class="nav nav-tabs" id="${id}" role="tablist">
    ${getNavItems()}
  </ul>
  <div class="tab-content" id="${id}">
    ${getPanelItems()}
  </div>
  `;
}

module.exports = Tabs;
