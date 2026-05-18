const progressBar = document.getElementById('progress-bar');
const navLinks = [...document.querySelectorAll('.nav-links a')];
const sections = navLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function updateProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}

function updateActiveNav() {
  const current = sections
    .filter(section => section.getBoundingClientRect().top <= 120)
    .at(-1);

  navLinks.forEach(link => {
    link.classList.toggle('active', current && link.getAttribute('href') === `#${current.id}`);
  });
}

function bindImageFallbacks() {
  const fallback = 'https://commons.wikimedia.org/wiki/Special:FilePath/Berliner_H%C3%B6henweg_Nr_526_%C3%BCber_dem_Schlegeisspeicher_04.JPG?width=1200';

  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      if (img.dataset.fallbackApplied === 'true') return;
      img.dataset.fallbackApplied = 'true';
      img.src = fallback;
    });
  });
}

function hydrateKomootEmbeds() {
  document.querySelectorAll('.komoot-panel[data-embed-src]').forEach(panel => {
    const src = panel.dataset.embedSrc?.trim();
    if (!src) return;

    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = panel.querySelector('.komoot-map-preview strong')?.textContent || 'Komoot route';
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;

    const preview = panel.querySelector('.komoot-map-preview');
    panel.classList.add('has-embed');
    if (preview) {
      preview.replaceWith(iframe);
    } else {
      panel.prepend(iframe);
    }
  });
}

window.addEventListener('scroll', () => {
  updateProgress();
  updateActiveNav();
}, { passive: true });

bindImageFallbacks();
hydrateKomootEmbeds();
updateProgress();
updateActiveNav();
