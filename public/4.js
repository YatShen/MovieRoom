webpackJsonp([4],{

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(241)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(243)
/* template */
var __vue_template__ = __webpack_require__(244)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-295e81a1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/Auth/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-295e81a1", Component.options)
  } else {
    hotAPI.reload("data-v-295e81a1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("206eb0cd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-295e81a1\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-295e81a1\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n.login-container[data-v-295e81a1] {\n    border-radius: 5px;\n    -moz-border-radius: 5px;\n    background-clip: padding-box;\n    margin: 220px auto;\n    width: 350px;\n    padding: 35px 35px 15px 35px;\n    background: #fff;\n    border: 1px solid #eaeaea;\n    -webkit-box-shadow: 0 0 25px #cac6c6;\n            box-shadow: 0 0 25px #cac6c6;\n}\n.login-container .title[data-v-295e81a1] {\n    margin: 0px auto 40px auto;\n    text-align: center;\n    color: #505458;\n}\n.login-container .remember[data-v-295e81a1] {\n    margin: 0px 0px 35px 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    name: "login",
    data: function data() {
        return {
            formData: {
                account: null,
                password: null,
                remember: false
            },
            rules: {
                account: [{ required: true, message: 'Please input your account', trigger: 'blur' }],
                password: [{ required: true, message: 'Please input your password', trigger: 'blur' }]
            }
        };
    },
    created: function created() {
        this.$store.dispatch('logout');
    },

    components: {},
    computed: {},
    methods: {
        // 登录操作
        login: function login(formName) {
            var _this = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    _this.$store.dispatch('login', _this.formData).then(function (res) {
                        if (_this.$store.state.auth.account !== null) {
                            _this.$router.push({ path: '/home' });
                        }
                    });
                } else {
                    return false;
                }
            });
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    {
      ref: "formData",
      staticClass: "demo-ruleForm login-container",
      attrs: {
        model: _vm.formData,
        rules: _vm.rules,
        "label-position": "left",
        "label-width": "0px"
      }
    },
    [
      _c("h3", { staticClass: "title" }, [_vm._v("MovieRoom")]),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { prop: "account" } },
        [
          _c("el-input", {
            attrs: {
              type: "text",
              "auto-complete": "off",
              placeholder: "Account"
            },
            model: {
              value: _vm.formData.account,
              callback: function($$v) {
                _vm.$set(_vm.formData, "account", $$v)
              },
              expression: "formData.account"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { prop: "password" } },
        [
          _c("el-input", {
            attrs: {
              type: "password",
              "auto-complete": "off",
              placeholder: "Password"
            },
            model: {
              value: _vm.formData.password,
              callback: function($$v) {
                _vm.$set(_vm.formData, "password", $$v)
              },
              expression: "formData.password"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-checkbox",
        {
          staticClass: "remember",
          model: {
            value: _vm.formData.remember,
            callback: function($$v) {
              _vm.$set(_vm.formData, "remember", $$v)
            },
            expression: "formData.remember"
          }
        },
        [_vm._v("Remember")]
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { staticStyle: { width: "100%" } },
        [
          _c(
            "el-button",
            {
              staticStyle: { width: "100%" },
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  _vm.login("formData")
                }
              }
            },
            [_vm._v("Login")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-295e81a1", module.exports)
  }
}

/***/ })

});