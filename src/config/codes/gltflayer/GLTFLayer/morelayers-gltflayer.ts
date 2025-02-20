import { map, sceneConfig } from '../gltf-util';
const htmlCode = `
<div id="map" class="container"></div>`;

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
${map}
${sceneConfig}
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
  url: url
};

const position = map.getCenter();
const layers = [];
for (let i = 0; i < 5; i++) {
  const gltfLayer = new maptalks.GLTFLayer('gltf_' + i);
  const gltfMarker = new maptalks.GLTFMarker(position.add(i * 0.01, 0), {
    symbol: symbol
  }).addTo(gltfLayer);
  layers.push(gltfLayer);
}
const groupGLLayer = new maptalks.GroupGLLayer('gl', layers, {sceneConfig}).addTo(map);
`;

export const moreGLTFLayerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
