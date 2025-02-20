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
  background: #444;
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
});
  
const pointLayer = new maptalks.PointLayer('point', {
  geometryEvents: false
});

const marker = new maptalks.Marker(
  [-74.00912099912109, 40.71107610933129],
  {
    symbol: {
      textFaceName: 'sans-serif',
      textName: 'MapTalks',
      textFill: '#22be9e',
      textHorizontalAlignment: 'right',
      textSize: 40
    }
  }
).addTo(pointLayer);
  
const groupLayer = new maptalks.GroupGLLayer("group", [pointLayer]);
groupLayer.addTo(map);`;

export const disableGeoEventsCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
