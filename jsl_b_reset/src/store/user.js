export default {
    namespaced: true,
    state:() => ({
        tokenBo: null
    }),
    getters: {
    },
    mutations: {
      setTokenBo(state,t){
        state.tokenBo = t
      }
    },
    actions: {

    },
}