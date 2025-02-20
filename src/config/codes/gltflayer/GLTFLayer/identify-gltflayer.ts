import { map, sceneConfig } from '../gltf-util';

const htmlCode = `
<div id="map" class="container"></div>
<div class="pane">点击地图查询模型</div>`;

const cssCode = `html,
body {
  margin: 0px;
  height: 100%;
  width: 100%;
}

.container {
  width: 100%;
  height: 100%;
}

.pane{background:#34495e;line-height:28px;color:#fff;z-index:10;position:absolute;top:40px;right:20px}
.pane a{display:block;color:#fff;text-align:left;padding:0 10px;min-width:28px;min-height:28px;float:left}`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
  url: url
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
  symbol: symbol
}).addTo(gltfLayer);

const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);

map.on('click', e => {
  const picks = gltfLayer.identify(e.coordinate);
  if (picks && picks.length > 0) {
    const target = picks[0].data;
    target.setUniform('polygonFill', [0.2, 0.2, 1.0, 1.0]);
  } else {
    gltfMarker.setUniform('polygonFill', [1.0, 1.0, 1.0, 1.0]);
  }
});
`;

export const identifyGLTFLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
