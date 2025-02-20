const htmlCode = `<div id="map" class="container"></div>
<div class="pane"><a href="javascript:updateFill();">Update fill</a></div>`;

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
  position: absolute;
  top: 20px;
  right: 20px;
  line-height: 25px;
  z-index: 10;
}
  
.pane a {
  display: block;
  float: left;
  text-align: left;
  margin-left: 6px;
  padding: 0 10px;
  min-width: 28px;
  min-height: 25px;
  color: #000;
  text-decoration: none;
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
    
const layer = new maptalks.PolygonLayer('polygon');
  
const polygon = new maptalks.Polygon([
  [
    [-0.131049, 51.498568],
    [-0.107049, 51.498568],
    [-0.107049, 51.493568],
    [-0.131049, 51.493568],
    [-0.131049, 51.498568]
  ]
], {
  symbol: {
    polygonFill: 'rgb(135,196,240)',
    polygonOpacity: 1,
    lineColor: '#1bbc9b',
    lineWidth: 6
  }
}).addTo(layer);
    
const groupLayer = new maptalks.GroupGLLayer('group', [layer]);
groupLayer.addTo(map);

// only update rectangle's polygonFill
function updateFill() {
  polygon.updateSymbol({
    polygonFill: 'rgb(216,115,149)'
  });
}`;

export const updateSymbolCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
