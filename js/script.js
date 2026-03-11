const navMenu = document.getElementById('nav-menu');
const hamburgerBtn = document.querySelector('.hamburger');

hamburgerBtn.addEventListener('click', () => {
  const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
  hamburgerBtn.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('active');
});

window.addEventListener('click', (event) => {
  if (!event.target.closest('.navbar')) {
    navMenu.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
});

// Close mobile menu after link click
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  });
});

// Smooth scrolling for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = this.getAttribute('href');
    if (target.length > 1 && document.querySelector(target)) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

function submitOrder() {
  const name = document.getElementById('name')?.value.trim();
  const phone = document.getElementById('phone')?.value.trim();
  const order = document.getElementById('order')?.value.trim();

  if (!name || !phone || !order) {
    alert('Please complete all fields before sending your order.');
    return false;
  }

  const text = `Order from ${name}%0APhone: ${phone}%0AOrder: ${order}`;
  const url = `https://wa.me/254712345678?text=${text}`;
  window.open(url, '_blank');
  return false;
}
