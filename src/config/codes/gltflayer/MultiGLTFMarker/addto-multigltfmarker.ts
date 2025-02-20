import { map, sceneConfig } from '../gltf-util';
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
${map}
${sceneConfig}
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
  url: url
};
const position = map.getCenter();
const data = [];
for (let i = -2; i < 3; i++) {
  for (let j = -2; j < 3; j++) {
    data.push({
      coordinates: position.add(i * 0.01 - 0.018, j * 0.01),
      translation: [0, 0, 0],
      scale: [1, 1, 1]
    });
  }
}
const gltfLayer = new maptalks.GLTFLayer('gltf');
const groupgltfmarker = new maptalks.MultiGLTFMarker(data, {
    symbol: symbol
}).addTo(gltfLayer);
const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);
`;

export const addToMultiGLTFMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
