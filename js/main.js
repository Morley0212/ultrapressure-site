// Navigation
function navigate(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  const page = document.getElementById(id);
  if (page) {
    page.classList.add('active');
    window.scrollTo(0, 0);
  }

  const link = document.querySelector(`.nav-links a[data-page="${id}"]`);
  if (link) link.classList.add('active');
}

// Set initial page
document.addEventListener('DOMContentLoaded', () => {
  navigate('page-top');
});
