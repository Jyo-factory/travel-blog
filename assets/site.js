(function () {
  var root = document.body.getAttribute("data-root") || "";
  var S = window.SITE, posts = (window.POSTS || []).slice().sort(function (a, b) {
    return a.date < b.date ? 1 : -1;
  });

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  document.querySelectorAll("[data-site-name]").forEach(function (el) { el.textContent = S.name; });
  if (document.title.indexOf("{site}") > -1) document.title = document.title.replace("{site}", S.name);

  var h = document.getElementById("site-header");
  if (h) h.innerHTML =
    '<div class="wrap"><a class="site-title" href="' + root + 'index.html">' + esc(S.name) + '</a>' +
    '<nav class="site-nav"><a href="' + root + 'index.html">글 목록</a><a href="' + root + 'about.html">소개</a>' +
    '<a class="req-btn" href="' + esc(S.requestUrl) + '" target="_blank" rel="noopener">다른지역 신청하기</a></nav></div>';

  var f = document.getElementById("site-footer");
  if (f) f.innerHTML = '<div class="wrap">' + esc(S.footer) + '</div>';

  var list = document.getElementById("post-list");
  if (list) {
    if (!posts.length) {
      list.outerHTML = '<p class="empty">첫 글을 준비하고 있어요.</p>';
    } else {
      list.innerHTML = posts.map(function (p) {
        var tags = (p.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("");
        return '<li class="post-item"><div class="meta">' + tags + esc(p.date) + '</div>' +
          '<h2><a href="' + root + esc(p.file) + '">' + esc(p.title) + '</a></h2>' +
          (p.summary ? '<p>' + esc(p.summary) + '</p>' : '') + '</li>';
      }).join("");
    }
  }
})();
