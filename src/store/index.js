import Vuex from 'vuex';
import Vue from "vue";
import auth from './modules/auth';

// Kết nối Vuex với Vue
Vue.use(Vuex);

// Tạo store
export default new Vuex.Store({
    modules: {
        auth: auth
    }
})

