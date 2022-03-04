const htmlCode = `<div id="map" class="container"></div>`;

const cssCode = `html,
body {
  margin: 0px;
  height: 100%;
  width: 100%;
}

.container {
  width: 100%;
  height: 100%;
}`;

const jsCode = `
const map = new maptalks.Map('map', {
  center: [-0.113049, 51.498568],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});

const lineLayer = new maptalks.LineStringLayer('linelayer');

const multiline = new maptalks.MultiLineString([
    [[-0.131049, 51.503568], [-0.107049, 51.503568]],
    [[-0.131049, 51.498568], [-0.107049, 51.498568]],
    [[-0.131049, 51.493568], [-0.107049, 51.493568]]
  ], {
    arrowStyle : null, // arrow-style : now we only have classic
    arrowPlacement : 'vertex-last', // arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
    visible : true,
    editable : true,
    cursor : null,
    shadowBlur : 0,
    shadowColor : 'black',
    draggable : false,
    dragShadow : false, // display a shadow during dragging
    drawOnAxis : null,  // force dragging stick on a axis, can be: x, y
    symbol: {
      'lineColor' : '#1bbc9b',
      'lineWidth' : 3
    }
}).addTo(lineLayer);
  
const groupLayer = new maptalks.GroupGLLayer('group', [lineLayer]).addTo(map);
`;

export const addMultiLineStringCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
