import Vue from 'vue'
import Vuex from 'vuex'
if(process.env.NODE_ENV === "development"){
    Vue.use(Vuex) 
} 

import menu from './modules/menu'

export default new Vuex.Store({
    modules: {
        menu
    }
});


