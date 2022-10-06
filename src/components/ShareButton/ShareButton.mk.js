function ShareButton(content, { url, title, locale, theme = 'primary', text = 'Compartilhar', position = 'start' }) {
  return `
    <div
      class="share-button a2a_kit ${position}-0"
      data-a2a-url="${url}"
      data-a2a-title="${title}"
    >
      <a
        class="a2a_dd btn btn-${theme} rounded-pill"
        href="https://www.addtoany.com/share"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="currentColor" d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
        <span class="share-button__text">${text}</span>
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
