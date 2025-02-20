const htmlCode = `<div id="map" class="container"></div>`;

const cssCode = `html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

.container {
  width: 100%;
  height: 100%;
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
  zoomControl: true,
});
  
const point = new maptalks.PointLayer('point', {
  minZoom: 12,
  maxZoom: 18
});

const marker = new maptalks.Marker(
  map.getCenter(),
  {
    symbol: {
      textName: 'Layer is add.',
      textWeight: 'bold',
      textSize: 50,
      textFill: '#1bbc9b',
      textHaloFill: '#fff',
      textHaloRadius: 5
    }
  }
).addTo(point);
  
const groupLayer = new maptalks.GroupGLLayer("group", [point]);
groupLayer.addTo(map);`;

export const setZoomBoundaryCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
