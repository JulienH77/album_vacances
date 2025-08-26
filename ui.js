import { state, refreshGlobe, initGlobe, globeChart } from './globe.js';

// Références DOM
const elements = {
  toggleNight: document.getElementById('toggleNight'),
  toggleRelief: document.getElementById('toggleRelief'),
  toggleClouds: document.getElementById('toggleClouds'),
  toggleDayBase: document.getElementById('toggleDayBase'),
  chkPays: document.getElementById('chkPays'),
  chkTrajets: document.getElementById('chkTrajets'),
  voyagesList: document.getElementById('voyagesList'),
  trajetPopup: document.getElementById('trajetPopup'),
  leafletPopup: document.getElementById('leafletPopup'),
  leafletMap: document.getElementById('leafletMap'),
  leafletClose: document.getElementById('leafletClose'),
  photoPopup: document.getElementById('photoPopup'),
  photoPopupImg: document.getElementById('photoPopupImg'),
  photoClose: document.getElementById('photoClose'),
};

// Icône pour les hôtels
const hotelIcon = L.divIcon({
  html: `
    <div style="
      width:33px; height:33px;
      background:#FFFFFF;
      border:2px solid #000;
      border-radius:15%;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:25px;
      box-shadow:0 3px 4px rgba(0,0,0,0.3);
    ">🏢</div>
  `,
  className: '',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

// Map Leaflet actuelle
let currentLeafletMap = null;

// Ouverture de la popup Leaflet
function openLeafletPopup(cityData) {
  elements.leafletPopup.style.display = 'block';
  if (currentLeafletMap) {
    currentLeafletMap.remove();
    currentLeafletMap = null;
  }
  elements.leafletMap.innerHTML = '';

  // Couches de base
  const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OSM',
  });
  const gmap = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
    attribution: '&copy; Google Maps',
  });
  const gsat = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    attribution: '&copy; Google Maps Sat',
  });
  const baseMaps = {
    "OSM": osm,
    "Google Street": gmap,
    "Google Satellite": gsat,
  };

  // Configuration de la vue
  const [lon, lat] = cityData.value;
  const config = cityViewConfig[cityData.name] || { center: [lat, lon], zoom: 13 };
  currentLeafletMap = L.map(elements.leafletMap, { layers: [osm] }).setView(config.center, config.zoom);
  L.control.layers(baseMaps).addTo(currentLeafletMap);

  // Gestion des photos et marqueurs
  const photosByYear = {};
  (cityData.visites || []).forEach(v => {
    const [vlon, vlat] = v.coords;
    if (v.type === 'hotel') {
      L.marker([vlat, vlon], { icon: hotelIcon }).addTo(currentLeafletMap)
        .bindPopup(`<b>Hotel</b><br>Du ${v.datedeb} au ${v.datefin}`);
      return;
    }
    if (v.photo) {
      // ... (logique de gestion des photos et marqueurs, voir code original)
    } else {
      L.marker([vlat, vlon]).addTo(currentLeafletMap).bindPopup(`<b>${v.name || ''}</b>`);
    }
  });

  // Ajout des couches
  Object.values(photosByYear).forEach(months =>
    Object.values(months).forEach(days =>
      Object.values(days).forEach(group => group.addTo(currentLeafletMap))
    )
  );

  // Contrôle hiérarchique des dates
  const datesControl = L.control({ position: 'topright' });
  datesControl.onAdd = function() {
    // ... (logique de contrôle des dates, voir code original)
  };
  datesControl.addTo(currentLeafletMap);
  currentLeafletMap.invalidateSize();
}

// Fermeture des popups
function closeLeafletPopup() {
  elements.leafletPopup.style.display = 'none';
  if (currentLeafletMap) {
    currentLeafletMap.remove();
    currentLeafletMap = null;
  }
}

function closePhotoPopup() {
  elements.photoPopup.style.display = 'none';
}

// Ouverture de la popup de photo
function openPhotoPopup(photoUrl) {
  elements.photoPopupImg.src = photoUrl;
  elements.photoPopup.style.display = 'flex';
}

