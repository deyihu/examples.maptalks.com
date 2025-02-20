const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
<a href="javascript:highlightAll();">highlight all</a>
<a href="javascript:highlightPart();">highlight id 10-15</a>
<a href="javascript:cancelhighlight();">cancel highlight</a>
</div>`;

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

const point = new maptalks.PointLayer('point', {
  collision: true
});

const center = map.getCenter();
const width = 0.055;
const height = 0.03;
const markers = [];

for (let i = 0; i <= 30; i++) {
  const x = center.x + (Math.random() - 0.5) * width;
  const y = center.y + (Math.random() - 0.5) * height;
  markers.push(new maptalks.Marker([x, y], {
    id: i,
    symbol: {
      markerType: 'ellipse',
      markerFill: '#0e595e',
      markerFillOpacity: 0.4,
      markerLineWidth: 2,
      markerLineColor: '#fff',
      markerWidth: 70,
      markerHeight: 70
    }
  }));
}

point.addGeometry(markers);

function highlightAll() {
  point.outlineAll();
}

function highlightPart() {
  point.outline([10, 11, 12, 13, 14, 15]);
}

function cancelhighlight() {
  point.cancelOutline();
}

function closeFading() {
  point.options.sceneConfig.fading = false
}

const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const highlightCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
