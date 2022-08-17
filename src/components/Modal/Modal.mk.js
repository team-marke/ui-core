function Modal(content, { id, title, footer, classes }) {

  function getClasses() {
    if (!Array.isArray(classes)) {
      return '';
    }
    return classes.join(' ');
  }

  function getTitle() {
    if (!title) return '';
    return `
      <span class="modal-title h5" id="${id}-label">${title}</span>
    `;
  }

  function getFooter() {
    if (!footer) return '';
    return `
      <div class="modal-footer">
        ${footer}
      </div>
    `;
  }

  return `
    <div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="${id}-label" aria-hidden="true">
      <div class="modal-dialog ${getClasses()}">
        <div class="modal-content">
          <div class="modal-header">
            ${getTitle()}
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${content}
          </div>
          ${getFooter()}
        </div>
      </div>
    </div>
  `;
}

module.exports = Modal;