// Mise à jour de l'état et rafraîchissement
function updateState(key, value) {
  state[key] = value;
  refreshGlobe();
}

// Écouteurs d'événements
function setupEventListeners() {
  // Boutons du globe
  elements.toggleNight.addEventListener('click', () => {
    updateState('showNightShadow', !state.showNightShadow);
    elements.toggleNight.classList.toggle('active', state.showNightShadow);
  });

  elements.toggleRelief.addEventListener('click', () => {
    updateState('showRelief', !state.showRelief);
    elements.toggleRelief.classList.toggle('active', state.showRelief);
  });

  elements.toggleClouds.addEventListener('click', () => {
    updateState('showNuages', !state.showNuages);
    elements.toggleClouds.classList.toggle('active', state.showNuages);
  });

  elements.toggleDayBase.addEventListener('click', () => {
    updateState('dayBase', state.dayBase === 'earth' ? 'topo' : 'earth');
    elements.toggleDayBase.textContent = state.dayBase === 'earth' ? 'EARTH' : 'TOPO';
  });

  // Cases à cocher
  elements.chkPays.addEventListener('change', (e) => {
    updateState('showPays', e.target.checked);
  });

  elements.chkTrajets.addEventListener('change', (e) => {
    updateState('showTrajets', e.target.checked);
    elements.voyagesList.style.display = state.showTrajets ? 'block' : 'none';
  });

  // Liste des voyages
  Array.from(state.voyagesSet).sort().forEach(v => {
    const id = 'voy_' + v.replace(/[^A-Za-z0-9_-]/g, '_');
    const label = document.createElement('label');
    label.setAttribute('for', id);
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.id = id;
    cb.className = 'voyageChk';
    cb.value = v;
    cb.checked = true;
    cb.setAttribute('aria-label', 'Voyage ' + v);
    label.appendChild(cb);
    label.appendChild(document.createTextNode(' ' + v));
    elements.voyagesList.appendChild(label);
  });

  elements.voyagesList.addEventListener('change', (e) => {
    const target = e.target;
    if (target.classList.contains('voyageChk')) {
      if (target.checked) state.activeVoyages.add(target.value);
      else state.activeVoyages.delete(target.value);
      refreshGlobe();
    }
  });

  // Clic sur le globe
  globeChart.on('click', (params) => {
    if (params.seriesName === 'Trajets' && params.data?.properties) {
      const p = params.data.properties;
      elements.trajetPopup.innerHTML = `
        <strong>Trajet:</strong> ${p.trajet || ''}<br/>
        <strong>Voyage:</strong> ${p.voyage || ''}<br/>
        <strong>Date début:</strong> ${p.date_deb || ''}<br/>
        <strong>Date fin:</strong> ${p.date_fin || ''}<br/>
        <strong>Durée:</strong> ${p.duree || ''}<br/>
        <strong>Distance:</strong> ${p.distanceKM || ''} km
      `;
      elements.trajetPopup.style.display = 'block';
    } else if (params.seriesName === 'Pins' && params.data) {
      elements.trajetPopup.style.display = 'none';
      openLeafletPopup(params.data);
    } else {
      elements.trajetPopup.style.display = 'none';
    }
  });

  // Fermeture des popups
  elements.leafletClose.addEventListener('click', closeLeafletPopup);
  elements.photoClose.addEventListener('click', closePhotoPopup);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLeafletPopup();
      closePhotoPopup();
    }
  });
  elements.leafletPopup.addEventListener('click', (e) => {
    if (e.target === elements.leafletPopup) closeLeafletPopup();
  });
  elements.photoPopup.addEventListener('click', (e) => {
    if (e.target === elements.photoPopup) closePhotoPopup();
  });
}

// Initialisation
async function init() {
  await initGlobe();
  setupEventListeners();
  elements.voyagesList.style.display = state.showTrajets ? 'block' : 'none';
}

init();
