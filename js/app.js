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

const totalRoutePoints = [
  { label: 'Mayrhofen', detail: 'Start in het Zillertal', coords: [47.1667, 11.8667] },
  { label: 'Karl-von-Edelhütte', detail: 'Acclimatisatie boven de Ahorn', coords: [47.130555555556, 11.8975] },
  { label: 'Kasseler Hütte', detail: 'Na de Siebenschneidenweg', coords: [47.059444444444, 11.948611111111], danger: true },
  { label: 'Greizer Hütte', detail: 'Floitental en Lapenscharte', coords: [47.043333333333, 11.885833333333] },
  { label: 'Berliner Hütte', detail: 'Monumentale hut in het Zemmgrund', coords: [47.024444444444, 11.813055555556] },
  { label: 'Alpengasthaus Breitlahner', detail: 'Uitloop naar het Zemmgrund', coords: [47.060885249546054, 11.749757050378873], finish: true },
];

const totalRouteLineCoords = [
  totalRoutePoints[0].coords,
  totalRoutePoints[1].coords,
  [47.086944444444, 11.9325],
  totalRoutePoints[2].coords,
  totalRoutePoints[3].coords,
  totalRoutePoints[4].coords,
  totalRoutePoints[5].coords,
];

function initTotalRouteMap() {
  const mapEl = document.getElementById('total-route-map');
  if (!mapEl || typeof L === 'undefined') return;

  const map = L.map(mapEl, {
    scrollWheelZoom: false,
    zoomControl: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; OpenStreetMap',
  }).addTo(map);

  const mainLine = L.polyline(totalRouteLineCoords, {
    color: '#b5861a',
    weight: 5,
    opacity: 0.95,
    lineJoin: 'round',
  }).addTo(map);

  totalRoutePoints.forEach((point, index) => {
    const marker = L.circleMarker(point.coords, {
      radius: point.danger ? 9 : 8,
      color: '#fff',
      weight: 3,
      fillColor: point.finish ? '#d4a830' : point.danger ? '#c0392b' : '#1a3a2a',
      fillOpacity: 1,
    }).addTo(map);

    marker.bindPopup(`<strong>${index + 1}. ${point.label}</strong><br>${point.detail}`);
    marker.bindTooltip(point.label, {
      permanent: true,
      direction: index > 2 ? 'left' : 'right',
      offset: [8, 0],
      className: 'route-tooltip',
    });
  });

  map.fitBounds(mainLine.getBounds(), { padding: [30, 30] });
  mapEl.classList.add('is-loaded');
}

window.addEventListener('scroll', () => {
  updateProgress();
  updateActiveNav();
}, { passive: true });

bindImageFallbacks();
initTotalRouteMap();
updateProgress();
updateActiveNav();
