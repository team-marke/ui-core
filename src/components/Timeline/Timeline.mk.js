const { faL } = require('@fortawesome/free-solid-svg-icons');

function Timeline(content, { items, id, classes, theme, bulletSize, bulletRadius }) {
  function getId() {
    return id ? `id="${id}"` : '';
  }

  function getClasses() {
    if (!Array.isArray(classes)) {
      return '';
    }
    return classes.join(' ');
  }

  function getItems() {
    let str = '';
    for (const item of items) {
      str += `
        <div class="timeline__item">
          <div class="timeline__item-content">
            ${item}
          </div>
        </div>
      `;
    }
    return str;
  }

  function getBulletSize() {
    return bulletSize ? bulletSize + 'px' : '32px';
  }

  function getBulletRadius() {
    return bulletRadius ? bulletRadius + 'px' : '8px';
  }

  return `
    <div
      ${getId()}
      class="timeline timeline-${theme} ${getClasses()}"
      style="
        --timeline-bullet-size: ${getBulletSize()};
        --timeline-bullet-radius: ${getBulletRadius()};
      "
    >
      ${getItems()}
    </div>
  `;
}

module.exports = Timeline;
