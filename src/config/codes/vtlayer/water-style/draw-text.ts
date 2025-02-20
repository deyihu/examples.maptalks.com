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
  bearing: -27.92967187499744,
  pitch: 77.60000000000002,
  lights: {
    directional: {
      direction: [1, 0, -1],
      color: [1, 1, 1]
    },
    ambient: {
      resource: {
        url: '/resources/hdr/syferfontein_6d_clear_1k.hdr',
        sh: [
          0.20858436898833022, 0.23915094694605302, 0.2764453514295079,
          0.04950023235319853, 0.048269945750549895, 0.03190286835526042,
          0.03813514353032277, 0.038695892061119105, 0.026303896200427286,
          -0.019233848855311677, -0.02538977446926201, -0.029096620785351676,
          -0.01172075538047479, -0.010939008319894038, -0.008561246332352453,
          -0.005574930591349054, -0.00543337565708197, -0.003958969121495932,
          0.030768413550559873, 0.028952465658790758, 0.020335418593710984,
          -0.11441424414505244, -0.11983866529491013, -0.09375876129847162,
          0.017978553168773385, 0.0158766066546692, 0.011120821552798437
        ]
      },
      exposure: 1.798,
      hsv: [0, 0, -0.021],
      orientation: 0
    }
  }
});

const vt = new maptalks.VectorTileLayer('vt', {
  urlTemplate: 'http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt',
  spatialReference: 'preset-vt-3857',
});

const style = {
  style: [
    // 水面效果
    {
      filter: ['all', ['==', '$layer', 'water'], ['==', '$type', 'Polygon']],
      renderPlugin: {
        dataConfig: {
          type: 'fill',
        },
        sceneConfig: {},
        type: 'water',
      },
      symbol: {
        ssr: true,
        texWaveNormal: '/resources/textures/texWaveNormal.png',
        texWavePerturbation: '/resources/textures/texWavePerturbation.png',
        waterBaseColor: [0.611764705882353, 0.7529411764705882, 0.9764705882352941, 1],
        contrast: 1.425,
        hsv: [0, -0.596, 0],
        uvScale: 3,
        animation: true,
        waterSpeed: 1,
        waterDirection: 0,
      },
    },
    // 水面文字
    {
      filter: ['all', ['==', '$layer', 'water'], ['==', '$type', 'Polygon']],
      renderPlugin: {
        dataConfig: {
          type: 'point',
        },
        sceneConfig: {
          collision: true,
          fading: true,
          depthFunc: '<=',
        },
        type: 'text',
      },
      symbol: {
        textFaceName: 'Microsoft YaHei,sans-serif',
        textFill: [1, 1, 1, 1],
        textName: 'MapTalks',
        textPitchAlignment: 'map',
        textRotationAlignment: 'viewport',
        textSize: 40
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
          topThickness: 10,
          top: true,
          side: false,
        },
        sceneConfig: {},
        type: 'lit',
      },
      symbol: {
        bloom: false,
        ssr: false,
        polygonOpacity: 1,
        material: {
          baseColorTexture: null,
          baseColorFactor: [0.8549019607843137, 0.8588235294117647, 0.8588235294117647, 1],
          hsv: [0, 0, 0],
          baseColorIntensity: 1,
          contrast: 1,
          outputSRGB: 1,
          metallicRoughnessTexture: null,
          roughnessFactor: 0.18,
          metallicFactor: 0.72,
          normalTexture: null,
          noiseTexture: null,
          uvScale: [1, 1],
          uvOffset: [0, 0],
          uvRotation: 0,
          uvOffsetAnim: [0, 0],
          normalMapFactor: 1,
          normalMapFlipY: 0,
          bumpTexture: null,
          bumpScale: 0.02,
          clearCoatThickness: 5,
          clearCoatFactor: 0,
          clearCoatIor: 1.4,
          clearCoatRoughnessFactor: 0.04,
          occlusionTexture: null,
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
          topThickness: 10,
          top: false,
          side: true,
        },
        sceneConfig: {},
        type: 'lit',
      },
      symbol: {
        bloom: false,
        ssr: false,
        polygonOpacity: 1,
        material: {
          baseColorTexture: null,
          baseColorFactor: [0.8549019607843137, 0.8588235294117647, 0.8588235294117647, 1],
          hsv: [0.128, -0.489, 0],
          baseColorIntensity: 1,
          contrast: 1,
          outputSRGB: 1,
          metallicRoughnessTexture: null,
          roughnessFactor: 0.32,
          metallicFactor: 0.66,
          normalTexture: null,
          noiseTexture: null,
          uvScale: [0.14, 0.43],
          uvOffset: [0, 0.65],
          uvRotation: 0,
          uvOffsetAnim: [0, 0],
          normalMapFactor: 1,
          normalMapFlipY: 0,
          bumpTexture: null,
          bumpScale: 0.02,
          clearCoatThickness: 5,
          clearCoatFactor: 0,
          clearCoatIor: 1.4,
          clearCoatRoughnessFactor: 0.04,
          occlusionTexture: null,
          emissiveTexture: '/resources/textures/em.png',
          emissiveFactor: [0, 0, 0],
          emitColorFactor: 1.8,
          emitMultiplicative: 0,
        }
      },
    }
  ]
};
vt.setStyle(style);

const groupLayer = new maptalks.GroupGLLayer('group', [vt], {
  sceneConfig:{
    environment: {
      enable: true,
      mode: 0,
      level: 2,
      brightness: 0
    },
    shadow: {
      type: "esm",
      enable: true,
      quality: "high",
      opacity: 0.5,
      color: [0, 0, 0],
      blurOffset: 1
    },
    postProcess: {
      enable: true,
      antialias: {
        enable: true,
        taa: true,
        jitterRatio: 0.25,
      },
      ssr: {
        enable: true,
      },
      bloom: {
        enable: true,
        threshold: 0.85,
        factor: 0.7,
        radius: 0.157,
      },
      ssao: {
        enable: true,
        bias: 0.08,
        radius: 0.037,
        intensity: 0.6,
      },
      sharpen: {
        enable: true,
        factor: 0.3,
      },
      outline: {
        enable: true,
        outlineFactor: 0.3,
        highlightFactor: 0.2,
        outlineWidth: 1,
        outlineColor: [1, 1, 0],
      },
    },
    ground: {
      enable: true,
      renderPlugin: {
        type: 'lit'
      },
      symbol: {
        polygonFill: [0.54, 0.54, 0.54, 1],
        polygonOpacity: 1,
        ssr: false,
        material: {
          baseColorTexture: null,
          baseColorFactor: [
            0.13333333333333333, 0.13333333333333333, 0.13333333333333333,
            1
          ],
          hsv: [0, 0, 0],
          baseColorIntensity: 1,
          contrast: 1,
          outputSRGB: 1,
          metallicRoughnessTexture: null,
          roughnessFactor: 0.32,
          metallicFactor: 1,
          normalTexture: null,
          uvScale: [1, 1],
          uvOffset: [0, 0],
          uvRotation: 0,
          uvOffsetAnim: [0, 0],
          normalMapFactor: 1,
          normalMapFlipY: 0,
          clearCoatThickness: 5,
          clearCoatFactor: 0,
          clearCoatIor: 1.4,
          clearCoatRoughnessFactor: 0.04,
          occlusionTexture: null,
          emissiveTexture: null,
          emissiveFactor: [0, 0, 0],
          emitColorFactor: 1,
          emitMultiplicative: 0
        }
      },
    },
  }
});
groupLayer.addTo(map);`;

export const drawTextCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
