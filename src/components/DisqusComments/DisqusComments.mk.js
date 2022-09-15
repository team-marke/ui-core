function DisqusComments(content, { url, id, title, forumName }) {
  return `
    <div id="disqus_thread"></div>
    <script>
      var disqus_config = function () {
        this.page.url = "${url}";
        this.page.identifier = "${id}";
        this.page.title = "${title}";
        this.language = "pt_BR";
      };
      (function () {
        var d = document,
          s = d.createElement('script');
        s.src = 'https://${forumName}.disqus.com/embed.js';
        s.setAttribute('data-timestamp', + new Date());
        (d.head || d.body).appendChild(s);
      })();
    </script>
    <noscript>
      <div class="alert alert-warning" role="alert">Por favor habilite o JavaScript para visualizar os <a href="https://disqus.com/?ref_noscript" rel="nofollow">comentários do Disqus.</a>
      </div>
    </noscript>
  `;
}

module.exports = DisqusComments;
