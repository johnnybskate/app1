import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    strict:true,
    state:{
        token:null,
        user:null,
        isUserLoggedIn:false
    },
    mutations:{
        setToken(state,token){
            if(token){
                state.isUserLoggedIn=true
            }else{
                state.isUserLoggedIn =false
            }
            state.token=token
        },
        setUser(state,token){
            state.user=user
        }
    },

    actions:{
        setToken({commit},token){
        commit('setToken',token)
    },
    setUser({commit},token){
        commit('setUser',token)
    }
}    
})