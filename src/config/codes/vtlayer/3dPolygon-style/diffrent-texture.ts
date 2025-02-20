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

const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
});

const style = {
  style: [
    {
      filter: ['all', ['==', '$layer', 'building'], ['==', '$type', 'Polygon']],
      renderPlugin: {
        dataConfig: {
          type: '3d-extrusion',
          altitudeProperty: 'height',
          minHeightProperty: 'min_height',
          altitudeScale: 1,
          defaultAltitude: 10,
          topThickness: 0,
          top: true,
          side: false,
        },
        sceneConfig: {
          animation: null,
          animationDuration: 800
        },
        type: 'lit',
      },
      symbol: {
        bloom: false,
        ssr: false,
        polygonOpacity: 1,
        material: {
          baseColorTexture: '/resources/textures/Moss002_2K_Color.jpg',
          baseColorFactor: [1, 1, 1, 1],
          hsv: [0, 0, 0.213],
          baseColorIntensity: 1,
          contrast: 1.213,
          outputSRGB: 1,
          metallicRoughnessTexture: '/resources/textures/Moss002_2K_Roughness.jpg',
          roughnessFactor: 1,
          metallicFactor: 1,
          normalTexture: '/resources/textures/Moss002_2K_Normal.jpg',
          noiseTexture: null,
          uvScale: [1, 1],
          uvOffset: [0, 0],
          uvRotation: 0,
          uvOffsetAnim: [0, 0],
          normalMapFactor: 1,
          normalMapFlipY: 0,
          bumpTexture: '/resources/textures/Moss002_2K_Displacement.jpg',
          bumpScale: 0.02,
          clearCoatThickness: 5,
          clearCoatFactor: 0,
          clearCoatIor: 1.4,
          clearCoatRoughnessFactor: 0.04,
          occlusionTexture: '/resources/textures/Moss002_2K_AmbientOcclusion.jpg',
          emissiveTexture: null,
          emissiveFactor: [0, 0, 0],
          emitColorFactor: 1,
          emitMultiplicative: 0,
        }
      },
    },
    {
      filter: ['all', ['==', '$layer', 'building'], ['==', '$type', 'Polygon']],
      renderPlugin: {
        dataConfig: {
          type: '3d-extrusion',
          altitudeProperty: 'height',
          minHeightProperty: 'min_height',
          altitudeScale: 1,
          defaultAltitude: 10,
          topThickness: 0,
          top: false,
          side: true,
        },
        sceneConfig: {
          animation: null,
          animationDuration: 800
        },
        type: 'lit',
      },
      symbol: {
        bloom: false,
        ssr: false,
        polygonOpacity: 1,
        material: {
          baseColorTexture: '/resources/textures/bricks_clay_01_Base_Color.png',
          baseColorFactor: [1, 1, 1, 1],
          hsv: [0, 0.128, 0.106],
          baseColorIntensity: 1,
          contrast: 1.319,
          outputSRGB: 1,
          metallicRoughnessTexture: '/resources/textures/bricks_clay_01_roughness.png',
          roughnessFactor: 0.34,
          metallicFactor: 0.39,
          normalTexture: '/resources/textures/bricks_clay_01_normal.png',
          noiseTexture: null,
          uvScale: [0.2, 0.2],
          uvOffset: [0, 0],
          uvRotation: 0,
          uvOffsetAnim: [0, 0],
          normalMapFactor: 0.25,
          normalMapFlipY: 0,
          bumpTexture: '/resources/textures/bricks_clay_01_height.png',
          bumpScale: 0.02,
          clearCoatThickness: 5,
          clearCoatFactor: 0,
          clearCoatIor: 1.4,
          clearCoatRoughnessFactor: 0.04,
          occlusionTexture: '/resources/textures/bricks_clay_01_Ambient_Occlusion.png',
          emissiveTexture: null,
          emissiveFactor: [0, 0, 0],
          emitColorFactor: 0.36,
          emitMultiplicative: 0,
        }
      },
    }
  ]
};
vt.setStyle(style);

const sceneConfig = {postProcess: {enable: true, antialias: {enable: true}}};

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {sceneConfig});
groupLayer.addTo(map);`;

export const diffrentTextureCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
