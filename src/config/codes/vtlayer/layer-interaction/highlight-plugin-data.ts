const htmlCode = `<div id="map" class="container"></div>
<div class="pane">
  <a href="javascript:highlightLine();">highlight line</a>
  <a href="javascript:cancel();">cancel hightlight</a>
</div>`;

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
  position: absolute;
  top: 20px;
  right: 20px;
  line-height: 25px;
  z-index: 10;
}
  
.pane a {
  display: block;
  float: left;
  text-align: left;
  margin-left: 6px;
  padding: 0 10px;
  min-width: 28px;
  min-height: 25px;
  color: #000;
  text-decoration: none;
  background: #efefef;
  border: 1px solid #000;
}`;

const jsCode = `const map = new maptalks.Map("map", {
  center: [-74.00912099912109, 40.71107610933129],
  zoom: 16,
});
    
const vt = new maptalks.VectorTileLayer("vt", {
  urlTemplate: "http://tile.maptalks.com/test/planet-single/{z}/{x}/{y}.mvt",
  spatialReference: "preset-vt-3857",
});
  
const style = {
  style: [
    {
      filter: ["all", ["==", "$layer", "internal-road"], ["==", "$type", "LineString"]],
      renderPlugin: {
        dataConfig: {
          type: "line",
        },
        sceneConfig: {},
        type: "line",
      },
      symbol: {
        lineBloom: false,
        lineCap: "butt",
        lineColor: "#212922",
        lineDasharray: [0, 0, 0, 0],
        lineDashColor: [1, 1, 1, 0],
        lineDx: 0,
        lineDy: 0,
        lineGapWidth: 0,
        lineJoin: "miter",
        lineOpacity: 1,
        linePatternAnimSpeed: 0,
        linePatternFile: null,
        lineStrokeWidth: 0,
        lineStrokeColor: [0, 0, 0, 0],
        lineJoinPatternMode: 0,
        lineWidth: 6,
      },
    },
    {
      filter : ["all", ["==", "$layer", "building"], ["==", "$type", "Polygon"]],
      renderPlugin: {
        dataConfig: {
          type: "fill",
        },
        sceneConfig: {},
        type: "fill",
      },
      symbol: {
        polygonBloom: false,
        polygonFill: "#2e7e57",
        polygonOpacity: 1,
        polygonPatternFile: null,
      },
    },
    {
      filter : ["all", ["==", "$layer", "building"], ["==", "$type", "Polygon"]],
      renderPlugin: {
        dataConfig: {
          type: "line",
        },
        sceneConfig: {},
        type: "line",
      },
      symbol: {
        lineBloom: false,
        lineCap: "butt",
        lineColor: "#bababa",
        lineDasharray: [0, 0, 0, 0],
        lineDashColor: [1, 1, 1, 0],
        lineDx: 0,
        lineDy: 0,
        lineGapWidth: 0,
        lineJoin: "miter",
        lineOpacity: 1,
        linePatternAnimSpeed: 0,
        linePatternFile: null,
        lineStrokeWidth: 0,
        lineStrokeColor: [0, 0, 0, 0],
        lineJoinPatternMode: 0,
        lineWidth: 3,
      },
    },
  ]
};
vt.setStyle(style);
    
const groupLayer = new maptalks.GroupGLLayer("group", [vt], {
  // 需要先开启后处理中的outline属性
  sceneConfig:{
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
        threshold: 0,
        factor: 1,
        radius: 0.02,
      },
      ssao: {
        enable: true,
        bias: 0.08,
        radius: 0.08,
        intensity: 1.5,
      },
      sharpen: {
        enable: false,
        factor: 0.2,
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
      renderPlugin: { type: "fill" },
      symbol: {
        polygonFill: [0.2666667, 0.2666667, 0.2666667, 1],
        polygonOpacity: 1,
      },
    },
  }
});
groupLayer.addTo(map);

function highlightLine() {
  vt.outlineBatch(0);
}

function cancel() {
  vt.cancelOutline();
}`;

export const highlightPluginCodes = {
  html: htmlCode,
  css: cssCode,
  js: jsCode,
};
