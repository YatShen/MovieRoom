webpackHotUpdate("app",{

/***/ "../node_modules/babel-loader/lib/index.js?!../node_modules/vue-loader/lib/index.js?!./js/layouts/default/components/Hamburger.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!./js/layouts/default/components/Hamburger.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
});

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/vue-loader/lib/index.js?!./js/layouts/default/components/Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--6-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-2!../node_modules/vue-loader/lib??vue-loader-options!./js/layouts/default/components/Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.hamburger[data-v-4c6869ec] {\n    display: inline-block;\n    cursor: pointer;\n    width: 20px;\n    height: 20px;\n}\n.hamburger.is-active[data-v-4c6869ec] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n", ""]);



/***/ }),

/***/ "../node_modules/style-loader/index.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/vue-loader/lib/index.js?!./js/layouts/default/components/Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/style-loader!../node_modules/css-loader/dist/cjs.js??ref--6-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-2!../node_modules/vue-loader/lib??vue-loader-options!./js/layouts/default/components/Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/vue-loader/lib/index.js?!./js/layouts/default/components/Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/vue-loader/lib/index.js?!./js/layouts/default/components/Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css&", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css& */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/vue-loader/lib/index.js?!./js/layouts/default/components/Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css&");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./js/layouts/default/components/Hamburger.vue?vue&type=template&id=4c6869ec&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./js/layouts/default/components/Hamburger.vue?vue&type=template&id=4c6869ec&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "svg",
      {
        staticClass: "hamburger",
        class: { "is-active": _vm.isActive },
        attrs: {
          viewBox: "0 0 1024 1024",
          xmlns: "http://www.w3.org/2000/svg",
          width: "64",
          height: "64"
        },
        on: { click: _vm.toggleClick }
      },
      [
        _c("path", {
          attrs: {
            d:
              "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
          }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./js/layouts/default/components/Hamburger.vue":
/*!*****************************************************!*\
  !*** ./js/layouts/default/components/Hamburger.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hamburger_vue_vue_type_template_id_4c6869ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hamburger.vue?vue&type=template&id=4c6869ec&scoped=true& */ "./js/layouts/default/components/Hamburger.vue?vue&type=template&id=4c6869ec&scoped=true&");
/* harmony import */ var _Hamburger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hamburger.vue?vue&type=script&lang=js& */ "./js/layouts/default/components/Hamburger.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Hamburger_vue_vue_type_style_index_0_id_4c6869ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css& */ "./js/layouts/default/components/Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Hamburger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Hamburger_vue_vue_type_template_id_4c6869ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Hamburger_vue_vue_type_template_id_4c6869ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c6869ec",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ../node_modules/vue-hot-reload-api/dist/index.js */ "../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.common.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('4c6869ec', component.options)
    } else {
      api.reload('4c6869ec', component.options)
    }
    module.hot.accept(/*! ./Hamburger.vue?vue&type=template&id=4c6869ec&scoped=true& */ "./js/layouts/default/components/Hamburger.vue?vue&type=template&id=4c6869ec&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Hamburger_vue_vue_type_template_id_4c6869ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hamburger.vue?vue&type=template&id=4c6869ec&scoped=true& */ "./js/layouts/default/components/Hamburger.vue?vue&type=template&id=4c6869ec&scoped=true&");
(function () {
      api.rerender('4c6869ec', {
        render: _Hamburger_vue_vue_type_template_id_4c6869ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Hamburger_vue_vue_type_template_id_4c6869ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "js/layouts/default/components/Hamburger.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./js/layouts/default/components/Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./js/layouts/default/components/Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hamburger_vue_vue_type_style_index_0_id_4c6869ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css& */ "../node_modules/style-loader/index.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src/index.js?!../node_modules/vue-loader/lib/index.js?!./js/layouts/default/components/Hamburger.vue?vue&type=style&index=0&id=4c6869ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hamburger_vue_vue_type_style_index_0_id_4c6869ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hamburger_vue_vue_type_style_index_0_id_4c6869ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hamburger_vue_vue_type_style_index_0_id_4c6869ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hamburger_vue_vue_type_style_index_0_id_4c6869ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hamburger_vue_vue_type_style_index_0_id_4c6869ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

})
//# sourceMappingURL=app.a8818861402d38666dab.hot-update.js.map