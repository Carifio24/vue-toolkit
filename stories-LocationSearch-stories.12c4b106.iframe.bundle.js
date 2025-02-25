"use strict";(self.webpackChunk_cosmicds_vue_toolkit=self.webpackChunk_cosmicds_vue_toolkit||[]).push([[138],{"./src/stories/LocationSearch.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/index.ts");__webpack_require__("./src/stories/stories.css");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_0__.Cz,tags:["autodocs"]};var Primary={render:function(args){return{components:{LocationSearch:___WEBPACK_IMPORTED_MODULE_0__.Cz},template:'\n        <div style="width: 900px; height: 400px">\n          <LocationSearch\n            v-bind="args"\n            @set-location="(loc) => {\n              $el.querySelector(\'#selected-location\').innerHTML = textForMapboxFeature(loc);\n            }"\n          />\n          <hr style="margin: 30px">\n          <div>The last selected location is <span id="selected-location">none</span></div>\n        </div>\n      ',setup:function(){return{args,textForMapboxFeature:___WEBPACK_IMPORTED_MODULE_0__.Wi}}}},args:{searchProvider:function(searchText){return(0,___WEBPACK_IMPORTED_MODULE_0__.vU)(searchText,{access_token:("","")})},modelValue:!0,stayOpen:!0,accentColor:"orange",bgColor:"black",buttonSize:"1x",small:!1}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  render: (args: LocationSearchProps) => {\n    return {\n      components: {\n        LocationSearch\n      },\n      template: `\n        <div style="width: 900px; height: 400px">\n          <LocationSearch\n            v-bind="args"\n            @set-location="(loc) => {\n              $el.querySelector(\'#selected-location\').innerHTML = textForMapboxFeature(loc);\n            }"\n          />\n          <hr style="margin: 30px">\n          <div>The last selected location is <span id="selected-location">none</span></div>\n        </div>\n      `,\n      setup() {\n        return {\n          args,\n          textForMapboxFeature\n        };\n      }\n    };\n  },\n  args: {\n    searchProvider: (searchText: string) => geocodingInfoForSearch(searchText, {\n      access_token: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN ?? ""\n    }),\n    modelValue: true,\n    stayOpen: true,\n    accentColor: "orange",\n    bgColor: "black",\n    buttonSize: "1x",\n    small: false\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./src/stories/stories.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".wwtelescope-component {\n  width: 100%;\n  height: 100%;\n}\n","",{version:3,sources:["webpack://./src/stories/stories.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,YAAY;AACd",sourcesContent:[".wwtelescope-component {\n  width: 100%;\n  height: 100%;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/stories/stories.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_stories_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./src/stories/stories.css"),options={};options.styleTagTransform=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_stories_css__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_stories_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_stories_css__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_stories_css__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);