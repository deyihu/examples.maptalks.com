import { addMarkerCodes } from "./GLTFMarker/add-marker";
import { copyMarkerCodes } from "./GLTFMarker/copy-marker";
import { animationMarkerCodes } from "./GLTFMarker/animation-marker";
import { showMarkerCodes } from "./GLTFMarker/show-marker";
import { trsMarkerCodes } from "./GLTFMarker/trs-marker";
import { materialMarkerCodes } from "./GLTFMarker/material-marker";
import { shaderMarkerCodes } from "./GLTFMarker/shader-marker";
import { setSymbolMarkerCodes } from "./GLTFMarker/setSymbol-marker";
import { infowindowMarkerCodes } from "./GLTFMarker/infowindow-marker";
import { mouseeventMarkerCodes } from "./GLTFMarker/mouseevent-marker";
import { outlineMarkerCodes } from "./GLTFMarker/outline-marker";
import { bloomMarkerCodes } from "./GLTFMarker/bloom-marker";
import { shadowMarkerCodes } from "./GLTFMarker/shadow-marker";
import { skinningMarkerCodes } from "./GLTFMarker/skinning-marker";
import { glowMarkerCodes } from "./GLTFMarker/glow-marker";
import { menuMarkerCodes } from "./GLTFMarker/menu-marker";
import { anchorZMarkerCodes } from "./GLTFMarker/anchorZ-marker";
import { fixSizeOnZoomMarkerCodes } from "./GLTFMarker/fixsize-marker";
import { modelMatrixMarkerCodes } from "./GLTFMarker/modelmatrix-marker";
import { setAnimationTimeFrameMarkerCodes } from "./GLTFMarker/setAnimationTimeFrame-marker";
import { propertyMarkerCodes } from "./GLTFMarker/property-marker";
import { addDracoMarkerCodes } from "./GLTFMarker/addDraco-marker";
//GLTFLayer
import { addToGltfLayerCodes } from "./GLTFLayer/addto-gltflayer";
import { getMarkerGLTFLayerCodes } from "./GLTFLayer/getmarker-gltflayer";
import { removeMarkerGLTFLayerCodes } from "./GLTFLayer/removemarker-gltflayer";
import { clearGLTFLayerCodes } from "./GLTFLayer/clear-gltflayer";
import { showGLTFLayerCodes } from "./GLTFLayer/show-gltflayer";
import { jsonGLTFLayerCodes } from "./GLTFLayer/json-gltflayer";
import { styleGLTFLayerCodes } from "./GLTFLayer/style-gltflayer";
import { identifyGLTFLayerCodes } from "./GLTFLayer/identify-gltflayer";
import { customShaderGLTFLayerCodes } from "./GLTFLayer/customshader-gltflayer";
import { moreGLTFLayerCodes } from "./GLTFLayer/morelayers-gltflayer";
import { filterGLTFLayerCodes } from "./GLTFLayer/filter-gltflayer";
import { modelloadGLTFLayerCodes } from "./GLTFLayer/modelload-gltflayer";
//MultiGLTFMarker
import { addToMultiGLTFMarkerCodes } from "./MultiGLTFMarker/addto-multigltfmarker";
import { additemMultiGLTFMarkerCodes } from "./MultiGLTFMarker/additem-multigltfmarker";
import { removeitemMultiGLTFMarkerCodes } from "./MultiGLTFMarker/removeitem-multigltfmarker";
import { updateitemMultiGLTFMarkerCodes } from "./MultiGLTFMarker/updateitem-multigltfmarker";
import { mouseeventMultiGLTFMarkerCodes } from "./MultiGLTFMarker/mouseevent-multigltfmarker";
//TransformControl
import { addTranformControlCodes } from "./TransformControl/addTranformControl";



