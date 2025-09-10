"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo4",
  setup(__props) {
    let num1 = 6;
    let num2 = common_vendor.ref(10);
    setInterval(() => {
      num2.value++;
      common_vendor.index.__f__("log", "at pages/demo4/demo4.vue:24", num2.value);
    }, 1e3);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(num1)),
        b: common_vendor.t(common_vendor.unref(num2))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo4/demo4.js.map
