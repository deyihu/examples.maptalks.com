const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
  <a href="javascript:open();">open</a>
  <a href="javascript:close();">close</a>
</div>`;

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
          type: 'point',
        },
        sceneConfig: {
          collision: true,
          fading: true,
          depthFunc: 'always',
        },
        type: 'icon',
      },
      symbol: [
        {
          markerType: 'ellipse',
          markerFill: [0.53, 0.77, 0.94, 1],
          markerFillOpacity: 1,
          markerHeight: 20,
          markerWidth: 20,
          markerLineColor: [0.2, 0.29, 0.39, 1],
          markerLineOpacity: 1,
          markerLineWidth: 3,
          markerPlacement: 'vertex'
        }
      ]      
    }
  ]
};
vt.setStyle(style);

const groupLayer = new maptalks.GroupGLLayer('group', [vt]);
groupLayer.addTo(map);

function open() {
  vt.updateSceneConfig(0, {
    collision: true,
  });
}

function close() {
  vt.updateSceneConfig(0, {
    collision: false,
  });
}`;

export const toggleCollisionCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
