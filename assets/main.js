(function () {
  var d = document;
  d.documentElement.classList.add('js');

  var WA = '5541985008924';

  // mobile menu
  var btn = d.getElementById('menuToggle');
  var nav = d.getElementById('navlinks');
  if (btn && nav) {
    var set = function (open) {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    };
    btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 860) set(false); });
  }

  // year
  var y = d.getElementById('ano');
  if (y) y.textContent = new Date().getFullYear();

  // reveal on scroll (content stays visible without JS / observer)
  var els = d.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // contact form -> WhatsApp
  var form = d.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var msg = 'Olá, Singular Care! Sou ' + f.nome.value.trim() + ' (' + f.fone.value.trim() + ').\n' +
        'Preciso de: ' + f.serv.value + '.' +
        (f.msg.value.trim() ? '\n' + f.msg.value.trim() : '');
      window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }
})();
