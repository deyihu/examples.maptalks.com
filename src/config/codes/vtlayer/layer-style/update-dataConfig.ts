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
  pitch: 20
});

const style = {
  style: [
    {
      filter: ['all', ['==', '$layer', 'building'], ['==', '$type', 'Polygon']],
      renderPlugin: {
        dataConfig: {
          type: '3d-extrusion',
          altitudeProperty: null,
          altitudeScale: 1
        },
        type: 'lit',
      },
      symbol: {
        polygonOpacity: 1,
        material: {
          baseColorFactor: [1, 1, 1, 1]
        }
      },
    }
  ]
};

const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
  style
});

const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);

setTimeout(() => {
    vt.updateDataConfig(0, {
      altitudeProperty: 'height',
    });
}, 1000);
`;


export const updateDataConfigCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
