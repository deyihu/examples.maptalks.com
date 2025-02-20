const htmlCode = `<div id="map" class="container"></div>
<div class="pane">Size changes with zoom</div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  width: 100%;
  height: 100%;
}

.pane {
  line-height: 28px;
  color: #000;
  z-index: 10;
  position: absolute;
  top: 20px;
  right: 20px;
  background: #efefef;
  border: 1px solid #000;
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

const center = map.getCenter();
    
const point = new maptalks.PointLayer('point');
  
const marker = new maptalks.Marker(
  [-0.113049, 51.49856],
  {
    symbol: [
      {
        markerType: 'ellipse',
        markerWidth: { stops: [[7, 5], [14, 200]] },
        markerHeight: { stops: [[7, 5], [14, 200]] },
        markerFill: '#18987f',
        markerFillOpacity: 0.6,
        markerLineColor: '#34495e',
        markerLineWidth: 5
      },
      {
        textFaceName: 'sans-serif',
        textName: 'MapTalks',
        textFill: '#fff',
        textSize: { stops: [[7, 2], [14, 30]] },
        textDy: -100,
      }
    ]
  }
).addTo(point);
    
const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const symbolByZoomCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
