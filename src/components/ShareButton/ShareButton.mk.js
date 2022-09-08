function ShareButton(content, { url, title, locale, theme = 'primary', text = 'Compartilhar', position = 'start' }) {
  return `
    <div
      class="a2a_kit position-fixed bottom-0 ${position}-0 m-3"
      data-a2a-url="${url}"
      data-a2a-title="${title}"
      style="z-index: 1030;"
    >
      <a class="a2a_dd btn btn-${theme} rounded-pill shadow" href="https://www.addtoany.com/share">
        <i class="fas fa-share-alt me-lg-1"></i>
        <span class="d-none d-lg-inline">${text}</span>
      </a>
    </div>
    <script>
      var a2a_config = a2a_config || {};
      a2a_config.locale = '${ locale }';
      a2a_config.onclick = 2;
    </script>
    <script async src="https://static.addtoany.com/menu/page.js"></script>
  `;
}

module.exports = ShareButton;
