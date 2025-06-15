"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const demo1 = () => {
      location.href = "#/pages/demo1/demo1";
    };
    const demo2 = () => {
      location.href = "#/pages/demo2/demo2";
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(_ctx.title),
        c: common_vendor.o(demo2),
        d: common_vendor.o(demo1)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
