const htmlCode = `<div id=map class=container></div>`;

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
      filter: ['all', ['==', '$layer', 'building'], ['==', '$type', 'Polygon']],
      renderPlugin: {
        dataConfig: {
          type: 'fill',
        },
        type: 'fill',
      },
      symbol: {
        polygonBloom: false,
        polygonFill: [0.345, 0.345, 0.502, 1],
        polygonOpacity: 1,
        polygonPatternFile: null,
      },
    },
    {
        filter: ['all', ['==', '$layer', 'building'], ['==', '$type', 'Polygon']],
        renderPlugin: {
          dataConfig: {
            type: 'fill',
          },
          sceneConfig: {},
          type: 'fill',
        },
        symbol: {
          polygonBloom: false,
          polygonFill: [0.345, 0.345, 0.502, 1],
          polygonOpacity: 1,
          polygonPatternFile: null,
        },
      }
  ]
};
const compressedStyle = maptalks.VectorTileLayer.compressStyleJSON(style);
vt.setStyle(compressedStyle);

const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);`;

export const compressVtStyleCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
