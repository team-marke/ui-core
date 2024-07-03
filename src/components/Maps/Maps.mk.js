function Maps(content, { query, width, height, styles, zoom, id }) {

  function getStyles() {
    if (typeof styles !== 'object') {
      return '';
    }
    let str = '';
    for (const key in styles) {
      str += `${key}="${styles[key]}"`;
    }
    return `style=${str}`;
  }

  function getZoom() {
    return zoom ? `&z="${zoom}"` : '';
  }

  function getId() {
    return id ? `id="${id}"` : '';
  }

  return `
    <iframe
      ${getId()}
      ${getStyles()}
      src="https://maps.google.com/maps?q=${query}&output=embed${getZoom()}"
      width="${width}"
      height="${height}"
      loading="lazy"
      allowfullscreen
      title="Mapa do Google Maps"
    >
    </iframe>
  `;
}

module.exports = Maps;
