"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const demo1 = () => {
      common_vendor.index.navigateTo({
        url: "/pages/demo1/demo1"
      });
      common_vendor.index.__f__("log", "at pages/index/index.vue:44", "fojfsl");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(demo1)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
