"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "demo7",
  setup(__props) {
    const shop = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return common_vendor.e({}, {
        a: shop.value
      }, shop.value ? {} : {}, {
        b: common_assets._imports_0
      }, {
        c: common_assets._imports_0
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo7/demo7.js.map
