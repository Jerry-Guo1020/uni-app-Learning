"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo5",
  setup(__props) {
    const IsActive = common_vendor.ref(false);
    const haha = common_vendor.ref("/static/2.jpg");
    const shuzu = common_vendor.ref([
      "/static/3.jpg",
      "/static/4.jpg",
      "/static/5.jpg",
      "/static/6.jpg",
      "/static/7.jpg"
    ]);
    let i = 0;
    setInterval(() => {
      i++;
      haha.value = shuzu.value[i % 4];
      IsActive.value = !IsActive.value;
    }, 1e3);
    return (_ctx, _cache) => {
      return {
        a: haha.value,
        b: haha.value,
        c: shuzu.value[4],
        d: shuzu.value[4],
        e: common_vendor.n("active")
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo5/demo5.js.map
