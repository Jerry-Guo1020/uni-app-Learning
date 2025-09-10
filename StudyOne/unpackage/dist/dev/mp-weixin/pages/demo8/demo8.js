"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo8",
  setup(__props) {
    const haha = common_vendor.ref([
      { id: 1, name: 111, title: "aaa" },
      { id: 2, name: 222, title: "bbb" },
      { id: 3, name: 333, title: "ccc" },
      { id: 4, name: 444, title: "ddd" },
      { id: 5, name: 555, title: "eee" }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: index
          };
        }),
        b: common_vendor.f(haha.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.id
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo8/demo8.js.map
