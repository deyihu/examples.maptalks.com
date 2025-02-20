const htmlCode = `<div id="map" class="container"></div>`;

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
}`;

const jsCode = `const map = new maptalks.Map('map', {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
});

const data = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-74.01138478352965, 40.71511786220489], [-74.01046210362853, 40.70690398234356], [-74.00097781255187, 40.71147460291118], [-74.01138478352965, 40.71511786220489]
          ]
        ]
      },
      "properties": {
        color: "#577570"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-74.01138478352965, 40.72511786220489], [-74.01046210362853, 40.71690398234356], [-74.00097781255187, 40.72147460291118], [-74.01138478352965, 40.72511786220489]
          ]
        ]
      },
      "properties": {
        color: "#2E7E57"
      }
    },
  ]
};

const geo = new maptalks.GeoJSONVectorTileLayer('geo', {
  data
});

geo.on('dataload', e => {
  map.fitExtent(e.extent)
});

const style = {
  style: [
    {
      filter: true,
      renderPlugin: {
        dataConfig: {
          type: 'fill',
        },
        sceneConfig: {},
        type: 'fill',
      },
      symbol: {
        polygonFill: {
          type: 'identity',
          property: 'color',
          default: '#000'
        },
        polygonOpacity: 1
      },
    }
  ]
};
geo.setStyle(style);
  
const groupLayer = new maptalks.GroupGLLayer('group', [geo]);
groupLayer.addTo(map);`;

export const readColorCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
