// Constantes et chemins
const PATHS = {
  EARTH_DAY_1: './GLOBE/earth.jpg',
  EARTH_DAY_2: './GLOBE/world.topo.bathy.200401.jpg',
  CLOUDS: 'https://clouds.matteason.co.uk/images/4096x2048/clouds-alpha.png',
  EARTH_NIGHT_RAW: './GLOBE/night.jpg',
  STARFIELD: './GLOBE/starfield.jpg',
  COUNTRIES: './GEOJSON/countries_10m_new.geojson',
  TRAJETS: './GEOJSON/TRAJETS_ALL_vacances_wgs.geojson',
  EARTH_BUMP: './GLOBE/world.topo.bathy.200401.jpg',
};

// Couleurs des trajets
const TRAJET_COLORS = {
  avion: '#00dbc5',
  train: '#db0016',
  bus: '#dbc500',
  voiture: '#0016db',
  bateau: '#0084db',
};

// État global
const state = {
  showPays: false,
  showTrajets: false,
  showNuages: false,
  showNightShadow: false,
  showRelief: false,
  dayBase: 'earth',
  activeVoyages: new Set(),
  voyagesSet: new Set(),
  countryLines: [],
  trajetLines: [],
};

// Chargement des données
async function loadJSON(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

// Normalisation des longitudes
function normalizeLng(lng) {
  return ((lng + 180) % 360) - 180;
}

// Extraction des lignes pour les frontières des pays
function linesFromPolygonGeom(geom) {
  const out = [];
  if (!geom) return out;
  if (geom.type === 'Polygon') {
    geom.coordinates.forEach(ring =>
      out.push({ coords: ring.map(([x, y]) => [normalizeLng(x), y, 0.001]) })
    );
  } else if (geom.type === 'MultiPolygon') {
    geom.coordinates.forEach(poly =>
      poly.forEach(ring =>
        out.push({ coords: ring.map(([x, y]) => [normalizeLng(x), y, 0.001]) })
      )
    );
  }
  return out;
}

// Extraction des lignes pour les trajets
function extractLinesFromFeature(feature) {
  const out = [];
  const g = feature?.geometry;
  if (!g) return out;
  if (g.type === 'LineString') {
    out.push({ coords: g.coordinates.map(([x, y]) => [normalizeLng(x), y]) });
  } else if (g.type === 'MultiLineString') {
    g.coordinates.forEach(lineCoords =>
      out.push({ coords: lineCoords.map(([x, y]) => [normalizeLng(x), y]) })
    );
  } else if (g.type === 'Polygon' || g.type === 'MultiPolygon') {
    linesFromPolygonGeom(g).forEach(l => out.push(l));
  }
  return out;
}

// Initialisation des données
async function initData() {
  const [countriesGeo, trajetsGeo] = await Promise.all([
    loadJSON(PATHS.COUNTRIES),
    loadJSON(PATHS.TRAJETS),
  ]);

  // Frontières des pays
  countriesGeo.features.forEach(f =>
    linesFromPolygonGeom(f.geometry).forEach(l => state.countryLines.push(l))
  );

  // Trajets et voyages
  trajetsGeo.features.forEach(f => {
    const col = TRAJET_COLORS[(f.properties?.trajet || f.properties?.transport || '').toLowerCase()] || '#00ffff';
    const voyageVal = f.properties?.voyage ?? 'Inconnu';
    state.voyagesSet.add(voyageVal);
    extractLinesFromFeature(f).forEach(l =>
      state.trajetLines.push({
        ...l,
        lineStyle: { color: col, width: 2.5, opacity: 0.95 },
        properties: f.properties,
        voyage: voyageVal,
      })
    );
  });

  // Initialisation de l'état
  state.activeVoyages = new Set(state.voyagesSet);
}

// Création des séries pour ECharts
function makeCountrySeries() {
  if (!state.showPays) return [];
  return [{
    name: 'Pays',
    type: 'lines3D',
    coordinateSystem: 'globe',
    polyline: true,
    data: state.countryLines,
    lineStyle: { color: '#f0f0f0', width: 1, opacity: 0.98 },
  }];
}

function makeTrajetSeries() {
  if (!state.showTrajets) return [];
  const filteredTrajets = state.trajetLines.filter(l => state.activeVoyages.has(l.voyage));
  return [{
    name: 'Trajets',
    type: 'lines3D',
    coordinateSystem: 'globe',
    polyline: true,
    data: filteredTrajets,
    effect: {
      show: true,
      period: 10,
      constantSpeed: 5,
      trailLength: 0.15,
      symbolSize: 6,
      color: '#FFFFFF',
    },
    lineStyle: { width: 2.5, opacity: 0.95 },
  }];
}

function makePinSeries() {
  const allowedCities = new Set();
  state.activeVoyages.forEach(v => {
    const list = voyagesToCities[v];
    if (Array.isArray(list)) list.forEach(city => allowedCities.add(city));
  });
  const pinsData = allowedCities.size > 0
    ? visitedCities.filter(c => allowedCities.has(c.name))
    : [];
  return [{
    name: 'Pins',
    type: 'scatter3D',
    coordinateSystem: 'globe',
    symbol: 'circle',
    symbolSize: 10,
    itemStyle: {
      color: '#FFFFFF',
      borderColor: '#000000',
      borderWidth: 0.75,
    },
    emphasis: {
      itemStyle: {
        color: '#FFD700',
        borderColor: '#000000',
        borderWidth: 1,
      },
      label: {
        show: true,
        formatter: p => p.name,
        position: 'top',
        textStyle: {
          color: '#fff',
          padding: [2, 2],
          borderRadius: 3,
          backgroundColor: 'rgba(0,0,0,1)',
          fontSize: 15,
        },
      },
    },
    data: pinsData,
  }];
}

// Génération des options pour ECharts
function makeOption() {
  const layers = [];
  if (state.showNightShadow) {
    layers.push({
      show: true,
      name: 'Ombre nuit',
      type: 'blend',
      intensity: 1.3,
      blendTo: 'emission',
      texture: PATHS.EARTH_NIGHT_RAW,
    });
  }
  if (state.showNuages) {
    layers.push({
      show: true,
      name: 'Nuages',
      type: 'overlay',
      texture: PATHS.CLOUDS,
      shading: 'lambert',
      distance: 2,
    });
  }
  return {
    backgroundColor: 'transparent',
    globe: {
      baseTexture: state.dayBase === 'earth' ? PATHS.EARTH_DAY_1 : PATHS.EARTH_DAY_2,
      heightTexture: state.showRelief ? PATHS.EARTH_BUMP : undefined,
      displacementScale: 0.025,
      shading: 'realistic',
      environment: PATHS.STARFIELD,
      postEffect: { enable: false },
      light: {
        ambient: { color: '#1f1f1f', intensity: 0.2 },
        main: { color: '#FFFDED', intensity: 0.9 },
      },
      atmosphere: { show: true, color: '#a1a1a1', offset: 4 },
      viewControl: { autoRotate: false, autoRotateSpeed: 0.5 },
      layers,
    },
    series: [
      ...makeCountrySeries(),
      ...makeTrajetSeries(),
      ...makePinSeries(),
    ],
  };
}

// Rafraîchissement du globe
function refreshGlobe() {
  const currentView = globeChart.getOption()?.globe?.[0]?.viewControl;
  const newOpt = makeOption();
  if (currentView) {
    newOpt.globe.viewControl = { ...newOpt.globe.viewControl, ...currentView };
  }
  globeChart.setOption(newOpt, { notMerge: true });
}

// Initialisation du globe
async function initGlobe() {
  await initData();
  globeChart = echarts.init(document.getElementById('globeContainer'), null, { renderer: 'webgl' });
  refreshGlobe();
}

// Export pour ui.js
export { state, refreshGlobe, initGlobe, globeChart };
