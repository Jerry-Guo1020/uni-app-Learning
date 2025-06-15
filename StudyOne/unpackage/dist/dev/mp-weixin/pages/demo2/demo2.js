"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo2",
  setup(__props) {
    const home = () => {
      location.href = "/";
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(home)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo2/demo2.js.map
