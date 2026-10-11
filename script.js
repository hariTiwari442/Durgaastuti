(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById('theme-toggle');
  var size = 1.2;

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    themeBtn.textContent = t === 'dark' ? '☀' : '☾';
  }

  function applySize(s) {
    size = Math.min(2, Math.max(0.9, s));
    root.style.setProperty('--fs', size + 'rem');
    store('fs', size);
  }

  var savedTheme = load('theme') ||
    (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  var savedSize = parseFloat(load('fs'));
  if (savedSize) applySize(savedSize);

  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    store('theme', next);
  });
  document.getElementById('font-up').addEventListener('click', function () { applySize(size + 0.1); });
  document.getElementById('font-down').addEventListener('click', function () { applySize(size - 0.1); });
})();
