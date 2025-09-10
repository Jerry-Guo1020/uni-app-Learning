"use strict";
const common_vendor = require("../../common/vendor.js");
const a = 5;
const _sfc_main = {
  __name: "demo3",
  setup(__props) {
    function fn() {
      return "就发凯瑟琳集卡时间";
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(2 + 3),
        b: common_vendor.t(a + 5),
        c: common_vendor.t(fn()),
        d: common_vendor.t(Math.random()),
        e: common_vendor.t(Date.now())
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo3/demo3.js.map
