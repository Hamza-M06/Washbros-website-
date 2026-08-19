const GOOGLE_FORM_URL = "PASTE_YOUR_GOOGLE_FORM_LINK_HERE";

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.getElementById('year').textContent = new Date().getFullYear();

const quoteButton = document.getElementById('googleFormButton');
quoteButton?.addEventListener('click', () => {
  if (GOOGLE_FORM_URL.startsWith('http')) {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = 'mailto:washbrosgta@gmail.com?subject=Wash%20Bros%20Quote%20Request&body=Name%3A%0APhone%3A%0AVehicle%3A%0AService%20wanted%3A%0ALocation%3A%0APreferred%20date%3A%0A';
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
