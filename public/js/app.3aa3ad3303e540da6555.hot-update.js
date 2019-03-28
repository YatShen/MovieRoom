webpackHotUpdate("/js/app",{

/***/ "../node_modules/babel-loader/lib/index.js?!../node_modules/vue-loader/lib/index.js?!./js/layouts/default/Layout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!./js/layouts/default/Layout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Navbar */ "./js/layouts/default/components/Navbar.vue");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Sidebar */ "./js/layouts/default/components/Sidebar/index.vue");
/* harmony import */ var _mixin_ResizeHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixin/ResizeHandler */ "./js/layouts/default/mixin/ResizeHandler.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "layout",
  components: {
    NavBar: _components_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    SideBar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixin_ResizeHandler__WEBPACK_IMPORTED_MODULE_2__["default"]],
  computed: {
    sidebar: function sidebar() {
      return this.$store.state.app.sidebar;
    },
    device: function device() {
      return this.$store.state.app.device;
    },
    classObj: function classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      };
    }
  },
  methods: {
    handleClickOutside: function handleClickOutside() {
      this.$store.dispatch('closeSideBar', {
        withoutAnimation: false
      });
    }
  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/layouts/default/Layout.vue?vue&type=template&id=eb9341f4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./js/layouts/default/Layout.vue?vue&type=template&id=eb9341f4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-wrapper", class: _vm.classObj },
    [
      _vm.device === "mobile" && _vm.sidebar.opened
        ? _c("div", {
            staticClass: "drawer-bg",
            on: { click: _vm.handleClickOutside }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("side-bar", { staticClass: "sidebar-container" }),
      _vm._v(" "),
      _c("div", { staticClass: "main-container" }, [_c("nav-bar")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=app.3aa3ad3303e540da6555.hot-update.js.map