import Vue from 'vue'
import Vuex from 'vuex'

import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import AuthModule from './modules/auth'
import QuestionModule from './modules/question'
import PropertyModule from './modules/property'
import UserModule from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        AuthModule,
        QuestionModule,
        PropertyModule,
        UserModule
    }
})