const gltfList =
{
  title: "GlLTF图层示例",
  children: [
    {
      title: "GLTFMarker示例",
      children: [
        {
          title: '添加GLTFMarker',
          html: addMarkerCodes.html,
          css: addMarkerCodes.css,
          js: addMarkerCodes.js,
        },
        {
          title: '复制GLTFMarker',
          html: copyMarkerCodes.html,
          css: copyMarkerCodes.css,
          js: copyMarkerCodes.js,
        },
        {
          title: '动画模型',
          html: animationMarkerCodes.html,
          css: animationMarkerCodes.css,
          js: animationMarkerCodes.js,
        },
        {
          title: '模型的显示与隐藏',
          html: showMarkerCodes.html,
          css: showMarkerCodes.css,
          js: showMarkerCodes.js,
        },
        {
          title: '模型的平移、旋转与缩放',
          html: trsMarkerCodes.html,
          css: trsMarkerCodes.css,
          js: trsMarkerCodes.js,
        },
        {
          title: '模型材质调节',
          html: materialMarkerCodes.html,
          css: materialMarkerCodes.css,
          js: materialMarkerCodes.js,
        },
        {
          title: '着色器切换',
          html: shaderMarkerCodes.html,
          css: shaderMarkerCodes.css,
          js: shaderMarkerCodes.js,
        },
        {
          title: '模型的symbol设置',
          html: setSymbolMarkerCodes.html,
          css: setSymbolMarkerCodes.css,
          js: setSymbolMarkerCodes.js,
        },
        {
          title: '设置信息弹出框',
          html: infowindowMarkerCodes.html,
          css: infowindowMarkerCodes.css,
          js: infowindowMarkerCodes.js,
        },
        {
          title: '鼠标事件监听',
          html: mouseeventMarkerCodes.html,
          css: mouseeventMarkerCodes.css,
          js: mouseeventMarkerCodes.js,
        },
        {
          title: '模型设置外轮廓',
          html: outlineMarkerCodes.html,
          css: outlineMarkerCodes.css,
          js: outlineMarkerCodes.js,
        },
        {
          title: '模型泛光效果',
          html: bloomMarkerCodes.html,
          css: bloomMarkerCodes.css,
          js: bloomMarkerCodes.js,
        },
        {
          title: '阴影设置',
          html: shadowMarkerCodes.html,
          css: shadowMarkerCodes.css,
          js: shadowMarkerCodes.js,
        },
        {
          title: '加载有骨骼动画的模型',
          html: skinningMarkerCodes.html,
          css: skinningMarkerCodes.css,
          js: skinningMarkerCodes.js,
        },
        // {
        //   title: '发光环',
        //   html: glowMarkerCodes.html,
        //   css: glowMarkerCodes.css,
        //   js: glowMarkerCodes.js,
        // },
        {
          title: '右键菜单',
          html: menuMarkerCodes.html,
          css: menuMarkerCodes.css,
          js: menuMarkerCodes.js,
        },
        {
          title: '锚点的设置',
          html: anchorZMarkerCodes.html,
          css: anchorZMarkerCodes.css,
          js: anchorZMarkerCodes.js,
        },
        {
          title: '固定模型的大小不随地图缩放',
          html: fixSizeOnZoomMarkerCodes.html,
          css: fixSizeOnZoomMarkerCodes.css,
          js: fixSizeOnZoomMarkerCodes.js,
        },
        {
          title: '更新模型的ModelMatrix',
          html: modelMatrixMarkerCodes.html,
          css: modelMatrixMarkerCodes.css,
          js: modelMatrixMarkerCodes.js,
        },
        {
          title: 'setAnimationTimeFrame',
          html: setAnimationTimeFrameMarkerCodes.html,
          css: setAnimationTimeFrameMarkerCodes.css,
          js: setAnimationTimeFrameMarkerCodes.js,
        },
        {
          title: '设置/获取属性',
          html: propertyMarkerCodes.html,
          css: propertyMarkerCodes.css,
          js: propertyMarkerCodes.js,
        },
        {
          title: '添加draco压缩模型',
          html: addDracoMarkerCodes.html,
          css: addDracoMarkerCodes.css,
          js: addDracoMarkerCodes.js,
        }
      ]
    },
    {
      title: "GLTFLayer示例",
      children: [
        {
          title: '添加图层到地图上',
          html: addToGltfLayerCodes.html,
          css: addToGltfLayerCodes.css,
          js: addToGltfLayerCodes.js,
        },
        {
          title: '根据id查找GLTFMarker',
          html: getMarkerGLTFLayerCodes.html,
          css: getMarkerGLTFLayerCodes.css,
          js: getMarkerGLTFLayerCodes.js,
        },
        {
          title: '移除某个GLTFMarker',
            html: removeMarkerGLTFLayerCodes.html,
                  css: removeMarkerGLTFLayerCodes.css,
                  js: removeMarkerGLTFLayerCodes.js,
              },
              {
                  title: '清空图层',
                  html: clearGLTFLayerCodes.html,
                  css: clearGLTFLayerCodes.css,
                  js: clearGLTFLayerCodes.js,
              },
              {
                  title: '图层的显示与隐藏',
                  html: showGLTFLayerCodes.html,
                  css: showGLTFLayerCodes.css,
                  js: showGLTFLayerCodes.js,
              },
              {
                  title: '通过json数据创建图层',
                  html: jsonGLTFLayerCodes.html,
                  css: jsonGLTFLayerCodes.css,
                  js: jsonGLTFLayerCodes.js,
              },
              {
                  title: '为图层设置条件样式',
                  html: styleGLTFLayerCodes.html,
                  css: styleGLTFLayerCodes.css,
                  js: styleGLTFLayerCodes.js,
              },
              {
                  title: '识别图层内的GLTFMarker',
                  html: identifyGLTFLayerCodes.html,
                  css: identifyGLTFLayerCodes.css,
                  js: identifyGLTFLayerCodes.js,
              },
              {
                  title: '自定义着色器',
                  html: customShaderGLTFLayerCodes.html,
                  css: customShaderGLTFLayerCodes.css,
                  js: customShaderGLTFLayerCodes.js,
              },
              {
                  title: '多个GLTFLayer的融合绘制',
                  html: moreGLTFLayerCodes.html,
                  css: moreGLTFLayerCodes.css,
                  js: moreGLTFLayerCodes.js,
              },
              {
                  title: '根据属性条件筛选',
                  html: filterGLTFLayerCodes.html,
                  css: filterGLTFLayerCodes.css,
                  js: filterGLTFLayerCodes.js,
              },
              {
                  title: '模型载入完成事件',
                  html: modelloadGLTFLayerCodes.html,
                  css: modelloadGLTFLayerCodes.css,
                  js: modelloadGLTFLayerCodes.js,
              }
          ]
        },
        {
          title: "MultiGLTFMarker示例",
          children: [
              {
                  title: '添加MultiGLTFMarker',
                  html: addToMultiGLTFMarkerCodes.html,
                  css: addToMultiGLTFMarkerCodes.css,
                  js: addToMultiGLTFMarkerCodes.js,
              },
              {
                  title: '增加一个数据项',
                  html: additemMultiGLTFMarkerCodes.html,
                  css: additemMultiGLTFMarkerCodes.css,
                  js: additemMultiGLTFMarkerCodes.js,
              },
              {
                  title: '移除一个数据项',
                  html: removeitemMultiGLTFMarkerCodes.html,
                  css: removeitemMultiGLTFMarkerCodes.css,
                  js: removeitemMultiGLTFMarkerCodes.js,
              },
              {
                  title: '更新一个数据项',
                  html: updateitemMultiGLTFMarkerCodes.html,
                  css: updateitemMultiGLTFMarkerCodes.css,
                  js: updateitemMultiGLTFMarkerCodes.js,
              },
              {
                  title: '监听鼠标事件',
                  html: mouseeventMultiGLTFMarkerCodes.html,
                  css: mouseeventMultiGLTFMarkerCodes.css,
                  js: mouseeventMultiGLTFMarkerCodes.js,
              }
          ]
      },
      {
        title: "TransformControl",
        children: [
          {
            title: '控制模型的平移、旋转、缩放',
            html: addTranformControlCodes.html,
            css: addTranformControlCodes.css,
            js: addTranformControlCodes.js,
          }
        ]
      }
    ],
};

export { gltfList };
