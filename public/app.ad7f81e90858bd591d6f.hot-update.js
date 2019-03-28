webpackHotUpdate("app",{

/***/ "../node_modules/babel-loader/lib/index.js?!../node_modules/vue-loader/lib/index.js?!./js/layouts/default/components/Navbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!./js/layouts/default/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _breadCrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadCrumb */ "./js/layouts/default/components/breadCrumb.vue");
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hamburger */ "./js/layouts/default/components/Hamburger.vue");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "Navbar",
  components: {
    Breadcrumb: _breadCrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    Hamburger: _Hamburger__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['sidebar', 'name', 'avatar', 'device'])),
  props: ['collapsed', 'collapseFunc'],
  methods: {
    // 缩小菜单栏
    toggleSideBar: function toggleSideBar() {
      this.$store.dispatch('toggleSideBar');
    },
    // 退出登录
    logout: function logout() {
      var _this = this;

      this.$confirm('确认退出吗?', '提示', {//type: 'warning'
      }).then(function () {
        _this.$store.dispatch('logout').then(function () {
          _this.$message.success('退出成功');

          _this.$router.push({
            name: 'Login'
          });
        });
      }).catch(function () {});
    }
  }
});

/***/ })

})
//# sourceMappingURL=app.ad7f81e90858bd591d6f.hot-update.js.map