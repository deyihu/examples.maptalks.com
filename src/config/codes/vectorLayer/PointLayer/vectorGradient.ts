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
});
  
const point = new maptalks.PointLayer('point');

const marker = new maptalks.Marker(
  [-74.00912099912109, 40.71107610933129],
  {
    symbol: {
      markerType: 'ellipse',
      markerFill: {
        type: 'linear',
        places: [0, 0, 1, 1],
        colorStops: [
          [0.00, '#fff'],
          [0.50, '#fff27e'],
          [1, '#f87e4b']
        ]
      },
      markerLineWidth: 0,
      markerWidth: 100,
      markerHeight: 100
    }
  }
).addTo(point);
  
const groupLayer = new maptalks.GroupGLLayer("group", [point]);
groupLayer.addTo(map);`;

export const vectorGradientCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
