import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import auth from './modules/auth';
import permission from './modules/permission';
import tagsView from './modules/tagsView';

import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
    // 可以设置多个模块
    modules: {
        app,
        auth,
        permission,
        tagsView
    },
    getters
});