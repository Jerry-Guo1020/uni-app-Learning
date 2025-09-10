"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo9",
  setup(__props) {
    const goods = common_vendor.ref([
      { id: 1, name: "小米" },
      { id: 2, name: "vivo" },
      { id: 3, name: "oppo" },
      { id: 4, name: "华为" },
      { id: 5, name: "魅族" }
    ]);
    function remove(index) {
      goods.value.splice(index, 1);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(goods.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => remove(index), item.id),
            c: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-28371b61"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo9/demo9.js.map
