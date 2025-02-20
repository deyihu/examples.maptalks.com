const htmlCode = `<div id="map" class="container"></div>
<div id="map1"></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  width: calc(100% - 2px);
  height: calc(50% - 2px);
  float: left;
  border: 1px solid
}

#map1 {
  width: calc(100% - 2px);
  height: calc(50% - 2px);
  float: right;
  border: 1px solid
}`;

const jsCode = `const c = [-0.113049,51.498568];
const map = new maptalks.Map('map', {
  center: c,
  zoom: 13,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});

const map1 = new maptalks.Map('map1', {
  center: c,
  zoom: 13,
  baseLayer: new maptalks.TileLayer('base1', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});
  
const pointLayer = new maptalks.PointLayer('point');

const marker = new maptalks.Marker(c, {
  properties: {
    name: 'point marker'
  }
}).addTo(pointLayer);
  
marker.setSymbol({
  textFaceName: 'sans-serif',
  textName: 'MapTalks',
  textFill: '#34495e',
  textSize: 40
})
  
const groupLayer = new maptalks.GroupGLLayer('group', [pointLayer]);
groupLayer.addTo(map);

const pointLayer1 = new maptalks.PointLayer('point1');
maptalks.Geometry.fromJSON(marker.toJSON()).addTo(pointLayer1);
const groupLayer1 = new maptalks.GroupGLLayer('group1', [pointLayer1]);
groupLayer1.addTo(map1);`;

export const geometryJsonCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
