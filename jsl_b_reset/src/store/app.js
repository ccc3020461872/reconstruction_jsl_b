export default {
    namespaced: true,
    state:() => ({
        homeInfo: null
    }),
    getters: {
    },
    mutations: {
      setHomeInfo(state,i){
        state.homeInfo = i
      }
    },
    actions: {

    },
}