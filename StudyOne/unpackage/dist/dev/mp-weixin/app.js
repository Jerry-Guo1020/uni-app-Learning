"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/demo1/demo1.js";
  "./pages/demo2/demo2.js";
  "./pages/demo3/demo3.js";
  "./pages/demo4/demo4.js";
  "./pages/demo5/demo5.js";
  "./pages/demo6/demo6.js";
  "./pages/demo7/demo7.js";
  "./pages/demo8/demo8.js";
  "./pages/demo9/demo9.js";
  "./pages/demo10/demo10.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:5", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:8", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:11", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
