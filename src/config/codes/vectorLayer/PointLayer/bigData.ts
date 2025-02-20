const htmlCode = `<div id="map" class="container"></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  width: 100%;
  height: 100%;
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-0.113049,51.49856],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});
    
const pointLayer = new maptalks.PointLayer('point');

const center = map.getCenter();
const width = 0.055;
const height = 0.03;
const markers = [];

for (let i = 0; i <= 50000; i++) {
  const x = center.x + (Math.random() - 0.5) * width;
  const y = center.y + (Math.random() - 0.5) * height;
  markers.push(new maptalks.Marker([x, y], {
    symbol: {
      markerType: 'ellipse',
      markerFill: '#0e595e',
      markerFillOpacity: 0.4,
      markerLineWidth: 2,
      markerLineColor: '#fff',
      markerWidth: 20,
      markerHeight: 20
    }
  }));
}

pointLayer.addGeometry(markers);
    
const groupLayer = new maptalks.GroupGLLayer('group', [pointLayer]);
groupLayer.addTo(map);`;

export const bigDataCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
