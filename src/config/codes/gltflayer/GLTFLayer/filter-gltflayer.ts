import { map, sceneConfig } from '../gltf-util';

const htmlCode = `
<div id="map" class="container"></div>
<div class="pane"><a href="javascript:filter();">选择 num >= 0.2的模型</a></div>
`;

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

.pane{background:#34495e;line-height:28px;color:#fff;z-index:10;position:absolute;top:40px;right:20px}
.pane a{display:block;color:#fff;text-align:left;padding:0 10px;min-width:28px;min-height:28px;float:left}`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/alien/alien.glb';

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const markers = [];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const gltfMarker = new maptalks.GLTFMarker(position.add(i * 0.01 - 0.015, j * 0.01 - 0.015), {
      symbol: {
        url
      },
      properties: {
        num: (i + j) * 0.1
      }
    });
    markers.push(gltfMarker);
  }
}

gltfLayer.addGeometry(markers);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);

function filter() {
  gltfLayer.filter(['>=', 'num', 0.2]).forEach(function (gltfMarker) {
    gltfMarker.updateSymbol({
      uniforms: {
        polygonFill: [0.8, 0.1, 0.1, 1.0]
      }
    });
  });
}`;

export const filterGLTFLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
