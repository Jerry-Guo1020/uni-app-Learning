"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo6",
  setup(__props) {
    const color = common_vendor.ref("#0001");
    const num = common_vendor.ref(1);
    function btn() {
      num.value++;
    }
    function onchange(e) {
      common_vendor.index.__f__("log", "at pages/demo6/demo6.vue:22", e.detail.value);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(num.value),
        b: common_vendor.o(btn),
        c: color.value,
        d: common_vendor.o(onchange)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo6/demo6.js.map
