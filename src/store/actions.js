export default {
    register({commit}, userid) {
        setTimeout(()=> {
            commit('register', userid)
        }, 1000)
    }
}