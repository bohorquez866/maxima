export const state = () => ({
    menu: [],
    urlPath: 'http://localhost/',
})

export const mutations = {
    SET_MENU_ITEMS(state, payload) {
        state.menu = payload
    },
}
export const getters = {
    menu(state) {
        return state.menu
    },
}
export const actions = {
    setMenuItems({ commit }, payload) {
        commit('SET_MENU_ITEMS', payload)
    },
}