import { map, sceneConfig } from '../gltf-util';
const htmlCode = `<div id="map" class="container"></div>
<div id="info"></div>`;

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

#info {
  position: fixed;
  background-color: rgba(13, 13, 13, 0.5);
  padding: 10px 10px 10px 10px;
  font: 13px bold sans-serif;
  color: #fff;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 50px;
  overflow: hidden
}`;

const jsCode = `
${map}
${sceneConfig}
const url = '/resources/gltf/alien/alien.glb';
const symbol = {
  url: url,
  scale: [2, 2, 2]
};

const gltfLayer = new maptalks.GLTFLayer('gltf');
const position = map.getCenter();
const gltfMarker = new maptalks.GLTFMarker(position, {
  symbol: symbol
}).addTo(gltfLayer);

gltfMarker.on('click', e => {
  document.getElementById('info').innerHTML = 'click事件';
});
gltfMarker.on('mousemove', e => {
  map.setCursor('url(/resources/images/cursor.png) 9 0, auto');
  gltfMarker.setUniform('polygonFill', [0.0, 0.8, 0.0, 1.0]);
  document.getElementById('info').innerHTML = 'mousemove事件';
});
gltfMarker.on('mouseleave', e => {
  map.resetCursor();
  gltfMarker.setUniform('polygonFill', [1, 1, 1, 1.0]);
  document.getElementById('info').innerHTML = 'mouseleave事件';
});

const groupGLLayer = new maptalks.GroupGLLayer('gl', [gltfLayer], {sceneConfig}).addTo(map);
`;

export const mouseeventMarkerCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
