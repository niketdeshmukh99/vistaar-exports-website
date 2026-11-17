// ===== Vistaar Exports — small scripts =====

// Your WhatsApp number (country code + number, no spaces or +)
const WHATSAPP_NUMBER = '917057507200';

// 1) Mobile menu open/close
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
// Close the menu after tapping a link
nav.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// 2) Enquiry form -> opens WhatsApp with the buyer's details typed in
const form = document.getElementById('enquiry-form');
const errorBox = form.querySelector('.form-error');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if (!data.name.trim() || !data.country.trim()) {
    errorBox.hidden = false;
    return;
  }
  errorBox.hidden = true;
  const lines = [
    'Hello Vistaar Exports, I have an enquiry.',
    '',
    'Name: ' + data.name,
    data.company && 'Company: ' + data.company,
    data.email && 'Email: ' + data.email,
    'Country: ' + data.country,
    'Product: ' + data.product,
    data.quantity && 'Quantity: ' + data.quantity,
    data.message && 'Message: ' + data.message,
  ].filter(Boolean);
  const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
  window.open(url, '_blank', 'noopener');
});

// 3) Keep the footer year current
document.getElementById('year').textContent = new Date().getFullYear();
