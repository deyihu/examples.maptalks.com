const map = `const map = new maptalks.Map('map', {
  center: [-0.113049,51.498568],
  zoom: 14,
  pitch: 80,
  bearing:180,
  lights: {
    ambient: {
      resource: {
        url: './resources/hdr/env.hdr'
      },
      color: [1, 1, 1],
      exposure: 1
    },
    directional: {
      color: [1, 1, 1],
      lightColorIntensity: 5000,
      direction: [1, -0.4, -1]
    }
  }
});
`;

const sceneConfig = `
const sceneConfig = {
  environment: { enable: true, mode: 1, level: 1, brightness: 1 },
  shadow: { enable: true, opacity: 0.5, color: [0, 0, 0] },
  postProcess: {
    enable: true,
    antialias: { enable: true, "taa": true, "jitterRatio": 0.25},
    ssr: { enable: true },
    bloom: { enable: true },
    outline: { enable: true }
  },
  ground: {
    enable: true,
    renderPlugin: { type: 'lit' },
    symbol: {
      polygonOpacity: 1,
      material: {
      baseColorFactor: [0.48235, 0.48235, 0.48235, 1],
      hsv: [0, 0, -0.532],
      roughnessFactor: 0.22,
      metallicFactor: 0.58
      }
    }
  }
};`;

export { map, sceneConfig };