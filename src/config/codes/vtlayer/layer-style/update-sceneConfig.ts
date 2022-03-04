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



const style = {
  style: [
    {
      filter: ['all', ['==', '$layer', 'building'], ['==', '$type', 'Polygon']],
      renderPlugin: {
        dataConfig: {
          type: 'point',
        },
        sceneConfig: {
          collision: true,
          fading: true,
          depthFunc: 'always',
        },
        type: 'icon',
      },
      symbol: {
        markerFill: [0.53, 0.77, 0.94, 1],
        markerFillOpacity: 1,
        markerHeight: 20,
        markerWidth: 20,
        markerLineColor: [0.2, 0.29, 0.39, 1],
        markerLineWidth: 3,
        markerOpacity: 1,
        markerType: 'ellipse'
      },
    }
  ]
};

const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
  style
});

const groupLayer = new maptalks.GroupGLLayer('group', [vt]);
groupLayer.addTo(map);

// 用updateSceneConfig关闭碰撞检测
vt.updateSceneConfig(0, {
  collision: false
});
`;

export const updateSceneConfigCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
