const htmlCode = `<div id="map" class="container"></div>
<div class="pane">click on circles to identify</div>`;

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

.pane {
  line-height: 28px;
  color: #000;
  z-index: 10;
  position: absolute;
  top: 20px;
  right: 20px;
  background: #efefef;
  border: 1px solid #000;
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-0.113049,51.49856],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a','b','c','d'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  })
});
    
const point = new maptalks.PointLayer('point');

map.on('click', (e) => {
  //reset colors
  point.forEach((g) => {
    g.updateSymbol({
      markerFill: '#0e595e'
    });
  });
  //identify
  map.identify(
    {
      coordinate: e.coordinate,
      layers: [point]
    },
    (geos) => {
      if (geos.length === 0) {
        return;
      }
      geos.forEach((g) => {
        g.updateSymbol({
          markerFill: '#f00'
        });
      });
    }
  );
});

const center = map.getCenter();
const width = 0.055;
const height = 0.03;
const markers = [];

for (let i = 65; i <= 90; i++) {
  const x = center.x + (Math.random() - 0.5) * width;
  const y = center.y + (Math.random() - 0.5) * height;
  markers.push(new maptalks.Marker([x, y], {
    symbol: {
      textName: String.fromCharCode(i),
      textSize: 30,
      textFill: '#fff',
      markerType: 'ellipse',
      markerFill: '#0e595e',
      markerFillOpacity: 0.4,
      markerLineWidth: 2,
      markerLineColor: '#fff',
      markerWidth: 70,
      markerHeight: 70,
      markerVerticalAlignment: 'middle'
    }
  }));
}

point.addGeometry(markers);
    
const groupLayer = new maptalks.GroupGLLayer('group', [point]);
groupLayer.addTo(map);`;

export const mouseIdentifyCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
