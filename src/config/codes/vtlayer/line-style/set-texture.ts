const htmlCode = `<div id="map" class="container"></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  background-color: #444444;
  width: 100%;
  height: 100%;
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
});
  
const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
});

const style = {
  style: [
    {
      filter : [
        'all',
        ['==', '$layer', 'internal-road'],
        ['==', '$type', 'LineString'],
      ],
      renderPlugin: {
        dataConfig: {
          type: 'line',
        },
        sceneConfig: {},
        type: 'line',
      },
      symbol: {
        lineBloom: false,
        lineCap: 'butt',
        lineColor: [0.73, 0.73, 0.73, 1],
        lineDasharray: [0, 0, 0, 0],
        lineDashColor: [1, 1, 1, 0],
        lineDx: 0,
        lineDy: 0,
        lineGapWidth: 0,
        lineJoin: 'miter',
        lineOpacity: 1,
        linePatternAnimSpeed: 0,
        linePatternFile: '/resources/textures/figure.jpg',
        lineStrokeWidth: 0,
        lineStrokeColor: [0, 0, 0, 0],
        lineJoinPatternMode: 0,
        lineWidth: 10,
      },
    }
  ]
};
vt.setStyle(style);
  
const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);`;

export const setTextureCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
